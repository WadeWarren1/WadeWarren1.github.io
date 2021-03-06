var w = 960
var h = (w*.80)
var margin = 5
var padding = 50

var gheight = (w/15)
var gwidth = (gheight*4)


		// Get the data
		d3.csv("grid.csv", function(error, data) {

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

var svg = d3.select("body")
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
