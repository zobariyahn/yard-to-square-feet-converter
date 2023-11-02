function convertValues(event){
    event.preventDefault();
    // Get the vale of Yard input
    var yard =parseFloat(document.getElementById("yard").value)
    // conversion factor:1 yard is equal to 9 square feet
    var squareFeet = yard * 9;
    // Display the result on screen
    document.getElementById("result").innerHTML = yard + "Yard =" + squareFeet + "SquareFeet.";
    
    
    
    }