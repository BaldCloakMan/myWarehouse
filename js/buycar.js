$(function() {
	$("#lastfoot").load("foot.html");
	$(".buycarsome a").click(function() {
		location.href = "index.html"
	});
	$(".xiala").mouseover(function() {
		$(".xuanzhe").show()
	});
	$(".xiala").mouseout(function() {
		$(".xuanzhe").hide()
	});
	$(".xuanzhe").mouseover(function() {
		$(".xuanzhe").show()
	});
	$(".xuanzhe").mouseout(function() {
		$(".xuanzhe").hide()
	});
	$(".zuoup").click(function() {
		location.href = "index.html"
	});

	function ll() {
		var oo = "";
		if(!(localStorage.jiuarr)) {
			$(".buzai").show();
			$(".mycar").hide()
		} else if(localStorage.jiuarr == "[]") {
			$(".buzai").show();
			$(".mycar").hide()
		} else {
			$(".mycar").show();
			$(".buzai").hide();
			var kk = JSON.parse(localStorage.jiuarr);
			console.log(kk);
			$.each(kk, function(index, ele) {
				$(".zuobian a").html(index + 1);
				oo += '<div class="Product_details"><div class="xuanzhong"><input type="checkbox" name="' + ele.pid + '" value="" class="check"/></div><div class="shangpinimg">	<img src="' + ele.logo + '"/></div><div class="sahngpinname"><p>' + ele.name + '</p><div></div></div><div class="itprice">￥' + ele.price + '</div><div class="jiajian"><span></span><input type="" name="" id="" value="' + ele.sum + '" /><span></span>	<p>库存' + ele.kucun + '</p></div><div class="buyprice">￥' + ele.sum * ele.price + '</div><div class="caozuo"><span class="deleit">删除</span><a>加入收藏</a></div>	</div>'
			});
			$(".allshangpin").html(oo);
			var dele = document.querySelectorAll(".deleit");
			console.log(dele);
			for(var i = 0; i < dele.length; i += 1) {
				dele[i].index = i;
				dele[i].onclick = function() {
					var asp = JSON.parse(localStorage.jiuarr);
					for(var j = 0; j < asp.length; j += 1) {
						if(asp[j].pid == asp[this.index].pid) {
							var x = asp.splice(this.index, 1);
							localStorage.jiuarr = JSON.stringify(asp);
							ll();
							zongjia = null;
							pp()
						}
					}
				}
			}
			$('.check').change(function() {
				var flag = true;
				var flag1 = false;
				$.each($('.check'), function(index, ele) {
					if(ele.checked) {
						flag1 = true
					} else {
						flag = false
					}
				});
				if(flag && flag1) {
					$('.all').prop('checked', true)
				} else {
					$('.all').prop('checked', false)
				}
				var _this = $(this);
				var kk = JSON.parse(localStorage.jiuarr);
				$.each(kk, function(index, ele) {
					console.log(ele);
					if(ele.pid == _this.prop('name')) {
						ele.checked = _this.is(':checked')
					}
				});
				localStorage.jiuarr = JSON.stringify(kk)
			});
			$.each($('.check'), function(index, ele) {
				$.each(kk, function(index, ele1) {
					if(ele.getAttribute('name') == ele1.pid) {
						ele.checked = ele1.checked
					}
				})
			});
			var flag = true;
			var flag1 = false;
			$.each($('.check'), function(index, ele) {
				if(ele.checked) {
					flag1 = true
				} else {
					flag = false
				}
			});
			if(flag && flag1) {
				$('.all').prop('checked', true)
			} else {
				$('.all').prop('checked', false)
			}
			if($('.xuanzhong input').is(':checked')) {
				zongjia = null;
				pp();
				uu();
				if(localStorage.zhanghao == localStorage.zhanghao1) {
					$('.left_box').css('display', 'none');
					$('.left-box').css('display', 'block')
				} else {
					$('.left_box').css('display', 'block');
					$('.left-box').css('display', 'none')
				}
			}
			aa();
			ww();
			jj()
		}
	}
	ll();
	var zongjia = null;

	function pp() {
		var gouxuan = document.querySelectorAll(".xuanzhong input");
		var shuliang = document.querySelectorAll(".jiajian input");
		var danjia = document.querySelectorAll(".itprice");
		var flag = true;
		var flag1 = false;
		for(var i = 0; i < gouxuan.length; i += 1) {
			if(gouxuan[i].checked == true) {
				zongjia += shuliang[i].value * danjia[i].innerHTML.substr(1);
				flag1 = true
			} else {
				flag = false
			}
		}
		if(flag || flag1) {
			$(".zongshu").html("￥" + zongjia.toFixed(2))
		} else {
			zongjia = 0;
			$(".zongshu").html("￥00.00")
		}
	}

	function aa() {
		$('.xuanzhong input').change(function() {
			if($('.xuanzhong input').is(':checked')) {
				zongjia = null;
				pp()
			} else {
				$(".zongshu").html("￥" + 0)
			}
		})
	}
	$('.Select_All input').change(function() {
		zongjia = null;
		if($('.Select_All input').is(':checked')) {
			$(".xuanzhong input").prop("checked", true);
			pp()
		} else {
			$(".xuanzhong input").prop("checked", false);
			$(".zongshu").html("￥" + 0)
		}
	});
	$(".jiajian span:nth-child(1)").click(function() {
		var z = $(".jiajian input").eq($(this).index()).val();
		var x = $('.itprice').html().substr(1);
		var a = (z * x).toFixed(2);
		$(this).parent().parent().children().eq(5).html("￥" + a)
	});
	$(".jiajian span:nth-child(3)").click(function() {
		var z = $(this).parent().parent().children().children().eq(5).val();
		var x = $(this).parent().parent().children().eq(3).html().substr(1);
		var a = (z * x).toFixed(2);
		$(this).parent().parent().children().eq(5).html("￥" + a)
	});

	function ww() {
		var jian = document.querySelectorAll(".jiajian span:nth-child(1)");
		for(var i = 0; i < jian.length; i ++) {
			jian[i].index = i;
			jian[i].onclick = function() {
				zongjia = null;
				var x = $('.jiajian:eq(' + this.index + ') input').val();
				x -= 1;
				if(x < 1) {
					x = 1
				}
				$('.jiajian:eq(' + this.index + ') input').val(x);
				pp()
			}
		}
	}

	function jj() {
		var jia = document.querySelectorAll(".jiajian span:nth-child(3)");
		for(var i = 0; i < jia.length; i ++ ) {
			jia[i].index = i;
			jia[i].onclick = function() {
				zongjia = null;
				var x = $('.jiajian:eq(' + this.index + ') input').val();
					Number(x)
					x++
				$('.jiajian:eq(' + this.index + ') input').val(x);
				pp()
			}
		}
	}

	function uu() {}
	$('.tc').click(function() {
		sessionStorage.zhanghao1 = localStorage.zhanghao1;
		localStorage.removeItem("zhanghao1");
		location.href = "Landing.html"
	});
	$('.all').change(function() {
		zongjia = 0;
		$('input[type=checkbox]').prop('checked', $(this).is(':checked'));
		var kk = JSON.parse(localStorage.jiuarr);
		var _this = $(this);
		$.each(kk, function(index, ele) {
			ele.checked = _this.is(':checked')
		});
		pp();
		localStorage.jiuarr = JSON.stringify(kk)
	})
});