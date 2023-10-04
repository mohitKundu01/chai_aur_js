//  Immeditately Invoked  Function Expressions (IIFE)

// An IIFE is a javaScript function that runs as soon as it is defined.
// Use Cases - Avoid polluting the global namespace  
// Learn more here : https://developer.mozilla.org/en-US/docs/Glossary/IIFE


(() => {
    // some initiation code
    let firstVariable;
    let secondVariable;
  })();
  
  // firstVariable and secondVariable will be discarded after the function is executed.
  


(function chai(){
    console.log(`DB CONNECTED`)
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Kundu')

