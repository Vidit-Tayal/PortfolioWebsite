import React from 'react'
import P5 from 'react-p5'
import "p5/lib/addons/p5.sound";


const Sketch = (p) => {
  function preload() {
    // song = loadSound(musics[idx].name);
    // img = loadImage(musics[idx].bgimg);
    
  }

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(400, 400).parent(canvasParentRef)
      }
      
      const draw = p5 => {
        p5.background(220);
        p5.circle(200, 200, 100);
      }
      
      return <P5 setup={setup} draw={draw} />
}

export default Sketch
