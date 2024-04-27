var input_date = document.createElement("input");
input_date.setAttribute("type","date");
input_date.id = "dob";

var button = document.createElement("button");
button.setAttribute("type","button");
button.className = "btn btn-primary";
button.innerHTML = "Click Me";
button.addEventListener("click",get_date)


var ele = document.createElement("div");
ele.className = "main"
ele.append(input_date,button);

var element = document.createElement("div");
element.innerHTML=""

document.body.append(ele);

function get_date(){
    var input = document.getElementById("dob").value;
    var timestamp = Date.parse(input);
    var inputdate = new Date(timestamp);
    console.log(`Input date is :${inputdate}`);
    var curentdate = new Date();
    console.log(`Current date is: ${curentdate}`);
    
    var millsecdiff = parseInt(curentdate.getTime()-inputdate.getTime());
    console.log(`Milliseconds Difference:${millsecdiff}`);
    var secondsdiff = Math.floor(millsecdiff/1000);
    console.log(`seconds Difference:${secondsdiff}`);
    var mindiff = Math.floor(secondsdiff/60);
    console.log(`Min Diff Difference:${mindiff}`);
    var hoursdiff = Math.floor(mindiff/60);
    console.log(`Hours Difference:${hoursdiff}`);
    var daydiff = Math.floor(hoursdiff/24);
    console.log(`Day Difference:${daydiff}`);
    var yeardiff = curentdate.getFullYear() - inputdate.getFullYear();
    console.log(`Year Difference:${yeardiff}`);
    var monthdiff = (yeardiff*12)+(curentdate.getMonth()-inputdate.getMonth());
    console.log(`Month Difference:${monthdiff}`);




    element.innerHTML=`
    Given input date is ${inputdate} <br>
    years ${yeardiff}<br>
    Month ${monthdiff} <br>
    Day ${daydiff} <br>
    Hours ${hoursdiff} <br>
    Min ${mindiff} <br>
    Seconds ${secondsdiff} <br>
    Milliseconds ${millsecdiff} <br>
    `

    document.body.append(element)
}