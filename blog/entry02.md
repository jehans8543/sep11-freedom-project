# Entry 2
##### 12/19/2025

## Learning my Tool
After the previous blog we have made quite some progress since then. Since the last blog I have confrimed that I was going to use the tool three.js, and I spent a lot of time getting familiar with it and taking notes on how to use it. And honestly I found myself struggling quite a lot on how to use it. When it comes to three.js it's a tool that requires a lot of prior knowledge on how to use javascript. And it's safe to say that I certainly do not have that knowledge. Therefore when using three.js I am learning more and more about basic javascript each time. 

### Research 
* I read this article: [Getting started with Three.js](https://web.dev/articles/three-intro)
  * Materials in three.js
   * No lighting effects
   * basic diffuse lighting
   * Reflective, shiny surfaces
   * you can apply `THREE.MeshLambertMaterial` for the sphere

### Tinkering 
* I decided to try out a new project using my tool, and made a **3D rotating cube**
* I copied and pasted much of the code I had before from my old three.js practice
* I incorporated new things that I learned from the website, and just youtube videos in general:
  * when you make a cube geometry is created, and a green material is applied to it, then you would add the cube to the scene
  ``` JS
  const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

  * `BoxGeometry` - creates a cube with equal dimensions on all sides
  * `scene.add(cube)` - adds the cube to the scene
  * `MeshBasicMaterial` - a simple material that gives the cube its color

  * I was able to try and learn how to tackle one of my issues, which is trying to get the cube to appear:
  * **Render Loop:**
  ``` JS
  function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
```
* `requestAnimationFrame(animate)` - tells the browser to run on `animate()` again before the next frame is drawn
* Loop runs for around 60 seconds
* `cube.rotation.x` & `y` inside the loop makes the cube animate more smoothly
* This loop allows the cube to appear

*  **reder** - draws the scene onto the screen using WebGL
  * `antialias: true` - smoothes the edges
  * `renderer.domElement` - the canvas Three.js creates internally
``` JS
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```
* Geometry
  * the geometry in three.js helps define shapes such as the new shape that I learned which was a _sphere_
  * `1` - radius
  * `32,32` - number of horizontal and vertical segnemnts
 ``` JS
const geometry = new THREE.SphereGeometry(1, 32, 32);
```
* Material
  * controls the color, texture, and etc.
  * `MeshStandardMaterial`- responds to light realistically
``` JS
const material = new THREE.MeshStandardMaterial({ color: 0x00aaff });
```

As you can see above three.js uses a lot of code that we have not learned at all in class. We especially did not learn anything related to how to code/render 3D shapes. Therefore much of what I tinkered is me trying to get a feel for how to make the shapes and functions of three.js to work. 

## Skills 

### Learning From Scratch
I'd say one of the major skills that I developed from learning my tool is learning from scratch. Which to me it means learning about a topic that you know nothing about all by yourself. Which is what I have to experience with three.js. With three.js the javascript knowledge that I have does not really help me at all when it comes to coding with my tool, therefore I had to learn to farmiliarlize myself with completely new and more complicated looking code. And I still am struggling quite a bit with it, though I believe that I have gotten much more better at it then I did when I first started, since I have made a lot of progress in getting the basics of my tool down. Through learning from scratch, I was able to realized the **importance** of tinkering, and how actually interacting with your code and looking for the mistakes within it yourself is the most effective way to learn. Therefore, I contribute most of the learning coming from the tinkering and the mistakes I made while tinkering. 

### Repetition 
When I say repetition, I meant it in a way that I repeadetly code the same thing until I found out the mistake in it. The reason why I say repetition is a skill becuase it helps me advance my learning by finding the errors in my code. It's true when they say that the more you do something the better you get at it, since for example I was learning how to code a cube using three.js, and for someone reason the code wouldn't work the first time I tried it. The first version of the code looked something like this:

``` JS
const scene = new THREE.Scenee();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene);
}

animate();
```
No matter how much times I looked over this code I couldn't seem to find out whats wrong with it. Therefore, I decided to scrap this code and code it all over again. Yes this may be inconvienent, but it was the only way I knew how to fix my code. Therefore when I rewrote the code it looked like something like this:

``` JS
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
```
After rewriting the code, I realized the errors that I had were spelling mistakes, one of them being in `const scene = new THREE.Scene();` in which I spelled scene wrong, and another one of the errors being `renderer.render` is missing a camera argument, in which I added it in the new time I recoded the cube. 

Which is why I learned the lessons that the more you repeat something the more likely you are to learn and find the mistake, since practice makes perfect.



[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
