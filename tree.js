class tree
{
    constructor(x,y)
}
    this.x=x;
    this.y=y;
    this.dustbinWidth=450;
    this.dustbinHeight=600;
    this.wallThickness=10;
     
    this.image=loadImage("images/tree.png")
    this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.dustbinThickness)
    this.leftWallBody=Bodies.rectangle(0,this.y,this.dustbinWidth,this.dustbinThikness)
    this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight)

    World.add(world,this.bottomBody)
    World.add(world,this.rightWallbody)
    World.add(world,this.leftWallBody);

    {
        display()
    }
          var posBottom=this.bottomBody.position;
          push()
          translate(posBottom.x,posBottom.y+10);
          fill(225)
          imageMode(CENTER);
          image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight)
          pop()
  