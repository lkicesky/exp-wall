import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const PARTICLE_COUNT = 6000
const SPACE_SIZE = 1200

/** 3D 星云星空背景：1200³ 立方体内随机 6000 个蓝色点粒子，整团粒子云绕 Y/X 轴极缓慢旋转 */
export default function StarfieldBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 2000)
    camera.position.z = 220

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const positions = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * SPACE_SIZE
      positions[i + 1] = (Math.random() - 0.5) * SPACE_SIZE
      positions[i + 2] = (Math.random() - 0.5) * SPACE_SIZE
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const material = new THREE.PointsMaterial({
      color: 0x4f8dff,
      size: 1.4,
      transparent: true,
      opacity: 0.9,
    })
    const points = new THREE.Points(geometry, material)
    scene.add(points)

    const resize = () => {
      const width = mount.clientWidth
      const height = mount.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    resize()
    window.addEventListener('resize', resize)

    let frameId = 0
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      points.rotation.y += 0.0012
      points.rotation.x += 0.0004
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
}
