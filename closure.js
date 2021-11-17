function x(){
    var a = 10;
    return function y(){
        console.log(a);
    }
}
// after multiple line of code

var z = x();
z();