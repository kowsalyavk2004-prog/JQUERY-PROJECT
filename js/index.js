

$("#logoutBtn").click(function (e) {

    e.preventDefault();

   
    localStorage.removeItem("isLogin");


    window.location.href = "index.html";

});