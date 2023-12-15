// Question Two

// const input = { a: 1, b: 2, c: 3 };
// above is the input for the problem and you have to write a javascript program to convert it to
// const output = [{ a: 1 }, { b: 2 }, { c: 3 }];


// answer code:
const input = { a: 1, b: 2, c: 3 };

let a=[]
for( let [key , value] of  Object.entries(input)){
    let c= {[key]:value}
   a.push(c)
}

console.log(a);  

// output [{ a: 1 }, { b: 2 }, { c: 3 }];

