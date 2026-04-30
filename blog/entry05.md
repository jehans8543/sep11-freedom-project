# Entry 5
##### 04/19/2026

## Progress Check 
As of right now, I officially had _finished_ the **MVP** of my project. And since then my project has gone through many visual and technical appearances. Since my project is an MVP I can't necessarily say that I am proud of it, in fact I feel rather disappointed in it because it looks completely different from what I have been imagining for months ever since I started this project. Hence, I have to keep on reminding myself that this is just an MVP_ it's not meant to be perfect, all that it is meant to do is follow the MVP checklist I made to see I met all the requirements, and technically get full points for the project that I started working on. 

### MVP Checklist 
Below is the MVP I followed. The way I approached the MVP is that I ensured is that everything on my MVP is there somewhere, it wasn't meant to be visually appealing at the moment, since that is part of what I had planned for _**beyond MVP**_. 

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
  - [ ] vacuoles (hex code: #96b1e3)
     
* **Deadline** - 04/06/2026
- [ ] Finish rest of the MAIN organelles
  - [ ] mitochondrian
  - [ ] smooth endoplasmic reticulum
  - [ ] rough endoplasmic reticulum
  - [ ] lysosome
  - [ ] cytoplasm 

For my MVP I ended up not following it through completely, since some of the organelles that I said I would make like the cell membrane and the cytoplasm were much more difficult then I thought it would be, hence I decided to move it to the _beyond MVP_. Other than that I added everything that I said I would on my MVP to my actual project and it ended up looking like something like this: 

<img width="1027" height="993" alt="image" src="https://github.com/user-attachments/assets/a2be9030-dd8b-4173-8fe1-659d05af26ae" />

As you can see you can barely tell what it is. It really just looks like a sphere with a bunch of random shapes inside of it. That's the main reason why I was extremely disappointed with my end product with the MVP. 

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
Up above is a snippet of my code that uses both DOM and functions. I was able to get the basic structure of the code with my basic knowledge, though when it came to the exclusive _three.js_ code, I was able to use their [documentation tab](https://threejs.org/docs/), which helped me immensely with all the new code that I had to learn. In order to make some of the organelles stack and overlap each other, I was initially struggling. Then I soon learned to fix it after reading it on a forum after searching up the question: "_how to make shapes ovrelap in three.js_" on googgle. After searching it up it led me to a forum where users had a subsection to talk about three.js: [Three.JS: How to Make Textures Overlap](https://stackoverflow.com/questions/18355417/three-js-how-to-make-textures-overlap-each-other) 

## Challenges 
Some of the challenges that I faced while coding my MVP, was that I was able to code it the way I envisioned it. Since the beginning of this project I wanted my animal cell to be shaped as a _half-sphere_ something like this:

<img width="737" height="492" alt="image" src="https://github.com/user-attachments/assets/48369b0b-347f-400f-9f58-2672867f45dc" />

Though when it came to actually coding it, it was nearly impossible for a beginner like me to learn. Hence I had to stick to a translucent clear sphere. Which sort of destroyed the whole vision that I had for this project, since now the organelles that I have inside it keep disappearing depending on where I turn my camera. 

Maybe if I have time during my Beyond MVP, I can try again to make it into a half sphere, but it's likely that I won't tackle the issue. Instead, just planning to keep the full sphere and find a way to fix the disappearing organelle issue. 

## EDP 
In terms of the EDP process, I believe that I finished stage 5 of the EDP process which is **Create** a Prototype. The reason why I believe that we finished step 5, is because the MVP in this case is our prototype. The MVP is what we are testing to see what is there to change, remove, or add. Which is the issues that we evaluate during stage 6 of the EDP process which is **Test** and evaluate the prototype. Since we are moving onto stage 6 of the EDP process this means that we will start incorporating our _Beyond MVP_, trying out best to enhance our MVP and tackle the issues that our current MVP has which I mentioned in the _challenges_ section of this blog. 

## Skills 
### Acceptance 
My MVP for SEP10 was at a quite good stage. I was extremely satisfied with the result that I got with the MVP, since not only was it visually appleasing, but it was also heavily functional. Hence, for my MVP all I had to do is minor technical tweaks that most people won't notice. This year it's completely different, my MVP looks like straight up trash and there's so much to fix. 

And when I saw everyone else's MVP it felt like it was so much better than mine, and I felt terrible about myself because of that. I was ready to restart the whole thing, until a classmate of mine told me that a MVP is supposed to be the bare minimum of your project that would receive full credit even if it looks like straight trash. It's not like it was due now and I still had so many opportunities to revise it. After hearing this I felt much better about my MVP, knowing that it's normal for my project to look like this at this stage of the process. I was able to learn that **acceptance** is an important skill if you want to improve on something or yourself. 

### Time Management
I believe the reason why my MVP looks the way it does is because I procrastinated my whole project. We were given the whole Spring break to work on our MVP and I waited till the last day to work on it, which was a completely bad idea, which I do not recommend for anyone to do. Since I had such limited time to work on it, my whole MVP ended up being rushed which is why it looks the way it did. 

I was able to learn the hard way that procrastination does not get you anywhere, in fact it heavily detrimental to your process since you have less time to work on your project and its important details since you are more focused on getting it complete. During SEP10 I followed my timeline quite well, and was able to finish my MVP quite early, which allowed it to look quite polished without even getting to the beyond MVP parts. 

Therefore, I learned my lesson this year, which is to never procrastinate a year long process, especially the coding part of it. 

[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)


