// Question Three

// const input [{ a: 1 }, { b: 2 }, { c: 3 }];
// above is the input for the problem and you have to write a javascript program to convert it to
// const output = { a: 1, b: 2, c: 3 };


// answer code:
const input = [{ a: 1 }, { b: 2 }, { c: 3 }];

let result ={}

input.forEach(obj=>{
    let key = Object.keys(obj)[0]
    let value=obj[key]
     result[key]=value
})

console.log(result);  

//output  { a: 1, b: 2, c: 3 }
