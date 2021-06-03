

const HolidayMX=[["01/01","Año Nuevo"],["21/03","Natalicio de Benito Juarez"],["16/09","Dia de la independencia"],
["20/11","Revolicion Mexicana"],["25/12","Navidad"]];


const HolidayUS=[["01/01","New year"],["03/17","Saint Patrick's Day"],["06/04","Dia de la independencia"],
["11/25","Thanksgiving"],["12/25","Christmas"]];

function getDate(string) {
  if(/\w+\-\w+:/i.exec(string)[0]=="English-US:"){
  let NewDate=string.replace(/\w+\-\w+: (\d{1,2})\/(\d{1,2})\/(\d{4})/,"Spanish-MX: $2\/$1\/$3")
  let hol=/(\d{1,2})\/(\d{1,2})/.exec(NewDate)[0];
  for (var i = 0; i < HolidayMX.length; i++) {
  	if(HolidayMX[i].includes(hol)){
  		return (NewDate+" ("+HolidayMX[i][1]+")")
  	}
  }
  return  NewDate
	}
  else if(/\w+\-\w+:/i.exec(string)[0]=="Spanish-MX:"){
  let NewDate=string.replace(/\w+\-\w+: (\d{1,2})\/(\d{1,2})\/(\d{4})/,"English-US: $2\/$1\/$3")
  let hol=/(\d{1,2})\/(\d{1,2})/.exec(NewDate)[0];
  for (var i = 0; i < HolidayUS.length; i++) {
  	if(HolidayUS[i].includes(hol)){
  		return (NewDate+" ("+HolidayUS[i][1]+")")
  	}
  }
  return  NewDate
	}

}
console.log(getDate("English-US: 09/16/2003"));
console.log(getDate("Spanish-MX: 01/01/2003"));

console.log(getDate("English-US: 08/26/2003"));
console.log(getDate("Spanish-MX: 01/02/2003"));






