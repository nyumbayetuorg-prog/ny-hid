import LogoutButton from "../components/LogoutButton";

export default function CreativeDashboard() {
  return (
    <div className="p-8">
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-[#0F2C59]">
          Creative Lead Dashboard — NY-HID™
        </h1>
        <LogoutButton />
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Script Generation */}
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-3">📝 Script Generator</h2>
          <button className="w-full py-3 bg-[#0F2C59] text-white rounded-lg">
            Generate Short Video Script
          </button>
        </div>

        {/* Thumbnails */}
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-3">🎨 Thumbnail Ideas</h2>
          <button className="w-full py-3 bg-[#0F2C59] text-white rounded-lg">
            Generate Thumbnail Styles
          </button>
        </div>

        {/* Upload Checklist */}
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-3">📤 Upload Checklist</h2>
          <ul className="space-y-2">
            <li>✔ Captions added</li>
            <li>✔ Hashtags optimized</li>
            <li>⏳ Thumbnail pending</li>
            <li>⏳ Scheduled posting</li>
          </ul>
        </div>

      </section>
    </div>
  );
}
