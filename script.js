function lol(){
    x = document.getElementById("jo").value;
    x = eval(x);
    console.log(x);
}

function button_press(button){
    switch(button){
        case 0:
            vor = document.getElementById("jo").value;
            document.getElementById("jo").value = vor + "0";
            break;

        case 1:
            vor = document.getElementById("jo").value;
            document.getElementById("jo").value = vor + "1";
            break;

        case 2:
            vor = document.getElementById("jo").value;
            document.getElementById("jo").value = vor + "2";
            break;
        
        case 3:
            vor = document.getElementById("jo").value;
            document.getElementById("jo").value = vor + "3";
            break;
        
        case 4:
            vor = document.getElementById("jo").value;
            document.getElementById("jo").value = vor + "4";
            break;
        
        case 5:
            vor = document.getElementById("jo").value;
            document.getElementById("jo").value = vor + "5";
            break;
        
        case 6:
            vor = document.getElementById("jo").value;
            document.getElementById("jo").value = vor + "6";
            break;
        
        case 7:
            vor = document.getElementById("jo").value;
            document.getElementById("jo").value = vor + "7";
            break;
        
        case 8:
            vor = document.getElementById("jo").value;
            document.getElementById("jo").value = vor + "8";
            break;
        
        case 9:
            vor = document.getElementById("jo").value;
            document.getElementById("jo").value = vor + "9";
            break;
        
        case "=":
            document.getElementById("jo").value = eval(document.getElementById("jo").value);
            break;
        
        case "+":
            vor = document.getElementById("jo").value;
            document.getElementById("jo").value = vor + "+";
            break;
        
        case "-":
            vor = document.getElementById("jo").value;
            document.getElementById("jo").value = vor + "-";
            break;
        
        case "/":
            vor = document.getElementById("jo").value;
            document.getElementById("jo").value = vor + "/";
            break;

        case "*":
            vor = document.getElementById("jo").value;
            document.getElementById("jo").value = vor + "*";
            break;
        
        case "c":
            document.getElementById("jo").value = "";
            break;
        
        
    }
}