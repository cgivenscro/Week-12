var userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function(e){
    if (e.keyCode == 13){
        run(e);
    }
})

userNum.focus();

var counter = 0;

function run(){
    randomNum()
    userNumber()
    compareNumbers()
}

function randomNum(){
    var ran = Math.floor(Math.random() * 10);
    return ran;
}

function userNumber(){
    var user = document.getElementById("getNumber").value;
    return user;
}

function compareNumbers(){
    var a = userNumber()
    var b = randomNum()
    var z = document.getElementById("compare");
    var c = document.getElementById("counter");
    if (a != b){
        z.innerHTML = `Numbers are not the same. Computer got ${b}, and User got ${a}.`
        z.style.backgroundColor = "#ff0000"
        z.style.color = "white"
        z.style.padding = "20px"
        z.style.textAlign = "center"
        counter++
        c.innerHTML = `You have tried ${counter} times.`
        c.style.backgroundColor = "#312f2f"
        c.style.color = "white"
        c.style.padding = "20px"
        c.style.textAlign = "center"
        document.querySelector("body").style.backgroundColor = "ff9c9c"

    }else if (a == b){
        z.innerHTML = `Numbers are the same. Computer got ${b}, and User got ${a}.`
        z.style.backgroundColor = "#07a007"
        z.style.color = "white"
        z.style.padding = "20px"
        z.style.textAlign = "center"
        c.innerHTML = `You have tried ${counter} times to get it right.`
        c.style.backgroundColor = "#312f2f"
        c.style.color = "white"
        c.style.padding = "20px"
        c.style.textAlign = "center"
        counter = 0;
        document.querySelector("body").style.backgroundColor = "e4ff9c"
    }
    resetInput();
}

function resetInput(){
    document.getElementById("getNumber").value = "";
}
