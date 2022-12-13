function kirim() {
    let nama = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let form = document.getElementById("form");
    if (nama == "ahmad2017" && pass == "integrity") {
      form.setAttribute("action", "dashboard.html");
      window.alert("Login Berhasil");
    } else {
      window.alert("Login Gagal");
    }
    console.log(pass + nama);
  }