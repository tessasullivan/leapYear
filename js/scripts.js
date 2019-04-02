function leapYear(year){
  // Test if divisible by 4
  if (year % 4 === 0) {
    console.log(year + " is divisible by 4");
    result=true;
  } else {
    result=false;
  }
  return result;
}


$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    console.log(result);
    if (result) {
      $("#result").append("This is divisible by 4");
    } else {
      $("#result").append("This is NOT divisible by 4");
    }
//    $("#result").text(result);
  });
});
