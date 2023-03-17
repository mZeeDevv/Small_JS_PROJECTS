let btn = document.getElementById('btn');
let value = document.getElementById('text');
let next_ques = document.getElementById('next_ques');
let num = document.getElementById('num');
let div = document.getElementById('toshow');


btn.addEventListener("click", myFu)

function myFu() {
    if (value.value) {
        value.disabled = true;
        next_ques.style.display = "block";
        btn.style.display = "none"
        if (value.value == 0) {
            let b = num.innerHTML = "Neutral"
            div.classList.add('forNeu')
            div.innerHTML = `Given Number is ${b}`;

        }
        else if (value.value > 0) {
            let b = num.innerHTML = "Positive"
            div.classList.add('forpos')
            div.innerHTML = `Given Number is ${b}`;
        }
        else {
            let b = num.innerHTML = "Negative"
            div.classList.add('forNeg')
            div.innerHTML = `Given Number is ${b}`;
        }
    }
    else {
        div.style.display = "block";
    }
}
 next_ques.addEventListener("click" , () => {
    location.reload()
    console.log("HEY")
 })