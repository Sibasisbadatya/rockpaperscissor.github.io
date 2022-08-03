const option = document.querySelectorAll(".options");
const user = document.querySelector(".user");
const loading = document.querySelector(".result");
const computer = document.querySelector(".computer");
const pa= document.querySelector(".pa");

// addind events to all buttons
option.forEach((element, index, array) => {
    element.addEventListener("click",(button) => {
        const input = button.target.innerHTML;
        user.innerHTML = input;

        // loading 5 seconds......

        loading.innerText = "Wait 3 seconds";
        const arr = ["ROCK", "PAPER", "SCISSOR"];
      setTimeout(() => {
            var random = arr[Math.floor(Math.random() * 3)]
            computer.innerText = random;
            if (input=== "ROCK") {
              if(random==="PAPER")
              {
                loading.innerHTML="You lost";
              }
              else if (random==="SCISSOR")
              {
                loading.innerHTML="You wins";
              }
              else{
                loading.innerHTML="Match drawn";
              }
            }
            if (input=== "PAPER") {
                if(random==="SCISSOR")
                {
                    loading.innerHTML="You lost";
                }
                else if (random==="ROCK")
                {
                    loading.innerHTML="You wins";
                }
                else{
                    loading.innerHTML="Match drawn";
                }
              }
              if (input=== "SCISSOR") {
                if(random==="ROCK")
                {
                    loading.innerHTML="You lost";
                }
                else if (random==="PAPER")
                {
                    loading.innerHTML=" You win";
                }
                else{
                    loading.innerHTML="Match drawn";
                }
              }
        
        }, 3000);
        setTime();
        // showing result


    })
});


// function for play again
pa.addEventListener("click",()=>{
    window.location.reload()
})