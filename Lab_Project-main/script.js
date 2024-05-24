function openside() {
    document.getElementById("side-menu").style.display = "block";
    document.getElementById("open-btn").style.display = "none";
    document.getElementById("close-btn").style.display = "block";
}

function closeside() {
    document.getElementById("side-menu").style.display = "none";
    document.getElementById("open-btn").style.display = "block";
    document.getElementById("close-btn").style.display = "none";
}


if (window.innerWidth > 1050) {
    var x = document.getElementById("gettop").parentElement.offsetTop;
    document.getElementById("gettop").style.top = x + "px";
    var x = document.getElementById("gettop1").parentElement.offsetTop;
    document.getElementById("gettop1").style.top = x + "px";
    var x = document.getElementById("gettop2").parentElement.offsetTop;
    document.getElementById("gettop2").style.top = x + "px";
    var x = document.getElementById("gettop3").parentElement.offsetTop;
    document.getElementById("gettop3").style.top = x + "px";
    var x = document.getElementById("gettop4").parentElement.offsetTop;
    document.getElementById("gettop4").style.top = x + "px";
}

function conf() {
    var txt;
    if (confirm("Do you want to complete your purchase?")) {
        end();
    }
}

function end() {
    alert("It will be in our store in 3-5 days. Come and take it!");
}

function priv() {
    alert("We won't try to steal your data.");
}

function sorry() {
    alert("sorry sir, I didn't complete it yet.");
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}