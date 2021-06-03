const building = [{floor1:[{room:1, type:"employee", name: "Bob"},
{room:2, type:"user", name: "Ale"},{room:3, type:"employee", name:"Rex"}]},
{floor2:[{room:1, type:"equipment", name:"computer"},{room:2, type:"user", name:"Susan"},
{room: 3, type:"employee", name:"Karla"}]},{floor3:[{room:1, type:"user", name:"Hugo"},
{room:2, type:"equipment", name:"electronics"},{room:3, type: "user", name:"Carl"}]}];


var memory =[]


	
const find= function(element){
	for (var i = 0; i < memory.length; i++) {
		if(memory[i].includes(element)){
			return ("The "+memory[i][0]+" "+element+" is in "+ memory[i][2]+" and room "+memory[i][3]+" (Taken out of memory)");
		}
	}

	for (var i = 0; i < building.length; i++) {



		let key=Object.keys(building[i])[0]

		for (var j = 0; j < building[i][key].length; j++) {
			let room=building[i][key][j]
			if ( room["name"]==element){
			 	memory.push([room["type"], element, key, room["room"]])
			 	return("The "+room["type"]+" "+element+" is in "+ key+" and room "+room["room"]);

			}
		}	
	}
}

console.log(find("computer"))
console.log(find("Bob"))
console.log(find("computer"))
console.log(find("Bob"))
