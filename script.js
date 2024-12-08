
let guest=0;
let home=0;

const homeNumber=document.getElementById("home-number");
const guestNumber=document.getElementById("guest-number");


const homeIncrementOne=document.querySelector("#home-incrementor button:nth-child(1) p")
const homeIncrementTwo=document.querySelector("#home-incrementor button:nth-child(2) p")
const homeIncrementThree=document.querySelector("#home-incrementor button:nth-child(3) p")

const guestIncrementOne=document.querySelector("#guest-incrementor button:nth-child(1) p")
const guestIncrementTwo=document.querySelector("#guest-incrementor button:nth-child(2) p")
const guestIncrementThree=document.querySelector("#guest-incrementor button:nth-child(3) p")

console.log(homeIncrementThree)
homeIncrementOne.addEventListener("click",()=>
{
    home+=1
    if(home<10)
    {
        homeNumber.textContent="0"+home;
    }
    else
    {
        homeNumber.textContent=home;
    }
})
homeIncrementTwo.addEventListener("click",()=>
{
    home+=2
    if(home<10)
        {
            homeNumber.textContent="0"+home;
        }
        else
        {
            homeNumber.textContent=home;
        }
})
homeIncrementThree.addEventListener("click",()=>
{
    home+=3
    if(home<10)
        {
            homeNumber.textContent="0"+home;
        }
        else
        {
            homeNumber.textContent=home;
        }
})


guestIncrementOne.addEventListener("click",()=>
{
    guest+=1
    if(guest<10)
    {
        guestNumber.textContent="0"+guest;
    }
    else
    {
        guestNumber.textContent=guest;
    }
})
guestIncrementTwo.addEventListener("click",()=>
{
    guest+=2
    if(guest<10)
        {
            guestNumber.textContent="0"+guest;
        }
        else
        {
            guestNumber.textContent=guest;
        }
})
guestIncrementThree.addEventListener("click",()=>
{
    guest+=3
    if(guest<10)
        {
            guestNumber.textContent="0"+guest;
        }
        else
        {
            guestNumber.textContent=guest;
        }
})

