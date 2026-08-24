import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Text } from "@react-three/drei";

function Seal() {
  const group = useRef();
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.18;
  });
  return (
    <group ref={group}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.55, 0.06, 16, 100]} />
        <meshStandardMaterial
          color="#155FCC"
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.08, 0]}>
        <cylinderGeometry args={[1.3, 1.3, 0.12, 64]} />
        <meshStandardMaterial color="#0B1F3A" metalness={0.4} roughness={0.5} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <torusGeometry args={[1.05, 0.02, 8, 100]} />
        <meshStandardMaterial color="#155FCC" metalness={0.7} roughness={0.3} />
      </mesh>
      <Text
        position={[0, 0.11, 0.12]}
        rotation={[0, 0, 0]}
        fontSize={0.52}
        color="#F7FBFF"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.04}
        fontWeight={700}
        outlineWidth={0.05}
        outlineColor="#0B1F3A"
      >
        ADC
      </Text>
      <Text
        position={[0, 0.11, -0.12]}
        rotation={[0, Math.PI, 0]}
        fontSize={0.52}
        color="#F7FBFF"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.04}
        fontWeight={700}
        outlineWidth={0.05}
        outlineColor="#0B1F3A"
      >
        ADC
      </Text>
    </group>
  );
}

export default function RotatingSeal() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas camera={{ position: [0, 1.4, 4.2], fov: 40 }} dpr={[1, 1.75]}>
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[3, 4, 2]}
          intensity={1.4}
          color="#FFFFFF"
        />
        <pointLight position={[-3, -2, -2]} intensity={0.5} color="#4B6FA6" />
        <Suspense fallback={null}>
          <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.4}>
            <Seal />
          </Float>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
