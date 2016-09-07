window.onload = function(){
	checkBox();
	deleteFuc();
	addtra();
}

var checkBox = function (){
	var checkeBoxList = document.getElementsByClassName('jd-check-box');

	//循环添加事件
	for (var i = 0; i < checkeBoxList.length; i++) {
		checkeBoxList[i].onclick = function(){
			var hasChecked = this.getAttribute('checked');
			if (hasChecked != null) {
				this.removeAttribute('checked');
			}else{
				this.setAttribute('checked',' ');
			}
		}
	};
}

// 删除方法
var deleteFuc = function(){
	//删除按钮的集合
	var deleteList = document.getElementsByClassName("delete-box");

	// 弹出层
	var win = document.getElementsByClassName("jd-win")[0];
	// 弹出层子盒子;
	var winBox = document.getElementsByClassName("jd-win-box")[0];

	var up;

	for (var i = 0; i < deleteList.length; i++) {
		deleteList[i].onclick = function(){
			win.style.display = "block";
			winBox.className = "jd-win-box jumpOut"; 

			var deleteobj = this;

			up = deleteobj.getElementsByClassName("delete-box-top")[0];
			// console.log( up );

			up.style.transition = "all 1s ease 0s";
			up.style.webkitTransition = "all 1s ease 0s";

			up.style.transform = "translateY(-5px) ranslateX(-2px) rotate(-45deg)";
			up.style.webkitTransform = "translateY(-5px) translateX(-2px) rotate(-45deg)";
		}
	};

	winBox.getElementsByClassName("cancel")[0].onclick =function(){
		closewin();
	}

	win.onclick = function(){
		closewin();
	}
	var closewin = function(){
		win.style.display = "none";
		winBox.className = "jd-win-box";

		if (up) {
			up.style.transform = "translateY(0) ranslateX(0) rotate(0)";
			up.style.webkitTransform = "translateY(0) translateX(0) rotate(0)";
		};
	}
	 

}

// 加减数量
var addtra = function(){
	// 按钮事件
var jian=document.getElementsByClassName('jian');
var shu=document.getElementsByClassName('shu');
var jia=document.getElementsByClassName('jia');
for(var i=0;i<jia.length;i++){
	jian[i].shu=shu[i];
	jia[i].shu=shu[i];
	jia[i].jian=jian[i];
	jian[i].onclick=function(){
		var n=parseInt(this.shu.value)
		if(n>1){
			n--;
		}
		this.shu.value=n;
	};
	jia[i].onclick=function(){
		var n=parseInt(this.shu.value)
		n++;
		this.shu.value=n;
	};
}

}
	