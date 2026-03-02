const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer();
document.body.appendChild( renderer.domElement );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(15,32,16),
cosnt material = new THREE.MeshBasicMaterial( { color: 0xb10541} );
const sphere = new THREE.Mesh( geometry, material );
scene.add(sphere);
