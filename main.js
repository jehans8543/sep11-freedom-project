import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0x334455, 1.2);
scene.add(ambientLight);

const sunLight = new THREE.DirectionalLight(0x88ccff, 1.5);
sunLight.position.set(5, 8, 5);
sunLight.castShadow = true;
scene.add(sunLight);

const fillLight = new THREE.PointLight(0x5d9aa8, 1.0, 20);
fillLight.position.set(-3, -3, 3);
scene.add(fillLight);

function makeSphere(radius, color, position, opacity = 1, wireframe = false) {
  const geometry = new THREE.SphereGeometry(radius, 64, 64);
  const material = new THREE.MeshPhongMaterial({
    color: color,
    transparent: opacity < 1,
    opacity: opacity,
    wireframe: wireframe,
    shininess: 60,
    specular: 0x334455,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(position.x, position.y, position.z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}

function makeTube(curve, color, tubularRadius = 0.04) {
  const geometry = new THREE.TubeGeometry(curve, 30, tubularRadius, 8, false);
  const material = new THREE.MeshPhongMaterial({ color, shininess: 40 });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  return mesh;
}

const cellBody = makeSphere(2.2, '#5d9aa8', { x: 0, y: 0, z: 0 }, 0.18);

const cellMembrane = makeSphere(2.2, '#3e6b75', { x: 0, y: 0, z: 0 }, 0.55, true);

makeSphere(0.30, '#96b1e3', { x:  1.1, y:  0.7, z: 0.2 }, 0.80);
makeSphere(0.22, '#96b1e3', { x: -0.9, y: -0.8, z: 0.5 }, 0.80);

function makeMitochondrion(x, y, z, rx = 0) {
  const m = makeSphere(0.22, '#c0785a', { x, y, z }, 0.92);
  m.scale.set(1.8, 1.0, 1.0);
  m.rotation.z = rx;
}

makeMitochondrion( 0.85, -0.5,  0.6);
makeMitochondrion(-1.1,  0.6,  0.3, 0.4);
makeMitochondrion( 0.3,  1.1, -0.5, -0.3);

{
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.6,  0.5,  1.0),
    new THREE.Vector3(-1.2,  0.2,  0.5),
    new THREE.Vector3(-1.4, -0.3,  0.0),
    new THREE.Vector3(-1.0, -0.8, -0.4),
    new THREE.Vector3(-0.4, -1.0,  0.2),
  ]);
  makeTube(curve, '#7a9e7a', 0.055);
}

{
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3( 0.8,  0.5,  0.9),
    new THREE.Vector3( 1.3,  0.1,  0.4),
    new THREE.Vector3( 1.5, -0.4, -0.2),
    new THREE.Vector3( 1.0, -0.9, -0.5),
    new THREE.Vector3( 0.4, -1.1,  0.1),
  ]);
  makeTube(curve, '#9e7a9e', 0.055);

  for (let i = 0; i <= 20; i++) {
    const t  = i / 20;
    const pt = curve.getPoint(t);
    makeSphere(0.028, '#c8a0c8', { x: pt.x + 0.06, y: pt.y + 0.06, z: pt.z });
  }
}
    makeSphere(0.14, '#d4b06a', { x:  0.5, y: -1.0,  z:  0.8 }, 0.90);
    makeSphere(0.11, '#d4b06a', { x: -0.6,  y:  1.0,  z: -0.7 }, 0.90);
    makeSphere(0.13, '#d4b06a', { x:  1.0,  y:  0.8,  z: -0.6 }, 0.90);
function animate() {
  requestAnimationFrame(animate);

  if (isDragging) {
    scene.rotation.y += rotSpeedY;
    scene.rotation.x += rotSpeedX;
  } else {
    scene.rotation.y += 0.003 + rotSpeedY;
    rotSpeedY *= 0.92;
    rotSpeedX *= 0.92;
    scene.rotation.x += rotSpeedX;
  }

  renderer.render(scene, camera);
}
let isDragging = false;
let prevMouseX = 0, prevMouseY = 0;
let rotSpeedX = 0, rotSpeedY = 0;

document.addEventListener('mousedown', e => {
  isDragging = true;
  prevMouseX = e.clientX;
  prevMouseY = e.clientY;
});
document.addEventListener('mouseup',   () => isDragging = false);
document.addEventListener('mousemove', e => {
  if (!isDragging) return;
  rotSpeedY = (e.clientX - prevMouseX) * 0.005;
  rotSpeedX = (e.clientY - prevMouseY) * 0.005;
  prevMouseX = e.clientX;
  prevMouseY = e.clientY;
});
document.addEventListener('touchstart', e => {
  isDragging = true;
  prevMouseX = e.touches[0].clientX;
  prevMouseY = e.touches[0].clientY;
});
document.addEventListener('touchend',   () => isDragging = false);
document.addEventListener('touchmove',  e => {
  if (!isDragging) return;
  rotSpeedY = (e.touches[0].clientX - prevMouseX) * 0.005;
  rotSpeedX = (e.touches[0].clientY - prevMouseY) * 0.005;
  prevMouseX = e.touches[0].clientX;
  prevMouseY = e.touches[0].clientY;
});
animate();


