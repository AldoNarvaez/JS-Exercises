const tree={"A":
			{"a":{"aa":{},"ab":{}},"b":{"ba":{},"bb":{}},"c":{"ca":{},"cb":{"cba":{}}}
			}}


const treeBranches=function (tree) {
    let init = [tree];
let branch = [];
let v=[]

while (init.length !== 0){
    for (i of init){
        t="";
        for (b in i){
            //console.log(b);
            v.push(b)

            if (i[b]!="undefined"){
                branch.push(i[b]);
            }

        }
        //console.log(branch)


    }
    init = branch;
    branch =[];   
}
return v;
}


console.log(treeBranches(tree))
