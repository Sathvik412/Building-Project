//telling the computer the variabes
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10

function setup() {
  //creates the canvas 
  createCanvas(400, 400);
  //tells where and how to draw the bulidings
  b1=new Building();
  b1.position=1;
  b1.floors=26;
  
  b2=new Building();
  b2.position=2;
  b2.floors=24;
  
  b3=new Building();
  b3.position=3;
  b3.floors=30;
  
  b4=new Building();
  b4.position=4;
  b4.floors=21;

  b5=new Building();
  b5.position=5;
  b5.floors=24;
  
  b6=new Building();
  b6.position=6;
  b6.floors=12;
  
  b7=new Building();
  b7.position=7;
  b7.floors=13;
  
  b8=new Building();
  b8.position=8;
  b8.floors=5;

  b9=new Building();
  b9.position=9;
  b9.floors=15;
  
  b10=new Building();
  b10.position=0
  b10.floors=10

}
//draws all the buildings on the canvas
function draw() {
  background(0);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
}