# Presentation Plan

## Hook
* Our bodies are made up with 30-100 trillion of cells, today we are shrinking you down and observing 1 of the trillions of cells in your body

## Product
* 

## Process
* Unlike the traditional javascript that we learned this year, I had to learn a whole new set of javascript because of my tool three.js which uses 3D rendering,  a totally new concept that we have not touched up on in class
* It took me multiple months to conduct the research on how three.js worked, since I can’t start a project without understanding its concepts first
* In order to sum up months worth of research three.js can be described as a theater,
  * The stage is what is considered the scene.
    * The scene is where you code and embed all your objects into
  * The actors are the objects, such as the various shapes and details that you add into your project that, making something out of the blank scene or the empty theater
  * The audience is considered to your camera, that's the viewpoint the view has of the project
 * Like with anyone, it’s inevitable to face errors along the way, especially if you are new to something. Personally, the problem that I experienced was with the mesh of my model.
   * I personally didn’t like how there was too much lines, since in my head I imagined it to be vague coloring/lines so the organelles inside would be more visible
* The reason why my mesh appears like that is because of that incorrect line of code because it mixes the horizontal and vertical positions together instead of keeping them separate. This causes the marker’s left position to be calculated using both coordinates, which distorts where it should appear on the screen. As a result, the elements no longer align correctly with the 3D scene and appear shifted or skewed.
* The correct code fixes the issue because it keeps the horizontal and vertical (y) positions separate when converting 3D coordinates into screen positions. It uses the proper projection math so each marker is placed exactly where it should appear based on the camera view.    

## Conclusion
* Learning how to manage your time well is important, becuase the more effort you would be able to give. 

<!-- EXAMPLE

## Hook
* Verbal riddle of GGD

## Product
* GIF/Demo of example/non-example

## Process
* Flowchart of plan
  * MVP: noun -> door -> yes/no
  * Beyond MVP: noun -> word relation API -> noun API -> yes/no, with counterexample
* Code snippets of:
  * MVP
  * Both APIs
  * Challenge with API keys

## Conclusion
* [URL to project]
* Takeaways
  * Less = more: the heart of the riddle was one line of code; it obviously took more to make the entire thing work, but one complicated line of regular expressions was essentially the solution to the riddle
  * Expect the unexpected: it’s important to budget time for things you don’t account for; for example, I didn’t consider the fact that I would need another entire API to detect nouns
  * Determination is key: ironically enough, I had to make my API keys private. At first, it didn’t seem like it was possible, which meant I couldn’t publish my app. But after all of that hard work, I was determined to find a solution, and I found it in config variables.
* "Presentation can’t, but a speech can"


-->
