function successGraphDirective () {
    "ngInject";
    return {
        restrict: 'E',
        scope: {
            data: '=',
        },
        link: function(scope, element, attrs) {

            let init = () => {

                let loadFreshGraphs = () => {
                    if (scope.data) {
                        addSuccessMetric(scope.data);
                    }
                }

                let buildSuccessGraph = (processedData) => {
                    d3.selectAll("svg").remove();
                    d3.selectAll(".d3-tip").remove();
                    buildBarChart(processedData, 'ad_group_name', 'success_metric', 'Ad Group', 'Ad Group Success');
                }

                let addSuccessMetric = (data) => {
                    _.forEach(data, (d) => {
                        d['success_metric'] = d.sm;
                    })
                    buildSuccessGraph(data);
                }

                let buildSuccesGraphTooltip = (d) => {

                    let toolTipString = "Ad Group: " + d.ad_group_name +
                        "<br> Success Metric: " + d.sm +
                        "<br> Cost per view: " + d.cpv +
                        "<br> View rate: " + d.vr +
                        "<br> Click-through rate: " + d.ctr +
                        "<br> Engagement rate: " + d.er +
                        "<br> Video completion rate: " + d.vcr

                    return toolTipString;
                }

                let buildBarChart = (data, xUnit, yUnit, xAxisLabel, yAxisLabel, graphTitle) => {

                    let margin = {top: 20, right: 20, bottom: 30, left: 40};
                    let width = element[0].clientWidth - margin.left - margin.right;
                    let height = 300 - margin.top - margin.bottom;
                    let x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
                    let y = d3.scale.linear().range([height, 0]);
                    let xAxis = d3.svg.axis().scale(x).orient("bottom");
                    let yAxis = d3.svg.axis().scale(y).orient("left").ticks(10);
                    let color = d3.scale.ordinal().range(["#1E88E5", "#00BCD4", "#00C853"]);

                    var barChart = d3.select(element[0]).append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                      .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                    var tooltip = d3.tip()
                        .attr('class', 'd3-tip')
                        .offset([-10, 0])
                        .html(function(d) {
                            let tooltiptext = buildSuccesGraphTooltip(d)
                            return tooltiptext;
                        })

                    let yMax = d3.max(data, function(d) { return d[yUnit] })
                    let yTop = yMax + yMax*0.5;

                    x.domain(data.map(function(d) { return d[xUnit] }))
                    y.domain([0, yTop]);

                    var yAxisLabel = d3.svg.transform().rotate(-90).translate(-40, -40);

                    barChart.append("g")
                            .attr("class", "x axis")
                            .attr("transform", "translate(0," + height + ")")
                            .call(xAxis)
                        .append("text")
                            .attr("transform", "translate(275,30)")
                            .attr("dx", ".71em")
                            .style("text-anchor", "end")
                            .text(xAxisLabel)

                    barChart.append("g")
                      .attr("class", "y axis")
                      .call(yAxis)
                    .append("text")
                      .attr("transform", yAxisLabel)
                      .attr("y", 6)
                      .attr("dy", ".71em")
                      .style("text-anchor", "end")
                      .text("Success Metric")

                    barChart.append("text")
                        .attr("x", (width / 2))
                        .attr("y", 0 - (margin.top / 2) + 10)
                        .attr("text-anchor", "middle")
                        .style("font-size", "16px")
                        .style("text-decoration", "underline")
                        .text(graphTitle)

                    barChart.selectAll(".bar")
                      .data(data)
                    .enter().append("rect")
                      .attr("class", "bar")
                      .attr("x", function(d) { return x(d[xUnit]); })
                      .attr("width", x.rangeBand())
                      .attr("y", function(d) { return y(d[yUnit]); })
                      .attr("height", function(d) { return height - y(d[yUnit]); })
                      .on('mouseover', tooltip.show)
                      .on('mouseout', tooltip.hide)

                    barChart.call(tooltip);
                }

                loadFreshGraphs();
            }

            scope.$watch(() => element[0].clientWidth, () => {
                if (element[0].clientWidth) {
                    init();
                }
            })

            scope.$watch('data', () => {
                init();
            });

        }
    }
};

export default successGraphDirective;