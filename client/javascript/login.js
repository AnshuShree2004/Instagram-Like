const submit = document.getElementById("submit");

submit.addEventListener("click", submitForm);

function submitForm(event) {
  event.preventDefault();

  const userName = document.getElementById("username").value;

  const userPassword = document.getElementById("password").value;

  const userInfo = {
    username: userName,
    password: userPassword
  };

  loginUser(userInfo);
}

const loginUser = async (payload) => {
  try {
    const resp = await fetch("http://localhost:8081/signup", {
      method: "POST",
      credentials: "include",
      redirect: "follow",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await resp.json();
    console.log(data);
    window.location.href = "http://localhost:5500/client/html/home.html";
  } catch (error) {
    console.log(error.message);
  }
};
