## Welcome to the Game of Thrones Season 7 Prediction Challenge

Thanks for submitting your Game of Thrones season 7 predictions! Below you will find the Rules, Leaderboard, and Wheel of Predictions. These will be updated weekly. Good Luck!

### Rules

Scoring:
* 1 point for correct survival prediction
* 2 points for correct death prediction
* 1 addition point for correct death timing prediction 

Death timing is divided into 2 categories
* Early = episodes 1-4
* Late = episdoes 5-7

### Leaderboard

Add Spreadsheet here

### Wheel of Predictions

<style>
.bar {
  fill: steelblue;
}

.bar:hover {
  fill: brown;
}
</style>

<div id='d3div'></div>

<script src="https://d3js.org/d3.v4.min.js"></script>

<script>

var w = 800
var h = 650
var margin = 5
var padding = 50

var gheight = 40
var gwidth = (gheight*4)


		// Get the data
  
 d3.csv("WadeWarren1.github.io/data.csv", function(error, data) {

   data.forEach(function(d) {
          if (error) throw error;
                  d.abv = d.abv;
                  d.id = d.id;
                  d.num = +d.num;
              });
console.log(data)

var maximum = d3.max(data, function(d) { return d.num; });
        console.log("max is " + maximum);

console.log(maximum)

var svg = d3.select("#d3div")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

var sortBars = function() {

   svg.selectAll("rect")
      .sort(function(a, b) {
             return d3.ascending(a.num, b.num);
               })
           .transition()

        .duration(1000)
            .attr("x", function (d,i)
                     {if (i <6) {return padding} else if (i<12) {return padding+gwidth} else {return padding +(gwidth*2)} })
           		.attr("y", function(d,i)
                     {if (i<6) {return (i*gheight)} else if (i<12) {return ((i-6)*gheight) } else {return ((i-12)*gheight)}})
              .style("fill", function (d) {return d3.rgb(0,(4*d.num),0)})


              svg.selectAll ("text")
              .sort(function(a, b) {
                    return d3.ascending(a.num, b.num);
                  })
                  .transition()

                  .duration(1000)

                  .attr("x", function (d,i)
                        {if (i <6) {return padding} else if (i<12) {return padding+gwidth} else {return padding +(gwidth*2)} })
                  .attr("y", function(d,i)
                        {if (i<6) {return (i*gheight)} else if (i<12) {return ((i-6)*gheight) } else {return ((i-12)*gheight)}})
                      }

svg.selectAll (".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
		.attr("width", gwidth - margin)
		.attr("height", gheight - margin)
		.attr("x", function (d,i)
          {if (i <6) {return padding} else if (i<12) {return padding+gwidth} else {return padding +(gwidth*2)} })
		.attr("y", function(d,i)
          {if (i<6) {return (i*gheight)} else if (i<12) {return ((i-6)*gheight) } else {return ((i-12)*gheight)}})
		.style("fill", function (d) {return d3.rgb(0,(2*d.num),(4*d.num))})
    .style("stroke", "black")
    .style("stroke-width", "3px")
    .on("mouseover", function(d) {d3.select(this)
         .style("fill", "red")})
    .on("mouseout", function(d) {d3.select(this)
        .style("fill", function (d) {return d3.rgb(0,(2*d.num),(4*d.num))})})

    .on("click", function() {
             sortBars();
     });


svg.selectAll ("text")
		.data(data)
		.enter()
		.append("text")
		.attr("width", gwidth + margin)
	.attr("height", gheight - margin)
	.attr("x", function (d,i)
        {if (i <6) {return padding} else if (i<12) {return padding+gwidth} else {return padding +(gwidth*2)} })
	.attr("y", function(d,i)
        {if (i<6) {return (i*gheight)} else if (i<12) {return ((i-6)*gheight) } else {return ((i-12)*gheight)}})
  .attr("dy",(gheight/2))
  .attr("dx", padding)
	.text(function(d) { return "(" +d.abv+")"+ " " + d.id + "--" +d.num ; })
  .attr("font-size", function (d) {return gheight/8})
  .attr("fill", "white");

	});
</script>


For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
