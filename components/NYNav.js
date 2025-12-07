// components/NYNav.js
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NYNav() {
  const [role, setRole] = useState("");

  useEffect(() => {
    const r = localStorage.getItem("ny_role");
    if (r) setRole(r);
  }, []);

  return (
    <nav className="w-full bg-[#0F4C81] text-white px-6 py-4 flex justify-between items-center shadow">
      <div className="text-xl font-bold">Nyumba Yetu Workspace</div>

      <div className="flex items-center gap-6">

        {/* Role Display */}
        <span className="px-3 py-1 bg-white/20 rounded-md text-sm uppercase tracking-wide">
          {role ? role + " Access" : "Loading…"}
        </span>

        {/* Navigation */}
        <Link href="/dashboard" className="hover:underline">Founder</Link>
        <Link href="/creative" className="hover:underline">Creative</Link>
        <Link href="/ops" className="hover:underline">Ops</Link>

        {/* Logout */}
        <a
          href="/api/logout"
          className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 text-sm"
        >
          Logout
        </a>
      </div>
    </nav>
  );
}
