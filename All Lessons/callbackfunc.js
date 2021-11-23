
setTimeout(function () {
    console.log("timer");
}, 5000);

function x(y){
    console.log("x");
    y();
}

x(function y(){
// this func is called callback
console.log("y");
});