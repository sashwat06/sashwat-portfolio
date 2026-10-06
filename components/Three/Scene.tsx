"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Core from "./Core";
import NetworkSystem from "./NetworkSystem";

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{
        position: [0, 0, 5],
        fov: 45,
      }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <ambientLight intensity={0.25} />

      <pointLight
        position={[3, 3, 4]}
        intensity={15}
        color="#22d3ee"
      />

      <pointLight
        position={[-4, -2, 2]}
        intensity={8}
        color="#6366f1"
      />

      <Stars
        radius={50}
        depth={30}
        count={700}
        factor={2}
        saturation={0}
        fade
        speed={0.4}
      />

      <Core />

      <NetworkSystem />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        rotateSpeed={0.4}
      />
    </Canvas>
  );
}