// components/Layout.js
import NYNav from "./NYNav";
import NYSidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Top Navigation */}
      <NYNav />

      <div className="flex flex-1">
        
        {/* Sidebar */}
        <NYSidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  );
}
