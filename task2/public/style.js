let ampm = document.getElementById ('ampm');

function displayTime() {
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    
  
    
    if (hr < 12) {
        ampm.innerHTML = "PM";
    }
    if (hr === 0) {
        hr = 12;  
    } else if (hr > 12) {
        hr = hr - 12; 
    }
    document.getElementById('hours').innerHTML = padZero(hr);
    document.getElementById('mins').innerHTML = padZero(min);
    document.getElementById('seconds').innerHTML = padZero(sec);
}
function padZero(num) {
    return num < 10 ? '0' + num : num;
}
setInterval(displayTime, 1000); 

function dis(val){
    const display=document.getElementById('screen')
    display.value += val;
}
function del() {
    const display = document.getElementById('screen');
    display.value = display.value.slice(0, -1);
}
function x2(){
    const display=document.getElementById('screen')
    display.value=Math.pow(display.value,2);
}
function sin(){
    const display=document.getElementById('screen')
    display.value=Math.sin(display.value)
}
function cos(){
    const display=document.getElementById('screen')
    display.value=Math.cos(display.value)
}
function tan(){
    const display=document.getElementById('screen')
    display.value=Math.tan(display.value)
}
function log(){
    const display=document.getElementById('screen')
    display.value=Math.log10(display.value)
}
function sqrt(){
    const display=document.getElementById('screen')
    display.value=Math.sqrt(display.value,2)
}
function slove(){
    const display=document.getElementById('screen')
    let x=display.value
    let y=eval(x)
    display.value=y
}
function e(){
    const display=document.getElementById('screen')
    display.value=Math.exp(display.value);
}
function percent(){
    const display=document.getElementById('screen')
    display.value=display.value/100;
}
function clearScreen(){
    const display=document.getElementById('screen')
    display.value="";
}
function calculateFactorial() {
    const display = document.getElementById('screen');
    const number = parseInt(display.value);  
    display.value = factorial(number); 
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

