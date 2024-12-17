
for(var x = 0; x < 10; x++){
    if ( x % 2 == 1){
        console.log(x)
    }
}



for( var y=1; y < 41; y++){
    if( y % 3 == 0){
        console.log("Fizz")
    }
    else if( y % 5 == 0){
        console.log("Buzz")
    }
     else if( y % 3 == 0 && y % 5 == 0){
        console.log("FizzBuzz")
    }
    else{
        console.log("the number itself")
    }
}