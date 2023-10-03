// var c = 300;
let a = 200;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function One(){
    const username = "Kundu";

    function Two(){
        const website = "youtube";
        console.log(username);
    }
    console.log(website);

    Two();
}

// One();


if(true){
    const username = "Kundu";
    if(username==="Kundu"){
        const webSite = " Youtube";
        console.log(username+webSite);
    }
    // console.log(webSite);
}
// console.log(username);



//++++++++++++++++++ Interesting Concept- Hoisting +++++++++++++++++++++
console.log(addOne(4));
function addOne(num){
    return num+1;
}


console.log(addTwo(6));
const addTwo = function(num){  
     return num+2;
}

