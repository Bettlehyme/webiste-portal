import { Outlet } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />

      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <Outlet />
      </main>

      <Footer/>
    </div>
  );
}