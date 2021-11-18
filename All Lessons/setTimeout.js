// print 1 to 5 after each and every second
// for example 1 after 1sec, 2 after 2sec, 3 after 3sec and so on upto 5.

function x(){
    for (var i=0; i<5; i++){
        setTimeout(function (){
            console.log(i);
        }, i* 1000);
    }
    
    console.log("Hello JavaScript!");
}
x();

// Notes:
// the following code doesnt work it only prints 5,5,5,5,5
// Because till it waits for 1sec the value of i has become 5
// and since each time the i is refered to the same memory the latest value is 5(because of closure).

// to avoid this we can use block scope variable which has unique value