var birthDate = document.querySelector("#birth-date");
var luckyNo = document.querySelector("#lucky-no");
var falseResult = document.querySelector(".false-result");
var trueResult = document.querySelector(".true-result");
var privacyPolicy= document.querySelector("#privacy-policy");

function check() {
  var sum=0;
  date=birthDate.value

  for(i in date){
    if(date[i] != '-')
      sum+= parseInt(date[i]);
  }
  
  if (sum % (parseInt(luckyNo.value)) == 0){
    trueResult.style.display="block";
    falseResult.style.display="none";
  }
  else{
    falseResult.style.display="block";
    trueResult.style.display="none";
  }
}


function closePolicy(){
  privacyPolicy.style.display="none";
}

function showPolicy(){
  privacyPolicy.style.display="block";
}
