let arry = [
    "Sucess is the sum of small efforts",
    "The best way to learn is to parctice",
    "Never Stop learning",
    "Believe in Yourself",
    "Small steps lead to Big result",
    "The only way to Great Work is to love What you do",
    "Stay patient and trust the process",
    "A little Progress each the adds up to big result",
    "You do not have to be perfect to make  progress",
    "consistancy is the key  to improvment ",
    "Mistakes  are proof that you are trying ",
    "learning never ends",
    "the secret of getting ahead is getting started",
    "Dream big start small and keep moving ",
    "focus on progress not perfection",
    "Hardwork beets talent when talent dosent work hard",
    "every  expert was once a beginner",
    "Dont be afraid to start small",
    "Great things take time keep going",
    "Your future depends on what you do today",
    "Never stop learning because life never stops teaching"
];
let button = document.getElementById("btn");
let sentense = document.getElementById("sen");

button.addEventListener("click",
    function(){
        let random =Math.floor( Math.random(arry)* arry.length);
        let text =arry[random];
        sentense.textContent = text;
        sentense.style.color = "#333";
        
    }
)

