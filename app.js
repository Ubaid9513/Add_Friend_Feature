var istatus = document.querySelector("h3");
var addFriend = document.querySelector("#btn");
var check = false;
addFriend.addEventListener("click",function(){
    if (check === false) {        
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        addFriend.innerHTML = "Remove Friend"
        check = true
    }else {
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        addFriend.innerHTML = "Add Friend"
        check = false
    }
    
})