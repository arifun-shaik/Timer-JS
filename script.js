const endDate=" 29 June 2028 10:00 PM";

const input=document.querySelectorAll("#input");


function clock(){
  const end=new Date(endDate);
  const today=new Date();
  const diff=(end-today)/1000;
  if(diff<0) return;

  // calculating number of days
  input[0].value=(Math.floor(diff/3600/24));

  // calculating number of hours
  input[1].value=(Math.floor(diff/3600)%24);

  // calculating number of minutes
  input[2].value=(Math.floor(diff/3600)%60);

  // calculating number of seconds
  input[3].value=(Math.floor(diff)%60);

}
let button=document.querySelector("#button1");

// adding a event listener to the button
button.addEventListener("click",()=>{
clock();
setInterval(
  ()=>{
    clock()
  },1000
)
})