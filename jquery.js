
$(document).ready(function(){
$(".submit-btn").click(function(){
  var timeOne = $("#time1hour").val();
  var timeTwo = $('#time2hour').val();
  var timeThree = $("#time3hour").val();
  var timeFour = $('#time4hour').val();
  var timeFive = $('#time5hour').val();
      // alert("Your Message Has Been Submitted");
      //earlier i was calling ajax and then immediately refershing the page hence not enough time for
      //ajax to run and finsish.
        $.ajax({
            cache:false,
            type: "POST",
            timeout:3000,
            url: "https://docs.google.com/forms/d/e/1FAIpQLSc0QpBo0X8FKm3gqGHyTaOzwKx41KQyKRMURm-l15KJk41-VA/formResponse",
            data: {"entry.318868942":timeOne,"entry.1940971565":timeTwo,"entry.271890393":timeThree,"entry.1274886482":timeFour,"entry.804647936":timeFive},
          })
          alert("Your Message Has Been Submitted");
          //earlier what i was doing was that calling ajax and then refreshing page, since ajax is
          //asynchronous it will run on background thread , and immediately after that I am calling page reload which
          //stops the request to go through. When I add alert message before reolad then the code will wait untill user
          //press OK. Then the page will reload.This will give sometime to ajax to run and finish.Hence it each time
          //successful.
          location.reload();
});
});
