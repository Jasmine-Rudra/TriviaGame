var arr=[{ques:"Which of the following is the Largest Country?",opt:["Russia","USA","Canada","Australia"],ans:"0"},{ques:"Country not in asia",opt:["Japan","Austria","Cambodia","Singapore"],ans:"1"},{ques:"Most populous country in Africa",opt:["China","India","Nigeria","Egypt"],ans:"2"}];
		
var i=0;
var total=arr.length;
var correct=0;
var wrong=0;
var not_answered=0;
var answered=false;
var timer=30;
var clockRunning = false;
var intervalId;

function startClock(){
	timer=30;
	$("#remainingTime").text(timer);
	if (!clockRunning) {
          clockRunning=true;
          intervalId=setInterval(function(){
		$("#remainingTime").text(timer);
		timer--;
		if(timer<0){
			stopClock();
			if(answered==false){
				not_answered++;
				no_answer();
			}
		}
	},1000);
      }
}
function stopClock(){
	clearInterval(intervalId);
      clockRunning=false;
};

$("#start-the-game").click(function(){
	$("#starting-div").css("display","none");
	$("#start-game").css("display","initial");
	display1(0);
});

function display1(i){
	answered=false;
	stopClock();
	startClock();
	console.log("here",i);

	$("#game").css("display","inline");
	$(".ques").empty();
	$(".options").empty();
	$(".ques").append("<h3>"+arr[i].ques+"</h3>");
	$(".options").append("<button class='btn btn-primary btn-option' value='0' onclick='checkAnswer(this)'>"+arr[i].opt[0]+"</button><br>");
	$(".options").append("<button class='btn btn-primary btn-option' value='1' onclick='checkAnswer(this)'>"+arr[i].opt[1]+"</button><br>");
	$(".options").append("<button class='btn btn-primary btn-option' value='2' onclick='checkAnswer(this)'>"+arr[i].opt[2]+"</button><br>");
	$(".options").append("<button class='btn btn-primary btn-option' value='3' onclick='checkAnswer(this)'>"+arr[i].opt[3]+"</button><br>");

};


function checkAnswer(x){
	answered=true;
	stopClock();
	console.log(x);
	var a=arr[i].ans;
	if(x.value==a){
		$("#isCorrect").html("<h3>Correct!</h3>");
		$("#giveAnswer").html("<div></div>");
		$("#thumbs-down").css("display","none");
		$("#thumbs-up").css("display","inline");
		correct++;
	}
	else{
		$("#isCorrect").html("<h3>Wrong!</h3>");
		$("#giveAnswer").html("<h4>Correct Answer was: "+arr[i].opt[a]+"</h4>");
		console.log(arr[i].opt[a]);
		console.log("<p>Correct Answer was: "+arr[i].opt[a]+"</p>");
		$("#thumbs-down").css("display","inline");
		$("#thumbs-up").css("display","none");
		wrong++;
	}
	$("#game").css("display","none");
	$("#showAnswer").css("display","inline");
	displayAnswer();
	
};
function no_answer(){
	$("#isCorrect").html("<h3>Times Up!</h3>");
		$("#giveAnswer").html("<h4>Correct Answer was: "+arr[i].opt[arr[i].ans]+"</h4>");
		$("#thumbs-down").css("display","none");
		$("#thumbs-up").css("display","none");
		$("#game").css("display","none");
	$("#showAnswer").css("display","inline");
	displayAnswer();
};

function displayAnswer(){
	i++;
	setTimeout(function(){
		
		if(i < arr.length){
			$("#game").css("display","inline");
			$("#showAnswer").css("display","none");
			display1(i);
		}
		else{
			displayResult();
		}

	},3000);
};

function displayResult(){
	console.log("game finish");
	$("#game").css("display","none");
	$("#showAnswer").css("display","none");
	$("#result").css("display","inline");
	$("#total").text("Total Questions: "+total);
	$("#right").text("Correct Answers: "+correct);
	$("#wrong").text("Wrong Answers: "+wrong);
	$("#not_answered").text("Not Answered: "+not_answered);
};

function reset(){
	i=0;
	correct=0;
	wrong=0;
	not_answered=0;
	$("#game").css("display","none");
	$("#showAnswer").css("display","none");
	$("#result").css("display","none");
	$("#starting-div").css("display","inline");
	$("#start-game").css("display","none");
	display1(i);
}