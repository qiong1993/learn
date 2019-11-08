function a(){
    function b(){

    }
}
b() //referenceError

if (true) {     
    function foo() {         console.log( "1" );     } 
} else {    
    function foo() {         console.log( "2" );     } 
} 
 
foo();