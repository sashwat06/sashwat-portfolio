"use client";

import { useEffect, useMemo } from "react";
import * as THREE from "three";

type NetworkLinesProps = {
  points: [number, number, number][];
  color?: string;
};

export default function NetworkLines({
  points,
  color = "#22d3ee",
}: NetworkLinesProps) {
  const line = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(
      points.map(([x, y, z]) => new THREE.Vector3(x, y, z))
    );
    const material = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.35,
    });
    return new THREE.Line(geometry, material);
  }, [points, color]);

  useEffect(() => {
    return () => {
      line.geometry.dispose();
      (line.material as THREE.Material).dispose();
    };
  }, [line]);

  return <primitive object={line} />;
}