import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Hat(props) {
  const { nodes, materials } = useGLTF('/education.gltf')
  return (
    <group {...props} dispose={null}>
      <ambientLight intensity={0.6}/>
      <directionalLight position={[5, 5, 0]} intensity={0.8} />
      <group rotation={[-Math.PI / 2.2, 0.3, -3.7]} scale={3.5}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 12.406]}>
            <mesh geometry={nodes.Cube_book_0.geometry} material={materials.book} />
            <mesh geometry={nodes.Cube_pages_0.geometry} material={materials.pages} />
          </group>
          <group position={[0, 25.101, 0]} rotation={[-Math.PI / 2, 0, 0.686]} scale={[100, 100, 12.406]}>
            <mesh geometry={nodes.Cube001_book_2__0.geometry} material={materials.book_2} />
            <mesh geometry={nodes.Cube001_pages_0.geometry} material={materials.pages} />
          </group>
          <group position={[-75.693, 67.395, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={3.59}>
            <mesh geometry={nodes.Sphere_bood_0.geometry} material={materials.bood} />
            <mesh geometry={nodes.Sphere_roope_0.geometry} material={materials.roope} />
          </group>
          <mesh geometry={nodes.Torus_hat_0.geometry} material={materials.material} position={[0, 42.25, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/education.gltf')
