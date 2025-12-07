// components/NYSidebar.js
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NYSidebar() {
  const [role, setRole] = useState("");

  useEffect(() => {
    const r = localStorage.getItem("ny_role");
    if (r) setRole(r);
  }, []);

  const links = [
    { label: "Founder Dashboard", href: "/dashboard", roles: ["founder"] },
    { label: "Creative Workspace", href: "/creative", roles: ["founder", "creative"] },
    { label: "Ops Workspace", href: "/ops", roles: ["founder", "ops"] }
  ];

  return (
    <aside className="w-64 bg-white shadow-md h-full p-4">
      <h2 className="text-xl font-bold mb-6 text-[#0F4C81]">
        NY Navigation
      </h2>

      <ul className="space-y-4">
        {links.map((link) =>
          link.roles.includes(role) ? (
            <li key={link.href}>
              <Link href={link.href}>
                <span className="block px-3 py-2 rounded bg-gray-100 hover:bg-[#0F4C81] hover:text-white cursor-pointer">
                  {link.label}
                </span>
              </Link>
            </li>
          ) : null
        )}
      </ul>
    </aside>
  );
}
