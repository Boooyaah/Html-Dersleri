// function getData(url){
//     fetch(url).then((response) => response.json()).then((data) => console.log(data));
    
    

 

// }

// getData("");



function getData(url){
    fetch(url).then((response)=> response.json()).then((data)=>console.log(data))
    


}

getData("https://jsonplaceholder.typicode.com/users")