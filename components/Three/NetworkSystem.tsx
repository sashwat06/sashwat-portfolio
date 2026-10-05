"use client";

import NetworkNode from "./NetworkNode";
import NetworkLines from "./NetworkLines";

export default function NetworkSystem() {
  const nodes: [number, number, number][] = [
    [-2.2, 0.8, 0],
    [-1.3, 1.5, 0.2],
    [0, 2, 0],
    [1.4, 1.4, -0.2],
    [2.2, 0.5, 0],
    [1.7, -0.8, 0.3],
    [0, -1.5, 0],
    [-1.7, -0.9, -0.2],
  ];

  return (
    <group>

      {/* Nodes */}

      <NetworkNode
        position={nodes[0]}
        color="#22d3ee"
        size={0.07}
      />

      <NetworkNode
        position={nodes[1]}
        color="#3b82f6"
        size={0.06}
      />

      <NetworkNode
        position={nodes[2]}
        color="#8b5cf6"
        size={0.09}
      />

      <NetworkNode
        position={nodes[3]}
        color="#22d3ee"
        size={0.06}
      />

      <NetworkNode
        position={nodes[4]}
        color="#3b82f6"
        size={0.07}
      />

      <NetworkNode
        position={nodes[5]}
        color="#8b5cf6"
        size={0.06}
      />

      <NetworkNode
        position={nodes[6]}
        color="#22d3ee"
        size={0.08}
      />

      <NetworkNode
        position={nodes[7]}
        color="#3b82f6"
        size={0.06}
      />

      {/* Connections */}

      <NetworkLines
        points={[nodes[0], nodes[1], nodes[2]]}
      />

      <NetworkLines
        points={[nodes[2], nodes[3], nodes[4]]}
      />

      <NetworkLines
        points={[nodes[4], nodes[5], nodes[6]]}
      />

      <NetworkLines
        points={[nodes[6], nodes[7], nodes[0]]}
      />

      <NetworkLines
        points={[nodes[1], nodes[7]]}
        color="#8b5cf6"
      />

      <NetworkLines
        points={[nodes[3], nodes[5]]}
        color="#3b82f6"
      />

    </group>
  );
}