## Welcome to the S7 Prediction Game

You can use the [editor on GitHub](https://github.com/WadeWarren1/WadeWarren1.github.io/edit/master/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

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

var w = 600
var h = 500
var margin = 5
var padding = 50

var gheight = 80
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


```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/WadeWarren1/WadeWarren1.github.io/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
