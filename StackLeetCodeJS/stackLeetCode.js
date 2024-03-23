class MyStack {
    constructor() {
        this.arr = {};
        this.i = 0;
    }

    push(data) {
        this.data = data;
        this.arr[this.i] = data;
        this.i++;
    }

    pop() {
        let saver = this.arr[Object.keys(this.arr).length - 1];
        delete this.arr[Object.keys(this.arr).length - 1]
        this.i--;
        if(this.i < 0) {
            this.i = 0;
        }
        return saver;
    }

    top() {
        return this.arr[Object.keys(this.arr).length - 1];
    }

    empty() {
        if(Object.keys(this.arr).length <= 0) {
            return true;
        } else {
            return false;
        }
    }

    testKnowElem() {
        console.log(this.i)
        console.log(this.arr);
        console.log(Object.keys(this.arr).length);
    }

    
}

let myStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top());
console.log(myStack.pop());
console.log(myStack.empty());