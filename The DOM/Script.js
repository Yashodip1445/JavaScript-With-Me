 
//  // The DOM 

//  /* 
// 1. getElementsbyId
// 2. fetElementsByclassName 
// 3. querySelector
// 4. querySelctorAll
//  */
 
//  let chacha = document.querySelector("h1")
//     chacha.innerHTML= "<i>The Dom !   </i>"
//     chacha.textContent = " Jay Shre Ram "
  

// console.dir(chacha)



// let img = document.querySelector("img")

// img .setAttribute(
//     "src",
//     "https://images.unsplash.com/photo-1781819822600-e49d74e5bbf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"



// )


 
  
// 7 create a new list item   < li> New List >/li> and add it to the end of a <ul>

// let ul = document.querySelector("ul");
// let li = document.createElement("li")

// li.textContent = "Chiku"
// ul.appendChild(li);

// 8  create a new Image element with a placeHolder Source and add it the top of a div.

let img = document.createElement("img");
 


img.setAttribute(

    "src",

"https://images.unsplash.com/photo-1523057530100-383d7fbc77a1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    

);
img.classList.add("placeholder")

document.querySelector("div").prepend(img);

// 9 : Selecte the first item in a List and delete it from the Dom 

// let  ul=document.querySelector("ul")
//  let  li= document.querySelector("li")

//  ul.removeChild(li)

 // 10 Add a highlight classe to every item in al list.

let HigCls = document.querySelectorAll("ul li:nth-child(2n)")

HigCls.forEach(function(elem){
    elem.classList.add("highlight")
})

let color = document.querySelectorAll("ul li:nth-child(3n)");

color.forEach(function(Pinkk) {
    Pinkk.classList.add("grCol");
});



