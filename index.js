window.onload = timerCount();

function timerCount(){
var countDownDate = new Date("March 10, 2021 16:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  var minutes =Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));

  document.getElementById("txtDays").value = days;
  document.getElementById("txtHours").value = hours;
  document.getElementById("txtMinutes").value = minutes;
  document.getElementById("txtSeconds").value = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("txtDays").value = 0;
    document.getElementById("txtHours").value = 0;
    document.getElementById("txtMinutes").value = 0;
    document.getElementById("txtSeconds").value = 0;
  }
}, 1000);
}

function submitForm(){
  var name = document.getElementById("txtName").value;
  var email = document.getElementById("txtEmail").value;
  var tel = document.getElementById("txtTel").value;
  var country = document.getElementById("ddlCountry").value;
  if (name != "" && email!= "" && tel != "" && country != "" ){
  var msg = "Parabéns " + name + ", sua presença esta confirmada!";
  
  }else {
    msg = "Preencha todos os dados!"
  }
  alert(msg);
}

function setFocus(){
  document.getElementById("txtName").focus();
}
