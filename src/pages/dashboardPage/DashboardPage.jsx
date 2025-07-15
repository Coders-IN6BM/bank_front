import React from "react";
import { Navbar } from "../../components/nav";

export const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: "40px", background: "#F8F9FA", minHeight: "100vh" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
          <h2 style={{ color: "#0A2540", fontWeight: 700, fontSize: "2.2rem", marginBottom: "1.2rem" }}>
            Bienvenido a Piivot bank
          </h2>
          <p style={{ color: "#2D9CDB", fontSize: "1.1rem", marginBottom: "2rem" }}>
            Plataforma sencilla para la gestión bancaria moderna. Accede a tus servicios principales de forma rápida y segura.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px rgba(10,37,64,0.08)", padding: "1.5rem" }}>
              <h4 style={{ color: "#27AE60", marginBottom: "0.5rem" }}>Cuentas</h4>
              <p style={{ color: "#0A2540", fontSize: "1rem" }}>Consulta y administra tus cuentas bancarias fácilmente.</p>
          </div>
        </div>
      </div>
      </main>
    </>
  );
};
