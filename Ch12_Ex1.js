<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>JS getAttribute() Demo</title>
</head>
<body>

    <div id=’a’ class=’square’ style=’display:inline-block’ val="something important"></div>

    <script>

    	const prinAttr= function(a) {
    	for (var i = 0; i < a.length; i++) {
    		let attr=document.querySelector("div");
    		console.log (attr.getAttribute(a[i]));

    	}

     	};

     	prinAttr(["id","class","style","val"])
        
    </script>
</body>
</html>