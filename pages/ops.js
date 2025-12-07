import LogoutButton from "../components/LogoutButton";

export default function OpsDashboard() {
  return (
    <div className="p-8">
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-[#0F2C59]">
          Ops Lead Dashboard — NY-HID™
        </h1>
        <LogoutButton />
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* ECQ Tools */}
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-3">📘 ECQ Tools</h2>
          <button className="w-full py-3 bg-[#0F2C59] text-white rounded-lg">
            Sync Airtable → NY-HID
          </button>
        </div>

        {/* Website Tasks */}
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-3">🌐 Website Tasks</h2>
          <button className="w-full py-3 bg-[#0F2C59] text-white rounded-lg">
            Update Pages with New Material
          </button>
        </div>

        {/* Retreat Tasks */}
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-3">🏝 Retreat Workflow</h2>
          <ul className="space-y-2">
            <li>✔ Landing page done</li>
            <li>⏳ Lead capture improvements</li>
            <li>⏳ Auto email response</li>
          </ul>
        </div>

      </section>
    </div>
  );
}
