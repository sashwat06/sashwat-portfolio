"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type NetworkNodeProps = {
  position: [number, number, number];
  color: string;
  size?: number;
};

export default function NetworkNode({
  position,
  color,
  size = 0.08,
}: NetworkNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;

    meshRef.current.position.y =
      position[1] + Math.sin(time * 1.5 + position[0]) * 0.08;

    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 20, 20]} />

      <meshBasicMaterial color={color} />
    </mesh>
  );
}