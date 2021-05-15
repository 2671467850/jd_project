"use strict";

{
  /* <ul class="goods-list yui3-g" id="tou">
  <li class="yui3-u-3-8 pr">
     <input type="checkbox" class="good-checkbox">
     <div class="good-item">
         <div class="item-img">
             <img src="assets/images/mobile.png">
         </div>
         <div class="item-msg" name="name1">Apple Macbook Air 13.3英寸笔记本电脑 银色（Corei5）处理器/8GB内存</div>
     </div>
  </li>
  <li class="yui3-u-1-8">
     <span>颜色: 银色</span>
     <br>
     <span>处理器: Core I5</span>
     <br>
     <span>内存: 8GB</span>
     <br>
     <span>尺寸: 13.3英寸</span>
     <br>
  </li>
  <li class="yui3-u-1-8">
     <span class="price">8848.00</span>
  </li>
  <li class="yui3-u-1-8">
     <div class="clearfix">
         <a href="javascript:;" class="increment mins">-</a>
         <input autocomplete="off" name="num1" type="text" value="1" minnum="1" class="itxt">
         <a href="javascript:;" class="increment plus">+</a>
     </div>
     <div class="youhuo">有货</div>
  </li>
  <li class="yui3-u-1-8">
     <span class="sum">8848.00</span>
  </li>
  <li class="yui3-u-1-8">
     <div class="del1">
         <a href="javascript:;">删除</a>
     </div>
     <div>移到我的关注</div>
  </li>
  </ul> */
}
$(function () {
  //加入购物车
  // 账号登录状态
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
  getUname();

  function getUname() {
    if (getCookie("uname")) {
      // console.log(getCookie("uname"));
      document.querySelector(".nav_title").innerHTML = getCookie("uname");
    }
  }

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

  if (!getCookie("suc")) {
    window.location.href = "./login.html";
  }

  var shopList = JSON.parse(localStorage.getItem("shopList")) || []; // console.log(shopList)

  shopList.forEach(function (item) {
    var elem = document.createElement("ul");
    elem.className = "goods-list yui3-g";
    elem.innerHTML = "\n        <li class=\"yui3-u-3-8 pr\">\n        <input type=\"checkbox\" class=\"good-checkbox\">\n        <div class=\"good-item\">\n            <div class=\"item-img\">\n                <img src=\"".concat(item.img, "\">\n            </div>\n            <div class=\"item-msg\" name=\"name1\">").concat(item.name, "</div>\n        </div>\n        </li>\n        <li class=\"yui3-u-1-8\">\n        ").concat(item.name, "\n        </li>\n        <li class=\"yui3-u-1-8\">\n            <span class=\"price\">").concat(Number(item.price.slice(1)).toFixed(2), "</span>\n        </li>\n        <li class=\"yui3-u-1-8\">\n            <div class=\"clearfix\">\n                <a href=\"javascript:;\" class=\"increment mins\">-</a>\n                <input autocomplete=\"off\" data=\"").concat(item.name, "\" name=\"num1\" type=\"text\" value=\"").concat(item.num, "\" minnum=\"1\" class=\"itxt\">\n                <a href=\"javascript:;\" class=\"increment plus\">+</a>\n            </div>\n            <div class=\"youhuo\">\u6709\u8D27</div>\n        </li>\n        <li class=\"yui3-u-1-8\">\n            <span class=\"sum\">").concat((item.price.slice(1) * item.num).toFixed(2), "</span>\n        </li>\n        <li class=\"yui3-u-1-8\">\n            <div class=\"del1\" data=\"").concat(item.name, "\">\n                <a href=\"javascript:;\">\u5220\u9664</a>\n            </div>\n            <div>\u79FB\u5230\u6211\u7684\u5173\u6CE8</div>\n        </li>\n        ");
    $(".cart-list").prepend(elem);
  });
  $(".cart-list ul").mouseover(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(".cart-th input[type='checkbox']").click(function () {
    if (this.checked) {
      $(".yui3-u-3-8 input[type='checkbox']").prop("checked", true);
    } else {
      $(".yui3-u-3-8 input[type='checkbox']").prop("checked", false);
    }

    me_sum();
  });
  $(".good-checkbox").click(function () {
    me_sum();
    var flag = true;

    for (var i = 0; i < $(".good-checkbox").length; i++) {
      if (!$(".good-checkbox")[i].checked) {
        flag = false;
        break;
      }
    }

    $(".cart-th input[type='checkbox']").prop("checked", flag);
  });
  $(document).ready(function () {
    me_sum();
  });

  function me_sum() {
    var sum = 0; // console.log($(".goods-list").length)

    for (var i = 0; i < $(".goods-list").length; i++) {
      if ($(".goods-list").eq(i).children(".yui3-u-1-8").eq(3).children().html() == undefined) {
        // console.log($(".goods-list").eq(i).children(".yui3-u-1-8").eq(3).children().html(),"aaa");
        continue;
      }
      /* else{
         if (! $(".good-checkbox")[i].checked) {
             continue;
         }else {
             sum = sum + Number($(".goods-list").eq(i).children(".yui3-u-1-8").eq(3).children().html());
         }
      } */
      else if (!$(".good-checkbox")[i].checked) {
          continue;
        } else {
          sum = sum + Number($(".goods-list").eq(i).children(".yui3-u-1-8").eq(3).children().html());
        }
    }

    console.log(sum);

    if (sum > 99) {
      $(".yunfei span").html("已免运费");
    } else {
      $(".yunfei span").html("\u8FD8\u5DEE\uFFE5".concat((99 - sum).toFixed(2), "\u514D\u8FD0\u8D39"));
    }

    $(".summoney span").html(sum.toFixed(2));
  }

  ;
  $(".goods-list .plus").click(function () {
    var _this = this;

    var num = $(this).siblings(".itxt").val();
    var m = $(this).siblings(".itxt").val(Number(num) + 1).val(); // console.log($(this).siblings(".itxt").attr("data"))

    shopList.map(function (item) {
      if (item.name == $(_this).siblings(".itxt").attr("data")) item.num++;
    }); // console.log(shopList)

    localStorage.setItem("shopList", JSON.stringify(shopList)); // console.log(m)

    var sum = ($(this).parent().parent().siblings(".yui3-u-1-8").eq(1).children(".price").html() * m).toFixed(2);
    $(this).parent().parent().siblings(".yui3-u-1-8").eq(2).children(".sum").html(sum);
    me_sum();
  });
  $(".goods-list .mins").mouseover(function () {
    if ($(this).siblings(".itxt").val() <= 1) {
      $(this).css("cursor", "not-allowed");
    } else {
      $(this).css("cursor", "pointer");
    }
  });
  $(".goods-list .mins").click(function () {
    var _this2 = this;

    if ($(this).siblings(".itxt").val() <= 1) {
      $(this).css("cursor", "not-allowed");
    } else {
      $(this).css("cursor", "pointer");
      var num = $(this).siblings(".itxt").val();
      $(this).siblings(".itxt").val(num - 1);
      var m = $(this).parent().parent().siblings(".yui3-u-1-8").eq(1).children(".price").html(); // console.log($(this).siblings(".itxt").val())

      shopList.map(function (item) {
        if (item.name == $(_this2).siblings(".itxt").attr("data")) item.num--;
      }); // console.log(shopList)

      localStorage.setItem("shopList", JSON.stringify(shopList));
      var sum = $(this).parent().parent().siblings(".yui3-u-1-8").eq(2).children(".sum").html();
      $(this).parent().parent().siblings(".yui3-u-1-8").eq(2).children(".sum").html((sum - m).toFixed(2));
      me_sum();
    }
  });
  $(".del1 a").click(function () {
    var _this3 = this;

    //点击时需要删除的DOM元素
    // console.log($(this).parent().parent().parent().parent().html())
    // $(this).parent().parent().parent().parent().remove();
    $(this).parents(".active").remove(); //删除不完全
    // $(this).parent().parent().siblings().remove();
    // $(this).parent().parent().remove();
    // $(this).closest('.goods-list').remove();
    // console.log($(this).parent().attr("data"))

    shopList = shopList.filter(function (item) {
      return item.name != $(_this3).parent().attr("data");
    }); // console.log(shopList)

    localStorage.setItem("shopList", JSON.stringify(shopList));
    me_sum();
  });
  $(".sum-btn").click(function () {
    alert("结算成功！");
  });
});