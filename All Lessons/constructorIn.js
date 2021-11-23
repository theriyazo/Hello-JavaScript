function Counter(){
    count=0;

    this.incrementCounter = function(){
        count++;
        console.log(count);
    }
    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
}

// to access constructor

var counter1 = new Counter(); /*Use new keyword to access constructor*/

counter1.incrementCounter();
counter1.decrementCounter();