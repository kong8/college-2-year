// JavaScript Document
    window.onload=function () {
		var sPlans = ["早上八点完成例会，布置任务和要点。",
		             "尽快发货开发机构，布置任务和要点。",
					 "早上八你回复此电话费就覅和务和要点。",
					 "早更不符合很符合务和要点。",
					 "早的风景如何关闭机构点。",
					 "早鸡肤鹤发肌肤光滑鸡肤鹤发点。"];
		var sWeeks =["星期一","星期二","星期三","星期四","星期五","星期六",];
		var oWrap = document.getElementById("wrap");
		var oLis =oWrap.getElementsByTagName("li");
		 for (var i = 0;i < oLis.length;i++){
			 oLis[i].i=i;
			 oLis[i].onmouseover=function() {
				 for (var j = 0;j<oLis.length;j++){
					 oLis[j].className="linormal";
					 }//alert("鼠标来了第"+(this.i+1)+"个列表项");
				 this.className="liactive";
				 document.getElementById("plan").innerHTML="<h2>"+sWeeks[this.i]+"</h2>"
				                                           +"<p>"+sPlans[this.i]+"</p>";
				 };
			 }
		}