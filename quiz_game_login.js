 var player_1_name=""
 var player_2_name=""
 function addUser(){
    player_1_name=document.getElementById("p1").value
    player_2_name=document.getElementById("p2").value
    localStorage.setItem("key1",player_1_name)
    localStorage.setItem("key2",player_2_name)
    window.location="quiz_game_login.html"
 }