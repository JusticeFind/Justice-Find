var questionCount=0;
var lowSocialJusticeScore=0;
var midSocialJusticeScore=0;
var highSocialJusticeScore=0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");


var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");


var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");


var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");


var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");

var result = document.getElementById("result");

q1a1.addEventListener("click", lowSocialJustice);
q1a2.addEventListener("click", highSocialJustice);
q1a3.addEventListener("click", midSocialJustice);

q2a1.addEventListener("click", highSocialJustice);
q2a2.addEventListener("click", midSocialJustice);
q2a3.addEventListener("click", lowSocialJustice);

q3a1.addEventListener("click", lowSocialJustice);
q3a2.addEventListener("click", midSocialJustice);
q3a3.addEventListener("click", highSocialJustice);

q4a1.addEventListener("click", highSocialJustice);
q4a2.addEventListener("click", lowSocialJustice);
q4a3.addEventListener("click", midSocialJustice);

q5a1.addEventListener("click", lowSocialJustice);
q5a2.addEventListener("click", midSocialJustice);
q5a3.addEventListener("click", highSocialJustice);

function lowSocialJustice() {
  lowSocialJusticeScore +=1; 
  questionCount +=1;
  if (questionCount == 5){
    updateResult();
  }
}
function midSocialJustice() {
  midSocialJusticeScore +=1; 
  questionCount +=1;
  if (questionCount == 5){
    updateResult();
  }
}
function highSocialJustice() {
  highSocialJusticeScore +=1; 
  questionCount +=1;
  if (questionCount == 5){
    updateResult();
  }
}

function updateResult() {
  if(lowSocialJusticeScore >= 3) {
    result.innerHTML="You know very little about this humanitarian.";
  }else if(midSocialJusticeScore >= 3) {
    result.innerHTML="You have basic knowledge about this humanitarian issue.";
  }else if(highSocialJusticeScore >= 3) {       result.innerHTML="You know a lot about this humanitarian issue!";
  }
}