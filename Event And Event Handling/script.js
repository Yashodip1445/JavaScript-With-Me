

let h1= document.querySelector("h1");
h1.addEventListener("click" , function(){
h1.style.color= "green"
})

let inp = document.querySelector("input");

inp.addEventListener("input" , function(dets){
    console.log(dets.data)
})

let sel = document.querySelector("select");
let device = document.querySelector("#device")

sel.addEventListener("change" ,function(detss){
   device.textContent = `${detss.target.value} Device Selected`

})

// apprach 

let h4 = document.querySelector("h4");

window.addEventListener("keydown" , function(dets){
if( dets.key === " "){
    h4.textContent = "SPC"
} else{
   h4.textContent = dets.key  
}
    
})

let btn= document.querySelector("#btn")

let fileinp= document.querySelector("#fileinp")

btn.addEventListener("click" , function(){
    fileinp.click();

})

fileinp.addEventListener("change", function(dets){
    btn.textContent= dets.target.value;
})


// From submit 


let fromsum= document.querySelector("form");
let iput= document.querySelectorAll("input");

fromsum.addEventListener('submit', function(dets){
    dets.preventDefault();

let card = document.createElement("div");
card.classList.add("card");

let profile = document.createElement("div");
profile.classList.add("Profile")

})


let abcd= document.querySelector("#abcd")
abcd.addEventListener('mouseover', function(){
    abcd.style.backgroundColor = " green"
});


abcd.addEventListener("mouseout", function(){
    abcd.style.backgroundColor = "blue"
})
