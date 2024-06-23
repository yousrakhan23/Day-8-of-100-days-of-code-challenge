
// Q 81: Iterating Over Object Properties: Write a function that takes an object as an argument
// and logs all of its properties and values.



function logObjectProperties (obj : object) {
    for (let property in obj ) {
        console.log(`${property} : ${obj[property]}`) ;
    }
}
logObjectProperties({
    make: "Toyota" , 
    model: "Corolla" , 
    year: 2021 , 
    color: "black"
}) ; 

//.........................................................................................................

// Q 82:

// find the length of a string . write a function that makes a string as an arguement and returns the number 
// of characters in the string. 

function stringLength (str : string) : number {
    return str.length ; 
}
console.log(stringLength("Yousra"));

//..................................................................................................................

// Q 83:

// converting to upper and lower case. create  a function that takes a string , converts it to uppercase , 
//then to lowercase and logs both. 

function convertCase ( str : string) {
    let upperStr = str.toUpperCase() ;
    let lowerStr = str.toLowerCase() ; 
    console.log("Uppercase:" , upperStr , "Lowercase:" , lowerStr) ; 
}
convertCase("Yousra Khan") ; 

//.......................................................................................................................

// Q 84:

// replacing text in a string . write a function that takes a sentence and replaces all instances of the word 
//"javascript " with " Typescript" .

function replaceJavaScriptWithTypeScript (sentence:string) : string {
    return sentence.replace(/JavaScript/g , "TypeScript" ) ; 
}
console.log(replaceJavaScriptWithTypeScript("I love Javascript and  JavaScript is awesome!")) ;

//........................................................................................................................

// Q 85:

// finding the position of a substring: write a function that locates the first occurence of the word "code" within any given
// string and return its position.

function findCodePosition (str: string) : number {
    return str.indexOf("code") ; 
}
console.log(findCodePosition("Learn to code with JavaScript")) ; 

