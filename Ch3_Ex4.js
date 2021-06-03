var data= new Array(1600);

for (let i=0; i<data.length; i++){
    data[i] = Math.random()
}

console.log(data[139])

const Image= function(data, width, height, name){
  this.width=width;
  this.height=height;
  this.name=name;
}

Image.prototype.pixelData = function(x,y) {
  let size=Math.floor(Math.sqrt(data.length));
  let point= ((y-1)*size+x)-1;
  return ("The color of the pixel in the position "+"("+x+","+y+") is "+ data[point]);

};

var img = new Image(data,40,40,"myImage");

console.log(img.pixelData(20,4));
console.log(data[139])