/*let tag;
tag = document.getElementById("out")


let result = '';
for (let i = 4; i <= 400; i++) {
   result = result + i + " ";
}
//result = 5;
tag.innerHTML = result;
console.log(result);
alert('hello')*/
let divOut1 = document.getElementById("out1");
let divOut2 = document.getElementById("out2");
let tagA = document.getElementById("inA");
let tagB = document.getElementById("inB");

let a = tagA.value;
let b = tagB.value;

let list = b.split(" ");

let result1 = "";
let result2 = "";


function work1() {
   divOut1.innerHTML = "Отписался";
   return;
}

function work2() {
   result2 += b + " Подписан" + "<br>";
   list.push(b);
   console.log(list);


}

divOut2.innerHTML = result2;