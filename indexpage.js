
function submitName() {
    var nameUser = document.getElementById('inputtext').value;
    
     localStorage.setItem('nameInput', nameUser);
     return false; 
        
    }