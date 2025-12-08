# Tool Learning Log

## Tool: **Three.js**

## Project: **Cell Model**

---

### 09/29/2025:
* First day reseraching the tool _three.js_
  * Tried learning on **what is three.js?**
  * Went on the site [geeksforgeeks.org](https://www.geeksforgeeks.org/javascript/introduction-to-three-js/)
* What I learned from [geeksforgeeks.org](https://www.geeksforgeeks.org/javascript/introduction-to-three-js/):
  * three.js is an **open-source** JavaScript library which is used to display graphics, being able to disply 3D and 2D visuals on a web browswer.
* Lets you use GPU to render graphics and 3D objects on a canvas in the web browswer.
* Since you are using javascript you can edit with other HTML elements.
* Three.js supports most browswers.
* Does not require third party plug in order to run the code.
  * Follow Up Questions from the Article I read:
    * What does it mean when something is **open-source**
      * I asked ChatGPT and it told me:
        * souce code that is avaiable to the public for anyone to use under a specific license.
        * anyone can modify, use, view, and redistribute the code anytime that they want
  * How to Use:
    * download the complete three.js on system files and upload it from there
      *  download it from the latest upload from its official GitHub Page

### 11/3/2025:
* I created a scene using three.js and practiced the mechanics of creating a scene
* Since I learned how to create a scene last time I used the code I learned last time:


### 11/17/2025
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

  ### 11/20/2025
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

### 12/07/2025
* **reder** - draws the scene onto the screen using WebGL
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
 


<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
