import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export function Robot(props) {
  const group = useRef();
  const {nodes, materials} = useGLTF("/robot-transformed.glb");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x: mouseX, y: mouseY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); 

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[-mousePosition.y * 0.3, mousePosition.x * 0.3, 0]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 0]} intensity={0.8} />
      <group name="Sketchfab_Scene">
        <group name="RootNode" scale={0.3}>
          <group name="sphere_body" rotation={[-Math.PI / 2 + 1 / 100, 0, 0]} scale={100}>
            <mesh name="sphere_body_glossy_paint_white_0" geometry={nodes.sphere_body_glossy_paint_white_0.geometry} material={materials.glossy_paint_white} />
            <mesh name="sphere_body_black_matte_0" geometry={nodes.sphere_body_black_matte_0.geometry} material={materials.black_matte} />
            <mesh name="sphere_body_metal_0" geometry={nodes.sphere_body_metal_0.geometry} material={materials.metal} />
            {props.robotClicked && <mesh name="sphere_body_eyes_light_0" geometry={nodes.sphere_body_eyes_light_0.geometry} material={materials.eyes_light} />}
            <mesh name="sphere_body_dark_glass_0" geometry={nodes.sphere_body_dark_glass_0.geometry} material={materials.dark_glass} />
            <mesh name="sphere_body_black_matter_blender_0" geometry={nodes.sphere_body_black_matter_blender_0.geometry} material={materials.black_matter_blender} />
            <mesh name="sphere_body_thruster_light_0" geometry={nodes.sphere_body_thruster_light_0.geometry} material={materials.thruster_light} />
            <mesh name="sphere_body_blender_glass_0" geometry={nodes.sphere_body_blender_glass_0.geometry} material={materials.blender_glass} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/robot-transformed.glb");
