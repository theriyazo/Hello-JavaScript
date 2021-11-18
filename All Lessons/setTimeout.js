// print 1 to 5 after each and every second
// for example 1 after 1sec, 2 after 2sec, 3 after 3sec and so on upto 5.

function x(){
    for (var i=1; i<=5; i++){
        function closure(i){
            setTimeout(function (){
                console.log(i);
            }, i * 1000);
        }
        closure(i);   
    }
    console.log("Hello JavaScript!");
}
x();

// Notes:
// now the code print 1 till 5, for each second
// Because the function closure() creates a new copy each time by passing i into closure(i),
// every time we call this closure() function with 'i' it creates new copy of the funtion and refers to that copy for every itteration

