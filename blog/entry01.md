# Entry 1
##### 11.09.2025

## Choosing a Topic
After finishing the SEP 10 course, we now advanced onto the SEP 11 course. Meaning that we had to create a brand new _Freedom Project_, correlating to the topics that we learn in this course which is **javascript**.

Last year in the SEP 10 showcase, my freedom project ended up getting _honorable mention_. I was very proud of myself, though if I could do it again I would make some changes based on the feedback that I got from some of the judges. The main piece of feedback that I got that stopped me from succeeding was my **lack of creativity** in my project.

The reason why I believed that my project lacked creativity last year was due to the fact that I choose a topic that didn't provide much room for that. Therefore for this year's freedom project I decided to make it a point to choose a topic that would give me space to be open with my creativity.

I was stuck between two project ideas in general, one of them was creating a _cell model_ while another one of my ideas was an _organization tool_. I found myself between these two ideas until Mr. Mueller provided us with a tool list.

### Choosing a Tool
Unlike last year, we were given the tool list and had to choose a tool immediately. Since it would take a longer time to learn and research our new tool.

Since I had two different ideas that I was considering, I decided to research two different tools which are: [Three.js](https://threejs.org/) and [gDevelop](https://gdevelop.io/)

First I researched the two tools and what they each do

#### Three.js
* JavaScript library for creating 3D graphics in the browser using WebGL
* Simplifies 3D rendering with built-in abstractions for lights, cameras, and objects
* Supports real-time 3D animations and interactive graphics

#### gDevelop
* No-code game engine designed for quick, intuitive game creation
* Uses event-based logic to define game behaviors instead of traditional coding
* Built-in library of assets and templates to speed up development

#### Finalization of a Topic & Tool
After looking at the details for each tool, I quickly realized that gDevelop wouldn't be a good tool to use if I were to go through with my organization app. And as I was researching more about three.js I kept feeling more and more intrigued into what I was reading about. I also was leaning more towards the cell model idea since I was taking AP Biology this year, and I believed that if I learned how to create a cell model it would make me better in the cell unit in Biology. 

Therefore, after making my final decision I decided that I would make a **cell model**, in which I would make an interactive, animated, and 3D model of a cell. That would demonstrate the cell and its organelles in work. And when you are to hover on one of the organelles and click on it, a card will pop up giving you a description of what the organelle's function is. 

Since I decided that I was going to a cell model, that would mean that I would stick with the tool three.js, which I was satisfied with after seeing some of the other projects that were made with it. 

<img width="457" height="338" alt="image" src="https://github.com/user-attachments/assets/25d55665-598e-4681-b628-b9dace4fb32e" />

As you can see at this example project, it shows that three.js has all the components that I was looking for:

* interactive
* 3D
* Detail-oriented 

This meant I finally confirmed that I was going to use three.js to create a cell model. 

## Research + Tinkering
Since I choose to use three.js as my tool, I now had to do more in-depth research on how to use it

### Research
* First day researching the tool _three.js_
  * Tried learning on **What is three.js?**
  * Went on the site [geeksforgeeks.org](https://www.geeksforgeeks.org/javascript/introduction-to-three-js/)
* What I learned from [geeksforgeeks.org](https://www.geeksforgeeks.org/javascript/introduction-to-three-js/):
  * three.js is an **open-source** JavaScript library which is used to display graphics, being able to display 3D and 2D visuals on a web browser.
* Lets you use GPU to render graphics and 3D objects on a canvas in the web browser.
* Since you are using javascript you can edit with other HTML elements.
* Three.js supports most browsers.
* Does not require a third party plug in order to run the code.
  * Follow Up Questions from the Article I read:
    * What does it mean when something is **open-source**
      * I asked ChatGPT and it told me:
        * source code that is available to the public for anyone to use under a specific license.
        * anyone can modify, use, view, and redistribute the code anytime that they want
  * How to Use:
    * download the complete three.js on system files and upload it from there
      *  download it from the latest upload from its official GitHub Page
      
Now that I learned the basics of what three.js is, I decided that the next time I would actually start tinkering and try testing out what I learned from the articles.

### Tinkering 
Through my tinkering I learned a variety of things such as:
* Using the <script> tag to install three.js into my IDE 
* Creating a rotating cube using three.js 
  * While creating the rotating cube, I learned how to change the color of the cube and sort of learned how to adjust the camera position (I still have some confusion on it) 
* Learned how to change the background color 
* Learned the code on how to add directional lighting (though kind of useless to me at the moment) 
  * const light = new THREE.DirectionalLight(0xffffff, 1);

Here is an example of some of the tinkering that I did: 

``` JS
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Three.js Test</title>
    <style>
      body { margin: 0; overflow: hidden; background: #000; }
      canvas { display: block; }
    </style>
  </head>
  <body>
    <!-- Import Three.js from CDN -->
    <script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"></script>
    <script>
      // Create scene, camera, and renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // Create a cube
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // Add light
      const light = new THREE.PointLight(0xffffff, 1);
      light.position.set(5, 5, 5);
      scene.add(light);

      camera.position.z = 3;

      // Animation loop
      function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      }
      animate();

      // Handle window resize
      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHei
```
Some of the code may still be buggy, since I still did not find the reason behind the bugs, though I plan to make a priority in finding it the next time I tinker with my code. 

## EDP 
In terms of the EDP process, I'd say we completed stage one, and now are approaching **_stage two_**. The first stage of the EDP is defining the problem. Which for us is thinking of a topic and a tool to go along with the topic, which as you can see that we have completed since I officially chose my topic and tool. 

The reason why I said we are approaching stage two is because stage two is _researching the problem_, in terms of the SEP 11 Freedom project it would mean that we would have to _research_ and _tinker_ with our tool. And I would say we just began the process of researching and tinkering, therefore I believe that it would take a few more weeks for us to be completely done with stage two of the EDP process. 

## Skills 
### Creative Thinking 
The reason why I say creative thinking is a skill I learned during this stage of the project is because I was able to correlate a topic and a tool quickly. 

Creative thinking is when you have the ability to look at problems or situations from a new perspective to generate unique and effective solutions. The topic that I was keen on doing was creating a cell model, and I had to find a tool that was suitable for it. Three.js stood out to me the most, though if I wanted to use the tool to its fullest, I would have to add details to my project's topic in order to use the tool to its fullest. Which is making animations in the cell, and having card info for each organelle. Adding these details to my project, allows me to use three.js to its fullest, which is how I was able to develop my creative thinking skills. 

### Problem Solving
The reason why I said that problem solving is a skill that I developed, is because I learned how to tinker. Last year, I barely tinkered with my tool, since it was really self-explanatory. Though this year it ended up being different, since with three.js it goes over topics and skills that I learned nothing about. Therefore, I had to learn how to tinker in a way that would allow me to effectively learn. Therefore, I created a system for myself that allowed me to efficiently tinker with my tool while retaining my information. In which I would tinker with code, and then explain it in words on what each individual piece of code does. Making my tinkering fast and efficient. Demonstrating how I further developed my problem solving skill, in this case when it comes to tinkering. 

[Next](entry02.md)

[Home](../README.md)


