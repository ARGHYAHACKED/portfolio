import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTheme } from '../../context/ThemeContext';
import { MeshWobbleMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

const Shape = ({ position, rotation, scale, color, shape = 'dodecahedron', wobble = false }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime) * 0.002;
    }
  });

  const getGeometry = () => {
    switch (shape) {
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1, 0]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'tetrahedron':
        return <tetrahedronGeometry args={[1, 0]} />;
      case 'sphere':
        return <sphereGeometry args={[1, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 32]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      {getGeometry()}
      {wobble ? (
        <MeshWobbleMaterial
          color={color}
          factor={0.4}
          speed={2}
          roughness={0.4}
          metalness={0.8}
        />
      ) : (
        <meshStandardMaterial
          color={color}
          roughness={0.4}
          metalness={0.8}
        />
      )}
    </mesh>
  );
};

export const FloatingShapes = () => {
  const { theme } = useTheme();
  const baseColor = theme === 'dark' ? '#8b5cf6' : '#6d28d9';
  const accentColor = theme === 'dark' ? '#6d28d9' : '#8b5cf6';

  const shapes = [
    { position: [-4, 2, -5], shape: 'dodecahedron', scale: 1, wobble: true },
    { position: [4, -2, -5], shape: 'icosahedron', scale: 0.8 },
    { position: [0, 3, -5], shape: 'octahedron', scale: 1.2, wobble: true },
    { position: [-3, -3, -4], shape: 'tetrahedron', scale: 0.9 },
    { position: [3, 4, -6], shape: 'sphere', scale: 0.7, wobble: true },
    { position: [-5, 0, -3], shape: 'torus', scale: 0.6 },
    { position: [5, 1, -4], shape: 'dodecahedron', scale: 1.1 },
    { position: [-2, 5, -5], shape: 'icosahedron', scale: 0.8, wobble: true },
    { position: [2, -4, -3], shape: 'octahedron', scale: 0.9 },
    { position: [-4, -1, -6], shape: 'tetrahedron', scale: 1 },
    { position: [4, 3, -4], shape: 'sphere', scale: 0.7, wobble: true },
    { position: [0, -5, -5], shape: 'torus', scale: 0.8 },
    { position: [-6, 2, -4], shape: 'dodecahedron', scale: 0.9 },
    { position: [6, -2, -5], shape: 'icosahedron', scale: 1, wobble: true },
    { position: [-3, 4, -3], shape: 'octahedron', scale: 0.7 },
    { position: [3, -3, -6], shape: 'tetrahedron', scale: 1.1 },
    { position: [-5, -4, -4], shape: 'sphere', scale: 0.8, wobble: true },
    { position: [5, 5, -5], shape: 'torus', scale: 0.6 },
    { position: [0, 6, -4], shape: 'dodecahedron', scale: 0.9 },
    { position: [-1, -6, -5], shape: 'icosahedron', scale: 0.7, wobble: true }
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      {shapes.map((shape, index) => (
        <Shape
          key={index}
          position={shape.position}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}
          scale={shape.scale}
          color={index % 2 === 0 ? baseColor : accentColor}
          shape={shape.shape}
          wobble={shape.wobble}
        />
      ))}
    </>
  );
};