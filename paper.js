class paper{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            restitution:0.2,
            friction:0.5,
            density:1.2
        }

    this.Bodies.circle(x, y, radius, options)
    this.radius = radius;
    World.add(world, this.body);
}
display(){
var pos =this.body.position;
var angle = this.body.angle;
push();
translate(pos.x, pos.y);
rotate(angle);
rectMode(CENTER);
strokeWeight(5);
stroke("green")
fill("green");
rect(0, 0, this.width, this.height);
pop();
}
};