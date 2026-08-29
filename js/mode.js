function startGame(mode){
    sessionStorage.setItem("mode",mode);
    location.href = "game.html";
}

function goBack(){
    location.href = "index.html";
}
