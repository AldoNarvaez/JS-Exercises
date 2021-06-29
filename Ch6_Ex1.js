
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
    let perimeter=side*4;
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
    let area= Math.sqrt(3)*side/2;
    let perimeter=3*side
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

let rect2=new Square(5);
console.log(rect2)
let triangle2=new RectangleTriangle(5);
console.log(triangle2)

class Vehicles{
  constructor(model,year,trips, isDriving=true, maintenance=false){
    this.model=model;
    this.year=year;
    this.maintenance=maintenance;
    this.trips=trips;
    this.isDriving=isDriving
  }
}

class Cars extends Vehicles{
  constructor(model,year,trips, isDriving){
    super(model,year, trips,isDriving)
  }

   Drive(){
    this.isDriving=true;
  }

   stop(){
    this.isDriving=false;
    this.trips=this.trips+1;
      if (this.trips>1000){
        this.maintenance=true;
      }
    
  }

  repair(){
    if (this.maintenance==true)
    {this.trips=0;
      this.maintenance=false;}
  }
}

let car1= new Cars("nissan","1999",10);
console.log(car1)
car1.stop()
console.log(car1)
car1.repair()
console.log(car1)
