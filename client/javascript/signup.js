

const submit = document.getElementById('submit')

submit.addEventListener("click", submitForm)

function submitForm (event) {
    event.preventDefault()

   

    const nameOfUser = document.getElementById('name').value
const userName = document.getElementById('username').value
const userEmail = document.getElementById('email').value
const userPassword = document.getElementById('password').value
const userBio = document.getElementById('bio').value


if(!nameOfUser && userName && userEmail && userPassword && userBio) {
    alert('Every input fields are required')
    return;
}

 const userInfo = {
    name: nameOfUser,
    username: userName,
    email: userEmail,
    password: userPassword,
    bio: userBio

 }

 signupUser(userInfo)

}

const signupUser = async (payload) => {

    try {
      const resp = await fetch("http://localhost:8081/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      })

      const data = await resp.json();
      console.log(data)
      window.location.href = "http://localhost:5500/client/html/login.html"

    } catch (error) {
      console.log(error.message)
    }
  }