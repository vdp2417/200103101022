function externalAlert() {
    alert("External Alert.");
}
function externalConfirm() {
    if (confirm("Are you sure for this...??")) {
        alert("Yes");
    }
    else {
        alert("No");
    }
}
function externalPrompt() {
    var Fname=prompt("Enter your first name..");
    var Lname=prompt("Enter your last name..");
    alert(Fname+""+Lname);
}