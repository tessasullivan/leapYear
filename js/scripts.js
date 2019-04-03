function leapYear(year){
  // Test if divisible by 4
  if ((year % 4 === 0 && year % 100 != 0)|| year % 400 === 0){
  //  console.log(year + " is divisible by 4");
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
    // console.log(result);
    // if (result) {
    //   $("#result").empty();
    //   $("#result").text("This is a leap year");
    // } else {
    //   $("#result").empty();
    //   $("#result").append("This is NOT a leap year");
    // }
//    $("#result").text(result);

    $(".year").text(year);

    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});
