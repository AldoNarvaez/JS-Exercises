
class Shape { 
  constructor(pEdges){
    this.pEdges=pEdges;
    this.area;
    this.perimeter;
  }

 fnDisplay() {
    console.log("The figure has "+this.pEdges+" edges, area="+this.area+" and perimeter="+this.perimeter)
  };

}

class Square extends Shape {
  constructor(pEdges,size){
    super(pEdges);
    this.size=size;
  }

  Perimeter(){
    let p=this.size*this.pEdges
    this.perimeter=p
    return p;
  }

  Area(){
    let a=this.size*this.size;
    this.area=a
    return a;
  }
}

class EqTriangle extends Shape {
   constructor(pEdges,size){
    super(pEdges);
    this.size=size;
  }

  Perimeter(){
    let p=this.size*this.pEdges
    this.perimeter=p
    return p;
  }

  Area(){
    let a=this.size*Math.sqrt(3)*this.size/2;
    this.area=a
    return a;
  }

}

let square1=new Square(4,1);

console.log(square1.Perimeter())
console.log(square1.Area())
sq1.fnDisplay()

let triangle1=new EqTriangle(3,1);

console.log(triangle1.Perimeter())
console.log(triangle1.Area())
tr1.fnDisplay()