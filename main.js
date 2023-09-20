function getHistory() {
  return document.querySelector("#history-value").innerText;
}
function printHistory(num) {
  document.querySelector("#history-value").innerText = num;
}

function getOutput() {
  return document.querySelector("#output-value").innerText;
}

function printOutput(num) {
  if (num == "") {
    document.querySelector("#output-value").innerText = num;
  } else {
    document.querySelector("#output-value").innerText = getFormattedNumber(num);
  }
}

function getFormattedNumber(num) {
  if (num == "-") {
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}

var number = document.querySelectorAll(".number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      output = output + this.id;
      printOutput(output);
    }
  });
}
