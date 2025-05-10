import React, { useEffect, useRef, useState } from "react";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import { useTexture, Center } from "@react-three/drei";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader, Font } from "three/examples/jsm/loaders/FontLoader.js";
import * as THREE from "three";
import Image from "next/image";

import { StaticImageData } from "next/image";

extend({ TextGeometry });

// Add useWindowSize hook
function useWindowSize() {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1920,
    height: typeof window !== "undefined" ? window.innerHeight : 1080,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

interface ParticleTextProps {
  text?: string;
  amount?: number;
  particleSize?: number;
  particleColor?: string;
  textSize?: number;
  area?: number;
  ease?: number;
  backgroundImage?: StaticImageData;
}

const ParticleText: React.FC<ParticleTextProps> = ({
  text = "SIC\nPARVIS\nMAGNA",
  amount = 1500,
  particleSize = 1,
  particleColor = "#ffffff",
  textSize = 20,
  area = 250,
  ease = 0.05,
  backgroundImage,
}) => {
  const { width } = useWindowSize();

  // Calculate responsive text size
  const responsiveTextSize = React.useMemo(() => {
    if (width >= 1920) return textSize; // FHD
    if (width >= 1440) return textSize * 0.9; // HD+
    if (width >= 1024) return textSize * 0.8; // HD
    if (width >= 768) return textSize * 0.7; // Tablet
    return textSize * 0.6; // Mobile (12px for default 16px)
  }, [width, textSize]);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {backgroundImage && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      )}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <Canvas
          camera={{
            fov: 65,
            near: 1,
            far: 10000,
            position: [0, 0, 100],
          }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Center>
            <ParticleTextMesh
              text={text}
              amount={amount}
              particleSize={particleSize}
              particleColor={particleColor}
              textSize={responsiveTextSize}
              area={area}
              ease={ease}
            />
          </Center>
        </Canvas>
      </div>
    </div>
  );
};

interface ParticleTextMeshProps extends ParticleTextProps {}

const ParticleTextMesh: React.FC<ParticleTextMeshProps> = ({
  text,
  amount = 1500,
  particleSize = 1,
  particleColor,
  textSize = 16,
  area = 250,
  ease = 0.05,
}) => {
  const { camera } = useThree();
  const particlesRef = useRef<THREE.Points>(null);
  const textRef = useRef<THREE.Mesh>(null);
  const mouse = useRef<THREE.Vector2>(new THREE.Vector2(-200, 200));
  const [particles, setParticles] = useState<THREE.Vector3[]>([]);
  const [originalPositions, setOriginalPositions] = useState<THREE.Vector3[]>(
    []
  );
  const [font, setFont] = useState<Font | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const particleTexture = useLoader(
    THREE.TextureLoader,
    "https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png"
  );

  const handleMouseDown = (event: MouseEvent) => {
    const rect = event.target as HTMLCanvasElement;
    const x = (event.clientX / rect.clientWidth) * 2 - 1;
    const y = -(event.clientY / rect.clientHeight) * 2 + 1;
    mouse.current.set(x * 100, y * 100);
    setIsMouseDown(true);
  };

  const handleMouseMove = (event: MouseEvent) => {
    const rect = event.target as HTMLCanvasElement;
    const x = (event.clientX / rect.clientWidth) * 2 - 1;
    const y = -(event.clientY / rect.clientHeight) * 2 + 1;
    mouse.current.set(x * 100, y * 100);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const fontLoader = new FontLoader();
    fontLoader.load("/assets/fonts/Roboto.json", (loadedFont) => {
      setFont(loadedFont);
    });
  }, []);

  useEffect(() => {
    if (!font || !textRef.current || !text) return;

    // Get points from geometry
    const shapes = font.generateShapes(text, textSize);
    const points: THREE.Vector3[] = [];
    const colors: number[] = [];
    const sizes: number[] = [];

    // Handle both main shapes and holes
    let allShapes = [...shapes];
    shapes.forEach((shape) => {
      if (shape.holes && shape.holes.length > 0) {
        allShapes.push(...(shape.holes as THREE.Shape[]));
      }
    });

    // Generate points for each shape
    allShapes.forEach((shape) => {
      const amountPoints = (shape as any).type === "Path" ? amount / 2 : amount;
      const shapePoints = shape.getSpacedPoints(amountPoints);

      shapePoints.forEach((point) => {
        points.push(new THREE.Vector3(point.x, point.y, 0));
        colors.push(1, 1, 1); // Default white color
        sizes.push(particleSize);
      });
    });

    // Center the points
    const boundingBox = new THREE.Box3().setFromPoints(points);
    const center = boundingBox.getCenter(new THREE.Vector3());
    points.forEach((point) => point.sub(center));

    setParticles(points);
    setOriginalPositions(points.map((p) => p.clone()));
  }, [font, text, textSize, amount, particleSize]);

  useFrame((state) => {
    if (!particlesRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position;
    const colors = particlesRef.current.geometry.attributes.customColor;
    const sizes = particlesRef.current.geometry.attributes.size;

    const time = ((0.001 * performance.now()) % 12) / 12;
    const zigzagTime = (1 + Math.sin(time * 2 * Math.PI)) / 6;

    particles.forEach((particle, i) => {
      const originalPos = originalPositions[i];
      const currentPos = particle;

      const mouseDistance = mouse.current.distanceTo(
        new THREE.Vector2(currentPos.x, currentPos.y)
      );

      if (mouseDistance < area) {
        const dx = mouse.current.x - currentPos.x;
        const dy = mouse.current.y - currentPos.y;
        const angle = Math.atan2(dy, dx);
        const d = dx * dx + dy * dy;
        const f = -area / d;

        if (isMouseDown) {
          const t = Math.atan2(dy, dx);
          currentPos.x -= f * Math.cos(t);
          currentPos.y -= f * Math.sin(t);

          colors.setXYZ(i, 0.5 + zigzagTime, 1.0, 0.5);
          colors.needsUpdate = true;

          if (
            currentPos.x > originalPos.x + 70 ||
            currentPos.x < originalPos.x - 70 ||
            currentPos.y > originalPos.y + 70 ||
            currentPos.y < originalPos.y - 70
          ) {
            colors.setXYZ(i, 0.15, 1.0, 0.5);
            colors.needsUpdate = true;
          }
        } else {
          if (i % 5 === 0) {
            const t = Math.atan2(dy, dx);
            currentPos.x -= 0.03 * Math.cos(t);
            currentPos.y -= 0.03 * Math.sin(t);

            colors.setXYZ(i, 0.15, 1.0, 0.5);
            colors.needsUpdate = true;

            sizes.array[i] = particleSize / 1.2;
            sizes.needsUpdate = true;
          } else {
            const t = Math.atan2(dy, dx);
            currentPos.x += f * Math.cos(t);
            currentPos.y += f * Math.sin(t);

            sizes.array[i] = particleSize * 1.3;
            sizes.needsUpdate = true;
          }

          if (
            currentPos.x > originalPos.x + 10 ||
            currentPos.x < originalPos.x - 10 ||
            currentPos.y > originalPos.y + 10 ||
            currentPos.y < originalPos.y - 10
          ) {
            colors.setXYZ(i, 0.15, 1.0, 0.5);
            colors.needsUpdate = true;

            sizes.array[i] = particleSize / 1.8;
            sizes.needsUpdate = true;
          }
        }
      }

      currentPos.x += (originalPos.x - currentPos.x) * ease;
      currentPos.y += (originalPos.y - currentPos.y) * ease;
      currentPos.z += (originalPos.z - currentPos.z) * ease;

      positions.setXYZ(i, currentPos.x, currentPos.y, currentPos.z);
      positions.needsUpdate = true;
    });
  });

  if (!font) return null;

  return (
    <>
      <mesh ref={textRef} visible={false}>
        <primitive
          object={
            new TextGeometry("Sic Parvis Magna", {
              font: font,
              size: textSize,
              depth: 0.1,
            })
          }
        />
        <meshBasicMaterial />
      </mesh>
      {particles.length > 0 && (
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[
                new Float32Array(particles.flatMap((p) => [p.x, p.y, p.z])),
                3,
              ]}
              count={particles.length}
            />
            <bufferAttribute
              attach="attributes-customColor"
              args={[new Float32Array(particles.flatMap(() => [1, 1, 1])), 3]}
              count={particles.length}
            />
            <bufferAttribute
              attach="attributes-size"
              args={[new Float32Array(particles.map(() => particleSize)), 1]}
              count={particles.length}
            />
          </bufferGeometry>
          <shaderMaterial
            transparent
            depthTest={false}
            blending={THREE.AdditiveBlending}
            uniforms={{
              color: { value: new THREE.Color(particleColor) },
              pointTexture: { value: particleTexture },
            }}
            vertexShader={`
              attribute float size;
              attribute vec3 customColor;
              varying vec3 vColor;

              void main() {
                vColor = customColor;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
              }
            `}
            fragmentShader={`
              uniform vec3 color;
              uniform sampler2D pointTexture;
              varying vec3 vColor;

              void main() {
                gl_FragColor = vec4(color * vColor, 1.0);
                gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
              }
            `}
          />
        </points>
      )}
    </>
  );
};

export default ParticleText;
