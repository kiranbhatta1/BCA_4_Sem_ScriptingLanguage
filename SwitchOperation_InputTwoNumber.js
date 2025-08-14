  let a = parseFloat(window.prompt("Enter the first number:"));
        let b = parseFloat(window.prompt("Enter the second number:"));
        let op = window.prompt("Enter operator (+, -, *, /):");
        let result;
        switch (op) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                    result = a / b;
                break;
            default:
                result = "Invalid operator";
        }
          alert( a+op+b+" ans is: " + result);
