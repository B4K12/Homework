var b = document.getElementById("box1");

var p = document.createElement("p");
p.id = "msg";
var f = document.createElement("form");
f.name = "f1";
var r1 = document.createElement("input");
var r2 = document.createElement("input");
var r3 = document.createElement("input");
var bk1 = document.createElement("br");
var bk2 = document.createElement("br");

var n1 = document.createTextNode("Single");
var n2 = document.createTextNode("Married");
var n3 = document.createTextNode("Do Not Share");

r1.type = "radio";
r2.type = "radio";
r3.type = "radio";

r1.value = "Do You Marry Me?";
r2.value = "Get Out Now!";
r3.value = "OK I Know...<br>You have many Silent Boyfriends...";//Sorry My E Sill level 0%


r1.name = "rdo";
r2.name = "rdo";
r3.name = "rdo";

b.appendChild(p);
b.appendChild(f);

f.appendChild(n1);
f.appendChild(r1);
f.appendChild(bk1);

f.appendChild(n2);
f.appendChild(r2);
f.appendChild(bk2);

f.appendChild(n3);
f.appendChild(r3);

b.onchange = function() {
    var k = document.f1.rdo.value;
    document.getElementById("msg").innerHTML = k;
}