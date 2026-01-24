import type { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-dark-900 text-light-100 font-sans min-h-0">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-dark-800 border border-dark-700 rounded-lg text-light-100 hover:bg-dark-700 transition-colors"
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="md:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-0 left-0 z-40 transform transition-transform duration-300 md:transform-none ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <Sidebar onNavigate={() => setIsSidebarOpen(false)} />
      </div>

      <main className="flex-1 overflow-y-auto min-h-0">{children}</main>
    </div>
  );
};
