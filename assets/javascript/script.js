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
document.getElementById("tenam").value = localStorage.getItem("input10");
document.getElementById("elevenam").value = localStorage.getItem("input11");
document.getElementById("twelvepm").value = localStorage.getItem("input12");
document.getElementById("onepm").value = localStorage.getItem("input13");
document.getElementById("twopm").value = localStorage.getItem("input14");
document.getElementById("threepm").value = localStorage.getItem("input15");
document.getElementById("fourpm").value = localStorage.getItem("input16");
document.getElementById("fivepm").value = localStorage.getItem("input17");

document.querySelector("#save9").addEventListener("click", function(){
    var input9 = document.getElementById("nineam").value;
    localStorage.setItem("input9", input9);
    var savedevent9 = localStorage.getItem("input9");
    input9 = savedevent9;
});

document.querySelector("#save10").addEventListener("click", function(){
    var input10 = document.getElementById("tenam").value;
    localStorage.setItem("input10", input10);
    var savedevent10 = localStorage.getItem("input10");
    input10 = savedevent10;
});

document.querySelector("#save11").addEventListener("click", function(){
    var input11 = document.getElementById("elevenam").value;
    localStorage.setItem("input11", input11);
    var savedevent11 = localStorage.getItem("input11");
    input11 = savedevent11;
});

document.querySelector("#save12").addEventListener("click", function(){
    var input12 = document.getElementById("twelvepm").value;
    localStorage.setItem("input12", input12);
    var savedevent12 = localStorage.getItem("input12");
    input12 = savedevent12;
});

document.querySelector("#save13").addEventListener("click", function(){
    var input13 = document.getElementById("onepm").value;
    localStorage.setItem("input13", input13);
    var savedevent13 = localStorage.getItem("input13");
    input13 = savedevent13;
});

document.querySelector("#save14").addEventListener("click", function(){
    var input14 = document.getElementById("twopm").value;
    localStorage.setItem("input14", input14);
    var savedevent14 = localStorage.getItem("input14");
    input14 = savedevent14;
});

document.querySelector("#save15").addEventListener("click", function(){
    var input15 = document.getElementById("threepm").value;
    localStorage.setItem("input15", input15);
    var savedevent15 = localStorage.getItem("input15");
    input15 = savedevent15;
});

document.querySelector("#save16").addEventListener("click", function(){
    var input16 = document.getElementById("fourpm").value;
    localStorage.setItem("input16", input16);
    var savedevent16 = localStorage.getItem("input16");
    input16 = savedevent16;
});

document.querySelector("#save17").addEventListener("click", function(){
    var input17 = document.getElementById("fivepm").value;
    localStorage.setItem("input17", input17);
    var savedevent17 = localStorage.getItem("input17");
    input17 = savedevent17;
});