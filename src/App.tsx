import React from "react";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
        color: "#f4f4f4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "'Noto Sans KR', sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        JUHA Magic Portal
      </h1>
      <p style={{ marginBottom: "2rem", color: "#bbb" }}>
        Choose your creative tool
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          width: "250px",
        }}
      >
        <a
          href="https://juha-blog-thumbnail.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            padding: "1rem",
            borderRadius: "12px",
            backgroundColor: "#333",
            color: "#f4f4f4",
            fontWeight: "bold",
            transition: "0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#555")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#333")
          }
        >
          Thumbnail Generator
        </a>
        <a
          href="https://juha-img-optimizer.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            padding: "1rem",
            borderRadius: "12px",
            backgroundColor: "#333",
            color: "#f4f4f4",
            fontWeight: "bold",
            transition: "0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#555")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#333")
          }
        >
          Image Optimizer
        </a>
      </div>
      <footer style={{ marginTop: "3rem", fontSize: "0.8rem", color: "#777" }}>
        2025 © All rights reserved to 우리집 도서관
      </footer>
    </div>
  );
}
