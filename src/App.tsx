import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

/** 오렌지 테마용 파티클 */
function Particles() {
  const count = 4200;
  const mesh = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) arr[i] = (Math.random() - 0.5) * 12;
    return arr;
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.0005;
    mesh.current.rotation.y += 0.001;
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
      {/* 오렌지 테마에 맞춘 밝은 포인트 */}
      <pointsMaterial size={0.018} color={"#fff3e6"} />
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
        // 오렌지 테마 그라디언트(상단 진하고 하단 깊음)
        background:
          "radial-gradient(1200px 800px at 20% 10%, #ffb26b 0%, #ff8a3d 35%, #ff6a00 60%, #9a3700 100%)",
        color: "#1a1a1a",
        fontFamily: "'Noto Sans KR', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      }}
    >
      {/* 3D 입자 배경 */}
      <Canvas
        style={{ position: "absolute", inset: 0 }}
        camera={{ position: [0, 0, 5] }}
      >
        <ambientLight intensity={0.4} />
        <Particles />
      </Canvas>

      {/* UI 레이어 */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <div
          style={{
            width: "min(720px, 92vw)",
            backdropFilter: "blur(6px)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,245,235,0.85))",
            borderRadius: 24,
            boxShadow:
              "0 12px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.4)",
            border: "1px solid rgba(255,255,255,0.55)",
            padding: "28px",
          }}
        >
          {/* 헤더 */}
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(22px, 3.6vw, 34px)",
                fontWeight: 800,
                letterSpacing: 0.2,
                color: "#301400",
                textShadow: "0 1px 0 rgba(255,255,255,0.5)",
              }}
            >
              JUHA Magic Portal
            </h1>
            <p
              style={{
                marginTop: 10,
                marginBottom: 0,
                color: "#5a2a00",
                fontSize: "clamp(13px, 2.2vw, 15px)",
                opacity: 0.9,
              }}
            >
              Choose your creative tool
            </p>
          </div>

          {/* 카드형 버튼 영역 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 14,
              marginTop: 8,
            }}
          >
            {/* 1) Juha’s Paper Frame : 맨 위 배치 */}
            <a
              href="https://juha-paper-frame.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={buttonStyle("#4a2300")}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#5a2a00")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4a2300")}
            >
              <div style={badgeStyle("#ffede0", "#4a2300")}>NEW</div>
              <div style={btnTextWrap}>
                <div style={btnTitle}>Juha’s Paper Frame</div>
                <div style={btnDesc}>프레임형 썸네일 텍스트 & 레이아웃</div>
              </div>
            </a>

            {/* 2) Thumbnail Generator */}
            <a
              href="https://juha-blog-thumbnail.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={buttonStyle("#552800")}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#6a3200")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#552800")}
            >
              <div style={btnTextWrap}>
                <div style={btnTitle}>Thumbnail Generator</div>
                <div style={btnDesc}>네이버 1080×1080, 텍스트 위치/색상/밝기</div>
              </div>
            </a>

            {/* 3) Image Optimizer */}
            <a
              href="https://juha-img-optimizer.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={buttonStyle("#6a3200")}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7a3900")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#6a3200")}
            >
              <div style={btnTextWrap}>
                <div style={btnTitle}>Image Optimizer</div>
                <div style={btnDesc}>WebP 변환, 메타데이터 초기화, ALT 지원</div>
              </div>
            </a>
          </div>

          {/* 푸터 */}
          <div
            style={{
              marginTop: 20,
              textAlign: "center",
              color: "#4a2300",
              fontSize: 12,
              opacity: 0.9,
            }}
          >
            2025 © All rights reserved to 우리집 도서관
          </div>
        </div>
      </div>
    </div>
  );
}

/** 공통 스타일 */
const buttonStyle = (bg: string): React.CSSProperties => ({
  display: "flex",
  alignItems: "center",
  gap: 12,
  textDecoration: "none",
  padding: "16px 18px",
  borderRadius: 16,
  backgroundColor: bg,
  color: "#fff7f0",
  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
  border: "1px solid rgba(255,255,255,0.12)",
  transition: "background-color .2s ease, transform .15s ease",
  transform: "translateZ(0)",
});

const badgeStyle = (bg: string, color: string): React.CSSProperties => ({
  fontSize: 11,
  fontWeight: 800,
  padding: "6px 8px",
  borderRadius: 999,
  background: bg,
  color,
  border: "1px solid rgba(0,0,0,0.08)",
  boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset",
});

const btnTextWrap: React.CSSProperties = { display: "flex", flexDirection: "column" };
const btnTitle: React.CSSProperties = { fontWeight: 800, fontSize: 16, letterSpacing: 0.2 };
const btnDesc: React.CSSProperties = { opacity: 0.9, fontSize: 13 };
