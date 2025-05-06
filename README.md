# JSCoding
 whatsDev-JSCoding
 Cars24InterviewExperience



Please note ... async function always return a promise...
to retrieve it, use await for that function




--------------------slice----------------------


slice(-1) ===> take last letter
slice(0)  ===> takes whole word( starts from the value inserted(includes) and till the end of the string length)
slice(a,b) ====> includes a and excludes b
slice(0,-1) ====> excludes last letter in a word and it includes whole word




----------------regex match--------------------

/blue/g
/[blue]/g

the first pattern looks for the exact sequence "blue," while the second pattern looks for any individual occurrence of the letters "b," "l," "u," or "e."



------------replace---------------------
replace method returns new string and it will not idiify the original string


---------------For in/of -----------------

in --- provides the index like 0,1,2
of ---- takes the value of that particular index

Key-value pairs in objects are typically not directly iterable in some programming languages, but the values or keys can often be iterated over.

so two options...
1.get keys of the object.. by using Object.keys(obj); and iterate using for key of keys ==> obj[key] as value
2. for key in object ===>get key name and obj[key] as value...

// for non iterable .. we use in.. where it checks whether the key is present or not.. doesnot check if the value is truthy or falsy

for key of obj ==> is syntax error.. as object is not iterable one

In programming, an iterable is an object that can be iterated (looped) over. It means you can traverse through all the elements of the object. Key-value pairs in objects are typically not directly iterable in some programming languages, but the values or keys can often be iterated over.

For example, in JavaScript, objects are not iterable directly with a for...of loop. However, you can iterate over the keys or values using Object.keys(), Object.values(), or Object.entries().

---------------------charCodeAt and fromCharCode ---------

fromCharCode -- converst ascii numbers to string value
charCodeAt --- gets the ascii number for the respective string value
**************************************************************************

Array pictorial representation

// unshift -> [array] <- push
// shift   <- [array] -> pop


**************************************************************************

Note : Main difference between pop n slice in array methods JS is

pop() returns the value/ respective word
slice() ,method returns the respective conditional elements in an "array";



///////////////////////////////////////////////////////////////////////////
link:
https://leetcode.com/problems/group-anagrams/solutions/3687735/beats-100-c-java-python-beginner-friendly/?envType=study-plan-v2&envId=top-interview-150

If you are a beginner solve these problems which makes concepts clear for future coding:

Two Sum
Roman to Integer
Palindrome Number
Maximum Subarray
Remove Element
Contains Duplicate
Add Two Numbers
Majority Element
Remove Duplicates from Sorted Array
Valid Anagram
Group Anagrams
Practice them in a row for better understanding and please Upvote for more questions.



///////////////////////////////


usage of forEach, map and reduce

map: Transforms each element in the array and returns a new array. The original array is not modified.
forEach: Executes a function on each element of the array but does not return anything, and it doesn't create a new array.


for Each:
     Mutating external state: If you're modifying variables or objects that exist outside the forEach block.

     When to avoid forEach:
When you need a transformed result from the array (in this case, use map, filter, or other array methods).
If you're simply accumulating a value (like summing numbers), reduce would be a better option.




//please note:
// s.sort() will not modify the strig s as string is a primitive data type and immutable

// primitive data types are immutable
// ex: string, number, boolean, null, undefined, symbol


//////*******************************************//////
for js problem solving questions

<!-- https://www.keka.com/javascript-coding-interview-questions-and-answers -->