const userData = async() =>{
    try {
     const resp = await fetch("http://localhost:8081",{
         method:"GET",
         credentials:"include"
     });
     if(resp.status!==200){window.location.href="http://localhost:5500/client/html/login.html"}
     const {data} = await resp.json();
     const userName = document.getElementById("userName")
     const nameOfUser = document.getElementById("nameOfUser")
     const userBio = document.getElementById("userBio")
     userName.innerText=data.username;
     nameOfUser.innerText=data.name;
     userBio.innerText=data.bio
     
    } catch (error) {
         console.log(error.message)
         window.location.href="http://localhost:5500/client/html/login.html"
    }
 } 

 userData()