// just color changing
let h1 = document.querySelector("h1");
function colorChange(color, delay, nextcolorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextcolorChange) nextcolorChange();

    }, delay);
}
colorChange("red", 1000, () => {
    colorChange("pink", 1000, () => {
        colorChange("yellow", 1000, () => {
            colorChange("black", 1000, () => {
                colorChange("orange", 1000)
            });
        });
    });
});
// bas color change karne ke liye







let btns = ["red", "blue", "pink", "yellow"];

let userSeq = [];
let gameSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
console.log("hello");

document.addEventListener("click", function () {

    if (started == false) {
        console.log("game started");
        started = true;
        levelup();
    }
});
function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");

    }, 70);

}
function userflash(btn) {
    btn.classList.add("usercolor");
    setTimeout(function () {
        btn.classList.remove("usercolor");

    }, 70);

}




function levelup() {
    //yaha pe jab level up call hoga tb fir ham userSeq ko empty kardhenge taki fir se start kare enrter jaise pahle kiya tha
    userSeq = [];
    level++;
    h2.innerText = `level-${level}`;
    let ran = Math.floor(Math.random() * 3);
    let randomc = btns[ran];
    let fax = document.querySelector(`.${randomc}`);
    gameSeq.push(randomc);
    console.log(gameSeq);
    gameflash(fax);



}
// jab button ko pushh karunga to level check karega
function checkAns(idx) {
    // console.log("current level:", level);
    // the cuurent level hi six=ze hoga game sequence and user sequence ka
    // let idx = level - 1;
    if (gameSeq[idx] === userSeq[idx]) {
        // jab same hojayga to fir check karega ki userSeq and gameSeq same hh to level up kardhenge 
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup(), 1000);
        }
    } else {
    console.log("GAME OVER");

    h2.innerHTML = `Game over! and your score is <b>${level}</b> Press any key`;

    document.body.classList.add("imageLose");

    setTimeout(() => {
        document.body.classList.remove("imageLose");
    }, 3000);

    setTimeout(() => {
        reset();
    }, 500);
}
}
function buttonpress() {
    console.log("button is pressed");
    let btn = this;
    userflash(btn);
    // yaha pe button press karebge to sab button ke pass color hoga es liye id declear kar dhete hai sab button k access kaarne ke liye
    let usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userSeq.push(usercolor);
    checkAns(userSeq.length - 1);// ye index pass karenge taki game user ke antim endex tk click karna parega 

}

let btnss = document.querySelectorAll(".btn");
for (btnt of btnss) {
    btnt.addEventListener("click", buttonpress);
}
function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}
