"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Core from "./Core";
import NetworkSystem from "./NetworkSystem";

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{
        position: [0, 0, 5],
        fov: 45,
      }}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.25} />

      {/* Main Light */}
      <pointLight
        position={[3, 3, 4]}
        intensity={15}
        color="#22d3ee"
      />

      {/* Secondary Light */}
      <pointLight
        position={[-4, -2, 2]}
        intensity={8}
        color="#6366f1"
      />

      {/* Background Stars */}
      <Stars
        radius={50}
        depth={30}
        count={1200}
        factor={2}
        saturation={0}
        fade
        speed={0.4}
      />

      {/* Main 3D System */}
      <Core />
    
      <NetworkSystem />

      {/* Mouse Interaction */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        rotateSpeed={0.4}
      />
    </Canvas>
  );
}