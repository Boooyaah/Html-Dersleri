let btn=document.getElementById("btn")
console.log(btn)


// btn.addEventListener('click',mesajYazdir);

// function mesajYazdir(){
//     alert('fonksiyondan geldim.')
// }

// btn.addEventListener('click', function mesajYazdir (){ 
//     alert("Listenırdan Geldim.")
// })

// let yazdir = document.querySelector("h2");
// let btn1 = document.querySelector("#btn");

// btn1.addEventListener('click',function(){
//     yazdir.innerText="Listener İle geldim.";

// });

// let yazdir= document.querySelector("h2");
// let btn1=document.querySelector("#btn");

// btn1.addEventListener('click',function(){
//     yazdir.innerText="Selam Naber"
// })
let yazdir= document.querySelector("h2");
let btn1=document.querySelector("#btn");

btn1.addEventListener('mouseover',function(){
    btn1.style.color="red"
})
btn1.addEventListener('mouseout' ,function(){
    btn1.style.color="black"
    
})


