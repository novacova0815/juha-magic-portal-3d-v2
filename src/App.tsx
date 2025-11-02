import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

function Particles() {
  const count = 4000;
  const mesh = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, [count]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.0005;
      mesh.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#ffffff" />
    </points>
  );
}

export default function App() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        background: "radial-gradient(circle at 50% 50%, #0b0b0b, #000000)",
        color: "#fff",
        fontFamily: "'Noto Sans KR', sans-serif",
      }}
    >
      {/* 3D 입자 배경 */}
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
        camera={{ position: [0, 0, 5] }}
      >
        <Particles />
      </Canvas>

      {/* UI */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          JUHA Magic Portal ✨
        </h1>
        <p style={{ color: "#aaa", marginBottom: "2rem" }}>
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
              backgroundColor: "#222",
              color: "#fff",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#444")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#222")
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
              backgroundColor: "#222",
              color: "#fff",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#444")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#222")
            }
          >
            Image Optimizer
          </a>
        </div>

        <footer style={{ marginTop: "3rem", fontSize: "0.8rem", color: "#777" }}>
          2025 © All rights reserved to 우리집 도서관
        </footer>
      </div>
    </div>
  );
}
