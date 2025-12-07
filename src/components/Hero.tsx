import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { useTheme } from "next-themes";
const Hero = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  const {theme} = useTheme();
  useEffect(() => {
    if (!sceneRef.current) return;
    

    const isDark = theme === "dark";
    console.log(isDark);

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(isDark ? 0x0a0a0a : 0xffffff);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sceneRef.current.clientWidth / sceneRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      sceneRef.current.clientWidth,
      sceneRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    sceneRef.current.appendChild(renderer.domElement);

    // Accent neon green color
    const NEON = 0x00ff66;

    // Wireframe Icosahedron
    const geometry = new THREE.IcosahedronGeometry(1.6, 1);
    const material = new THREE.MeshBasicMaterial({
      color: NEON,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Glow Light
    const pointLight = new THREE.PointLight(NEON, 2.2, 40);
    pointLight.position.set(2, 2, 4);
    scene.add(pointLight);

    // Soft ambient light
    const ambient = new THREE.AmbientLight(NEON, 0.15);
    scene.add(ambient);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      mesh.rotation.x += 0.004;
      mesh.rotation.y += 0.005;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!sceneRef.current) return;
      const width = sceneRef.current.clientWidth;
      const height = sceneRef.current.clientHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      sceneRef.current?.removeChild(renderer.domElement);
    };
  }, [theme]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT SECTION */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg">Hello I am</p>
            <h1 className="text-6xl font-bold">John Doe</h1>
            <p className="text-2xl text-muted-foreground">
              Fullstack Developer
            </p>

            {/* Socials */}
            <div className="flex gap-4 pt-4">
              <Github className="cursor-pointer hover:text-green-400" />
              <Linkedin className="cursor-pointer hover:text-green-400" />
              <Mail className="cursor-pointer hover:text-green-400" />
            </div>
          </div>

          {/* THREE.JS SCENE */}
          <div ref={sceneRef} className="w-full h-[500px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
