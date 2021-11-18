// print 1 to 5 after each and every second
// for example 1 after 1sec, 2 after 2sec, 3 after 3sec and so on upto 5.

function x(){
    for (let i=1; i<=5; i++){
        setTimeout(function (){
            console.log(i);
        }, i* 1000);
    }
    
    console.log("Hello JavaScript!");
}
x();

// Notes:
// now the code print 1 till 5, for each second
// Because the let variables have block scope and the closure of calling function refers to unique value of i each and every itteration.


//⚡ In the next commit we'll see how the same is achived using var.