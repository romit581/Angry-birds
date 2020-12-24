class Bird extends BaseClass {
    constructor(x, y) {
      //Base class's constructor -> Bodies, world
      super(x, y, 50, 50)
      this.image = loadImage ("sprites/bird.png")
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      // Refers to Base Class's display function 
      super.display ();
    };
  };
  