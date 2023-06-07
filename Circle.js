class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(rad){
        this.radius=rad;
    }
    getColor(){
        return this.color;
    }
    setColor(colo){
        this.color=colo;
    }
    getArea(){
        return `Area of the circle is ${(Math.PI*(this.radius*this.radius)).toFixed(2)}`;
    }
    getCircumference(){
        return `Circumference of the circle is ${(2*Math.PI*this.radius).toFixed(2)}`;
    }
}
let circl=new circle(1.0,"RED");
circl.setColor("black");
circl.setRadius(5);
console.log(circl.getRadius());
console.log(circl.getColor());
console.log(circl.getArea());
console.log(circl.getCircumference());