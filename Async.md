# sync and async kya hota hai?
### sync
sync matlab ek ke baad dusra hoga, jab tak ek  command complete naa ho, dusra shuru nahi hoga
### async
async  matlab saare kaam ek saath shuru kardo, jiska answer pahle aajye uska jawaab dedena

##### Example
Task a = 5 sec to complete
Task b = 2 sec to complete
Task c = 15 sec to complete
Task d = 1 sec to complete

### How we know that the code we write is sync or async ?
Note: If we use below given method during coding we write async code otherwise we write sync code.

------------------
setTimeout,
setInterval,
promises,
fetch,
axios,
XMLHttpRequest

------------------

When we write async code
------------------------
Kai baar apka final code depended hota hai kisi aur ke answer par, is case mein humein nahi pata hota ki answer uske server se kab laut kar aayega, to hum kya nahi kar skte is writing sync code, isse nipatne ke liye hum log async code likh dete hai taaki blocking naa
ho and jab bhi ansewer aaye humara answer ke respect mein chalne wala code chal jaaye

JavaScript is not asynchronous
-------------------------------

#### How code is work
We have __two stack__ one is __Main Stack__ and another is __Side Stack__.
Main stack elements gives output and side stack code processing behind the scenes when process complete then we put it into main stack then we procced now main stack.

**Main Stack => execution**

When Main Stack empty then it check in
Side Stack if Side Stack process is completed then it move to Main Stack.
This process is done with the help of __event loop__. Event loop work when Main Stack is Empty then it check in
Side Stack.

```JavaScript
console.log('hey');
console.log('hey2');
setTimeout(function(){
    console.log('hey3');
},0);
console.log('hey4');
```

Note
-----
When we write async code then this code will give response after some time.

## async code send request by below methods.

__fetch,
axios,
promises,
setTimeout,
setInterval__

After complition  async request give a response then this response is handle by these method.


__then,
catch, 
callbacks
async await__ 

## Callbacks
It is a function, it only work when async code completed


## Promise
**Problem Statement**

1. Sabse phala ghar par aao
2. gate kholo aur gate lagao
3. khana pakao kahana khao
4. incongito mode chalao
5. sojao kyuki tum thak gaye ho

```JavaScript
var ans = new promise(function(res, rej){
    return res("Sabse phala ghar par aao");
})
var p2 = ans.then(function(data){
    console.log(data);
    return new Promise(function(res, rej){
        return res("gate kholo aur gate lagao");
    })
})

var p3 = p2.then(function(data){
    console.log(data);
    return new Promise(function(res, rej){
        return res("khana pakao kahana khao");
    })
})

var p4 = p3.then(function(data){
    console.log(data);
    return new Promise(function(res, rej){

    })
})

```

## Async Await
koi bhi esa function jisme aap async code likhege, kyoki async code hai to aap promises ka istemaal kar sakte hai, jab uska answer aayega aapko
then lagana padega, us then ko lagaane se bachne ke liye, aap async await ka istemaal kar sakte hai

**Way-01**
```JavaScript
function abcd(){
    fetch(`https://randomuser.me/api/`)
    .then(function(raw){
        return raw.json();
    })
    .then(function(data){
        console.log(data);
    })
}

abcd();
```
**Way-02**
```JavaScript
async function abcd(){
    let raw = await fetch(`https://randomuser.me/api/`);
    let ans = await raw.json();
    console.log(ans);
}
```

## Concurrency , Parallelism, Throttling
**Concurrency** - Js mein sync code and async code ek saath process ho raha tha ye hai concurrency.

**Parallelism** - Focus jaada karta hai different processors and unke cores par kaam ko chalaane par

**Throttling** - Kisi code ko control karna number of executions 


