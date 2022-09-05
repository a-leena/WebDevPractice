function takeInput(n)
{
    var res = document.getElementById("textbox");
    var prev = document.getElementById("prev");
    if (n=="Cl") {
        prev.innerHTML = "";
        res.innerHTML = "";
    }
    else if (n=="bs") {
        if (prev.innerHTML.length!=0) {
            prev.innerHTML = "";
        }
        var str = res.innerHTML;
        var ar = str.split("");
        ar[ar.length-1] = '';
        res.innerHTML = ar.join("");
    }
    else if (n=="=") {
        prev.innerHTML = res.innerHTML.concat(" =");
        res.innerHTML = eval(document.getElementById("textbox").innerHTML);
    }
    else 
    {
        if (prev.innerHTML.length!=0) {
            prev.innerHTML = "";
            res.innerHTML = n;
        }
        else {
            var init = res.innerHTML;
            init = init.concat(n);
            res.innerHTML = init;  
        } 
    }
}


