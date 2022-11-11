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

let list = [];
let newList = [];
let lostList = [];





let result1 = "";
let result2 = "";
let result3 = "";


function work1() {
   let a = tagA.value;
   let index = newList.indexOf(a);
   divLost.innerHTML = a + " Отписался";
   if ((newList[index]) == a) {

      newList.splice(index, 1);

      console.log(list);
      //console.log(index);
      //console.log[index];


      console.log(newList);

   }
}

function work2() {
   let b = tagB.value;
   result2 += b + " Подписан" + "<br>";
   list.push(b);
   newList.push(b);

   console.log(list);
   console.log(newList);
   divUsers.innerHTML = result2;
}


function work3() {
   for (let i = 0; i < list.length; i++) {

      if ((newList.indexOf(list[i])) == -1) {
         console.log((newList.indexOf(list[i])) + " элемент отсутсвует");
         result3 += list[i] + " ";

      } else {
         console.log(" массивы равны");
         //console.log(newList);
      }
   }
   lostList = result3.split(" ");
   //lostList.push(result3);
   //lostList.split(" ");
   divLost.innerHTML = result3 + " в newList отсутствует";
   console.log(lostList);
}
