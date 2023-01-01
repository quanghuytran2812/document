// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then((posts) => {
//         let html = posts.map((value)=>{
//             return ` <li>
//                 <h1>${value.userId}</h1>
//                 <h2>${value.title}</h2>
//                 <p>${value.body}</p>
//             </li>`;
//         })
//         let text = html.join('');
//         document.querySelector(".poster").innerHTML = text;
//     });

// function highlight([first, ...strings], ...values){

// }

//  function arrToObj(arr) {
//     let info = arr.reduce((objarr, element) =>(
//         {...objarr,[element[0]]: element[1]}
//     ), {});
//        return info;
//  }
//  const obj1 = arrToObj([
//     ['name', 'Son Dang'], 
//     ['age', 21], 
//     ['address', 'Ha Noi']
//  ])
//  console.log(obj1)
const { 
    a = 'default', 
    b, 
    ...rest 
} = {
    b: 'val1',
    c: 'val2',
    d: 'val3'
};

console.log(a, b, rest); 