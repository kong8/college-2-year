window.onload = function () {
    var dS=['对于“插入”选项卡上的库，在设计时都充分考虑了其中的项与文档整体外观的协调性。您可以使用这些库来插入表格、页眉、页脚、列表、封面以及其他文档构建基块。您创建的          图片、图表或关系图也将与当前的文档外观协调一致。',

            '在“主页”选项卡上，通过从快速样式库中为所选文本选择一种外观，您可以方便地更改文档中所选文本的格式。您还可以使用“主页”选项卡上的其他控件来直接设置文本格式。大多数控件都允许您选择是使用当前主题外观，还是使用某种直接指定的格式。',

            '若要更改文档的整体外观，请在“页面布局”选项卡上选择新的“主题”元素。若要更改快速样式库中的可用外观，请使用“更改当前快速样式集”命令。主题库和快速样式库都提供了重置命令，因而您总是能够将文档外观还原为当前模板所包含的原始外观。',

            '对于“插入”选项卡上的库，在设计时都充分考虑了其中的项与文档整体外观的协调性。 您可以使用这些库来插入表格、页眉、页脚、列表、封面以及其他文档构建基块。 您创建的图片、图表或关系图也将与当前的文档外观协调一致。'];
		var oWrap = document.getElementById("wrap");
		var oBtns =oWrap.getElementsByTagName("button");
		for (var i = 0;i < oBtns.length;i++) {
            oBtns[i].i = i;
			oBtns[i].onclick = function () {
                for (var j = 0;j < oBtns.length;j++) {
                oBtns[j].className="";
            };
            this.className = "btnActive";
            document.getElementById("txt").innerHTML = "<p>"+dS[this.i]+"</p>";
            };
			};
		}