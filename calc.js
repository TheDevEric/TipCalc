const btn = document.querySelector(".calc");
const input = document.querySelector(".amt");
const tips = document.querySelectorAll(".nTip");
const back = document.querySelector("#back");
const custom = document.querySelector("#customInp")
let desiredTip = 0


//function that calculates the tip
const calc = function (a, b) {
    return a + (a * b);
}
//detects which tip option was selected
tips.forEach((tip) => {
    tip.addEventListener("click", () => {
        if (tip.textContent == "Other") {
            tips.forEach((others)=>{
                others.style.visibility = "hidden";
            })
            setTimeout(()=>{
                back.style.visibility = "visible";
                custom.style.visibility = "visible";
            },500)
            tip.style.visibility = "hidden";
            desiredTip = 0;

        } else if (tip.classList.contains("nTip")) {
            tips.forEach((otherTip) => {
                if (otherTip !== tip && otherTip.classList.contains('Tip') ) {
                    otherTip.classList.replace("Tip", "nTip");
                }
                tip.classList.replace("nTip", "Tip");
                    desiredTip = parseInt(tip.textContent) / 100;
            })
        }
    });
});

//runs the function when the calculate button is clicked
btn.addEventListener("click", () => {
    let amount = parseFloat(input.value);
    if(desiredTip == 0){
        desiredTip = parseInt(custom.value)/100;
    }
    input.value = 'Your total is ' + "$" + Math.round(calc(amount, desiredTip)*100)/100;
    setTimeout(()=>{
        input.value = "";
    }, 3000)
})

//when back button gets pressed
back.addEventListener("click", ()=>{
    tips.forEach(TIP=>{
        TIP.style.visibility = "visible"
    })
    back.style.visibility = "hidden";
    custom.style.visibility = "hidden";
    desiredTip = 0;
})
