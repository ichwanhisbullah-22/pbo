<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login App | PBO UAS</title>

<style>
* {
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}

body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.app {
  width: 850px;
  max-width: 95%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
}

/* ===== LEFT SIDE ===== */
.info {
  padding: 40px;
  color: white;
}

.info h1 {
  margin-top: 0;
  font-size: 32px;
}

.info p {
  line-height: 1.6;
  opacity: 0.9;
}

/* ===== RIGHT SIDE ===== */
.box {
  background: white;
  padding: 40px;
}

h2 {
  margin-top: 0;
  text-align: center;
}

input {
  width: 100%;
  padding: 12px;
  margin-top: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

button {
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  opacity: 0.9;
}

.logout {
  background: #e53935;
}

.message {
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
}

/* RESPONSIVE */
@media(max-width: 768px) {
  .app {
    grid-template-columns: 1fr;
  }
  .info {
    display: none;
  }
}
</style>
</head>

<body>

<div class="app">
  <div class="info">
    <h1>Login System</h1>
    <p>
      Aplikasi login sederhana menggunakan <b>HTML, CSS, dan JavaScript</b>.<br><br>
      Data user disimpan menggunakan <b>LocalStorage</b> (tanpa database).
    </p>
  </div>

  <div class="box" id="app"></div>
</div>

<script>
class LoginApp {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.initUsers();
    this.renderLogin();
  }

  initUsers() {
    if (!localStorage.getItem("users")) {
      const users = [
        { username: "admin", password: "12345" },
        { username: "user", password: "user123" }
      ];
      localStorage.setItem("users", JSON.stringify(users));
    }
  }

  renderLogin() {
    this.container.innerHTML = `
      <h2>Login</h2>
      <input id="username" placeholder="Username">
      <input id="password" type="password" placeholder="Password">
      <button id="loginBtn">Login</button>
      <div class="message" id="msg"></div>
    `;

    document.getElementById("loginBtn")
      .addEventListener("click", () => this.login());
  }

  login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const msg = document.getElementById("msg");

    const users = JSON.parse(localStorage.getItem("users"));
    const found = users.find(
      u => u.username === username && u.password === password
    );

    if (!found) {
      msg.style.color = "red";
      msg.innerText = "Username atau password salah!";
    } else {
      this.renderUser(found.username);
    }
  }

  renderUser(username) {
    this.container.innerHTML = `
      <h2>Berhasil Login ✅</h2>
      <p style="text-align:center">
        Halo <b>${username}</b>, selamat datang di sistem
      </p>
      <button class="logout" id="logoutBtn">Logout</button>
    `;

    document.getElementById("logoutBtn")
      .addEventListener("click", () => this.renderLogin());
  }
}

new LoginApp("app");
</script>

</body>
</html>
