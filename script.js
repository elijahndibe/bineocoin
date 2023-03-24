// Loader
function loaderTimer() {
  myVar = setTimeout(loader, 2000);
}
loaderTimer();
const load  = document.getElementById('loading');
    function loader(){
        load.style.display = 'none';
    }
    
let x = document.getElementById('hero-text')
function align(){
  if(x.style.textAlign = 'left'){
    x.style.textAlign = 'center'
  }
};

// Plan calculator begins
  const calAmount = document.getElementById('cal-amount');
calAmount.addEventListener('input', (e)=>{
  if(e.target.value >= 100 && e.target.value <= 1000){
    var percent = 7
    var daily = e.target.value * (percent/100);
    var weekly = e.target.value * (percent/100*7);
    var monthly = e.target.value * (percent/100*30);
    var yearly = e.target.value * (percent/100*365);

    document.getElementById('calc_daily').innerHTML = '$' + daily.toFixed(2);
    document.getElementById('calc_weekly').innerHTML = '$' + weekly.toFixed(2);
    document.getElementById('calc_monthly').innerHTML = '$' + monthly.toFixed(2);
    document.getElementById('calc_yearly').innerHTML = '$' + yearly.toFixed(2);
  
}else if(e.target.value >= 1001 && e.target.value <= 6000){
  var percent = 8
    var daily = e.target.value * (percent/100);
    var weekly = e.target.value * (percent/100*7);
    var monthly = e.target.value * (percent/100*30);
    var yearly = e.target.value * (percent/100*365);

    document.getElementById('calc_daily').innerHTML = '$' + daily.toFixed(2);
    document.getElementById('calc_weekly').innerHTML = '$' + weekly.toFixed(2);
    document.getElementById('calc_monthly').innerHTML = '$' + monthly.toFixed(2);
    document.getElementById('calc_yearly').innerHTML = '$' + yearly.toFixed(2);
}else if(e.target.value >= 6001 && e.target.value <= 10000){
  var percent = 9
    var daily = e.target.value * (percent/100);
    var weekly = e.target.value * (percent/100*7);
    var monthly = e.target.value * (percent/100*30);
    var yearly = e.target.value * (percent/100*365);

    document.getElementById('calc_daily').innerHTML = '$' + daily.toFixed(2);
    document.getElementById('calc_weekly').innerHTML = '$' + weekly.toFixed(2);
    document.getElementById('calc_monthly').innerHTML = '$' + monthly.toFixed(2);
    document.getElementById('calc_yearly').innerHTML = '$' + yearly.toFixed(2);
}else if(e.target.value >= 10001 && e.target.value <= 15000){
  var percent = 10;
    var daily = e.target.value * (percent/100);
    var weekly = e.target.value * (percent/100*7);
    var monthly = e.target.value * (percent/100*30);
    var yearly = e.target.value * (percent/100*365);

    document.getElementById('calc_daily').innerHTML = '$' + daily.toFixed(2);
    document.getElementById('calc_weekly').innerHTML = '$' + weekly.toFixed(2);
    document.getElementById('calc_monthly').innerHTML = '$' + monthly.toFixed(2);
    document.getElementById('calc_yearly').innerHTML = '$' + yearly.toFixed(2);
}else if(e.target.value >= 15001 && e.target.value <= 250000){
  var percent = 12;
    var daily = e.target.value * (percent/100);
    var weekly = e.target.value * (percent/100*7);
    var monthly = e.target.value * (percent/100*30);
    var yearly = e.target.value * (percent/100*365);

    document.getElementById('calc_daily').innerHTML = '$' + daily.toFixed(2);
    document.getElementById('calc_weekly').innerHTML = '$' + weekly.toFixed(2);
    document.getElementById('calc_monthly').innerHTML = '$' + monthly.toFixed(2);
    document.getElementById('calc_yearly').innerHTML = '$' + yearly.toFixed(2);
}else{
  document.getElementById('calc_daily').innerHTML = 'N/A';
  document.getElementById('calc_weekly').innerHTML = 'N/A';
  document.getElementById('calc_monthly').innerHTML = 'N/A';
  document.getElementById('calc_yearly').innerHTML = 'N/A';
}
});
// Plan calculator ends
// Page animation on scroll
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);