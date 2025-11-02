import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

function Particles() {
  const count = 4000;
  const mesh = useRef<THREE.Points>(null);

  // 랜덤 파티클 위치 메모이제이션
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.0006;
      mesh.current.rotation.y += 0.0012;
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
          inset: 0,
        }}
        camera={{ position: [0, 0, 5] }}
      >
        <Particles />
      </Canvas>

      {/* 포털 UI */}
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
          padding: "1.5rem",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            marginBottom: "1rem",
            letterSpacing: "0.05em",
          }}
        >
          JUHA Magic Portal ✨
        </h1>

        <p
          style={{
            color: "#aaa",
            marginBottom: "2.5rem",
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
          }}
        >
          Choose your creative tool
        </p>

        {/* 버튼 그룹 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            width: "min(250px, 80%)",
          }}
        >
          <button
            onClick={() =>
              window.open("https://juha-blog-thumbnail.vercel.app", "_blank")
            }
            style={{
              padding: "1rem",
              borderRadius: "12px",
              backgroundColor: "#1e1e1e",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s, transform 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#383838";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#1e1e1e";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Thumbnail Generator
          </button>

          <button
            onClick={() =>
              window.open("https://juha-img-optimizer.vercel.app", "_blank")
            }
            style={{
              padding: "1rem",
              borderRadius: "12px",
              backgroundColor: "#1e1e1e",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s, transform 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#383838";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#1e1e1e";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Image Optimizer
          </button>
        </div>

        {/* 푸터 */}
        <footer
          style={{
            marginTop: "3rem",
            fontSize: "0.85rem",
            color: "#777",
          }}
        >
          2025 © All rights reserved to 우리집 도서관
        </footer>
      </div>
    </div>
  );
}
