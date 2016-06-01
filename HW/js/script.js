//get user's input
//save the user's input into a variable called var city
//listen for when user clicks on submit button
/*create if & else var city conditionals for NYC, SF, LA, ATX and SYD to
equal specific corresponding image saved in folder */
//reset var city input back to nothing before next input is put in
//if the user submits any of these cities in the submit button, then the background should change to corresponding background photo

$("document").ready(function(){
console.log("Its working")

var city= ""; 

$("#submit-btn").click(changeCity);

function changeCity (){
	event.preventDefault();
	// $("#submit").click();
	city = $("#city-type").val();
	console.log(city)
	
		if (city === "nyc" || city ==="new york city" || city ==="new york"|| city ==="new york,ny"){

				$("body").attr("class","nyc")
			}
		else if (city === "sf" || city ==="san francisco" || city ==="sf bay area" || city ==="san francisco, ca"){

				$("body").attr("class","sf")
			}
		else if (city === "la" || city ==="los angeles" || city ==="los angeles, ca"){
				$("body").attr("class","la")
		}
		else if (city === "austin" || city ==="atx" || city ==="austin, tx"){
				$("body").attr("class","austin")
		}
		else if (city === "sydney" || city ==="syd" || city ==="sydney, australia"){
				$("body").attr("class","sydney")
		}
	}

});

/*Call $.val() on inputs to get the string value of 
your user's input
Store user input in var city
Use $.on(submit) or $.click to figure out when the 
user clicks the "submit" button
Create if / else if / else conditionals to control 
the flow of your application
Write at least six different lines of pseudocode and 
display them inline as JavaScript comments
Prevent a form submission using the event.preventDefault() 
function
Use the $.ready() handler to delay your code from executing 
until all DOM assets have been loaded (even if your .js file 
is near the bottom of your HTML file)
Get the first element from an attribute name using $.attr()
Use the || operator in your conditionals to allow for multiple 
string values to execute if/else if statement code */

/*If a user submits:

"New York" or "New York City" or "NYC" make the background of 
the page nyc.jpg
"San Francisco" or "SF" or "Bay Area" make the background of 
the page sf.jpg
"Los Angeles" or "LA" or "LAX" make the background of the 
page la.jpg
"Austin" or "ATX" make the background of the page austin.jpg
"Sydney" or "SYD" make the background of the page sydney.jpg*/
