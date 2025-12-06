import Sidebar from "../components/Sidebar";
import ModuleCard from "../components/ModuleCard";

export default function Dashboard() {
  const modules = [
    {
      title: "Weekly Check-In",
      description: "Reflect on your emotional, mental, and spiritual state.",
      color: "#0F4C81",
      link: "/weekly-checkin",
    },
    {
      title: "Breathing Sanctuary",
      description: "Guided practices to restore calm and regulate your system.",
      color: "#FF7F50",
      link: "/breathing",
    },
    {
      title: "Affirmation Studio",
      description: "Your personalized affirmations for identity and purpose.",
      color: "#4CAF50",
      link: "/affirmations",
    },
    {
      title: "Insights Log",
      description: "Track insights, patterns, and growth.",
      color: "#9C27B0",
      link: "/insights",
    },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "40px",
          background: "#F6F8FA",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ fontSize: "32px", color: "#0F4C81", marginBottom: "20px" }}>
          Calm Sanctuary Dashboard
        </h1>

        <p style={{ fontSize: "18px", color: "#555", marginBottom: "40px" }}>
          Select a module to begin your weekly healing journey.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {modules.map((m, index) => (
            <ModuleCard
              key={index}
              title={m.title}
              description={m.description}
              color={m.color}
              onClick={() => (window.location.href = m.link)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
