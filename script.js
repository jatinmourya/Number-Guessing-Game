// producing random number from 1-10
var r = Math.floor(Math.random() * 10 + 1);

// counter for tries
var counter = 1;
function guess() {
  // getting input value from id-'n'
  var num = document.getElementById("n").value;

  if (num == "" || num < 0 || num > 10) {
    alert("please enter only number lies between 1-10");
  } else {
    if (num == r) {
      alert("Congratulation, You won after " + counter + " guess");
      document.getElementById("n").value = "";
    } else if (num < r) {
      alert("try greater number");
    } else {
      alert("try smaller number");
    }
  }
  // counter increment after button click
  counter += 1;
}
