function validate()
{
    if(   document.getElementById("inputEmail").value == "LTI"
       && document.getElementById("inputPassword").value == "123" )
    {
        alert( "validation succeeded" );
        location.href="run.html";
    }
    else
    {
        alert( "Invalid Username/Password. Try again!" );
        location.href="fail.html";
    }
}
