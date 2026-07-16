// function dance(){
//     console.log("wait");
//     console.log("ram");
//     console.log("wait");
//     console.log("wait");
//     console.log("wait");
//     console.log("wait");
//     console.log("wait");
//     console.log("wait");
//     console.log("wait");
// }
// dance();



// 1.Rest parameter  -> multiple aegument int o single array

// function numbers(... val){
// console.log(val)
// }
// numbers(10, 20 , 30 ,40 )

// 2 Spread Operator => expands array , objects  


// const num = [20 , 30 , 40 ];

// console.log(...num);

// 3 Return Value

function ABCD(v){
   return  12 + v;

}
 let val = ABCD(13);
console.log(val)

// Early return - > yashodip hey [ nested if] medhe use hot 
// bad code

// function login(isLoggIn){
//     if(isLoggIn){
//         console.log("Welcome ");
//     }
//     else{
//         console.log("login First ")
//     }
// }
// console.log(isLoggIn);


// better code 

// function login(isLoggIn){
//     if(!isLoggIn){
//         return console.log("Log in First ")   
//     }
//     console.log("Welcome");

// }
// login (false);
// login(true);



