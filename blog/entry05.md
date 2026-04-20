# Entry 5
##### 04/19/2026

## Progress Check 
As of right now, I offically had _finished_ the **MVP** of my project. And since then my project has gone through many visual and technical appearnces. Since my project is an MVP I can't neccesarily say that I am proud of it, in fact I feel rather disappointed in it becaue it looks competely different from what I have been imagining for months ever since I started this project. Hence, I have to keep on reminding myself that this is _just a MVP_ it's not meant to be perfect, all that it si meant to do is follow the MVP checklist I made to see I met all the requirements, and technically get full points for the project that I started working on. 

### MVP Checklist 
Below is the MVP I followed. The way I approached the MVP is that I ensured is that everything on my MVP is there somehwere, it wasn't mean to be visually appealing at the moment, since that is part of what I had plan for _**beyond MVP**_. 

* **Deadline** - 03/02/2026
- [ ] Create a scene
  - [ ] Uses DOM (concept 1)
    - [ ] `document.body.appendChild()` 
- [ ] Make a base model for the animal cell 
  - [ ] make it into a spherical shape
  - [ ] base color of the base
    - [ ] hex code: #5d9aa8
  - [ ] set up camera + rotation of the basic model
    - [ ] uses function (concept 2)

* **Deadline** - 03/16/2026
- [ ] Make the cell membrane
  - [ ] another spherical shape within the bigger one
    - [ ] make only the radius of it show
  - [ ] hex code: #3e6b75
- [ ] Create two more organelles (all uses spherical shapes) 
  - [ ] Nucleus (hex code: #3e5175)
    - [ ] if possible create the nucleolus and nuclear membrane 
  - [ ] vaculoes (hex code: #96b1e3)
     
* **Deadline** - 04/06/2026
- [ ] Finish rest of the MAIN organelles
  - [ ] mitochondrian
  - [ ] smooth endoplasmic reticulum
  - [ ] rough endoplasmic reticulum
  - [ ] lysosome
  - [ ] cytoplasm 

For my MVP I ended up not following it thorough completely, since some of the organelles that I said I would make like the cell membrane and the cytoplasm were much more difficult then I thought it would be, hence I decided to move it to the _beyond MVP_. Other than that I added eveyrthing that I said I would on my MVP to my acutal project and it ended up looking like something like this: 

<img width="1027" height="993" alt="image" src="https://github.com/user-attachments/assets/a2be9030-dd8b-4173-8fe1-659d05af26ae" />

As you can see you can barely tell what it is. It really just looks like a sphere with a bunch of randdom shapes inside of it. That's the main reason why I was extremely disappointed with my end product with the MVP. 

Though if there was one thing that I was proud about when it came to my MVP was all the code that I learn myself, and how I improved in concepts that I struggled a lot before like with the _DOM_ topics and _functions_:

``` JS
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
let prevMouseX = 0,
    prevMouseY = 0;
let rotSpeedX = 0,
    rotSpeedY = 0;

document.addEventListener("mousedown", (e) => {
    isDragging = true;
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
});
document.addEventListener("mouseup", () => (isDragging = false));
document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    rotSpeedY = (e.clientX - prevMouseX) * 0.005;
    rotSpeedX = (e.clientY - prevMouseY) * 0.005;
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
```
Up above is a snippet of my code that uses both DOM and functions. I was able to get the basic structure of the code with my basic knowledge, though when it came to the exclusve _three.js_ code, I was able to use their [documentation tab](https://threejs.org/docs/), which helped me immensly with all the new code that I had to learn. 

## Challenges 
Some of the challenges that I faced while coding my MVP, was that it I was enable to code it the way I envisoned it. Since the beginning of this project I wanted my animal cell to be shaped as a _half-sphere_ something like this:

<img width="737" height="492" alt="image" src="https://github.com/user-attachments/assets/48369b0b-347f-400f-9f58-2672867f45dc" />

Though when it came to actually coding it, it was nearly impossible for a beginner like me to learn. Hence I had to stick where a translucent clear sphere. Which sort of destroyed the whole vision that I had for this project, since now the organelles that I have inside it keep disappearing depending on where I turn my camera. 

Maybe if I have time during my beyond MVP, I can try again into making it into a half sphere, but its likely that I won't tackle the issue. Instead, just planning to keep the full sphere and find a way to fix the disappearing organelle issue. 

## EDP 
In terms of the EDP process, I believe that I finished stage 5 of the EDP process which is _**Create** a Prototype_. The reason why I believe that we finished step 5, is becaues the MVP in this case is our prototype. The MVP is what we are testing to see what is there to change, remove, or add. Which is the issues that we evaluate during stage 6 of the EDP process which is _**Test** and evaluate the protoype_. Since we are moving onto stage 6 of the EDP process this means that we will start incorporating our _Beyond MVP_, trying out best to enhance our MVP and tackle the issues that our current MVP has which I mentioned in the _challenges_ section of this blog. 

## Skills 
### Acceptance 
Last year my MVP was at a quite good stage, I was extremely satisified with the result that I got with the MVP. 



[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)
