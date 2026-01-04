let cart=0;
function addToCart(){cart++;document.getElementById("cartCount").innerText=cart;}
function validateForm(){let e=document.getElementById("email").value;if(!e.includes("@")){alert("Invalid");return false;}return true;}
function toggleTheme(){document.body.classList.toggle("dark");}
document.getElementById("greeting").innerText="Welcome";
document.getElementById("date").innerText=new Date().toDateString();