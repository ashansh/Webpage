 function loadMap(){
 var chart = document.getElementById("chartdiv");
am4core.useTheme(am4themes_spiritedaway);
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
chart = am4core.create("chartdiv", am4maps.MapChart);
chart.geodata = am4geodata_worldLow;
chart.projection = new am4maps.projections.Miller();
chart.homeZoomLevel = 2.5;
chart.homeGeoPoint = {
    latitude: 38,
    longitude: -60
};

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;
polygonSeries.mapPolygons.template.fill = chart.colors.getIndex(0).lighten(0.5);
polygonSeries.mapPolygons.template.nonScalingStroke = true;
polygonSeries.exclude = ["AQ"];

// Add line bullets
var cities = chart.series.push(new am4maps.MapImageSeries());
cities.mapImages.template.nonScaling = true;

var city = cities.mapImages.template.createChild(am4core.Circle);
city.radius = 5;
city.fill = chart.colors.getIndex(0).brighten(-0.3);
city.strokeWidth = 2;
city.stroke = am4core.color("#fff");

function addCity(coords, title) {
    var city = cities.mapImages.create();
    city.latitude = coords.latitude;
    city.longitude = coords.longitude;
    city.tooltipText = title;
    return city;
}

var bhopal = addCity({ "latitude": 23.2196, "longitude": 77.3927 }, "Bhopal");
var bhubaneswar = addCity({ "latitude": 20.2947, "longitude": 85.7434 }, "Bhubaneswar");
var banglore = addCity({ "latitude": 12.9716, "longitude": 77.5946 }, "Banglore");
var srinagar = addCity({ "latitude": 34.0837, "longitude": 74.7973 }, "Srinagar");
var boston = addCity({ "latitude": 42.3398, "longitude": -71.0892 }, "Boston");
var ames = addCity({ "latitude": 42.0308, "longitude": -93.6319 }, "Ames");
var seattle = addCity({ "latitude": 47.6062, "longitude": -122.3321 }, "Seattle");

// Add lines
var lineSeries = chart.series.push(new am4maps.MapArcSeries());
lineSeries.mapLines.template.line.strokeWidth = 2;
lineSeries.mapLines.template.line.strokeOpacity = 0.5;
lineSeries.mapLines.template.line.stroke = city.fill;
lineSeries.mapLines.template.line.nonScalingStroke = true;
lineSeries.mapLines.template.line.strokeDasharray = "1,1";
lineSeries.zIndex = 10;

var shadowLineSeries = chart.series.push(new am4maps.MapLineSeries());
shadowLineSeries.mapLines.template.line.strokeOpacity = 0;
shadowLineSeries.mapLines.template.line.nonScalingStroke = true;
shadowLineSeries.mapLines.template.shortestDistance = false;
shadowLineSeries.zIndex = 5;

function addLine(from, to) {
    var line = lineSeries.mapLines.create();
    line.imagesToConnect = [from, to];
    line.line.controlPointDistance = -0.3;

    var shadowLine = shadowLineSeries.mapLines.create();
    shadowLine.imagesToConnect = [from, to];

    return line;
}

addLine(bhopal, banglore);
addLine(banglore, bhubaneswar);
addLine(bhubaneswar, srinagar);
addLine(srinagar, bhopal);
addLine(bhopal, boston);
addLine(boston, ames);
addLine(ames, seattle);
addLine(seattle, boston);


// Add plane
var plane = lineSeries.mapLines.getIndex(0).lineObjects.create();
plane.position = 0;
plane.width = 48;
plane.height = 48;

plane.adapter.add("scale", (scale, target) => {
    return 0.5 * (1 - (Math.abs(0.5 - target.position)));
})

var planeImage = plane.createChild(am4core.Sprite);
planeImage.scale = 0.08;
planeImage.horizontalCenter = "right";
planeImage.verticalCenter = "middle";
planeImage.path = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
planeImage.fill = chart.colors.getIndex(2).brighten(-0.2);
planeImage.strokeOpacity = 0;

var shadowPlane = shadowLineSeries.mapLines.getIndex(0).lineObjects.create();
shadowPlane.position = 0;
shadowPlane.width = 48;
shadowPlane.height = 48;

var shadowPlaneImage = shadowPlane.createChild(am4core.Sprite);
shadowPlaneImage.scale = 0.05;
shadowPlaneImage.horizontalCenter = "middle";
shadowPlaneImage.verticalCenter = "middle";
shadowPlaneImage.path = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
shadowPlaneImage.fill = am4core.color("#000");
shadowPlaneImage.strokeOpacity = 0;

shadowPlane.adapter.add("scale", (scale, target) => {
    target.opacity = (0.6 - (Math.abs(0.5 - target.position)));
    return 0.5 - 0.3 * (1 - (Math.abs(0.5 - target.position)));
})

// Plane animation
var currentLine = 0;
var direction = 1;
function flyPlane() {

    // Get current line to attach plane to
    plane.mapLine = lineSeries.mapLines.getIndex(currentLine);
    plane.parent = lineSeries;
    shadowPlane.mapLine = shadowLineSeries.mapLines.getIndex(currentLine);
    shadowPlane.parent = shadowLineSeries;
    shadowPlaneImage.rotation = planeImage.rotation;

    // Set up animation
    var from, to;
    var numLines = lineSeries.mapLines.length;
    if (direction == 1) {
        from = 0
        to = 1;
        if (planeImage.rotation != 0) {
            planeImage.animate({ to: 0, property: "rotation" }, 1000).events.on("animationended", flyPlane);
            return;
        }
    }
    else {
        from = 1;
        to = 0;
        if (planeImage.rotation != 180) {
            planeImage.animate({ to: 180, property: "rotation" }, 1000).events.on("animationended", flyPlane);
            return;
        }
    }

    // Start the animation
    var animation = plane.animate({
        from: from,
        to: to,
        property: "position"
    }, 5000, am4core.ease.sinInOut);
    animation.events.on("animationended", flyPlane)
    /*animation.events.on("animationprogress", function(ev) {
      var progress = Math.abs(ev.progress - 0.5);
      //console.log(progress);
      //planeImage.scale += 0.2;
    });*/

    shadowPlane.animate({
        from: from,
        to: to,
        property: "position"
    }, 5000, am4core.ease.sinInOut);

    // Increment line, or reverse the direction
    currentLine += direction;
    if (currentLine < 0) {
        currentLine = 0;
        direction = 1;
    }
    else if ((currentLine + 1) > numLines) {
        currentLine = numLines - 1;
        direction = -1;
    }

}

// Go!
flyPlane();
 }
  