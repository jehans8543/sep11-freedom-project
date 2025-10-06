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
  * Code:
    * Creating a scene:
      ``` JS
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
      ```
        * The first line of code `const scene = new THREE.Scene();`
          * is empty at first
          * you start to add things to it like camera, lighting, rendering
        * The second line of code `const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );`
          * Creates a camera
          * `THREE.PerspectiveCamera` - Makes a realistic 3D camera that looks like how human eyes see
          * `75` - Field of View
          * `window.innerWidth / window.innerHeight` - shape of the camera's view
          * `0.1` - near clipping plane
          * `1000` - far clipping plane

### X/X/XX:
* Text


<!-- 
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
