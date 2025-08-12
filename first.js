<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Example</title>
</head>
<body>
    <p>This is a paragraph</p>
    <p id="myparagraph">The content is loaded from JS</p>

    <script>
        document.write("This is from JS ");
        document.write("This is also from JS");

        alert("Hello");
        console.log("This is displayed in the console!");

        let ans = prompt("How are you?");
        alert("Response is: " + ans);

        let resp = confirm("Are you sure?");
        alert("Response is: " + resp);

        let pa = document.getElementById("myparagraph");
        pa.innerHTML = "<i>This is added by JS</i>";
    </script>
</body>
</html>
