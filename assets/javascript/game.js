$(document).ready(function() {
  var random = Math.floor(Math.random() * 100);
  $("#random-number").text(random);

  var counter = 0;
  var userTotal = 0;
  var wins = 0;
  var losses = 0;
  var numberOptions = [10, 5, 3, 7];

  function reset(){
    random = Math.floor(Math.random() * 100);
    console.log(random)
    $('#random-number').text(random);
    counter= 0;
    userTotal = 0;
    $('#user-total').text(userTotal);
    } 

  $("#green-gem").on("click", function() {
    userTotal = userTotal + numberOptions[0];
    console.log("New userTotal= " + userTotal);
    counter += userTotal;
    $("#user-total").text(userTotal);

    if (userTotal === random) {
        $("#win-tally").text("You win!");
        wins++;
        $("#win-tally").text(wins);
        reset();
      } else if (userTotal >= random) {
        $("#loss-tally").text("You lose!!");
        losses++
        $("#loss-tally").text(losses);
        reset();
      }
    });

  $("#purple-gem").on("click", function() {
    userTotal = userTotal + numberOptions[1];
    console.log("New userTotal= " + userTotal);
    counter += userTotal;
    $("#user-total").text(userTotal);

    if (userTotal === random) {
        $("#win-tally").text("You win!");
        wins++;
        $("#win-tally").text(wins);
        reset();
      } else if (userTotal >= random) {
        $("#loss-tally").text("You lose!!");
        losses++
        $("#loss-tally").text(losses);
        reset();
      }
    });

  $("#yellow-gem").on("click", function() {
    userTotal = userTotal + numberOptions[2];
    console.log("New userTotal= " + userTotal);
    counter += userTotal;
    $("#user-total").text(userTotal);
    if (userTotal === random) {
        $("#win-tally").text("You win!");
        wins++;
        $("#win-tally").text(wins);
        reset();
      } else if (userTotal >= random) {
        $("#loss-tally").text("You lose!!");
        losses++
        $("#loss-tally").text(losses);
        reset();
      }
    });


  $("#red-gem").on("click", function() {
    userTotal = userTotal + numberOptions[3];
    console.log("New userTotal= " + userTotal);
    counter += userTotal;
    if (userTotal === random) {
        $("#win-tally").text("You win!");
        wins++;
        $("#win-tally").text(wins);
        reset();
      } else if (userTotal >= random) {
        $("#loss-tally").text("You lose!!");
        losses++
        $("#loss-tally").text(losses);
        reset();
      }
    });
});

// create a function to increment win/loss tallies
