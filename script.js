const options = ["yes", "it is certain", "get a life"]
const magicBall = document.getElementById("mb_container")
const response = document.getElementById("response");

magicBall.addEventListener("click", function(){
    const index = Math.floor(Math.random()*3)
    console.log(index)
    const message = options[index]
    magicBall.className='magicball_outer animate'
    setTimeout(()=>{
        response.textContent = message;
        response.style.fontSize = "1.1rem";
        magicBall.className = "magicball_outer";
    },3000)
})