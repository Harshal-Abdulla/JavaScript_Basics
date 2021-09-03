// conditional statements

//checks the num is even or do
//even do this
//odd do that

const a = 10.04

if(typeof a === 'number'){
    if(a===0){console.log("Number is Zero")}
    if(a%2===0){ //=== must be used so if the value is a string use a condition to know whether it is string or not
        console.log("Number is even")
    
    }
    else{
        console.log("Number is odd")
    }
}else{
    console.error("Not a number")
}
//this will fail for floats
//if we use else if the next block is not computed so 2 ifs is used