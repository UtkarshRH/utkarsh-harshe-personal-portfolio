"use client";

import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

function StudioEnvironment() {
  const { gl, scene } = useThree();

  useEffect(() => {
    const pmremGenerator = new THREE.PMREMGenerator(gl);
    pmremGenerator.compileEquirectangularShader();
    const envTexture = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTexture;

    return () => {
      scene.environment = null;
      envTexture.dispose();
      pmremGenerator.dispose();
    };
  }, [gl, scene]);

  return null;
}

/**
 * Meaningful 3-tier architectural sculpture representing full-stack software engineering:
 *   1. Client / Interface Plane (UI frame + modular layout blocks)
 *   2. Service / API Orchestration Plane (gateway + microservices + rate-limit/auth bus)
 *   3. Distributed Data / Cache Plane (relational/document storage + Redis cylinders)
 * Connected via structural titanium columns and vertical request/response data conduits.
 */
function SystemArchitectureModel() {
  const rootRef = useRef<THREE.Group>(null);
  const clientTierRef = useRef<THREE.Group>(null);
  const serviceTierRef = useRef<THREE.Group>(null);
  const dataTierRef = useRef<THREE.Group>(null);
  const pulseARef = useRef<THREE.Mesh>(null);
  const pulseBRef = useRef<THREE.Mesh>(null);
  const pulseCRef = useRef<THREE.Mesh>(null);

  const pointerRef = useRef({ x: 0, y: 0 });
  const scrollProgressRef = useRef(0);

  const tierPlateGeo = useMemo(() => new THREE.BoxGeometry(2.7, 0.075, 1.95), []);
  const tierPlateEdges = useMemo(() => new THREE.EdgesGeometry(tierPlateGeo), [tierPlateGeo]);

  const servicePlateGeo = useMemo(() => new THREE.BoxGeometry(2.5, 0.085, 1.8), []);
  const servicePlateEdges = useMemo(() => new THREE.EdgesGeometry(servicePlateGeo), [servicePlateGeo]);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      pointerRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      const scrollable = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      scrollProgressRef.current = Math.min(Math.max(window.scrollY / scrollable, 0), 1);
    };

    handleScroll();
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    return () => {
      tierPlateGeo.dispose();
      tierPlateEdges.dispose();
      servicePlateGeo.dispose();
      servicePlateEdges.dispose();
    };
  }, [tierPlateGeo, tierPlateEdges, servicePlateGeo, servicePlateEdges]);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    const t = state.clock.getElapsedTime();
    const s = scrollProgressRef.current;
    const px = pointerRef.current.x;
    const py = pointerRef.current.y;

    if (rootRef.current) {
      // Positioned right-of-center in Hero, subtly drifting with scroll across the site
      const targetPosX = THREE.MathUtils.lerp(1.55, 1.15, s);
      const targetPosY = THREE.MathUtils.lerp(0.12, -0.05, s) + Math.sin(t * 0.55) * 0.05;
      const targetRotY = -0.58 + s * 0.72 + px * 0.14;
      const targetRotX = 0.28 + s * 0.08 - py * 0.09;

      rootRef.current.position.x = THREE.MathUtils.lerp(rootRef.current.position.x, targetPosX, dt * 2.5);
      rootRef.current.position.y = THREE.MathUtils.lerp(rootRef.current.position.y, targetPosY, dt * 2.5);
      rootRef.current.rotation.y = THREE.MathUtils.lerp(rootRef.current.rotation.y, targetRotY, dt * 2.5);
      rootRef.current.rotation.x = THREE.MathUtils.lerp(rootRef.current.rotation.x, targetRotX, dt * 2.5);
    }

    // Subtle breathing separation between the 3 architectural layers
    const spread = 1.24 + Math.sin(t * 0.45) * 0.03 + s * 0.14;
    if (clientTierRef.current) clientTierRef.current.position.y = spread;
    if (serviceTierRef.current) serviceTierRef.current.position.y = 0;
    if (dataTierRef.current) dataTierRef.current.position.y = -spread;

    // Gentle vertical request/response data pulses between tiers
    if (pulseARef.current) {
      const cycleA = ((t * 0.35) % 1) * 2 - 1; // -1 to 1
      pulseARef.current.position.y = cycleA * spread;
    }
    if (pulseBRef.current) {
      const cycleB = (((t * 0.35 + 0.33) % 1) * 2 - 1) * -1;
      pulseBRef.current.position.y = cycleB * spread;
    }
    if (pulseCRef.current) {
      const cycleC = ((t * 0.35 + 0.66) % 1) * 2 - 1;
      pulseCRef.current.position.y = cycleC * spread;
    }
  });

  const pillarCoords: [number, number][] = [
    [-1.12, -0.76],
    [1.12, -0.76],
    [-1.12, 0.76],
    [1.12, 0.76],
  ];

  return (
    <group ref={rootRef} position={[1.55, 0.12, 0]} rotation={[0.28, -0.58, 0]}>
      {/* ============================================================
          OBJECT 1: CLIENT / FRONTEND INTERFACE TIER (Top Layer)
         ============================================================ */}
      <group ref={clientTierRef} position={[0, 1.24, 0]}>
        <mesh geometry={tierPlateGeo} castShadow receiveShadow>
          <meshStandardMaterial color="#1f242e" metalness={0.9} roughness={0.26} envMapIntensity={1.25} />
          <lineSegments geometry={tierPlateEdges}>
            <lineBasicMaterial color="#6685FF" transparent opacity={0.42} />
          </lineSegments>
        </mesh>

        {/* Top Header Bar Module */}
        <mesh position={[0, 0.08, -0.62]} castShadow>
          <boxGeometry args={[2.22, 0.07, 0.24]} />
          <meshStandardMaterial color="#838d9f" metalness={0.94} roughness={0.2} envMapIntensity={1.35} />
        </mesh>

        {/* Left Sidebar / Nav Column Module */}
        <mesh position={[-0.78, 0.085, 0.16]} castShadow>
          <boxGeometry args={[0.66, 0.08, 1.05]} />
          <meshStandardMaterial color="#343b49" metalness={0.88} roughness={0.28} />
        </mesh>

        {/* Primary Viewport Canvas Block */}
        <mesh position={[0.36, 0.1, 0.02]} castShadow>
          <boxGeometry args={[1.38, 0.11, 0.74]} />
          <meshStandardMaterial color="#586274" metalness={0.92} roughness={0.22} envMapIntensity={1.35} />
        </mesh>

        {/* Secondary Interactive Card Blocks */}
        <mesh position={[0.02, 0.08, 0.56]} castShadow>
          <boxGeometry args={[0.68, 0.07, 0.24]} />
          <meshStandardMaterial color="#3c4454" metalness={0.85} roughness={0.28} />
        </mesh>
        <mesh position={[0.76, 0.08, 0.56]} castShadow>
          <boxGeometry args={[0.6, 0.07, 0.24]} />
          <meshStandardMaterial
            color="#6685FF"
            emissive="#6685FF"
            emissiveIntensity={0.45}
            metalness={0.6}
            roughness={0.25}
          />
        </mesh>
      </group>

      {/* ============================================================
          OBJECT 2: SERVICE / API & GATEWAY TIER (Middle Layer)
         ============================================================ */}
      <group ref={serviceTierRef} position={[0, 0, 0]}>
        <mesh geometry={servicePlateGeo} castShadow receiveShadow>
          <meshStandardMaterial color="#1a1e27" metalness={0.92} roughness={0.24} envMapIntensity={1.3} />
          <lineSegments geometry={servicePlateEdges}>
            <lineBasicMaterial color="#6685FF" transparent opacity={0.38} />
          </lineSegments>
        </mesh>

        {/* API Gateway / Rate-Limiter Spine */}
        <mesh position={[0, 0.09, 0]} castShadow>
          <boxGeometry args={[1.9, 0.09, 0.22]} />
          <meshStandardMaterial color="#7d8699" metalness={0.95} roughness={0.18} envMapIntensity={1.4} />
        </mesh>

        {/* Three Machined Compute / Microservice Nodes (Java, Node/Fastify, Python) */}
        {[-0.72, 0, 0.72].map((xPos, idx) => (
          <group key={xPos} position={[xPos, 0.15, idx === 1 ? 0.36 : -0.36]}>
            <mesh castShadow>
              <boxGeometry args={[0.48, 0.2, 0.48]} />
              <meshStandardMaterial
                color={idx === 1 ? "#3a4252" : "#2c3240"}
                metalness={0.92}
                roughness={0.22}
                envMapIntensity={1.35}
              />
            </mesh>
            <mesh position={[0, 0.12, 0]}>
              <boxGeometry args={[0.32, 0.02, 0.32]} />
              <meshStandardMaterial
                color="#6685FF"
                emissive="#6685FF"
                emissiveIntensity={idx === 1 ? 0.75 : 0.35}
                roughness={0.25}
                metalness={0.5}
              />
            </mesh>
          </group>
        ))}

        {/* Horizontal Bus Trace */}
        <mesh position={[0, 0.06, 0.36]}>
          <boxGeometry args={[1.65, 0.025, 0.04]} />
          <meshStandardMaterial color="#6685FF" emissive="#6685FF" emissiveIntensity={0.35} />
        </mesh>
      </group>

      {/* ============================================================
          OBJECT 3: DISTRIBUTED DATA & CACHE TIER (Bottom Layer)
         ============================================================ */}
      <group ref={dataTierRef} position={[0, -1.24, 0]}>
        <mesh geometry={tierPlateGeo} castShadow receiveShadow>
          <meshStandardMaterial color="#181c24" metalness={0.9} roughness={0.28} envMapIntensity={1.2} />
          <lineSegments geometry={tierPlateEdges}>
            <lineBasicMaterial color="#434a59" transparent opacity={0.7} />
          </lineSegments>
        </mesh>

        {/* Three Data / Cache Cylinders (SQL, Document Store, Redis Cache) */}
        {[
          { x: -0.76, z: 0.14, h: 0.34, color: "#50596b" },
          { x: 0.0, z: -0.18, h: 0.42, color: "#727b8e" },
          { x: 0.76, z: 0.14, h: 0.3, color: "#3d4454" },
        ].map((db, idx) => (
          <group key={idx} position={[db.x, db.h / 2 + 0.04, db.z]}>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.28, 0.28, db.h, 32]} />
              <meshStandardMaterial
                color={db.color}
                metalness={0.94}
                roughness={0.2}
                envMapIntensity={1.4}
              />
            </mesh>
            {/* Precision ring on cylinder cap */}
            <mesh position={[0, db.h / 2 + 0.005, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.22, 0.012, 12, 48]} />
              <meshStandardMaterial
                color="#6685FF"
                emissive="#6685FF"
                emissiveIntensity={idx === 1 ? 0.65 : 0.25}
              />
            </mesh>
          </group>
        ))}
      </group>

      {/* ============================================================
          STRUCTURAL COLUMNS & LIVE VERTICAL DATA CONDUITS
         ============================================================ */}
      {pillarCoords.map(([x, z], idx) => (
        <mesh key={idx} position={[x, 0, z]}>
          <cylinderGeometry args={[0.014, 0.014, 2.75, 12]} />
          <meshStandardMaterial color="#3b4250" metalness={0.85} roughness={0.35} />
        </mesh>
      ))}

      {/* Central Data Bus Conduits */}
      {[-0.36, 0, 0.36].map((x, idx) => (
        <mesh key={`bus-${idx}`} position={[x, 0, 0]}>
          <cylinderGeometry args={[0.008, 0.008, 2.5, 10]} />
          <meshStandardMaterial
            color="#6685FF"
            emissive="#6685FF"
            emissiveIntensity={0.4}
            transparent
            opacity={0.55}
          />
        </mesh>
      ))}

      {/* Moving Signal Pulses between the 3 Architectural Tiers */}
      <mesh ref={pulseARef} position={[-0.36, 0, 0]}>
        <sphereGeometry args={[0.036, 16, 16]} />
        <meshStandardMaterial color="#6685FF" emissive="#6685FF" emissiveIntensity={1.6} />
      </mesh>
      <mesh ref={pulseBRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.042, 16, 16]} />
        <meshStandardMaterial color="#F4F5F7" emissive="#6685FF" emissiveIntensity={1.3} />
      </mesh>
      <mesh ref={pulseCRef} position={[0.36, 0, 0]}>
        <sphereGeometry args={[0.036, 16, 16]} />
        <meshStandardMaterial color="#6685FF" emissive="#6685FF" emissiveIntensity={1.6} />
      </mesh>
    </group>
  );
}

interface ArchitectureBackgroundCanvasProps {
  onError?: () => void;
}

const ArchitectureBackgroundCanvas: React.FC<ArchitectureBackgroundCanvasProps> = ({
  onError,
}) => {
  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.35, 7.2], fov: 38 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.05,
      }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener(
          "webglcontextlost",
          (e) => {
            e.preventDefault();
            onError?.();
          },
          false
        );
      }}
      className="w-full h-full"
    >
      <StudioEnvironment />

      <ambientLight intensity={0.22} />
      <directionalLight
        position={[5, 7, 5]}
        intensity={2.05}
        color="#F4F5F7"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-5, -2, -4]} intensity={1.15} color="#6685FF" />
      <pointLight position={[2, -3.5, 3]} intensity={0.45} color="#A3AAB6" />

      <SystemArchitectureModel />
    </Canvas>
  );
};

export default ArchitectureBackgroundCanvas;
