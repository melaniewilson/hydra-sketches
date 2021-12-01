

//init p5
p5 = new P5({mode: 'WEBGL'})
p5.hide()

//init hydra canvas
s0.init({ src: p5.canvas } )

//test hydra if needed
osc(100, 0.2)
.out(o0)

//hydra
//repeat() will add more John's

src(s0)
  //.layer(s0)
  //.add(osc(100,0.2, 0))
  .add(src(s0).repeat(3,3))
  //.layer(src(o0).mask(shape(4.221, 3.785).scale(0.287, 0.559).scrollX(0.177)).scrollX(0.002))
  //.scrollX(0.02,0.02)
.out()

//load image, p5
let img2;

img2 = p5.loadImage(atom.project.getPaths()[0]+'/show-kinsventa/source/dad.png');

//p5
//orbitControl will follow the track scroll of your mouse

p5.draw = () => {
  //p5.orbitControl(20)
  p5.texture(img2);
  p5.background(0, 0, 0, 0);
  p5.rotateX(time * 0.15);
  p5.rotateY(time * 0.15);
  p5.box(280, 480);
  // p5.box(180, 180);
  // p5.box(180, 180);
}
