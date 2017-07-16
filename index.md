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

.node circle {
  fill: #999;
}

.node text {
  font: 10px sans-serif;
}

.node--internal circle {
  fill: #555;
}

.node--internal text {
  text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff;
}

.link {
  fill: none;
  stroke: #555;
  stroke-opacity: 0.4;
  stroke-width: 1.5px;
}

</style>
<svg width="320" height="320"></svg>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script>

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    g = svg.append("g").attr("transform", "translate(" + (width / 2 ) + "," + (height / 2 ) + ")");

var stratify = d3.stratify()
    .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

var tree = d3.tree()
    .size([2 * Math.PI, 100])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

d3.csv("gotwheeldata.csv", function(error, data) {
  if (error) throw error;

  var root = tree(stratify(data));

  var link = g.selectAll(".link")
    .data(root.links())
    .enter().append("path")
      .attr("class", "link")
      .attr("d", d3.linkRadial()
          .angle(function(d) { return d.x; })
          .radius(function(d) { return d.y; }))


  var node = g.selectAll(".node")
    .data(root.descendants())
    .enter().append("g")
      .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
      .attr("transform", function(d) { return "translate(" + radialPoint(d.x, d.y) + ")"; })

  node.append("circle")
      .attr("r", 2.5)
      .attr("fill", "pink")

  node.append("text")
      .attr("dy", "0.31em")
      .attr("x", function(d) { return d.x < Math.PI === !d.children ? 6 : -6; })
      .attr("text-anchor", function(d) { return d.x < Math.PI === !d.children ? "start" : "end"; })
      .attr("transform", function(d) { return "rotate(" + (d.x < Math.PI ? d.x - Math.PI / 2 : d.x + Math.PI / 2) * 180 / Math.PI + ")"; })
      .text(function(d) { return d.id.substring(d.id.lastIndexOf(".") + 1); })
      .style("font-size", function(d) {if (d.id.length < 10) {return 10} else if (d.id.length < 15) {return 10}})
      .attr("fill", "Black")
});

function radialPoint(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
}

</script>


For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
