var d = moment().format('LL');
$("#today").text(d);
var wd = moment().format('dddd');
$("#weekday").text(wd);
var t = moment().format('LTS');
$("#time").text(t);