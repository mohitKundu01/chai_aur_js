# Asynchronous JavaScript
Asynchronous JavaScript allows you to execute tasks without blocking the main thread, ensuring a smoother and more responsive user experience. It's all about handling tasks like fetching data from an API, reading files, or making network requests without pausing the execution of other code.


#### More function provided by browser that Take long time task examples:
1. Making HTTP requests using fetch()
2. Accessing a user camera or microphone using getUserMedia()
3. Asking a user to select file using showOpenFilePicker()



## Callback hell
```JavaScript
function doStep1(init, callback){
   const result = init + 1;
   callback(result);
}


function doStep2(init, callback){
    const result = init + 2;
    callback(result);
}

function doStep3(init, callback){
   const result = init + 3l
   callback(result);
}

function doStep3(init, result){
    const result = init + 3l
    callback(result);
}

function doOperation(0{
  doStep(0, (result1) =>{
     doStep2(result1, (result2)=>{
        doStep3(result2, (result3)=>{
           console.log(`result: ${result3}`);
        });
      });
    });
}

doOpearion();
```
Because we have to call callbacks inside callbacks, we get a deeply nested doOperation() function, which is much harder to read and debug. This is sometimes called "callback hell" or the "pyramid of doom" (because the indentation looks like a pyramid on its side).

When we nest callbacks like this, it can also get very hard to handle errors: often you have to handle errors at each level of the "pyramid", instead of having error handling only once at the top level.

For these reasons, most modern asynchronous APIs don't use callbacks. Instead, the foundation of asynchronous programming in JavaScript is the Promise





