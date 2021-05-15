/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-10 14:29:21
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-15 21:05:20
 */


//防抖-工具
function debound(fn, wait = 600, now = true) {

  // 标识 定时器
  let timer = null

  return function (ev) {
    // 判断它是否开始执行还是最后执行
    let start = now && !timer

    // 清除定时器
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      // 让this指向到原来的位置上
      !now ? fn.call(this, ev) : null
    }, wait);

    // 立即执行
    start ? fn.call(this, ev) : null
  }
}




// 节流-工具-电梯导航
function throttle(fn, wait = 500) {

  // 上一次执行时间
  let prevTime = 0
  // 定时器
  let timer = null

  return function (ev) {
    // 当前时间
    let nowTime = Date.now()

    // 计算当前是否达到了设置的执行时长
    let difftime = wait - (nowTime - prevTime)
    if (difftime <= 0) { // 到达设置的时长
      // 让上一次执行的时间设置为当前执行的时间
      prevTime = nowTime
      // 清除定时器
      clearTimeout(timer)
      timer = null

      // 执行回调函数，注意this指向
      fn.call(this, ev)
    } else if (!timer) {
      timer = setTimeout(() => {
        // 清除定时器
        clearTimeout(timer)
        timer = null
        // 执行回调函数，注意this指向
        fn.call(this, ev)
      }, wait);
    }
  }
}



let notClickFlag = true
function getScrollFn() {
  console.log("aa")
  let scrollTop = $(document).scrollTop()

  if (notClickFlag) {
    $('.main').each(function (index, el) {
      let offsetTop = $(el).offset().top
      if (scrollTop >= offsetTop - 1) {
        // console.log(index)
        $('.nav_list >li').eq(index).children('a').addClass('active')/* .siblings().removeClass('active') */
        $('.nav_list >li').eq(index).siblings().children('a').removeClass('active')
      } else {
        $('.nav_list >li').eq(index).children('a').removeClass('active')
      }
    })
  }
}

$(function () {
  getScrollFn()
  // console.log("aaa")
})

// 监听页面滚动事件+节流
window.onscroll = throttle(getScrollFn)
// $(window).scroll(function () {
//   getScrollFn()
// })

$('.nav_list > li').click(function () {
  // 点击时，让标识设置为false
  notClickFlag = false

  // 判断它是第后一个回到顶部
  if ($(this).index() == $('.nav_list > li').length - 1) {
    // 回到顶部
    console.log("111")
    $('html,body').animate({
      scrollTop: 0
    }, function () {
      notClickFlag = true
    })
    // $(document).scrollTop(0)
    // notClickFlag = true
  } else {
    //   console.log($(this).children('a'))
    $(this).children('a').addClass('active')/* .siblings().removeClass('active') */
    $(this).siblings().children('a').removeClass('active')
    let offsetTop = $('.main').eq($(this).index()).offset().top
    $('html,body').animate({
      scrollTop: offsetTop
    }, function () {
      notClickFlag = true
    })
  }
})