// Copy over the variables from the previous activity
let name='Nawaz khan'

// Create another variable called 'title' using a string template to say "<your name>'s First Plotly Chart"

let title=`${name}'s First plotly chart`

// Create an array called 'books' of your favorite book titles

let books= ["book1", "book2","book3", "book4"]

// Create another array called 'timesRead' of how many times you've read each respective book

let timesRead=[100,200,50,25]

// Create a JavaScript object called 'myData' with four key-value pairs
// 1. name
// 2. favoriteBooks
// 3. timesRead
// 4. age

let myData= {
	name: name,
	favoriteBooks: books,
	timesRead: timesRead,
	age: 47
}
// Assign `x` and `y` values for the Plotly trace object
let trace1 = {
  x: books,
  y: timesRead ,
  type: 'bar'
};

// Leave the code below unchanged
let data = [trace1];

let layout = {
  title: title
};

Plotly.newPlot("plot", data, layout);