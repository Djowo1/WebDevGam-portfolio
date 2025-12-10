import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import styles from './Avatar3D.module.css';

const AnimatedSphere = () => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
      meshRef.current.rotation.y = Math.sin(time * 0.2) * 0.1;
    }
  });

  return (
    <Sphere 
      ref={meshRef} 
      args={[1, 100, 100]}
      scale={2.5}
    >
      <MeshDistortMaterial
        color="#6366f1"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const Avatar3D = () => {
  return (
    <div className={styles.container}>
      <Canvas 
        camera={{ position: [0, 0, 5] }}
        className={styles.canvas}
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]} 
          intensity={1} 
        />
        
        <AnimatedSphere />
        
        <OrbitControls 
          enableZoom={false}
          autoRotate
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
};

export default Avatar3D;