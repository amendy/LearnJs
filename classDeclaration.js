class MyClass {
  constructor(value) {
    this.value = value;
    console.log('constructor called');
  }

  print() {
    console.log('I have a constructor', `I have a ${this.value}`);
  }
}

class MyClass2 {
  static print() {
    console.log('I don\'t need a constructor');
  }
}

class MyClass3 extends MyClass2 {

}

const c = new MyClass('cat');
c.print();

MyClass2.print();

MyClass3.print();
