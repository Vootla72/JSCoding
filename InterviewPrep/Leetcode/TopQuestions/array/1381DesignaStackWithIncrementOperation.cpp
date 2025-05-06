


1381. Design a Stack With Increment Operation
Solved
Medium
Topics
Companies
Hint
Design a stack that supports increment operations on its elements.

Implement the CustomStack class:

CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number of elements in the stack.
void push(int x) Adds x to the top of the stack if the stack has not reached the maxSize.
int pop() Pops and returns the top of the stack or -1 if the stack is empty.
void inc(int k, int val) Increments the bottom k elements of the stack by val. If there are less than k elements in the stack, increment all the elements in the stack.


///////////////sol////////////////

class CustomStack {
public:
    int arr[1000];
    int top = -1; // Initialize top with -1
    int max = 0;
    CustomStack(int maxSize) {
        max = maxSize; 
    }
    
    void push(int x) {
        if (top < max - 1) { // Check if there's space in the stack
            top++; // Increment top to point to the next empty slot
            arr[top] = x; // Store the value in the array
        }
    }
    
    int pop() {
       if (top >= 0) { // Check if the stack is not empty
           int val = arr[top]; // Get the value at the top
           top--; // Decrement top to remove the top element
           return val; // Return the popped value
       }
       return -1; // Stack is empty
    }
    
    void increment(int k, int val) {
        int limit = min(k, top + 1); // Determine the limit for the loop
        for (int i = 0; i < limit; i++) {
            arr[i] += val; // Increment each element up to the limit
        }
    }
};



/////////////////////////////////////////////////////////////////////////


https://takeuforward.org/data-structure/implement-stack-using-array/





#include<bits/stdc++.h>

using namespace std;
class Stack {
  int size;
  int * arr;
  int top;
  public:
//   A constructor in C++ is a special member function that is automatically called when an instance of the class is created.
//    It has the same name as the class and doesn't have a return type.


    Stack() {
      top = -1;
      size = 1000;
      arr = new int[size];
    }
  void push(int x) {
    top++;
    arr[top] = x;
  }
  int pop() {
    int x = arr[top];
    top--;
    return x;
  }
  int Top() {
    return arr[top];
  }
  int Size() {
    return top + 1;
  }
};
int main() {

  Stack s;
  s.push(6);
  s.push(3);
  s.push(7);
  cout << "Top of stack is before deleting any element " << s.Top() << endl;
  cout << "Size of stack before deleting any element " << s.Size() << endl;
  cout << "The element deleted is " << s.pop() << endl;
  cout << "Size of stack after deleting an element " << s.Size() << endl;
  cout << "Top of stack after deleting an element " << s.Top() << endl;
  return 0;
}