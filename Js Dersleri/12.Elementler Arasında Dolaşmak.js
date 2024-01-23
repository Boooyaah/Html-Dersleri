// console.log(document.querySelector('.html'))




// let myList=  document.querySelector('.html');


// console.log(myList.nextElementSibling.nextElementSibling.previousElementSibling)




let myList= ['Bootstrap','Mysql','C#','C++']
let ul=document.querySelector('.list')
// ul.insertAdjacentHTML('beforeend',myElement)
myList.forEach((e)=> {
    let myElement=`
    <li>${e} </li>`;
    ul.insertAdjacentHTML('beforeend',myElement)
    
})

