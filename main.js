
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

animate();


