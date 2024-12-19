
let guest=0;
let home=0;
let reset=false;

const homeNumber=document.getElementById("home-number");
const guestNumber=document.getElementById("guest-number");


const homeIncrementOne=document.querySelector("#home-incrementor button:nth-child(1) p")
const homeIncrementTwo=document.querySelector("#home-incrementor button:nth-child(2) p")
const homeIncrementThree=document.querySelector("#home-incrementor button:nth-child(3) p")

const guestIncrementOne=document.querySelector("#guest-incrementor button:nth-child(1) p")
const guestIncrementTwo=document.querySelector("#guest-incrementor button:nth-child(2) p")
const guestIncrementThree=document.querySelector("#guest-incrementor button:nth-child(3) p")

const startButton=document.getElementById("start-btn");
const pauseButton=document.getElementById("pause-btn");
const resetButton=document.getElementById("reset-btn");
 pauseButton.style.display="none"
 resetButton.style.display="none"
const counterNumber=document.getElementById("counter-number")

console.log(homeIncrementThree)
homeIncrementOne.addEventListener("click",()=>
{
    home+=1
    home<10 ? homeNumber.textContent="0"+home :  homeNumber.textContent=home;
})
homeIncrementTwo.addEventListener("click",()=>
{
    home+=2
    home<10 ? homeNumber.textContent="0"+home :  homeNumber.textContent=home;
})
homeIncrementThree.addEventListener("click",()=>
{
    home+=3
    home<10 ? homeNumber.textContent="0"+home :  homeNumber.textContent=home;
})
guestIncrementOne.addEventListener("click",()=>
{
    guest+=1
    guest<10 ? guestNumber.textContent="0"+guest : guestNumber.textContent=guest;
})
guestIncrementTwo.addEventListener("click",()=>
{
    guest+=2
    guest<10 ? guestNumber.textContent="0"+guest : guestNumber.textContent=guest;
})
guestIncrementThree.addEventListener("click",()=>
{
    guest+=3
    guest<10 ? guestNumber.textContent="0"+guest : guestNumber.textContent=guest;
})

let minutes=9;
let seconds = 60; //eeminder: you should change the values inside the resetCountDown function too (line 63).


let quarterFinishCheck=false;

function resetCountDown()
{   counterNumber.textContent=`00:00`;   
    minutes=9;
    seconds = 60;
    startButton.style.display="block";
    pauseButton.style.display="none";
    quarterFinishCheck=true;
    clearInterval(countdown);
}

let isPaused=false;

startButton.addEventListener("click",()=>{
    
    quarterFinishCheck=false;

    startButton.style.display="none";
    pauseButton.style.display="block";
    resetButton.style.display="block";
    
        const countdown = setInterval(() => {

        
    
        if(isPaused==false)
        {
            seconds--;
            if(reset===true)
            {   
                reset=false;
                clearInterval(countdown);
                resetCountDown();
            }
            else if (minutes<=0 && seconds<0) {
                resetButton.style.display="none";
                clearInterval(countdown);
                resetCountDown();      
            }
            
            else if(seconds<0)
            {
                seconds=59;        
                minutes--;
            }
        
            if(minutes>10&&quarterFinishCheck===false){   
                seconds<10 ? counterNumber.innerText=`${minutes}:0${seconds}`:counterNumber.innerText=`${minutes}:${seconds}`;
            }
            else if(quarterFinishCheck===false){
                seconds<10 ? counterNumber.innerText=`0${minutes}:0${seconds}`:counterNumber.innerText=`0${minutes}:${seconds}`;
            }
            
        }
            }, 1000);

} )

pauseButton.addEventListener("click",()=>{
   isPaused==true? isPaused=false:isPaused=true 
   isPaused==true? resetButton.style.display="none":resetButton.style.display="block";
})


    resetButton.addEventListener("click", ()=>
    {
        if(reset==false)
        {
            reset=true;
            resetButton.style.display="none"
        }
    })
