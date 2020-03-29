var renderCircles = function() {

  var circlecontainer = document.getElementById("circlecontainer");
  var data = getData();
  for (var i = 0; i < data.length; i++) {
    var country = data[i];
    var maximumSize = 300;
    var maxInfected = 0;
    for (var j = 0; j < data.length; j++) {
      var country2 = data[j];
      if (country2.infected > maxInfected) {
        maxInfected = country2.infected;
      }
    }
    var size = (country.infected / maxInfected) * maximumSize;

    var circle = document.createElement("div");
    circle.className = "circle";
    var styleString = "height: " + size + "px; width: " + size + "px;";
    circle.style = styleString;

    var label = document.createElement("div");
    label.className = "label";
    label.textContent = country.name;

    circle.appendChild(label);

    circlecontainer.appendChild(circle);
  }


};

renderCircles();
