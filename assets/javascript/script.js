var d = moment().format('LL');
$("#today").text(d);
var wd = moment().format('dddd');
$("#weekday").text(wd);
var t = moment().format('LTS');
$("#time").text(t);

var t24 = moment().format();
var h = parseInt(t24.substring(11, Math.min(t24.length, 13)));

if ((h < 9) || (h > 17)){

}

else if (h == 9){
    document.getElementById("notes9").setAttribute("style", "background-color: lightgreen;");
    document.getElementById("nineam").setAttribute("style", "background-color: lightgreen;");
}

else if (h == 10){
    document.getElementById("notes9").setAttribute("style", "background-color: gray;");
    document.getElementById("nineam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes10").setAttribute("style", "background-color: lightgreen;");
    document.getElementById("tenam").setAttribute("style", "background-color: lightgreen;");
}

else if (h == 11){
    document.getElementById("notes9").setAttribute("style", "background-color: gray;");
    document.getElementById("nineam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes10").setAttribute("style", "background-color: gray;");
    document.getElementById("tenam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes11").setAttribute("style", "background-color: lightgreen;");
    document.getElementById("elevenam").setAttribute("style", "background-color: lightgreen;");
}

else if (h == 12){
    document.getElementById("notes9").setAttribute("style", "background-color: gray;");
    document.getElementById("nineam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes10").setAttribute("style", "background-color: gray;");
    document.getElementById("tenam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes11").setAttribute("style", "background-color: gray;");
    document.getElementById("elevenam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes12").setAttribute("style", "background-color: lightgreen;");
    document.getElementById("twelvepm").setAttribute("style", "background-color: lightgreen;");
}

else if (h == 13){
    document.getElementById("notes9").setAttribute("style", "background-color: gray;");
    document.getElementById("nineam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes10").setAttribute("style", "background-color: gray;");
    document.getElementById("tenam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes11").setAttribute("style", "background-color: gray;");
    document.getElementById("elevenam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes12").setAttribute("style", "background-color: gray;");
    document.getElementById("twelvepm").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes13").setAttribute("style", "background-color: lightgreen;");
    document.getElementById("onepm").setAttribute("style", "background-color: lightgreen;");
}

else if (h == 14){
    document.getElementById("notes9").setAttribute("style", "background-color: gray;");
    document.getElementById("nineam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes10").setAttribute("style", "background-color: gray;");
    document.getElementById("tenam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes11").setAttribute("style", "background-color: gray;");
    document.getElementById("elevenam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes12").setAttribute("style", "background-color: gray;");
    document.getElementById("twelvepm").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes13").setAttribute("style", "background-color: gray;");
    document.getElementById("onepm").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes14").setAttribute("style", "background-color: lightgreen;");
    document.getElementById("twopm").setAttribute("style", "background-color: lightgreen;");
}

else if (h == 15){
    document.getElementById("notes9").setAttribute("style", "background-color: gray;");
    document.getElementById("nineam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes10").setAttribute("style", "background-color: gray;");
    document.getElementById("tenam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes11").setAttribute("style", "background-color: gray;");
    document.getElementById("elevenam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes12").setAttribute("style", "background-color: gray;");
    document.getElementById("twelvepm").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes13").setAttribute("style", "background-color: gray;");
    document.getElementById("onepm").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes14").setAttribute("style", "background-color: gray;");
    document.getElementById("twopm").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes15").setAttribute("style", "background-color: lightgreen;");
    document.getElementById("threepm").setAttribute("style", "background-color: lightgreen;");
}

else if (h == 16){
    document.getElementById("notes9").setAttribute("style", "background-color: gray;");
    document.getElementById("nineam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes10").setAttribute("style", "background-color: gray;");
    document.getElementById("tenam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes11").setAttribute("style", "background-color: gray;");
    document.getElementById("elevenam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes12").setAttribute("style", "background-color: gray;");
    document.getElementById("twelvepm").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes13").setAttribute("style", "background-color: gray;");
    document.getElementById("onepm").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes14").setAttribute("style", "background-color: gray;");
    document.getElementById("twopm").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes15").setAttribute("style", "background-color: gray;");
    document.getElementById("threepm").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes16").setAttribute("style", "background-color: lightgreen;");
    document.getElementById("fourpm").setAttribute("style", "background-color: lightgreen;");
}

else if (h == 17){
    document.getElementById("notes9").setAttribute("style", "background-color: gray;");
    document.getElementById("nineam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes10").setAttribute("style", "background-color: gray;");
    document.getElementById("tenam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes11").setAttribute("style", "background-color: gray;");
    document.getElementById("elevenam").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes12").setAttribute("style", "background-color: gray;");
    document.getElementById("twelvepm").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes13").setAttribute("style", "background-color: gray;");
    document.getElementById("onepm").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes14").setAttribute("style", "background-color: gray;");
    document.getElementById("twopm").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes15").setAttribute("style", "background-color: gray;");
    document.getElementById("threepm").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes16").setAttribute("style", "background-color: gray;");
    document.getElementById("fourpm").setAttribute("style", "background-color: gray; color: white;");
    document.getElementById("notes17").setAttribute("style", "background-color: lightgreen;");
    document.getElementById("fivepm").setAttribute("style", "background-color: lightgreen;");
}

document.getElementById("nineam").value = localStorage.getItem("input9");

document.querySelector("#save9").addEventListener("click", function(){
    var input9 = document.getElementById("nineam").value;
    alert(input9);
    localStorage.setItem("input9", input9);
    savedevent9 = localStorage.getItem("input9");
    alert(savedevent9);
    input9 = savedevent9;
});

document.querySelector("#save10").addEventListener("click", function(){
    var input10 = document.getElementById("tenam").value;
    alert(input10);
});

document.querySelector("#save11").addEventListener("click", function(){
    var input11 = document.getElementById("elevenam").value;
    alert(input11);
});

document.querySelector("#save12").addEventListener("click", function(){
    var input12 = document.getElementById("twelvepm").value;
    alert(input12);
});

document.querySelector("#save13").addEventListener("click", function(){
    var input13 = document.getElementById("onepm").value;
    alert(input13);
});

document.querySelector("#save14").addEventListener("click", function(){
    var input14 = document.getElementById("twopm").value;
    alert(input14);
});

document.querySelector("#save15").addEventListener("click", function(){
    var input15 = document.getElementById("threepm").value;
    alert(input15);
});

document.querySelector("#save16").addEventListener("click", function(){
    var input16 = document.getElementById("fourpm").value;
    alert(input16);
});

document.querySelector("#save17").addEventListener("click", function(){
    var input17= document.getElementById("fivepm").value;
    alert(input17);
});


/*
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