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
let divUnsub = document.getElementById("unsub");
let divSub = document.getElementById("sub");
let divUsers = document.getElementById("users");
let divLost = document.getElementById("lost");

let tagA = document.getElementById("inA");
let tagB = document.getElementById("inB");

let list=[];




let result1 = "";
let result2 = "";


function work1() {
   let a = tagA.value;
   divLost.innerHTML =a+" Отписался";
   if(list.indexOf(a) !== -1){
      list.splice(list.indexOf(a) == a,1);
      console.log(list);
   }

   
}

function work2() {
   let b = tagB.value;  
   result2 += b + " Подписан" + "<br>";   
   list.push(b);
   console.log(list);
   divUsers.innerHTML = result2;
}

