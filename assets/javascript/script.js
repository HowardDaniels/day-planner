var d = moment().format('LL');
$("#today").text(d);
var wd = moment().format('dddd');
$("#weekday").text(wd);
var t = moment().format('LTS');
$("#time").text(t);

/*
var h = parseInt(t.substring(0, Math.min(t.length, 2)));

alert(t);
alert(h);

if (h <= 9){
    document.getElementById("notes9").setAttribute("style", "background-color: lightgreen;");
    document.getElementById("nineam").setAttribute("style", "background-color: lightgreen;");
    
}

else if (h > 9){
    document.getElementById("notes9").setAttribute("style", "background-color: tan;");
    document.getElementById("nineam").setAttribute("style", "background-color: tan;");
    document.getElementById("notes10").setAttribute("style", "background-color: lightgreen;");
    document.getElementById("tenam").setAttribute("style", "background-color: lightgreen;");
}
/*

/*
document.querySelector('#nineam').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
        document.getElementById("notes9").setAttribute("style", "background-color: red;");
        document.getElementById("nineam").setAttribute("style", "background-color: red; font-weight: bold;");
  }
});

document.querySelector("#save9").addEventListener("click", function(){
    document.getElementById("notes9").setAttribute("style", "background-color: green;");
        document.getElementById("nineam").setAttribute("style", "background-color: green;");
});


document.querySelector('#tenam').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
        document.getElementById("notes10").setAttribute("style", "background-color: red;");
        document.getElementById("tenam").setAttribute("style", "background-color: red; font-weight: bold;");
  }
});

document.querySelector("#save10").addEventListener("click", function(){
    document.getElementById("notes10").setAttribute("style", "background-color: green;");
        document.getElementById("tenam").setAttribute("style", "background-color: green;");
});


document.querySelector('#elevenam').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
        document.getElementById("notes11").setAttribute("style", "background-color: red;");
        document.getElementById("elevenam").setAttribute("style", "background-color: red; font-weight: bold;");
  }
});

document.querySelector("#save11").addEventListener("click", function(){
    document.getElementById("notes11").setAttribute("style", "background-color: green;");
        document.getElementById("elevenam").setAttribute("style", "background-color: green;");
});


document.querySelector('#twelvepm').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
        document.getElementById("notes12").setAttribute("style", "background-color: red;");
        document.getElementById("twelvepm").setAttribute("style", "background-color: red; font-weight: bold;");
  }
});

document.querySelector("#save12").addEventListener("click", function(){
    document.getElementById("notes12").setAttribute("style", "background-color: green;");
        document.getElementById("twelvepm").setAttribute("style", "background-color: green;");
});


document.querySelector('#onepm').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
        document.getElementById("notes13").setAttribute("style", "background-color: red;");
        document.getElementById("onepm").setAttribute("style", "background-color: red; font-weight: bold;");
  }
});

document.querySelector("#save13").addEventListener("click", function(){
    document.getElementById("notes13").setAttribute("style", "background-color: green;");
        document.getElementById("onepm").setAttribute("style", "background-color: green;");
});


document.querySelector('#twopm').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
        document.getElementById("notes14").setAttribute("style", "background-color: red;");
        document.getElementById("twopm").setAttribute("style", "background-color: red; font-weight: bold;");
  }
});

document.querySelector("#save14").addEventListener("click", function(){
    document.getElementById("notes14").setAttribute("style", "background-color: green;");
        document.getElementById("twopm").setAttribute("style", "background-color: green;");
});


document.querySelector('#threepm').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
        document.getElementById("notes15").setAttribute("style", "background-color: red;");
        document.getElementById("threepm").setAttribute("style", "background-color: red; font-weight: bold;");
  }
});

document.querySelector("#save15").addEventListener("click", function(){
    document.getElementById("notes15").setAttribute("style", "background-color: green;");
        document.getElementById("threepm").setAttribute("style", "background-color: green;");
});


document.querySelector('#fourpm').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
        document.getElementById("notes16").setAttribute("style", "background-color: red;");
        document.getElementById("fourpm").setAttribute("style", "background-color: red; font-weight: bold;");
  }
});

document.querySelector("#save16").addEventListener("click", function(){
    document.getElementById("notes16").setAttribute("style", "background-color: green;");
        document.getElementById("fourpm").setAttribute("style", "background-color: green;");
});


document.querySelector('#fivepm').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
        document.getElementById("notes17").setAttribute("style", "background-color: red;");
        document.getElementById("fivepm").setAttribute("style", "background-color: red; font-weight: bold;");
  }
});

document.querySelector("#save17").addEventListener("click", function(){
    document.getElementById("notes17").setAttribute("style", "background-color: green;");
        document.getElementById("fivepm").setAttribute("style", "background-color: green;");
}); */