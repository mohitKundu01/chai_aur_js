// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(i==5){
//         console.log("5 is best number")
//     }
//     console.log(element);
// }

// for(let i = 0; i<=10; i++){
//     console.log(`Outer loop value: ${i}`);
//     for(let j = 0; j<=10; j++){
//         // console.log(`Inner loop value: ${j}`)
//         console.log(i + "*" + j + '=' + i*j);
//     }
// }

let myArray = ["flash", "batman", "spiderman"]
for(let i = 0; i<myArray.length;i++){
    let element = myArray[i]
    console.log(element);
}


// break and continue

for(let i = 0; i<=20; i++){
    if(i==5){
        console.log(`Detected 5`)
        // break;
        continue;
    }
    console.log(`Value of i is ${i}`);
}