var a = 130
var b = 131
var c = 132
var d = 133
var e = 134
var f = 135
var g = 136
var h = 137
var i = 138
var j = 139
var k = 140
var l = 141
var m = 142
var n = 143
var o = 144
var p = 145
var q = 146
var r = 147
var s = 148
var t = 149
var u = 150
var v = 151
var w = 152
var x = 153
var y = 154
var z = 155
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function start(){
    resetall()
    getallfromone();
    input1();
    input2();
    input3();
    input4();
    input5();
    input6();
    input7();
    input8();
    input9();
    input10();
    input11();
    input12();
    input13();
    input14();
    input15();
    input16();


}
function resetall(){

    document.getElementById("final1").innerHTML = "";
    document.getElementById("final2").innerHTML = "";
    document.getElementById("final3").innerHTML = "";
    document.getElementById("final4").innerHTML = "";
    document.getElementById("final5").innerHTML = "";
    document.getElementById("final6").innerHTML = "";
    document.getElementById("final7").innerHTML = "";
    document.getElementById("final8").innerHTML = "";
    document.getElementById("final9").innerHTML = "";
    document.getElementById("final10").innerHTML  = "";
    document.getElementById("final11").innerHTML  = "";
    document.getElementById("final12").innerHTML  = "";
    document.getElementById("final13").innerHTML  = "";
    document.getElementById("final14").innerHTML  = "";
    document.getElementById("final15").innerHTML  = "";
    document.getElementById("final16").innerHTML  = "";
}
function getallfromone(){
    var inputever = document.getElementById("allinoneinput");
    var input01 = inputever.value[0];
    var input02 = inputever.value[1];
    var input03 = inputever.value[2];
    var input04 = inputever.value[3];
    var input05 = inputever.value[4];
    var input06 = inputever.value[5];
    var input07 = inputever.value[6];
    var input08 = inputever.value[7];
    var input09 = inputever.value[8];
    var input010 = inputever.value[9];
    var input011 = inputever.value[10];
    var input012 = inputever.value[11];
    var input013 = inputever.value[12];
    var input014 = inputever.value[13];
    var input015 = inputever.value[14];
    var input016 = inputever.value[15];
    

    document.getElementById("input1").value = input01;
    document.getElementById("input2").value = input02;
    document.getElementById("input3").value = input03;
    document.getElementById("input4").value = input04;
    document.getElementById("input5").value = input05;
    document.getElementById("input6").value = input06;
    document.getElementById("input7").value = input07;
    document.getElementById("input8").value = input08;
    document.getElementById("input9").value = input09;
    document.getElementById("input10").value = input010;
    document.getElementById("input11").value = input011;
    document.getElementById("input12").value = input012;
    document.getElementById("input13").value = input013;
    document.getElementById("input14").value = input014;
    document.getElementById("input15").value = input015;
    document.getElementById("input16").value = input016;

}
function input1(){
    var inicial = document.getElementById("input1").value;
    var rep = -6
    if (inicial == "undefined"){
        return;
    }
    if (inicial == "a"){
        var valor1 = alfabeto[a + rep]

    }
    if (inicial == "b"){
        var valor1 = alfabeto[b + rep]

    }
    if (inicial == "c"){
        var valor1 = alfabeto[c + rep]
    }
    if (inicial == "d"){
        var valor1 = alfabeto[d + rep]

    }
    if (inicial == "e"){
        var valor1 = alfabeto[e + rep]
    }
    if (inicial == "f"){
        var valor1 = alfabeto[f + rep]
    }
    if (inicial == "g"){
        var valor1 = alfabeto[g + rep]
    }
    if (inicial == "h"){
        var valor1 = alfabeto[h + rep]
    }
    if (inicial == "i"){
        var valor1 = alfabeto[i + rep]
    }
    if (inicial == "j"){
        var valor1 = alfabeto[j + rep]
    }
    if (inicial == "k"){
        var valor1 = alfabeto[k + rep]
    }
    if (inicial == "l"){
        var valor1 = alfabeto[l + rep]
    }
    if (inicial == "m"){
        var valor1 = alfabeto[m + rep]
    }
    if (inicial == "n"){
        var valor1 = alfabeto[n + rep]
    }
    if (inicial == "o"){
        var valor1 = alfabeto[o + rep]
    }
    if (inicial == "p"){
        var valor1 = alfabeto[p + rep]
    }
    if (inicial == "q"){
        var valor1 = alfabeto[q + rep]
    }
    if (inicial == "r"){
        var valor1 = alfabeto[r + rep]
    }
    if (inicial == "s"){
        var valor1 = alfabeto[s + rep]
    }
    if (inicial == "t"){
        var valor1 = alfabeto[t + rep]
    }
    if (inicial == "u"){
        var valor1 = alfabeto[u + rep]
    }
    if (inicial == "v"){
        var valor1 = alfabeto[v + rep]
    }
    if (inicial == "w"){
        var valor1 = alfabeto[w + rep]
    }
    if (inicial == "x"){
        var valor1 = alfabeto[x + rep]
    }
    if (inicial == "y"){
        var valor1 = alfabeto[y + rep]
    }
    if (inicial == "z"){
        var valor1 = alfabeto[z + rep]
    }

    document.getElementById("final1").innerHTML = valor1;
}
function input2(){
    var inicial = document.getElementById("input2").value;
    var rep = -18
    if (inicial == "undefined" || inicial == ""){
        return;
    }
    if (inicial == "a"){
        var valor1 = alfabeto[a + rep]

    }
    if (inicial == "b"){
        var valor1 = alfabeto[b + rep]

    }
    if (inicial == "c"){
        var valor1 = alfabeto[c + rep]
    }
    if (inicial == "d"){
        var valor1 = alfabeto[d + rep]

    }
    if (inicial == "e"){
        var valor1 = alfabeto[e + rep]
    }
    if (inicial == "f"){
        var valor1 = alfabeto[f + rep]
    }
    if (inicial == "g"){
        var valor1 = alfabeto[g + rep]
    }
    if (inicial == "h"){
        var valor1 = alfabeto[h + rep]
    }
    if (inicial == "i"){
        var valor1 = alfabeto[i + rep]
    }
    if (inicial == "j"){
        var valor1 = alfabeto[j + rep]
    }
    if (inicial == "k"){
        var valor1 = alfabeto[k + rep]
    }
    if (inicial == "l"){
        var valor1 = alfabeto[l + rep]
    }
    if (inicial == "m"){
        var valor1 = alfabeto[m + rep]
    }
    if (inicial == "n"){
        var valor1 = alfabeto[n + rep]
    }
    if (inicial == "o"){
        var valor1 = alfabeto[o + rep]
    }
    if (inicial == "p"){
        var valor1 = alfabeto[p + rep]
    }
    if (inicial == "q"){
        var valor1 = alfabeto[q + rep]
    }
    if (inicial == "r"){
        var valor1 = alfabeto[r + rep]
    }
    if (inicial == "s"){
        var valor1 = alfabeto[s + rep]
    }
    if (inicial == "t"){
        var valor1 = alfabeto[t + rep]
    }
    if (inicial == "u"){
        var valor1 = alfabeto[u + rep]
    }
    if (inicial == "v"){
        var valor1 = alfabeto[v + rep]
    }
    if (inicial == "w"){
        var valor1 = alfabeto[w + rep]
    }
    if (inicial == "x"){
        var valor1 = alfabeto[x + rep]
    }
    if (inicial == "y"){
        var valor1 = alfabeto[y + rep]
    }
    if (inicial == "z"){
        var valor1 = alfabeto[z + rep]
    }

    document.getElementById("final2").innerHTML = valor1;
}
function input3(){
    var inicial = document.getElementById("input3").value;
    var rep = -9
    if (inicial == "undefined" || inicial == ""){
        return;
    }
    if (inicial == "a"){
        var valor1 = alfabeto[a + rep]

    }
    if (inicial == "b"){
        var valor1 = alfabeto[b + rep]

    }
    if (inicial == "c"){
        var valor1 = alfabeto[c + rep]
    }
    if (inicial == "d"){
        var valor1 = alfabeto[d + rep]

    }
    if (inicial == "e"){
        var valor1 = alfabeto[e + rep]
    }
    if (inicial == "f"){
        var valor1 = alfabeto[f + rep]
    }
    if (inicial == "g"){
        var valor1 = alfabeto[g + rep]
    }
    if (inicial == "h"){
        var valor1 = alfabeto[h + rep]
    }
    if (inicial == "i"){
        var valor1 = alfabeto[i + rep]
    }
    if (inicial == "j"){
        var valor1 = alfabeto[j + rep]
    }
    if (inicial == "k"){
        var valor1 = alfabeto[k + rep]
    }
    if (inicial == "l"){
        var valor1 = alfabeto[l + rep]
    }
    if (inicial == "m"){
        var valor1 = alfabeto[m + rep]
    }
    if (inicial == "n"){
        var valor1 = alfabeto[n + rep]
    }
    if (inicial == "o"){
        var valor1 = alfabeto[o + rep]
    }
    if (inicial == "p"){
        var valor1 = alfabeto[p + rep]
    }
    if (inicial == "q"){
        var valor1 = alfabeto[q + rep]
    }
    if (inicial == "r"){
        var valor1 = alfabeto[r + rep]
    }
    if (inicial == "s"){
        var valor1 = alfabeto[s + rep]
    }
    if (inicial == "t"){
        var valor1 = alfabeto[t + rep]
    }
    if (inicial == "u"){
        var valor1 = alfabeto[u + rep]
    }
    if (inicial == "v"){
        var valor1 = alfabeto[v + rep]
    }
    if (inicial == "w"){
        var valor1 = alfabeto[w + rep]
    }
    if (inicial == "x"){
        var valor1 = alfabeto[x + rep]
    }
    if (inicial == "y"){
        var valor1 = alfabeto[y + rep]
    }
    if (inicial == "z"){
        var valor1 = alfabeto[z + rep]
    }

    document.getElementById("final3").innerHTML = valor1;
}
function input4(){
    var inicial = document.getElementById("input4").value;
    var rep = -9
    if (inicial == "undefined" || inicial == ""){
        return;
    }
    if (inicial == "a"){
        var valor1 = alfabeto[a + rep]

    }
    if (inicial == "b"){
        var valor1 = alfabeto[b + rep]

    }
    if (inicial == "c"){
        var valor1 = alfabeto[c + rep]
    }
    if (inicial == "d"){
        var valor1 = alfabeto[d + rep]

    }
    if (inicial == "e"){
        var valor1 = alfabeto[e + rep]
    }
    if (inicial == "f"){
        var valor1 = alfabeto[f + rep]
    }
    if (inicial == "g"){
        var valor1 = alfabeto[g + rep]
    }
    if (inicial == "h"){
        var valor1 = alfabeto[h + rep]
    }
    if (inicial == "i"){
        var valor1 = alfabeto[i + rep]
    }
    if (inicial == "j"){
        var valor1 = alfabeto[j + rep]
    }
    if (inicial == "k"){
        var valor1 = alfabeto[k + rep]
    }
    if (inicial == "l"){
        var valor1 = alfabeto[l + rep]
    }
    if (inicial == "m"){
        var valor1 = alfabeto[m + rep]
    }
    if (inicial == "n"){
        var valor1 = alfabeto[n + rep]
    }
    if (inicial == "o"){
        var valor1 = alfabeto[o + rep]
    }
    if (inicial == "p"){
        var valor1 = alfabeto[p + rep]
    }
    if (inicial == "q"){
        var valor1 = alfabeto[q + rep]
    }
    if (inicial == "r"){
        var valor1 = alfabeto[r + rep]
    }
    if (inicial == "s"){
        var valor1 = alfabeto[s + rep]
    }
    if (inicial == "t"){
        var valor1 = alfabeto[t + rep]
    }
    if (inicial == "u"){
        var valor1 = alfabeto[u + rep]
    }
    if (inicial == "v"){
        var valor1 = alfabeto[v + rep]
    }
    if (inicial == "w"){
        var valor1 = alfabeto[w + rep]
    }
    if (inicial == "x"){
        var valor1 = alfabeto[x + rep]
    }
    if (inicial == "y"){
        var valor1 = alfabeto[y + rep]
    }
    if (inicial == "z"){
        var valor1 = alfabeto[z + rep]
    }

    document.getElementById("final4").innerHTML = valor1;
}
function input5(){
    var inicial = document.getElementById("input5").value;
    var rep = -12
    if (inicial == "undefined" || inicial == ""){
        return;
    }
    if (inicial == "a"){
        var valor1 = alfabeto[a + rep]

    }
    if (inicial == "b"){
        var valor1 = alfabeto[b + rep]

    }
    if (inicial == "c"){
        var valor1 = alfabeto[c + rep]
    }
    if (inicial == "d"){
        var valor1 = alfabeto[d + rep]

    }
    if (inicial == "e"){
        var valor1 = alfabeto[e + rep]
    }
    if (inicial == "f"){
        var valor1 = alfabeto[f + rep]
    }
    if (inicial == "g"){
        var valor1 = alfabeto[g + rep]
    }
    if (inicial == "h"){
        var valor1 = alfabeto[h + rep]
    }
    if (inicial == "i"){
        var valor1 = alfabeto[i + rep]
    }
    if (inicial == "j"){
        var valor1 = alfabeto[j + rep]
    }
    if (inicial == "k"){
        var valor1 = alfabeto[k + rep]
    }
    if (inicial == "l"){
        var valor1 = alfabeto[l + rep]
    }
    if (inicial == "m"){
        var valor1 = alfabeto[m + rep]
    }
    if (inicial == "n"){
        var valor1 = alfabeto[n + rep]
    }
    if (inicial == "o"){
        var valor1 = alfabeto[o + rep]
    }
    if (inicial == "p"){
        var valor1 = alfabeto[p + rep]
    }
    if (inicial == "q"){
        var valor1 = alfabeto[q + rep]
    }
    if (inicial == "r"){
        var valor1 = alfabeto[r + rep]
    }
    if (inicial == "s"){
        var valor1 = alfabeto[s + rep]
    }
    if (inicial == "t"){
        var valor1 = alfabeto[t + rep]
    }
    if (inicial == "u"){
        var valor1 = alfabeto[u + rep]
    }
    if (inicial == "v"){
        var valor1 = alfabeto[v + rep]
    }
    if (inicial == "w"){
        var valor1 = alfabeto[w + rep]
    }
    if (inicial == "x"){
        var valor1 = alfabeto[x + rep]
    }
    if (inicial == "y"){
        var valor1 = alfabeto[y + rep]
    }
    if (inicial == "z"){
        var valor1 = alfabeto[z + rep]
    }

    document.getElementById("final5").innerHTML = valor1;
}
function input6(){
    var inicial = document.getElementById("input6").value;
    var rep = -3
    if (inicial == "undefined" || inicial == ""){
        return;
    }
    if (inicial == "a"){
        var valor1 = alfabeto[a + rep]

    }
    if (inicial == "b"){
        var valor1 = alfabeto[b + rep]

    }
    if (inicial == "c"){
        var valor1 = alfabeto[c + rep]
    }
    if (inicial == "d"){
        var valor1 = alfabeto[d + rep]

    }
    if (inicial == "e"){
        var valor1 = alfabeto[e + rep]
    }
    if (inicial == "f"){
        var valor1 = alfabeto[f + rep]
    }
    if (inicial == "g"){
        var valor1 = alfabeto[g + rep]
    }
    if (inicial == "h"){
        var valor1 = alfabeto[h + rep]
    }
    if (inicial == "i"){
        var valor1 = alfabeto[i + rep]
    }
    if (inicial == "j"){
        var valor1 = alfabeto[j + rep]
    }
    if (inicial == "k"){
        var valor1 = alfabeto[k + rep]
    }
    if (inicial == "l"){
        var valor1 = alfabeto[l + rep]
    }
    if (inicial == "m"){
        var valor1 = alfabeto[m + rep]
    }
    if (inicial == "n"){
        var valor1 = alfabeto[n + rep]
    }
    if (inicial == "o"){
        var valor1 = alfabeto[o + rep]
    }
    if (inicial == "p"){
        var valor1 = alfabeto[p + rep]
    }
    if (inicial == "q"){
        var valor1 = alfabeto[q + rep]
    }
    if (inicial == "r"){
        var valor1 = alfabeto[r + rep]
    }
    if (inicial == "s"){
        var valor1 = alfabeto[s + rep]
    }
    if (inicial == "t"){
        var valor1 = alfabeto[t + rep]
    }
    if (inicial == "u"){
        var valor1 = alfabeto[u + rep]
    }
    if (inicial == "v"){
        var valor1 = alfabeto[v + rep]
    }
    if (inicial == "w"){
        var valor1 = alfabeto[w + rep]
    }
    if (inicial == "x"){
        var valor1 = alfabeto[x + rep]
    }
    if (inicial == "y"){
        var valor1 = alfabeto[y + rep]
    }
    if (inicial == "z"){
        var valor1 = alfabeto[z + rep]
    }

    document.getElementById("final6").innerHTML = valor1;
}
function input7(){
    var inicial = document.getElementById("input7").value;
    var rep = -1
    if (inicial == "undefined" || inicial == ""){
        return;
    }
    if (inicial == "a"){
        var valor1 = alfabeto[a + rep]

    }
    if (inicial == "b"){
        var valor1 = alfabeto[b + rep]

    }
    if (inicial == "c"){
        var valor1 = alfabeto[c + rep]
    }
    if (inicial == "d"){
        var valor1 = alfabeto[d + rep]

    }
    if (inicial == "e"){
        var valor1 = alfabeto[e + rep]
    }
    if (inicial == "f"){
        var valor1 = alfabeto[f + rep]
    }
    if (inicial == "g"){
        var valor1 = alfabeto[g + rep]
    }
    if (inicial == "h"){
        var valor1 = alfabeto[h + rep]
    }
    if (inicial == "i"){
        var valor1 = alfabeto[i + rep]
    }
    if (inicial == "j"){
        var valor1 = alfabeto[j + rep]
    }
    if (inicial == "k"){
        var valor1 = alfabeto[k + rep]
    }
    if (inicial == "l"){
        var valor1 = alfabeto[l + rep]
    }
    if (inicial == "m"){
        var valor1 = alfabeto[m + rep]
    }
    if (inicial == "n"){
        var valor1 = alfabeto[n + rep]
    }
    if (inicial == "o"){
        var valor1 = alfabeto[o + rep]
    }
    if (inicial == "p"){
        var valor1 = alfabeto[p + rep]
    }
    if (inicial == "q"){
        var valor1 = alfabeto[q + rep]
    }
    if (inicial == "r"){
        var valor1 = alfabeto[r + rep]
    }
    if (inicial == "s"){
        var valor1 = alfabeto[s + rep]
    }
    if (inicial == "t"){
        var valor1 = alfabeto[t + rep]
    }
    if (inicial == "u"){
        var valor1 = alfabeto[u + rep]
    }
    if (inicial == "v"){
        var valor1 = alfabeto[v + rep]
    }
    if (inicial == "w"){
        var valor1 = alfabeto[w + rep]
    }
    if (inicial == "x"){
        var valor1 = alfabeto[x + rep]
    }
    if (inicial == "y"){
        var valor1 = alfabeto[y + rep]
    }
    if (inicial == "z"){
        var valor1 = alfabeto[z + rep]
    }

    document.getElementById("final7").innerHTML = valor1;
}
function input8(){
    var inicial = document.getElementById("input8").value;
    var rep = -9
    if (inicial == "undefined" || inicial == ""){
        return;
    }
    if (inicial == "a"){
        var valor1 = alfabeto[a + rep]

    }
    if (inicial == "b"){
        var valor1 = alfabeto[b + rep]

    }
    if (inicial == "c"){
        var valor1 = alfabeto[c + rep]
    }
    if (inicial == "d"){
        var valor1 = alfabeto[d + rep]

    }
    if (inicial == "e"){
        var valor1 = alfabeto[e + rep]
    }
    if (inicial == "f"){
        var valor1 = alfabeto[f + rep]
    }
    if (inicial == "g"){
        var valor1 = alfabeto[g + rep]
    }
    if (inicial == "h"){
        var valor1 = alfabeto[h + rep]
    }
    if (inicial == "i"){
        var valor1 = alfabeto[i + rep]
    }
    if (inicial == "j"){
        var valor1 = alfabeto[j + rep]
    }
    if (inicial == "k"){
        var valor1 = alfabeto[k + rep]
    }
    if (inicial == "l"){
        var valor1 = alfabeto[l + rep]
    }
    if (inicial == "m"){
        var valor1 = alfabeto[m + rep]
    }
    if (inicial == "n"){
        var valor1 = alfabeto[n + rep]
    }
    if (inicial == "o"){
        var valor1 = alfabeto[o + rep]
    }
    if (inicial == "p"){
        var valor1 = alfabeto[p + rep]
    }
    if (inicial == "q"){
        var valor1 = alfabeto[q + rep]
    }
    if (inicial == "r"){
        var valor1 = alfabeto[r + rep]
    }
    if (inicial == "s"){
        var valor1 = alfabeto[s + rep]
    }
    if (inicial == "t"){
        var valor1 = alfabeto[t + rep]
    }
    if (inicial == "u"){
        var valor1 = alfabeto[u + rep]
    }
    if (inicial == "v"){
        var valor1 = alfabeto[v + rep]
    }
    if (inicial == "w"){
        var valor1 = alfabeto[w + rep]
    }
    if (inicial == "x"){
        var valor1 = alfabeto[x + rep]
    }
    if (inicial == "y"){
        var valor1 = alfabeto[y + rep]
    }
    if (inicial == "z"){
        var valor1 = alfabeto[z + rep]
    }

    document.getElementById("final8").innerHTML = valor1;
}
function input9(){
    var inicial = document.getElementById("input9").value;
    var rep = -8
    if (inicial == "undefined" || inicial == ""){
        return;
    }
    if (inicial == "a"){
        var valor1 = alfabeto[a + rep]

    }
    if (inicial == "b"){
        var valor1 = alfabeto[b + rep]

    }
    if (inicial == "c"){
        var valor1 = alfabeto[c + rep]
    }
    if (inicial == "d"){
        var valor1 = alfabeto[d + rep]

    }
    if (inicial == "e"){
        var valor1 = alfabeto[e + rep]
    }
    if (inicial == "f"){
        var valor1 = alfabeto[f + rep]
    }
    if (inicial == "g"){
        var valor1 = alfabeto[g + rep]
    }
    if (inicial == "h"){
        var valor1 = alfabeto[h + rep]
    }
    if (inicial == "i"){
        var valor1 = alfabeto[i + rep]
    }
    if (inicial == "j"){
        var valor1 = alfabeto[j + rep]
    }
    if (inicial == "k"){
        var valor1 = alfabeto[k + rep]
    }
    if (inicial == "l"){
        var valor1 = alfabeto[l + rep]
    }
    if (inicial == "m"){
        var valor1 = alfabeto[m + rep]
    }
    if (inicial == "n"){
        var valor1 = alfabeto[n + rep]
    }
    if (inicial == "o"){
        var valor1 = alfabeto[o + rep]
    }
    if (inicial == "p"){
        var valor1 = alfabeto[p + rep]
    }
    if (inicial == "q"){
        var valor1 = alfabeto[q + rep]
    }
    if (inicial == "r"){
        var valor1 = alfabeto[r + rep]
    }
    if (inicial == "s"){
        var valor1 = alfabeto[s + rep]
    }
    if (inicial == "t"){
        var valor1 = alfabeto[t + rep]
    }
    if (inicial == "u"){
        var valor1 = alfabeto[u + rep]
    }
    if (inicial == "v"){
        var valor1 = alfabeto[v + rep]
    }
    if (inicial == "w"){
        var valor1 = alfabeto[w + rep]
    }
    if (inicial == "x"){
        var valor1 = alfabeto[x + rep]
    }
    if (inicial == "y"){
        var valor1 = alfabeto[y + rep]
    }
    if (inicial == "z"){
        var valor1 = alfabeto[z + rep]
    }

    document.getElementById("final9").innerHTML = valor1;
}
function input10(){
    var inicial = document.getElementById("input10").value;
    var rep = -11
    if (inicial == "undefined" || inicial == ""){
        return;
    }
    if (inicial == "a"){
        var valor1 = alfabeto[a + rep]

    }
    if (inicial == "b"){
        var valor1 = alfabeto[b + rep]

    }
    if (inicial == "c"){
        var valor1 = alfabeto[c + rep]
    }
    if (inicial == "d"){
        var valor1 = alfabeto[d + rep]

    }
    if (inicial == "e"){
        var valor1 = alfabeto[e + rep]
    }
    if (inicial == "f"){
        var valor1 = alfabeto[f + rep]
    }
    if (inicial == "g"){
        var valor1 = alfabeto[g + rep]
    }
    if (inicial == "h"){
        var valor1 = alfabeto[h + rep]
    }
    if (inicial == "i"){
        var valor1 = alfabeto[i + rep]
    }
    if (inicial == "j"){
        var valor1 = alfabeto[j + rep]
    }
    if (inicial == "k"){
        var valor1 = alfabeto[k + rep]
    }
    if (inicial == "l"){
        var valor1 = alfabeto[l + rep]
    }
    if (inicial == "m"){
        var valor1 = alfabeto[m + rep]
    }
    if (inicial == "n"){
        var valor1 = alfabeto[n + rep]
    }
    if (inicial == "o"){
        var valor1 = alfabeto[o + rep]
    }
    if (inicial == "p"){
        var valor1 = alfabeto[p + rep]
    }
    if (inicial == "q"){
        var valor1 = alfabeto[q + rep]
    }
    if (inicial == "r"){
        var valor1 = alfabeto[r + rep]
    }
    if (inicial == "s"){
        var valor1 = alfabeto[s + rep]
    }
    if (inicial == "t"){
        var valor1 = alfabeto[t + rep]
    }
    if (inicial == "u"){
        var valor1 = alfabeto[u + rep]
    }
    if (inicial == "v"){
        var valor1 = alfabeto[v + rep]
    }
    if (inicial == "w"){
        var valor1 = alfabeto[w + rep]
    }
    if (inicial == "x"){
        var valor1 = alfabeto[x + rep]
    }
    if (inicial == "y"){
        var valor1 = alfabeto[y + rep]
    }
    if (inicial == "z"){
        var valor1 = alfabeto[z + rep]
    }

    document.getElementById("final10").innerHTML = valor1;
}
function input11(){
    var inicial = document.getElementById("input11").value;
    var rep = -16
    if (inicial == "undefined" || inicial == ""){
        return;
    }
    if (inicial == "a"){
        var valor1 = alfabeto[a + rep]

    }
    if (inicial == "b"){
        var valor1 = alfabeto[b + rep]

    }
    if (inicial == "c"){
        var valor1 = alfabeto[c + rep]
    }
    if (inicial == "d"){
        var valor1 = alfabeto[d + rep]

    }
    if (inicial == "e"){
        var valor1 = alfabeto[e + rep]
    }
    if (inicial == "f"){
        var valor1 = alfabeto[f + rep]
    }
    if (inicial == "g"){
        var valor1 = alfabeto[g + rep]
    }
    if (inicial == "h"){
        var valor1 = alfabeto[h + rep]
    }
    if (inicial == "i"){
        var valor1 = alfabeto[i + rep]
    }
    if (inicial == "j"){
        var valor1 = alfabeto[j + rep]
    }
    if (inicial == "k"){
        var valor1 = alfabeto[k + rep]
    }
    if (inicial == "l"){
        var valor1 = alfabeto[l + rep]
    }
    if (inicial == "m"){
        var valor1 = alfabeto[m + rep]
    }
    if (inicial == "n"){
        var valor1 = alfabeto[n + rep]
    }
    if (inicial == "o"){
        var valor1 = alfabeto[o + rep]
    }
    if (inicial == "p"){
        var valor1 = alfabeto[p + rep]
    }
    if (inicial == "q"){
        var valor1 = alfabeto[q + rep]
    }
    if (inicial == "r"){
        var valor1 = alfabeto[r + rep]
    }
    if (inicial == "s"){
        var valor1 = alfabeto[s + rep]
    }
    if (inicial == "t"){
        var valor1 = alfabeto[t + rep]
    }
    if (inicial == "u"){
        var valor1 = alfabeto[u + rep]
    }
    if (inicial == "v"){
        var valor1 = alfabeto[v + rep]
    }
    if (inicial == "w"){
        var valor1 = alfabeto[w + rep]
    }
    if (inicial == "x"){
        var valor1 = alfabeto[x + rep]
    }
    if (inicial == "y"){
        var valor1 = alfabeto[y + rep]
    }
    if (inicial == "z"){
        var valor1 = alfabeto[z + rep]
    }

    document.getElementById("final11").innerHTML = valor1;
}
function input12(){
    var inicial = document.getElementById("input12").value;
    var rep = -10
    if (inicial == "undefined" || inicial == ""){
        return;
    }
    if (inicial == "a"){
        var valor1 = alfabeto[a + rep]

    }
    if (inicial == "b"){
        var valor1 = alfabeto[b + rep]

    }
    if (inicial == "c"){
        var valor1 = alfabeto[c + rep]
    }
    if (inicial == "d"){
        var valor1 = alfabeto[d + rep]

    }
    if (inicial == "e"){
        var valor1 = alfabeto[e + rep]
    }
    if (inicial == "f"){
        var valor1 = alfabeto[f + rep]
    }
    if (inicial == "g"){
        var valor1 = alfabeto[g + rep]
    }
    if (inicial == "h"){
        var valor1 = alfabeto[h + rep]
    }
    if (inicial == "i"){
        var valor1 = alfabeto[i + rep]
    }
    if (inicial == "j"){
        var valor1 = alfabeto[j + rep]
    }
    if (inicial == "k"){
        var valor1 = alfabeto[k + rep]
    }
    if (inicial == "l"){
        var valor1 = alfabeto[l + rep]
    }
    if (inicial == "m"){
        var valor1 = alfabeto[m + rep]
    }
    if (inicial == "n"){
        var valor1 = alfabeto[n + rep]
    }
    if (inicial == "o"){
        var valor1 = alfabeto[o + rep]
    }
    if (inicial == "p"){
        var valor1 = alfabeto[p + rep]
    }
    if (inicial == "q"){
        var valor1 = alfabeto[q + rep]
    }
    if (inicial == "r"){
        var valor1 = alfabeto[r + rep]
    }
    if (inicial == "s"){
        var valor1 = alfabeto[s + rep]
    }
    if (inicial == "t"){
        var valor1 = alfabeto[t + rep]
    }
    if (inicial == "u"){
        var valor1 = alfabeto[u + rep]
    }
    if (inicial == "v"){
        var valor1 = alfabeto[v + rep]
    }
    if (inicial == "w"){
        var valor1 = alfabeto[w + rep]
    }
    if (inicial == "x"){
        var valor1 = alfabeto[x + rep]
    }
    if (inicial == "y"){
        var valor1 = alfabeto[y + rep]
    }
    if (inicial == "z"){
        var valor1 = alfabeto[z + rep]
    }

    document.getElementById("final12").innerHTML = valor1;
}
function input13(){
    var inicial = document.getElementById("input13").value;
    var rep = -20
    if (inicial == "undefined" || inicial == ""){
        return;
    }
    if (inicial == "a"){
        var valor1 = alfabeto[a + rep]

    }
    if (inicial == "b"){
        var valor1 = alfabeto[b + rep]

    }
    if (inicial == "c"){
        var valor1 = alfabeto[c + rep]
    }
    if (inicial == "d"){
        var valor1 = alfabeto[d + rep]

    }
    if (inicial == "e"){
        var valor1 = alfabeto[e + rep]
    }
    if (inicial == "f"){
        var valor1 = alfabeto[f + rep]
    }
    if (inicial == "g"){
        var valor1 = alfabeto[g + rep]
    }
    if (inicial == "h"){
        var valor1 = alfabeto[h + rep]
    }
    if (inicial == "i"){
        var valor1 = alfabeto[i + rep]
    }
    if (inicial == "j"){
        var valor1 = alfabeto[j + rep]
    }
    if (inicial == "k"){
        var valor1 = alfabeto[k + rep]
    }
    if (inicial == "l"){
        var valor1 = alfabeto[l + rep]
    }
    if (inicial == "m"){
        var valor1 = alfabeto[m + rep]
    }
    if (inicial == "n"){
        var valor1 = alfabeto[n + rep]
    }
    if (inicial == "o"){
        var valor1 = alfabeto[o + rep]
    }
    if (inicial == "p"){
        var valor1 = alfabeto[p + rep]
    }
    if (inicial == "q"){
        var valor1 = alfabeto[q + rep]
    }
    if (inicial == "r"){
        var valor1 = alfabeto[r + rep]
    }
    if (inicial == "s"){
        var valor1 = alfabeto[s + rep]
    }
    if (inicial == "t"){
        var valor1 = alfabeto[t + rep]
    }
    if (inicial == "u"){
        var valor1 = alfabeto[u + rep]
    }
    if (inicial == "v"){
        var valor1 = alfabeto[v + rep]
    }
    if (inicial == "w"){
        var valor1 = alfabeto[w + rep]
    }
    if (inicial == "x"){
        var valor1 = alfabeto[x + rep]
    }
    if (inicial == "y"){
        var valor1 = alfabeto[y + rep]
    }
    if (inicial == "z"){
        var valor1 = alfabeto[z + rep]
    }

    document.getElementById("final13").innerHTML = valor1;
}
function input14(){
    var inicial = document.getElementById("input14").value;
    var rep = -19
    if (inicial == "undefined" || inicial == ""){
        return;
    }
    if (inicial == "a"){
        var valor1 = alfabeto[a + rep]

    }
    if (inicial == "b"){
        var valor1 = alfabeto[b + rep]

    }
    if (inicial == "c"){
        var valor1 = alfabeto[c + rep]
    }
    if (inicial == "d"){
        var valor1 = alfabeto[d + rep]

    }
    if (inicial == "e"){
        var valor1 = alfabeto[e + rep]
    }
    if (inicial == "f"){
        var valor1 = alfabeto[f + rep]
    }
    if (inicial == "g"){
        var valor1 = alfabeto[g + rep]
    }
    if (inicial == "h"){
        var valor1 = alfabeto[h + rep]
    }
    if (inicial == "i"){
        var valor1 = alfabeto[i + rep]
    }
    if (inicial == "j"){
        var valor1 = alfabeto[j + rep]
    }
    if (inicial == "k"){
        var valor1 = alfabeto[k + rep]
    }
    if (inicial == "l"){
        var valor1 = alfabeto[l + rep]
    }
    if (inicial == "m"){
        var valor1 = alfabeto[m + rep]
    }
    if (inicial == "n"){
        var valor1 = alfabeto[n + rep]
    }
    if (inicial == "o"){
        var valor1 = alfabeto[o + rep]
    }
    if (inicial == "p"){
        var valor1 = alfabeto[p + rep]
    }
    if (inicial == "q"){
        var valor1 = alfabeto[q + rep]
    }
    if (inicial == "r"){
        var valor1 = alfabeto[r + rep]
    }
    if (inicial == "s"){
        var valor1 = alfabeto[s + rep]
    }
    if (inicial == "t"){
        var valor1 = alfabeto[t + rep]
    }
    if (inicial == "u"){
        var valor1 = alfabeto[u + rep]
    }
    if (inicial == "v"){
        var valor1 = alfabeto[v + rep]
    }
    if (inicial == "w"){
        var valor1 = alfabeto[w + rep]
    }
    if (inicial == "x"){
        var valor1 = alfabeto[x + rep]
    }
    if (inicial == "y"){
        var valor1 = alfabeto[y + rep]
    }
    if (inicial == "z"){
        var valor1 = alfabeto[z + rep]
    }

    document.getElementById("final14").innerHTML = valor1;
}
function input15(){
    var inicial = document.getElementById("input15").value;
    var rep = -4

    if (inicial == "undefined" || inicial == ""){
        return;
    }
    if (inicial == "a"){
        var valor1 = alfabeto[a + rep]

    }
    if (inicial == "b"){
        var valor1 = alfabeto[b + rep]

    }
    if (inicial == "c"){
        var valor1 = alfabeto[c + rep]
    }
    if (inicial == "d"){
        var valor1 = alfabeto[d + rep]

    }
    if (inicial == "e"){
        var valor1 = alfabeto[e + rep]
    }
    if (inicial == "f"){
        var valor1 = alfabeto[f + rep]
    }
    if (inicial == "g"){
        var valor1 = alfabeto[g + rep]
    }
    if (inicial == "h"){
        var valor1 = alfabeto[h + rep]
    }
    if (inicial == "i"){
        var valor1 = alfabeto[i + rep]
    }
    if (inicial == "j"){
        var valor1 = alfabeto[j + rep]
    }
    if (inicial == "k"){
        var valor1 = alfabeto[k + rep]
    }
    if (inicial == "l"){
        var valor1 = alfabeto[l + rep]
    }
    if (inicial == "m"){
        var valor1 = alfabeto[m + rep]
    }
    if (inicial == "n"){
        var valor1 = alfabeto[n + rep]
    }
    if (inicial == "o"){
        var valor1 = alfabeto[o + rep]
    }
    if (inicial == "p"){
        var valor1 = alfabeto[p + rep]
    }
    if (inicial == "q"){
        var valor1 = alfabeto[q + rep]
    }
    if (inicial == "r"){
        var valor1 = alfabeto[r + rep]
    }
    if (inicial == "s"){
        var valor1 = alfabeto[s + rep]
    }
    if (inicial == "t"){
        var valor1 = alfabeto[t + rep]
    }
    if (inicial == "u"){
        var valor1 = alfabeto[u + rep]
    }
    if (inicial == "v"){
        var valor1 = alfabeto[v + rep]
    }
    if (inicial == "w"){
        var valor1 = alfabeto[w + rep]
    }
    if (inicial == "x"){
        var valor1 = alfabeto[x + rep]
    }
    if (inicial == "y"){
        var valor1 = alfabeto[y + rep]
    }
    if (inicial == "z"){
        var valor1 = alfabeto[z + rep]
    }

    document.getElementById("final15").innerHTML = valor1;
}
function input16(){
    var inicial = document.getElementById("input16").value;
    var rep = -12

    if (inicial == "undefined" || inicial == ""){
        return;
    }
    if (inicial == "a"){
        var valor1 = alfabeto[a + rep]

    }
    if (inicial == "b"){
        var valor1 = alfabeto[b + rep]

    }
    if (inicial == "c"){
        var valor1 = alfabeto[c + rep]
    }
    if (inicial == "d"){
        var valor1 = alfabeto[d + rep]

    }
    if (inicial == "e"){
        var valor1 = alfabeto[e + rep]
    }
    if (inicial == "f"){
        var valor1 = alfabeto[f + rep]
    }
    if (inicial == "g"){
        var valor1 = alfabeto[g + rep]
    }
    if (inicial == "h"){
        var valor1 = alfabeto[h + rep]
    }
    if (inicial == "i"){
        var valor1 = alfabeto[i + rep]
    }
    if (inicial == "j"){
        var valor1 = alfabeto[j + rep]
    }
    if (inicial == "k"){
        var valor1 = alfabeto[k + rep]
    }
    if (inicial == "l"){
        var valor1 = alfabeto[l + rep]
    }
    if (inicial == "m"){
        var valor1 = alfabeto[m + rep]
    }
    if (inicial == "n"){
        var valor1 = alfabeto[n + rep]
    }
    if (inicial == "o"){
        var valor1 = alfabeto[o + rep]
    }
    if (inicial == "p"){
        var valor1 = alfabeto[p + rep]
    }
    if (inicial == "q"){
        var valor1 = alfabeto[q + rep]
    }
    if (inicial == "r"){
        var valor1 = alfabeto[r + rep]
    }
    if (inicial == "s"){
        var valor1 = alfabeto[s + rep]
    }
    if (inicial == "t"){
        var valor1 = alfabeto[t + rep]
    }
    if (inicial == "u"){
        var valor1 = alfabeto[u + rep]
    }
    if (inicial == "v"){
        var valor1 = alfabeto[v + rep]
    }
    if (inicial == "w"){
        var valor1 = alfabeto[w + rep]
    }
    if (inicial == "x"){
        var valor1 = alfabeto[x + rep]
    }
    if (inicial == "y"){
        var valor1 = alfabeto[y + rep]
    }
    if (inicial == "z"){
        var valor1 = alfabeto[z + rep]
    }

    document.getElementById("final16").innerHTML = valor1;
}


function allinone(){
var inputesp1 =      document.getElementById("final1").textContent;
var inputesp2 =      document.getElementById("final2").textContent;
var inputesp3 =      document.getElementById("final3").textContent;
var inputesp4 =      document.getElementById("final4").textContent;
var inputesp5 =      document.getElementById("final5").textContent;
var inputesp6 =      document.getElementById("final6").textContent;
var inputesp7 =      document.getElementById("final7").textContent;
var inputesp8 =      document.getElementById("final8").textContent;
var inputesp9 =      document.getElementById("final9").textContent;
var inputesp10 =     document.getElementById("final10").textContent;
var inputesp11 =     document.getElementById("final11").textContent;
var inputesp12 =     document.getElementById("final12").textContent;
var inputesp13 =     document.getElementById("final13").textContent;
var inputesp14 =     document.getElementById("final14").textContent;
var inputesp15 =     document.getElementById("final15").textContent;
var inputesp16 =     document.getElementById("final16").textContent;



document.getElementById("demot").innerHTML = inputesp1 + inputesp2 + inputesp3 + inputesp4 + inputesp5 + inputesp6 + inputesp7 + inputesp8 + inputesp9 + inputesp10 + inputesp11 + inputesp12 + inputesp13 + inputesp14 + inputesp15 + inputesp16 ;
}

