"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

;

(function (win) {
  function ajax(options) {
    // 判断options是不是对象; 
    // 如果不是对象给options一个默认值; 
    if (!isObject(options)) {
      options = {};
    } // 对象参数的默认值; 


    var _default = {
      type: "GET",
      dataType: "html",
      jsonp: "callback"
    };

    for (var attr in options) {
      _default[attr] = options[attr];
    }

    options = _default;
    options.type = options.type.toUpperCase(); // 想要让我们的ajax可以携带数据怎么办; 
    // 给url拼接数据很麻烦; 
    // 我们用 对象承载需要发送的数据， 在封装之中把对象数据转换成字符串; 
    // { username : "xxx" , password : "xxx" };
    // option.data

    if (isObject(options.data)) {
      var _data = "";

      for (var attr in options.data) {
        _data += "&" + attr + "=" + options.data[attr];
      }

      _data = _data.slice(1);

      if (options.type === "GET") {
        options.url += "?" + _data;
      }

      options.data = _data;
    } // 只有get的情况下我们采取拼接data数据; 


    switch (options.dataType) {
      case "jsonp":
        _jsonp(options);

        break;

      default:
        _xhr(options);

        break;
    }
  }

  function isObject(data) {
    return _typeof(data) === "object" && data !== null && !(data instanceof Array);
  }

  function _jsonp(options) {
    // 全局函数名 : 
    var global_fn_name = "gp" + Date.now() + Math.random();
    global_fn_name = global_fn_name.replace(/0\./g, "_"); // 制造伪全局变量; 

    win[global_fn_name] = function (res) {
      delete win[global_fn_name]; // 2. 类型判断; 

      typeof options.callback === "function" ? options.callback(res) : "";
    }; // 告知后端我们前端的全局函数名; 
    // 3. 特殊符号处理; 
    // 判断URL有没有? 如果有我们用 & 拼接; 
    // 如果没有我们就用 ? 拼接; 


    options.url += (/\?/.test(options.url) ? "&" : "?") + options.jsonp + "=" + global_fn_name;
    var script = document.createElement("script");
    script.src = options.url;
    document.body.appendChild(script);

    script.onload = function () {
      document.body.removeChild(script);
    };
  }

  function _xhr(options) {
    var xhr = new XMLHttpRequest();
    xhr.open(options.type, options.url); // 如果是post请求我们需要设置默认的请求头; 

    if (options.type === "POST") {
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    } // 如果是POST请求那么我们要把拼接好的数据放到send之中; 


    xhr.send(options.type === "POST" ? options.data : null);

    xhr.onreadystatechange = function () {
      // 判断 : xhr 的状态还有 http的状态;                   
      // 状态码的判定是响应信息已经完全可以获取了; 
      if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
        // 把callback也变成了可选参数;  
        var data = xhr.responseText;

        switch (options.dataType) {
          case "json":
            data = JSON.parse(xhr.responseText);
            break;

          case "html":
            data = xhr.responseText;
            break;
        }

        typeof options.callback === "function" ? options.callback(data) : "";
      }
    };
  } // 只把需要的东西放在全局; 


  win.ajax = ajax;
  win.isObject = isObject;
})(window); // 小作业 : 1. 拆分封装内部的对象转换成字符串功能;