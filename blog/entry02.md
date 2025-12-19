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
```
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
I'd say one of the major skills that I developed from learning my tool is learning from scratch. Which to me it means learning about a topic that you know nothing about all by yourself. Which is what I have to experience with three.js. With three.js the javascript knowledge that I have does not really help me at all when it comes to coding with my tool, therefore I had to learn to farmiliarlize myself with completely new and more complicated looking code. And I still am struggling quite a bit with it, though I believe that I have gotten much more better at it then I did when I first started, since I have made a lot of progress in getting the basics down. 

### 

[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
