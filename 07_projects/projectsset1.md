# Projects related to DOM 

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code


## project 1
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    if (event.target.id == 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id == 'white') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id == 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id == 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
  });
});

```

## project 2 solution
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log("Let'start");
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) results.innerHTML = `<span>Under Weight</span>`;
    else if (bmi >= 18.6 && bmi <= 24.9)
      results.innerHTML = `<span>Normal Range</span>`;
    else if (bmi > 24.9) results.innerHTML = `<span>OverWeight</span>`;
  }
});

```