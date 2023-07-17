// Registering components 
AFRAME.registerComponent("move", {
  //same as moving the box in the X-direction in the previous class. 
  //Here the rocket is moving up. So Y direction.
  schema: {
    moveY: { type: "number", default: 1 },
  },

  tick: function () {
    var pos = this.el.getAttribute("position");
    this.data.moveY = this.data.moveY + 0.01;

    pos.y = this.data.moveY;

    this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
  },
});

AFRAME.registerComponent("camera-zoom-out", {
  schema: {
   // same as above- modify the code


  },

  tick: function () {
   // same as above- modify the code

   
  },
});

AFRAME.registerComponent("fall-down", {
  schema: {
    moveY: { type: "number", default: 0 },
  },
  tick: function () {

    

  }
});


