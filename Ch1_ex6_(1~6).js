const tree={"A":
			{"a":{"aa":{},"ab":{}},"b":{"ba":{},"bb":{}},"c":{"ca":{},"cb":{"cba":{}}}
			}}

let init = [tree];
let branch = [];

while (init.length != 0){
    for (i of init){
        for (b in i){
            console.log(b);
            if (i[b]!="undefined"){
                branch.push(i[b]);
            }

        }
    }
    init = branch;
    branch =[];   
}