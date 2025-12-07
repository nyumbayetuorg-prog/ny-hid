import LogoutButton from "../components/LogoutButton";

export default function Dashboard() {
  return (
    <div className="p-8">
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-[#0F2C59]">
          Founder Dashboard — NY-HID™
        </h1>
        <LogoutButton />
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* NY Brain Action Panel */}
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-3">🧠 NY Brain (Founder Commands)</h2>
          <button className="w-full py-3 bg-[#0F2C59] text-white rounded-lg mb-3">
            Generate Today’s Team Instructions
          </button>
          <button className="w-full py-3 bg-[#0F2C59] text-white rounded-lg mb-3">
            Review Content Strategy
          </button>
          <button className="w-full py-3 bg-[#0F2C59] text-white rounded-lg">
            Diagnose Bottlenecks
          </button>
        </div>

        {/* Team Overview Panel */}
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-3">👥 Team Activity</h2>
          <ul className="space-y-2">
            <li>Jenelyn — Last upload: Pending</li>
            <li>Peter — Last system update: Pending</li>
          </ul>
        </div>

        {/* ECQ Panel */}
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-3">📊 ECQ Status Overview</h2>
          <p>Submissions: Loading…</p>
          <p>Reviewing: Loading…</p>
          <p>Support Needed: Loading…</p>
        </div>

        {/* Content Pipeline Panel */}
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-3">🎬 Content Pipeline</h2>
          <p>Videos in Progress: Loading…</p>
          <p>Scripts Needed: Loading…</p>
          <p>Thumbnails Pending: Loading…</p>
        </div>

      </section>
    </div>
  );
}
