const building = [{"floor1":[{room:1, type:"employee", name: "Bob"},
							{room:2, type:"user", name: "Ale"},
							{room:3, type:"employee", name:"Rex"}]},

{"floor2":[{room:1, type:"equipment", name:"computer"},
		{room:2, type:"user", name:"Susan"},
		{room: 3, type:"employee", name:"Karla"}]},

{"floor3":[{room:1, type:"user", name:"Hugo"},
		{room:2, type:"equipment", name:"electronics"},
		{room:3, type: "user", name:"Carl"}]}];



//console.log(building[0])
//console.log(Object.keys(building[0])[0])
//console.log(building[0]["floor1"][0]["Bob"])

	
function find(){

	var memory ={};
	function f(element){

		if (memory[element]!=undefined){
			return memory[element];
		}

		for (var i = 0; i < building.length; i++) {



			let key=Object.keys(building[i])[0]

			for (var j = 0; j < building[i][key].length; j++) {
				let room=building[i][key][j]
				if ( room["name"]==element){
			 		memory[element]={"room":room["room"],"floor":key}//[room["type"], element, key, room["room"]])
			 		return  memory[element]//{"floor": key, "room": room["room"]};

				}
			}	
		}

	}
	return f;
}

let s= find();

//console.log(s("computer"));
//console.log(s("Bob"));
console.log(s("computer"));
console.log(s("Karla"));

//Automatically invoked function Expressions

const find2 =(function(){

	var memory ={};
	function f(element){

		if (memory[element]!=undefined){
			return memory[element];
		}

		for (var i = 0; i < building.length; i++) {



			let key=Object.keys(building[i])[0]

			for (var j = 0; j < building[i][key].length; j++) {
				let room=building[i][key][j]
				if ( room["name"]==element){
			 		memory[element]={"room":room["room"],"floor":key}//[room["type"], element, key, room["room"]])
			 		return  memory[element]//{"floor": key, "room": room["room"]};

				}
			}	
		}

	}
	return f;
})();

let r=find2;
console.log(r("computer"));
console.log(r("Karla"));