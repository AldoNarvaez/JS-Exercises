<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">

<style type="text/css">



</style>

<body>
    <div id="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit yolo. Nunc laoreet ligula id turpis facilisis, eget finibus arcu cursus. Etiam quis dignissim ligula yolo. Donec consectetur, elit ut lobortis pharetra, elit libero lacinia augue, eu ornare leo ante et arcu. Vestibulum congue orci at yolo neque sagittis placerat.  yolo Curabitur feugiat dictum nulla. Sed lacinia neque nibh, at ultrices felis tempus id. Cras eleifend maximus ultrices yolo. 
    </div>

    <input type="text" id='word'> <button id='buttword'>write a word</button></div>

</body>
<script type="text/javascript">
    let par=document.getElementById("paragraph");
    const hashtag= function(){
        let word=document.getElementById("word").value;
        let input=word;
        let str="("+input+")";
        let text=par.innerHTML;
        let rep= /<(a).*?>#(.*?)<\/\1>(.*?)/gi;
        let b=text.replace(rep,"$2")
        let regex=new RegExp(str, "gi");
        let a= b.replace(regex, "<a href=\"x\">#$1</a>")
        par.innerHTML=a
    }

    button = document.getElementById("buttword");
    button.addEventListener("click", hashtag);
    
</script>
</html>
