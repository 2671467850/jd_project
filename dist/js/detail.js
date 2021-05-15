"use strict";

/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-10 23:21:17
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-12 22:16:30
 */
$(function () {
  var num;
  var name;
  var img;
  var price; // console.log("aaa")

  $(".preview_img").mouseover(function (e) {
    $(this).children(".mask").show();
    $(this).children(".big").show();
  });
  $(".preview_img").mouseout(function () {
    $(this).children(".mask").hide();
    $(this).children(".big").hide();
  });
  $(".preview_img").mousemove(function (e) {
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    var maskX = x - parseInt($(this).children(".mask").css("width")) / 2;
    var maskY = y - parseInt($(this).children(".mask").css("height")) / 2;
    var maskMax = parseInt($(this).css("width")) - parseInt($(this).children(".mask").css("width"));

    if (maskX <= 0) {
      maskX = 0;
    } else if (maskX >= maskMax) {
      maskX = maskMax;
    }

    if (maskY <= 0) {
      maskY = 0;
    } else if (maskY >= maskMax) {
      maskY = maskMax;
    }

    $(this).children(".mask").css("left", maskX + 'px');
    $(this).children(".mask").css("top", maskY + 'px');
    var bigMax = parseInt($(".bigimg").css("width")) - parseInt($(".big").css("width"));
    var bigX = maskX * bigMax / maskMax;
    var bigY = maskY * bigMax / maskMax;
    $(".bigimg").css("left", -bigX + 'px');
    $(".bigimg").css("top", -bigY + 'px');
  });
  $(".list_item li").mouseover(function () {
    $(this).addClass("current").siblings().removeClass("current");
    $(".preview_img img").attr('src', $(this).children("img")[0].src);
    $(".big img").attr('src', $(this).children("img")[0].src); // console.log("aaa")
  });
  $(".choose_color a").click(function () {
    $(this).addClass("current").siblings().removeClass("current");
  });
  $(".choose_version a").click(function () {
    $(this).addClass("current").siblings().removeClass("current");
  });
  $(".choose_type a").click(function () {
    $(this).addClass("current").siblings().removeClass("current");
  });
  $(".reduce").mouseover(function () {
    if ($(".choose_amount input[type='text']").val() <= 1) {
      $(".reduce").css("cursor", "not-allowed");
    } else {
      $(".reduce").css("cursor", "pointer");
    }
  });
  $(".reduce").click(function () {
    if ($(".choose_amount input[type='text']").val() <= 1) {
      $(".reduce").css("cursor", "not-allowed");
    } else {
      $(".reduce").css("cursor", "pointer");
      num = $(".choose_amount input[type='text']").val();
      $(".choose_amount input[type='text']").val(num - 1);
    }
  });
  $(".add").click(function () {
    num = $(".choose_amount input[type='text']").val();
    $(".choose_amount input[type='text']").val(Number(num) + 1);
  });
  $(".tab_list li").mouseover(function () {
    $(this).addClass("current").siblings().removeClass("current");
  });
  $(".detail_tab_list li").click(function () {
    var index = $(this).index();
    $(this).addClass("current").siblings().removeClass("current");
    $(".item").eq(index).show().siblings().hide();
  });
  $(".addCar").click(function () {
    name = $(".sku_name").text();
    num = $(".num").val();
    img = document.getElementById("img1").src;
    price = $(".price").text(); //     // console.log(url1)
    //     location.href="../cart.html"+"?"+name+"&"+num+"&"+img;

    console.log("aaa");
    var shopList = JSON.parse(localStorage.getItem("shopList")) || [];
    var shopObj = {
      name: name,
      num: num,
      img: img,
      price: price
    };
    var flags = shopList.some(function (item) {
      return item.name == shopObj.name;
    }); // console.log(flags)
    //判断是否已经存在，存在数量相加，不存在push

    if (!flags) {
      shopList.push(shopObj);
    } else {
      shopList.forEach(function (item) {
        if (item.name == shopObj.name) {
          // console.log(parseInt(item.num))
          item.num = parseInt(item.num) + parseInt(shopObj.num);
        }
      });
    } // console.log(shopList)


    localStorage.setItem("shopList", JSON.stringify(shopList)); // console.log(JSON.stringify(shopList))
    //跳转

    location.href = "../cart.html"; // var shopList = JSON.parse(localStorage.getItem("shopList"))
    // console.log(shopList)
    // var shopList = [name,num,img]
    // shopList.push([name,num,img])
    // localStorage.setItem("shopList" , JSON.stringify(shopList));
    // console.log(JSON.parse(localStorage.getItem("shopList")));
  });
});