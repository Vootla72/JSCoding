class Animal {
  var name: String
  
  init(name:String){
    self.name = name
  }
}

struct Animal1 {
  var name: String
  
  init(name:String){
    self.name = name
  }
}
  
  var dog = Animal(name:"dog")
  var cat = dog
  print("dog name before changing",dog.name)
  print("cat name before changing",cat.name)
  
  dog.name = "hound"
  
  print("dog name after changing",dog.name)
  print("cat name after changing",cat.name)
  ///////////////////////
  
    var dog1 = Animal1(name:"dog1")
  var cat1 = dog1
  print("dog name before changing1111",dog1.name)
  print("cat name before changing111",cat1.name)
  
  dog1.name = "hound1"
  
  print("dog name after changing",dog1.name)
  print("cat name after changing",cat1.name)

// Note:
// Class is a reference type
// Struct uses value type


/////////////////////////////////////////////
// Output:

// dog name before changing dog
// cat name before changing dog
// dog name after changing hound
// cat name after changing hound
// dog name before changing1111 dog1
// cat name before changing111 dog1
// dog name after changing hound1
// cat name after changing dog1
  

//online platform to run -- https://onecompiler.com/swift/429cr797e --mailId:vbhavana145@gmail.com


//Note:


In Swift, init is a special method used for initializing objects of a class. It's called automatically when you create a new instance of the class. This is why you use init for initializing properties of your class.

On the other hand, func is used for defining methods (functions) within a class. Methods are actions that an object can perform. They are called explicitly when you want to execute them.

So, when you want to set up initial values or perform any necessary setup when creating an object, you use init. Whereas, when you want to define actions or behaviors that an object can perform, you use func.

In your example, init(name: String) is used to initialize the name property of the Animal class when a new instance of Animal is created. If you were to use func(name: String), it would define a method, not an initializer, and you would have to call it explicitly to set the name property. This wouldn't be appropriate for initialization purposes.

ex:

// class Animal {
//     var name: String
    
//     // This is an initializer (init)
//     init(name: String) {
//         self.name = name
//     }
    
//     // This is a method (func) for setting the name explicitly
//     func setName(name: String) {
//         self.name = name
//     }
// }

// // Create an instance of Animal
// var dog = Animal(name: "dog")

// // Call the method to set the name explicitly
// dog.setName(name: "hound")

// // Print the updated name
// print(dog.name) // Output will be "hound"


// ref:https://medium.com/@burakakyalcin/class-vs-struct-in-swift-f8c48eaacdba


