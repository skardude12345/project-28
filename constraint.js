class Constraint {

    constructor(body1, pointB){

    var options = {
        bodyA: body1, 
        pointB: pointB,

        length: 50,
        stiffness: 0.03
    }
    
    this.constraint = Matter.Constraint.create(options);
    World.add(world, this.constraint);
    this.pointB = pointB
    }
    


    display(){

      if (this.constraint.bodyA){
        
        var point1 = this.constraint.bodyA.position

        push();
         stroke(255);
         strokeWeight(3);
         line(point1.x, point1.y, this.pointB.x, this.pointB.y);   
        pop();

      }
    }



    release(){
      this.constraint.bodyA = null;
    }
    

    attach(body1){
      this.constraint.bodyA = body1;
  }


    }