//!Q-1
// async function foo(){
//    return 'hello word'
// }

// //foo().then(res=>console.log(res))
// OR
// const result = await foo();
// console.log(result)

//!Q-2
// const user1={
//     name:'jon', age: 25, city:'pune'
// }
// const user2 = user1;
// user2.name='asif',
// user2.city='surat'

// console.log(user1);
// console.log(user2);

//!Q-3
// const number = [0,1,2,3,4,5,6];

// let result = number.filter(i=>i<3).map(v=>v+5)

// console.log(result);

//!Q-4
// const str="hi i am asif";
// const res= str.split(" ").map((word)=>word.charAt(0).toUpperCase()+ word.slice(1)).join(" ");
// console.log(res);

//!Q-5
// console.log("Start");
// setTimeout(() => {
//     for(let i=1; i<=10; i++){
//         console.log("hello");
//     }

// }, 2000);

// console.log("end");

//!Q-6
// const arr=[1,2,3];
// arr[4]=5
// console.log(arr[3]);
// console.log(arr.length);

//!Q-7
// const [,,,a]=[10,20,30,40,50];
// console.log(a);

//!Q-8--> find repeating characters
// const str = "hi my name is mohd ashif";
// let newStr = str.trim();

// let ans = "";
// let found = false;

// for (let i = 0; i < newStr.length; i++) {
//   for (let j = i + 1; j < newStr.length; j++) {
//     if (newStr[i] === newStr[j]) {
//       ans = newStr[i];
//       found = true;
//       break;
//     }
//   }
//   if (found) break;  // stop outer loop

// }

// console.log(ans);

//!Q-9-->
// const abc=(a=10, b=20)=>{
//     return a+b;
// }

// console.log(abc(100, 200));
// console.log(abc(500));
// console.log(abc());

//!Q-10-->Reverse the string

// const str1= ' i am asif';
// let str=str1.trim();

// const result=str.split(" ").reverse().join(" ");
// const finalAns= result.split("").reverse().join("")
// console.log(result);
// console.log(finalAns);
// let response = finalAns.split(" ").reverse().join(" ");
// console.log(response);

//!Q-10-->Palindrom check
// let str='bobq';
// let newStr= str.trim();

// function checkPalindrom(str){
//     let reveresed= str.split("").reverse().join("")
//     if(reveresed==str){
//         console.log(str, "is a palindrom");
//     }else{
//         console.log(str, "is not palindrom");
//     }
// }
// checkPalindrom(newStr);
    //!Q-10
    // console.log(null==undefined); //true--> both have empty value
    // console.log(null===undefined); //fasle--> data type are diff, null is an object type and undefined has it 
    
    // let arr= new Array(100);
    // console.log(arr.length);

    //!Q-10--> merge strings with char by char
//     let str1= "asif";
//     let str2= "123";
//     let str3=""

//     function mergeString(){
//         for(let i=0; i<str1.length+str2.length; i++){

//             if(i<str1.length) str3+=str1[i] 
//             if(i<str2.length)str3+=str2[i]
//     }}
//    mergeString();
//    console.log(str3);

