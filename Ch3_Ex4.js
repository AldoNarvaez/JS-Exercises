var data= new Array(1600);

for (let i=0; i<data.length; i++){
    data[i] = Math.random()
}


const Image= function(data, width, height, name){
  this.width=width;
  this.height=height;
  this.name=name;
  if(this.width*this.height==data.length){
  	this.data=data;
  }
  else{
  	throw new Error("width and height values uncompatible");}
}

Image.prototype.pixelData = function(x,y) {
  
    if (y>this.height || x>this.width) {
      throw new Error("point out of range");
    }
    else{
    let point= y*this.width+x-1-this.width;
    return (data[point]);}
  
};

var img = new Image(data,40,40,"myImage");

console.log(img.pixelData(20,4));
console.log(data[139])