function func1() {
  this.test = 'test';
  console.log(this, 'Hello I\'m func1!');
}

//func1();

const func2 = function() {
  this.test = 'test';
  console.log(this, 'Hello I\'m func2!');
}

//func2();

// ---------------------------------------------

// Fat arrow function (takes this from outside)
const func3 = () => {
  console.log(this, 'Hello I\'m func3');
}

//func3();

const func4 = function() {
  this.test = 'testvalue';

  console.log(this, 'Hello I\'m func4');

  const func = () => {
    console.log(this, 'Hello I\'m func');
  }
  func();
}

func4();

// ---------------------------------------------

const fatArrow = () => 1;
const fatArrow2 = () => ({ a: 'test' });
const fatArrow3 = a => console.log(a);
console.log(fatArrow(), fatArrow2());
fatArrow3('Hello I\'m fatArrow3');
