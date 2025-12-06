import Sidebar from "../../components/Sidebar";
import ModuleCard from "../../components/ModuleCard";

export default function Dashboard() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />

      <main style={{ flex: 1, padding: "40px", overflowY: "auto" }}>
        <h1>Calm Sanctuary – Week 1 Dashboard</h1>

        <div style={{ marginTop: "30px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          <ModuleCard title="Morning Reset" description="Your daily grounding & clarity sequence." />
          <ModuleCard title="Emotional Check-In" description="Quick self-assessment to track your inner state." />
          <ModuleCard title="Breathing Sanctuary" description="Guided breathing & vagus nerve activation." />
          <ModuleCard title="Inner Inquiry Prompts" description="Reflective prompts for self-awareness." />
          <ModuleCard title="Meaning Reconstruction" description="Re-align identity, purpose, goals." />
        </div>
      </main>
    </div>
  );
}
