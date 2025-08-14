 let sum = 0;
        let another;
        do {
            let n = parseFloat(window.prompt("Enter a number:"));
                sum += n;
            another = window.confirm("Do you want to enter another number?");
        } while (another);
        alert("Current sum is: " + sum);
   
