// var arr = new Array(5);
// console.log(arr);

// function twoStacks(arr) {
//   function push1(x) {
//     if (this.top1 < this.top2) {
//       this.top1++;
//       arr[this.top1] = x;
//     } else return -1;
//   }
//   function push2(x) {
//     if (this.top1 < this.top2) {
//       this.top2--;
//       arr[top2] = x;
//     } else return -1;
//   }
// }

class TwoStacks {
  // Constructor
  constructor(n) {
    this.arr = Array(n).fill(0);
    this.size = n;
    this.top1 = -1;
    this.top2 = this.size;
  }

  // Method to push an element x to stack1
  push1(x) {
    // There is at least one empty space for
    // new element
    if (this.top1 < this.top2 - 1) {
      this.top1++;
      this.arr[this.top1] = x;
    } else {
      document.write('Stack Overflow');
      System.exit(1);
    }
  }

  // Method to push an element x to stack2
  push2(x) {
    // There is at least one empty space for
    // new element
    if (this.top1 < this.top2 - 1) {
      this.top2--;
      this.arr[this.top2] = x;
    } else {
      document.write('Stack Overflow');
      System.exit(1);
    }
  }

  // Method to pop an element from first stack
  pop1() {
    if (this.top1 >= 0) {
      var x = this.arr[this.top1];
      this.top1--;
      return x;
    } else {
      document.write('Stack Underflow');
      System.exit(1);
    }
    return 0;
  }
  pop2() {
    if (this.top2 < this.size) {
      var x = this.arr[this.top2];
      this.top2++;
      return x;
    } else {
      document.write('Stack Underflow');
      System.exit(1);
    }
    return 0;
  }
}
let ts = new twoStacks(5);
ts.push1(5);
ts.push2(10);
console.log(ts[0]);
