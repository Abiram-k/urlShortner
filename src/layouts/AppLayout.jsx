import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayouts = () => {
  return (
    <div>
      <main className="min-h-screen container px-10">
       <Header/>
        <Outlet />
      </main>
      <footer className="p-10 text-center bg-gray-800 mt-10">
        Made with 💓
      </footer>
    </div>
  );
};

export default AppLayouts;
