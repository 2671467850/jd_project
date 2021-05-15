"use strict";

/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-10 09:40:48
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-14 22:19:33
 */
$(function () {
  function getCookie(name) {
    var cookie_array = document.cookie.split("; "); // console.log(cookie_array);

    for (var i = 0; i < cookie_array.length; i++) {
      var cookie_item_array = cookie_array[i].split("=");

      if (name === cookie_item_array[0]) {
        return cookie_item_array[1];
      }
    }

    return "";
  }

  ;
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
      var username = $('#uname').val();
      var password = $('#password').val();
      var times = Number(getCookie("times"));
      var d = new Date();
      d.setDate(d.getDate() + 1);

      if (!times) {
        times = 0;
        document.cookie = "times=".concat(times, ";expires=") + d;
      } // if(times>2){
      //     document.cookie = `username=${username};expires=`+d;
      // }


      if (times <= 2) {
        fetch("/api/jd_db/login.php?username=".concat(username, "&password=").concat(password)).then(function (res) {
          return res.json();
        }) // .then(data => alert(data.msg))
        .then(function (data) {
          if (data.code === 404) {
            times++;
            document.cookie = "times=".concat(times, ";expires=") + d; // console.log(document.cookie)

            alert(data.msg);
          } else {
            document.cookie = "suc=1;expires=";
            document.cookie = "uname=".concat(username, ";expires=");
            alert(data.msg);
            window.location.href = "./index.html";
          }
        });
      } else {
        alert("错误次数过多，明天再试");
      } // alert("登录成功!");
      //  // $("form").attr("action","index.html");
      // var name=document.getElementById('uname').value;
      // var pass=document.getElementById('password').value;
      // if(name!=""&&name!="undefined"&&pass!=""&&pass!="undefined"){
      // 	var url1 =location.href.slice(0,location.href.indexOf('web/')+4);
      // 	window.location.href =url1+"index.html?"+name;
      // }

    }
  });
});