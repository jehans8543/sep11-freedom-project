# Entry 3
##### 02/06/2026


## A Quick Progress Check
It's been two months since my last blog, and I didn't start anything related to my project just yet. Instead I was taking my time to learn more about my tool. Three.js is a considerbly difficult tool, since it requires a 3D shapes with a certain type of code that I have not yet learned. Learning the new code was extremely diffcult, especially since I struggle with Javascript enough as it is. Though I felt as if I made a lot of progress with my learning, since I took the time to understand little pieces of code which work together to make a bigger piece of code with a more remarkable results. 

### Tinkering with my Tool 
#### Mini Project
The best way for me to evaluate and connect all my learning is to create a mini-coding project for myself using the things I learned about three.js since the start of the school year.

I created a scene with a camera and a cube, I set up the render position and was able to learn how to move the camera fully. I also tried rendering the cube so that it can rotate, and that the colors would change during the rotation. 

``` JS
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 100);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshNormalMaterial()
);
scene.add(cube);
camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
```
After coding this I was quite proud of the result that I ended up having:
<img width="718" height="786" alt="image" src="https://github.com/user-attachments/assets/af12c525-86a5-45d4-aff1-61839cfa6b4f"/>

##### Concepts 
Some of the concepts and terms that I used to code this are: 

* Rendering:
  * `const renderer = new THREE.WebGLRenderer();` - draws the picture to appear on the screen
* Animation Looping:
 ``` JS
function animate() {
  requestAnimationFrame(animate);
```
  * allows the code to repeat
* Objects
  * `scene.add(cube);` - what allows objects to be added on the scene
* Rotation
```JS
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
```
  * Allows for the cube to rotate
* Mesh
  * `const cube = new THREE.Mesh(geometry, material);` - the polished appearance of the object (shape, apperance, and etc.)
  * Material
    * `new THREE.MeshNormalMaterial()` - color, shading, and texture
  * Geometry
    * `new THREE.BoxGeometry()` - shape of the object     

##### Challenges
As I was coding this mini project I did encounter some errors along the way, especially when it came to making the cube shift colors as it rotates. 




[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)
