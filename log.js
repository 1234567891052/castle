class log{
  constructor(x, y, angle, height) {
    var options = {
        'restitution':0.1,
        'friction':300,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 70, height, options);
    this.width = 70;
    this.height = height;    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);

    rectMode(CENTER);
    
    fill("blue");
    rect(0, 0, this.width, this.height);
    pop();
  }
  }