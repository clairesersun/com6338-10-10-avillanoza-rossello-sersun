document.getElementById("inputName").innerHTML = localStorage.getItem('nameInput');

setTimeout(function(){
    window.location.replace("Workouts Page.html");            
}, 3000);