import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(
  2,
  32,
  32,
  0,
  Math.PI * 2,
  Math.PI / 2,
  Math.PI / 2
);

const material = new THREE.MeshStandardMaterial({
  color: 0x66c2ff,
  transparent: true,
  opacity: 0.85,
  roughness: 0.6,
  metalness: 0.0,
  side: THREE.DoubleSide
});

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

const halfSphere = new THREE.Mesh(geometry, material);
scene.add(halfSphere);

const outlineMaterial = new THREE.MeshBasicMaterial({
  color: 0x88ccff,
  wireframe: true
});
const outline = new THREE.Mesh(geometry, outlineMaterial);
scene.add(outline);

let isDragging = false;
let prevMouse = { x: 0, y: 0 };

window.addEventListener("mousedown", (e) => {
  isDragging = true;
  prevMouse.x = e.clientX;
  prevMouse.y = e.clientY;
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const dx = e.clientX - prevMouse.x;
  const dy = e.clientY - prevMouse.y;

  camera.position.x -= dx * 0.01;
  camera.position.y += dy * 0.01;
  camera.lookAt(0, 0, 0);

  prevMouse.x = e.clientX;
  prevMouse.y = e.clientY;
});

window.addEventListener("wheel", (e) => {
  camera.position.z += e.deltaY * 0.01;
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}


animate();
