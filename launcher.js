class launcher {
    constucture(body,anchor)
}

    var options={ bodyA:body,
        pointB:anchor,
        stiffness:0.004,
        lenght:1 

    }

    this.bodyA=body
    this.bodyB=anchor
    this.launcher=Constraint.create(options)
    World.add(world,this.launcher)

    attach(body){
        this.launchr.bodyA=body;
    }

    fly()
 {
     this.launcher.bodyA=null;
 }

  display()
  {
      var pointA=this.bodyA.position;
      var pointB=this.pointB
  }

   stokeWeight(2);
   line(pointA.x,pointA.y,pointB.x,pointB.y);

 
 

 