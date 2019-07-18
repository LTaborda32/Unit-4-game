$(document).ready(function() {
    var random = []

    for ( var i = 19; i < 121; i++){
        random.push(i)
    }

    var crystal = []

    for( var v = 1; v < 13; v++){
        crystal.push(v)
    }

    console.log(crystal)

     var matchNumber; 
	 var crystalNumbers = []; 

	 var crystal1;
	 var crystal2;
	 var crystal3;
	 var crystal4;

  var totalScore = 0; 

	var wins = 0;
    var losses = 0;
    
    function pickRandomNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$("#Number").html(randNumber);

		console.log("random number: " + randNumber);

}

function pickRandomCrystals(arr) {

    for (var y = 0; y < 4; y++){

        var a = arr[Math.floor(Math.random() * arr.length)];

        crystalNumbers.push(a);
    }

    console.log("crystal numbers: " + crystalNumbers);

} 

function crystalValues(arr) {

    // change value of each crystal button according to array
    for (i = 0; i < arr.length; i++) {

    $("#button-" + (i+1)).attr("value", arr[i]);
    console.log(this);
    }
    crystal1 = arr[0];
    crystal2 = arr[1];
    crystal3 = arr[2];
    crystal4 = arr[3];
} 

function gameReset(x) {

    crystalNumbers = []; // clears crystal number values

    pickRandomNumber(random);

    pickRandomCrystals(crystal);

    crystalValues(crystalNumbers);

    totalScore = 0;
    $("#totalNumber").html(totalScore);

    alert(x);
} 



pickRandomNumber(random); // random number to match
pickRandomCrystals(crystal); // array of random crystal values
crystalValues(crystalNumbers);

    // crystal button functions

    $("#button-1").on("click", function() {

        totalScore += crystal1;
        $("#totalNumber").html(totalScore);
    });

    $("#button-2").on("click", function() {

        totalScore += crystal2;
        $("#totalNumber").html(totalScore);
    });

    $("#button-3").on("click", function() {

        totalScore += crystal3;
        $("#totalNumber").html(totalScore);
    });

    $("#button-4").on("click", function() {

        totalScore += crystal4;
        $("#totalNumber").html(totalScore);
    });

$("button").on("click", function() {
    // this is what happens if the user wins
    if (totalScore == randNumber) {

        wins++;
        console.log(totalScore);
        $("#totalNumber").html(totalScore);
        $("#wins").html("Wins: " + wins);


        setTimeout(function() {gameReset("YOU WIN!!")}, 200);
    }

    else if (totalScore > randNumber){

        losses++;
        $("#totalNumber").html(totalScore);
        $("#losses").html("Losses: " + losses);

        setTimeout(function() {gameReset("WOMP-WOMP...YOU LOSE!")}, 200);
    }
});

}); 
 




