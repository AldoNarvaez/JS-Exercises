
class Shape { 
  constructor(pEdges, area, perimeter){
    this.pEdges=pEdges;
    this.area=area;
    this.perimeter=perimeter;
  }

}



class Square extends Shape {
  constructor(side){
    let area=side*side;
    let perimeter=lado*4;
    super(4,area,perimeter);
    
  }

}

class Rectangle extends Shape {
  constructor(side1,side2){
    let area=side1*side2;
    let perimeter=side1*2+side2*2;
    super(4,area,perimeter);
    
  }

}

class EquilateralTriangle extends Shape {
   constructor(side){
    let area= Math.sqrt(3)*lado/2;
    let perimeter=3*lado
    super(3,area,perimeter);
  }

}


class RectangleTriangle extends Shape {
  constructor(base,height){
    let area=base*height/2;
    let perimeter=base+height+Math.sqrt(base*base+height*height);
    super(4,area,perimeter);
    
  }

}

let square1=new Square(5);
console.log(square1)
let triangle1=new EquilateralTriangle(5);
console.log(triangle1)

let rect1=new Square(5);
console.log(rect2)
let triangle2=new RectangleTriangle(5);
console.log(triangle2)
