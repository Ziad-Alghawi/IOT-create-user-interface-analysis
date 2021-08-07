
var slider = document.getElementById("Motor");
var output = document.getElementById("val");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};

