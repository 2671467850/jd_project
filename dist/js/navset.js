"use strict";

/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-10 14:29:21
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-10 15:19:41
 */
var notClickFlag = true;

function getScrollFn() {
  var scrollTop = $(document).scrollTop();

  if (notClickFlag) {
    $('.main').each(function (index, el) {
      var offsetTop = $(el).offset().top;

      if (scrollTop >= offsetTop - 1) {
        // console.log(index)
        $('.nav_list >li').eq(index).children('a').addClass('active');
        /* .siblings().removeClass('active') */

        $('.nav_list >li').eq(index).siblings().children('a').removeClass('active');
      } else {
        $('.nav_list >li').eq(index).children('a').removeClass('active');
      }
    });
  }
}

$(function () {
  getScrollFn();
  console.log("aaa");
}); // 监听页面滚动事件

$(window).scroll(function () {
  getScrollFn();
});
$('.nav_list > li').click(function () {
  // 点击时，让标识设置为false
  notClickFlag = false; // 判断它是第后一个回到顶部

  if ($(this).index() == $('.nav_list > li').length - 1) {
    // 回到顶部
    console.log("111");
    $('html,body').animate({
      scrollTop: 0
    }, function () {
      notClickFlag = true;
    }); // $(document).scrollTop(0)
    // notClickFlag = true
  } else {
    //   console.log($(this).children('a'))
    $(this).children('a').addClass('active');
    /* .siblings().removeClass('active') */

    $(this).siblings().children('a').removeClass('active');
    var offsetTop = $('.main').eq($(this).index()).offset().top;
    $('html,body').animate({
      scrollTop: offsetTop
    }, function () {
      notClickFlag = true;
    });
  }
});