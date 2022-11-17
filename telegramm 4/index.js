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
let tagA2 = document.getElementById("inA2");
let tagA3 = document.getElementById("inA3");

let tagB = document.getElementById("inB");
let tagB2 = document.getElementById("inB2");
let tagB3 = document.getElementById("inB3");

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

      newList.splice(index, 3);

      console.log(list);
      //console.log(index);
      //console.log[index];


      console.log(newList);

   }
}

function work2() {
   let b = tagB.value;
   let b2 = tagB2.value;
   let b3 = tagB3.value;

   result2 += b + " Подписан" + "<br>";
   list.push(b);
   newList.push(b);

   list.push(b2);
   newList.push(b2);

   list.push(b3);
   newList.push(b3);

   console.log(list);
   console.log(newList);
   divUsers.innerHTML = result2;
}


/*function work3() {
   for (let i = 0; i < list.length; i++) {

      if ((newList.indexOf(list[i])) == -1) {
         console.log((newList.indexOf(list[i])) + " элемент отсутсвует");
         result3 += list[i]+' ';
         lostList.push(list[i]);

      } else {
         console.log(" массивы равны");
        
      }
   }
   divLost.innerHTML = result3 + " в newList отсутствует";
   console.log(lostList);
}*/
