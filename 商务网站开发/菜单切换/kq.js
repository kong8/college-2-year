   window.onload = function() {
		var oWrap = document.getElementById("wrap");
		var oBtns =oWrap.getElementsByTagName("button");
		var oDiv =oWrap.getElementsByTagName("div");
        for (var i = 0;i < oBtns.length;i++) {
            oBtns[i].index=i;
            oBtns[i].onclick = function() {
            for(var n= 0;n< oBtns.length;n++){
                         oBtns[n].className = "";
                         oDiv[n].className = "divHide";
                     }
                     this.className = "btnActive";
                     oDiv[this.index].className = "";
            }
            };
		}