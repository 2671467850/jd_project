"use strict";

$(function () {
  $(".login-tab li").click(function () {
    var index = $(this).index();
    $(this).addClass("current").siblings().removeClass("current");
    $(".mc").eq(index).show().siblings('.mc').hide();
  });
  $("#uname").blur(function () {
    if ($(this).val().length != 0) {
      $(".login_uname label").addClass("yi");
    }
  });
  $("#password").blur(function () {
    if ($(this).val().length != 0) {
      $(".login_password label").addClass("yi");
    }
  });
  $(".over").click(function () {
    if ($("#uname").val().length == 0) {
      alert("请输入用户名");
    } else if ($("#password").val().length == 0) {
      alert("请输入密码");
    } else {
      alert("登录成功!"); // $("form").attr("action","index.html");

      var name = document.getElementById('uname').value;
      var pass = document.getElementById('password').value;

      if (name != "" && name != "undefined" && pass != "" && pass != "undefined") {
        var url1 = location.href.slice(0, location.href.indexOf('web/') + 4);
        window.location.href = url1 + "index.html?" + name;
      }
    }
  });
});