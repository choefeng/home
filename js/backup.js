function getServerDate(){
var xhr = null;

if(window.XMLHttpRequest){
xhr = new window.XMLHttpRequest();

}else{ // ie

xhr = new ActiveObject("Microsoft")

}

xhr.open("GET", "<%=basePath%>user/toupdpwd?id=26",false)//false不可变

xhr.send(null);

var date = xhr.getResponseHeader("Date");

//转为北京时区时间

return getBeiJingTime(date)

// return new Date(date);

}

//将时间转为北京时区时间

function getBeiJingTime(date) {
var d = new Date(date);

var timezone = 8; //目标时区时间，东八区

var offset_GMT = d.getTimezoneOffset(); // 本地时间和格林威治的时间差，单位为分钟

var nowDate = d.getTime(); // 本地时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数

var targetDate = new Date(nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000);

console.log("东8区现在是：" + targetDate);

return targetDate;

}

function openTime(){
// 创建ActiveXObject实例，只在IE下有效，才可以创建
  var objShell= new ActiveXObject("WScript.Shell");
  // 用谷歌浏览器打开链接
  objShell.Run("cmd.exe /c start notepad",0,true);
  /* 命令参数说明
  cmd.exe /c dir 是执行完dir命令后关闭命令窗口。
  cmd.exe /k dir 是执行完dir命令后不关闭命令窗口。
  cmd.exe /c start dir 会打开一个新窗口后执行dir指令，原窗口会关闭。
  cmd.exe /k start dir 会打开一个新窗口后执行dir指令，原窗口不会关闭。
   */
}
