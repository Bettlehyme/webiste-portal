'use client';

import { Command as CommandPrimitive, useCommandState } from 'cmdk';
import { X } from 'lucide-react';
import React, { forwardRef, useEffect } from 'react';

import { Badge } from './badge'; // Adjust the path as needed
import { Command, CommandGroup, CommandItem, CommandList } from './command'; // Adjust the path as needed
import { cn } from '@/lib/utils'; // Adjust the path as needed

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

function transToGroupOption(options, groupBy) {
  if (options.length === 0) {
    return {};
  }
  if (!groupBy) {
    return {
      '': options,
    };
  }

  const groupOption = {};
  options.forEach((option) => {
    const key = option[groupBy] || '';
    if (!groupOption[key]) {
      groupOption[key] = [];
    }
    groupOption[key].push(option);
  });
  return groupOption;
}

function removePickedOption(groupOption, picked) {
  const cloneOption = JSON.parse(JSON.stringify(groupOption));

  for (const [key, value] of Object.entries(cloneOption)) {
    cloneOption[key] = value.filter((val) => !picked.find((p) => p.value === val.value));
  }
  return cloneOption;
}

function isOptionsExist(groupOption, targetOption) {
  for (const [, value] of Object.entries(groupOption)) {
    if (value.some((option) => targetOption.find((p) => p.value === option.value))) {
      return true;
    }
  }
  return false;
}

const CommandEmpty = forwardRef(({ className, ...props }, forwardedRef) => {
  const render = useCommandState((state) => state.filtered.count === 0);

  if (!render) return null;

  return (
    <div
      ref={forwardedRef}
      className={cn('py-6 text-center text-sm', className)}
      cmdk-empty=""
      role="presentation"
      {...props}
    />
  );
});

CommandEmpty.displayName = 'CommandEmpty';

const MultipleSelector = React.forwardRef(
  (
    {
      value,
      onChange,
      placeholder,
      defaultOptions = [],
      options: arrayOptions,
      delay,
      onSearch,
      loadingIndicator,
      emptyIndicator,
      maxSelected = Number.MAX_SAFE_INTEGER,
      onMaxSelected,
      hidePlaceholderWhenSelected,
      disabled,
      groupBy,
      className,
      badgeClassName,
      selectFirstItem = true,
      creatable = false,
      triggerSearchOnFocus = false,
      commandProps,
      inputProps,
      hideClearAllButton = false,
    },
    ref,
  ) => {
    const inputRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);
    const mouseOn = React.useRef(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const [selected, setSelected] = React.useState(value || []);
    const [options, setOptions] = React.useState(
      transToGroupOption(defaultOptions, groupBy),
    );
    const [inputValue, setInputValue] = React.useState('');
    const debouncedSearchTerm = useDebounce(inputValue, delay || 500);

    React.useImperativeHandle(
      ref,
      () => ({
        selectedValue: [...selected],
        input: inputRef.current,
        focus: () => inputRef.current?.focus(),
      }),
      [selected],
    );

    const handleUnselect = React.useCallback(
      (option) => {
        const newOptions = selected.filter((s) => s.value !== option.value);
        setSelected(newOptions);
        onChange?.(newOptions);
      },
      [onChange, selected],
    );

    const handleKeyDown = React.useCallback(
      (e) => {
        const input = inputRef.current;
        if (input) {
          if (e.key === 'Delete' || e.key === 'Backspace') {
            if (input.value === '' && selected.length > 0) {
              const lastSelectOption = selected[selected.length - 1];
              if (!lastSelectOption.fixed) {
                handleUnselect(selected[selected.length - 1]);
              }
            }
          }
          if (e.key === 'Escape') {
            input.blur();
          }
        }
      },
      [handleUnselect, selected],
    );

    useEffect(() => {
      if (value) {
        setSelected(value);
      }
    }, [value]);

    useEffect(() => {
      if (!arrayOptions || onSearch) {
        return;
      }
      const newOption = transToGroupOption(arrayOptions || [], groupBy);
      if (JSON.stringify(newOption) !== JSON.stringify(options)) {
        setOptions(newOption);
      }
    }, [arrayOptions, groupBy, onSearch, options]);

    useEffect(() => {
      const doSearch = async () => {
        setIsLoading(true);
        const res = await onSearch?.(debouncedSearchTerm);
        setOptions(transToGroupOption(res || [], groupBy));
        setIsLoading(false);
      };

      const exec = async () => {
        if (!onSearch || !open) return;

        if (triggerSearchOnFocus) {
          await doSearch();
        }

        if (debouncedSearchTerm) {
          await doSearch();
        }
      };

      exec();
    }, [debouncedSearchTerm, groupBy, open, onSearch, triggerSearchOnFocus]);

    const CreatableItem = () => {
      if (!creatable) return undefined;
      if (
        isOptionsExist(options, [{ value: inputValue, label: inputValue }]) ||
        selected.find((s) => s.value === inputValue)
      ) {
        return undefined;
      }

      const Item = (
        <CommandItem
          value={inputValue}
          className="cursor-pointer"
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onSelect={(value) => {
            if (selected.length >= maxSelected) {
              onMaxSelected?.(selected.length);
              return;
            }
            setInputValue('');
            const newOptions = [...selected, { value, label: value }];
            setSelected(newOptions);
            onChange?.(newOptions);
          }}
        >
          {`Create "${inputValue}"`}
        </CommandItem>
      );

      if (!onSearch && inputValue.length > 0) {
        return Item;
      }

      if (onSearch && debouncedSearchTerm.length > 0 && !isLoading) {
        return Item;
      }

      return undefined;
    };

    const EmptyItem = React.useCallback(() => {
      if (!emptyIndicator) return undefined;

      if (onSearch && !creatable && Object.keys(options).length === 0) {
        return (
          <CommandItem value="-" disabled>
            {emptyIndicator}
          </CommandItem>
        );
      }

      return <CommandEmpty>{emptyIndicator}</CommandEmpty>;
    }, [creatable, emptyIndicator, onSearch, options]);

    const selectables = React.useMemo(
      () => removePickedOption(options, selected),
      [options, selected],
    );

    const commandFilter = React.useCallback(() => {
      if (commandProps?.filter) {
        return commandProps.filter;
      }

      if (creatable) {
        return (value, search) => {
          return value.toLowerCase().includes(search.toLowerCase()) ? 1 : -1;
        };
      }
      return undefined;
    }, [creatable, commandProps?.filter]);

    return (
      <Command
        {...commandProps}
        onKeyDown={(e) => {
          handleKeyDown(e);
          commandProps?.onKeyDown?.(e);
        }}
        className={cn('h-auto overflow-visible bg-transparent', commandProps?.className)}
        shouldFilter={
          commandProps?.shouldFilter !== undefined ? commandProps.shouldFilter : !onSearch
        }
        filter={commandFilter()}
      >
        <div
          className={cn(
            'min-h-10 rounded-md border border-input text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
            {
              'px-3 py-2': selected.length !== 0,
              'cursor-text': !disabled && selected.length !== 0,
            },
            className,
          )}
          onClick={() => {
            if (disabled) return;
            inputRef.current?.focus();
          }}
        >
          <div className="flex flex-wrap gap-1">
            {selected.map((option) => {
              return (
                <Badge
                  key={option.value}
                  className={cn(
                    'data-[disabled]:bg-muted-foreground data-[disabled]:text-muted data-[disabled]:hover:bg-muted-foreground',
                    'data-[fixed]:bg-muted-foreground data-[fixed]:text-muted data-[fixed]:hover:bg-muted-foreground',
                    badgeClassName,
                  )}
                  disabled={option.fixed}
                >
                  {option.label}
                  {!option.fixed && (
                    <X
                      className="ml-1 h-3 w-3 shrink-0 cursor-pointer opacity-50 hover:opacity-100"
                      onClick={() => {
                        handleUnselect(option);
                      }}
                    />
                  )}
                </Badge>
              );
            })}

            <CommandPrimitive.Input
              ref={inputRef}
              disabled={disabled}
              onFocus={(e) => {
                setOpen(true);
                if (triggerSearchOnFocus) {
                  setInputValue(e.target.value);
                }
              }}
              onBlur={(e) => {
                if (!mouseOn.current) {
                  setOpen(false);
                }
              }}
              onValueChange={(v) => {
                setInputValue(v);
              }}
              autoComplete="off"
              value={inputValue}
              placeholder={
                hidePlaceholderWhenSelected && selected.length !== 0 ? '' : placeholder
              }
              className={cn(
                'ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed',
                'disabled:opacity-50',
                {
                  'h-8': selected.length === 0,
                  'h-auto': selected.length !== 0,
                },
                inputProps?.className,
              )}
              {...inputProps}
            />
          </div>
        </div>

        {open && (
          <div
            onMouseEnter={() => (mouseOn.current = true)}
            onMouseLeave={() => (mouseOn.current = false)}
          >
            <CommandList
              className={cn(
                'relative mt-2 max-h-[300px] w-full overflow-auto rounded-md border',
                'bg-popover p-0 shadow-lg animate-in fade-in-80',
              )}
            >
              {isLoading && loadingIndicator && (
                <CommandItem value="-" disabled>
                  {loadingIndicator}
                </CommandItem>
              )}

              {Object.keys(selectables).map((groupName, index) => (
                <CommandGroup
                  key={index}
                  heading={groupName}
                  className={cn({
                    'pt-3 [&>div:first-child]:hidden': groupName.length !== 0,
                  })}
                >
                  {selectables[groupName].map((option) => {
                    return (
                      <CommandItem
                        key={option.value}
                        value={option.label}
                        className="cursor-pointer"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        onSelect={() => {
                          if (selected.length >= maxSelected) {
                            onMaxSelected?.(selected.length);
                            return;
                          }
                          setInputValue('');
                          const newOptions = [...selected, option];
                          setSelected(newOptions);
                          onChange?.(newOptions);
                          setTimeout(() => {
                            inputRef.current?.focus();
                          }, 0);
                        }}
                      >
                        {option.label}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              ))}

              <EmptyItem />
              <CreatableItem />
            </CommandList>

            {!hideClearAllButton && selected.length > 1 && (
              <div className="absolute -bottom-8 right-0">
                <button
                  className="cursor-pointer text-xs text-muted-foreground underline"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => {
                    setSelected([]);
                    onChange?.([]);
                  }}
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        )}
      </Command>
    );
  },
);

MultipleSelector.displayName = 'MultipleSelector';

export { MultipleSelector };
