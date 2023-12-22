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