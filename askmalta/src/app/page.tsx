export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        background: "linear-gradient(to bottom, #f0f8ff, #ffffff)",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>AskMalta.ai</h1>
      <p style={{ maxWidth: "500px", marginTop: "10px" }}>
        Your AI-powered guide to everything Malta 🇲🇹
      </p>
      <p style={{ marginTop: "20px", fontSize: "0.9rem", opacity: "0.6" }}>
        Launching soon
      </p>
    </main>
  );
}
