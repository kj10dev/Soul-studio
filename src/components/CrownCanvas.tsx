import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "../lib/scrollState";

const PRONGS = 5;

function Crown({ low }: { low: boolean }) {
  const group = useRef<THREE.Group>(null!);

  useFrame((state, dt) => {
    const v = Math.min(Math.abs(scrollState.velocity), 20) / 20; // 0..1
    group.current.rotation.y += dt * 0.35 + v * 0.12;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * 0.35 + v * 0.3, 0.06);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, state.pointer.x * 0.6, 0.05);
  });

  const seg = low ? { base: 32, cone: 12, sphere: 16, torus: 32 } : { base: 48, cone: 20, sphere: 24, torus: 48 };
  const mat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#ffffff", metalness: 0.45, roughness: 0.3, side: THREE.DoubleSide }),
    [],
  );

  return (
    <group ref={group} position={[0, -0.6, 0]} scale={1.15} rotation={[0.08, 0.5, 0]}>
      {/* banded base */}
      <mesh material={mat}>
        <cylinderGeometry args={[0.75, 0.62, 0.55, seg.base, 1, true]} />
      </mesh>
      <mesh position={[0, -0.28, 0]} rotation={[Math.PI / 2, 0, 0]} material={mat}>
        <torusGeometry args={[0.62, 0.07, 16, seg.torus]} />
      </mesh>
      <mesh position={[0, 0.27, 0]} rotation={[Math.PI / 2, 0, 0]} material={mat}>
        <torusGeometry args={[0.75, 0.06, 16, seg.torus]} />
      </mesh>

      {/* prongs, each tilted outward and capped with a ball */}
      {Array.from({ length: PRONGS }).map((_, i) => {
        const angle = (i / PRONGS) * Math.PI * 2;
        const tall = i === 0 ? 1.7 : 1.45; // front prong a little taller
        return (
          <group key={i} rotation={[0, -angle, 0]}>
            <group position={[0.62, 0.25, 0]} rotation={[0, 0, -0.26]}>
              <mesh position={[0, tall / 2, 0]} material={mat}>
                <coneGeometry args={[0.16, tall, seg.cone]} />
              </mesh>
              <mesh position={[0, tall + 0.05, 0]} material={mat}>
                <sphereGeometry args={[0.13, seg.sphere, seg.sphere]} />
              </mesh>
            </group>
          </group>
        );
      })}
    </group>
  );
}

export default function CrownCanvas() {
  const wrap = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const calm = useMemo(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);
  const low = useMemo(() => window.innerWidth < 768, []);

  // Render only while the hero is on screen
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={low ? 1 : [1, 1.5]}
        frameloop={calm ? "demand" : inView ? "always" : "never"}
        camera={{ position: [0, 0.4, 6], fov: 40 }}
        eventSource={document.body}
        eventPrefix="client"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} />
        <directionalLight position={[-4, -2, -3]} intensity={0.8} />
        <Crown low={low} />
      </Canvas>
    </div>
  );
}
