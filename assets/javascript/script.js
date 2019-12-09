var d = moment().format('LL');
$("#today").text(d);
var wd = moment().format('dddd');
$("#weekday").text(wd);
var t = moment().format('LTS');
$("#time").text(t);

document.querySelector('#nineam').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
        document.getElementById("notes9").setAttribute("style", "background-color: red;");
        document.getElementById("nineam").setAttribute("style", "background-color: red; font-weight: bold;");
  }
});

document.querySelector("#save").addEventListener("click", function(){
    document.getElementById("notes9").setAttribute("style", "background-color: green;");
        document.getElementById("nineam").setAttribute("style", "background-color: green;");
});