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

* **Rendering:**
  * `const renderer = new THREE.WebGLRenderer();` - draws the picture to appear on the screen
* **Animation Looping:**
 ``` JS
function animate() {
  requestAnimationFrame(animate);
```
  * allows the code to repeat
* **Objects:**
  * `scene.add(cube);` - what allows objects to be added on the scene
* **Rotation:**
```JS
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
```
  * Allows for the cube to rotate
* **Mesh:**
  * `const cube = new THREE.Mesh(geometry, material);` - the polished appearance of the object (shape, apperance, and etc.)
  * **Material:**
    * `new THREE.MeshNormalMaterial()` - color, shading, and texture
  * **Geometry:**
    * `new THREE.BoxGeometry()` - shape of the object     

##### Challenges
As I was coding this mini project I did encounter some errors along the way, especially when it came to making the cube shift colors as it rotates.

The code for the color orientation is fallen under the material section in three.js and it looked something like this: `new THREE.MeshNormalMaterial()`. The problem I had here was that this code was applicable for color, shading and its texture but all I wanted to do was change the color as it rotates. Hence, I decided to just add it in my code and add a hex code within it to check that it worked: 

`new THREE.MeshNormalMaterial(0xff0000);`

When I tried this line of code it didnt work, there for I wanted to see how it looked like without the hex code to backtrack my steps and see where I went wrong with the color. Thats when I found out that a gradient of colors appears when it rotates when you leave the cube as `new THREE.MeshNormalMaterial()` without any color codes inside. I was extremely confused for why this was the case, so I thought this might be a good reason to ask AI to see why this works:

<img width="834" height="1035" alt="image" src="https://github.com/user-attachments/assets/22c2e3d2-67f0-40ab-acbc-8e5ec675a498" />
<img width="771" height="372" alt="image" src="https://github.com/user-attachments/assets/7c333112-5953-4751-a297-76501b0605cc" />

To give a summary, it's basically saying that `MeshNormalMaterial`, is programmed so that it doesn't use a single color. Instead it relies on the direction of the object for its color to change, and since my cube rotates in every direction it becomes a graident of colors. 

Hence, I found out that all I wanted to do was in front of me all along, I just had to understand the concept more better. 

### EDP
As I said in the beginning of my blog, I haven't made any progress towards my actual project itself, rather I've been investing time in getting acquainted with my tool rather than starting my project. Since a three model of a plant/animal cell would be heavily reliant on understanding how to use three.js. 

Which I why I believe that I am still currently stuck on stage 2 of the EDP process which is _researching the problem_ but in this case it is reseraching my tool. 






[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)
