class Stack {
  constructor() {
    this.items = []
  }

  push(input) {
    if(Array.isArray(input)){
      for (let item of input) {
        if (typeof item === 'string') {
          this.items.push(item)
        }
      }
      return
  }

    typeof input  === 'string' ? this.items.push(input) : console.log("Input must be of type string.")
    
  }

  pop() {
    return this.items.pop() || console.log("Stack is currently empty.")
  }
  

  check() {
    console.log(this.items)
  }
}

const stack = new Stack()
stack.push("Milk")
stack.push("Eggs")
stack.check()  // [“Milk”, “Eggs”]
stack.pop()
stack.check()  // [“Milk”]
stack.pop()
stack.check()  // []
stack.push(["Ice Cream", 10, [], "Cellphone"])
stack.check()  // ["Ice Cream", "Cellphone"]
stack.pop()
stack.check()  // [“Cellphone”]
stack.pop()
stack.check()  // []
stack.pop()    // “Stack is currently empty.”