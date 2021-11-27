
// Event Loop
/*An event loop is something that pulls stuff out of the queue and places it onto the Call stack whenever the function stack becomes empty */
console.log("Start");

document.getElementById("clickMe")
.addEventListener("click", function cb(){
	console.log("Callback");
});

console.log("End");