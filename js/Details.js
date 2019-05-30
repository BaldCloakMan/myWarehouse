$(function() {
	$('#head_big_box').load('head.html');
	$("#foot_box_over").load('foot.html');
	$(window).scroll(function() {
		if($(window).scrollTop() >= $(".xiangqingnav").offset().top) {
			$(".xiangqingnav").css({
				"position": "sticky",
				"top": "0"
			})
		}
	});
	$(".min").click(function() {
		if($(".sum input").val() <= "1") {
			$(".sum input").val(1)
		} else {
			$(".sum input").val(Number($(".sum input").val()) - 1)
		}
	});
	$(".max").click(function() {
		$(".sum input").val(Number($(".sum input").val()) + 1)
	});
	$(".Details_img").mousemove(function(e) {
		var x = e.pageX;
		var y = e.pageY;
		console.log($(".zhezhao").width() / 2);
		var tops = y - $(".Details_img").offset().top - $(".zhezhao").height() / 2;
		var lefts = x - $(".Details_img").offset().left - $(".zhezhao").width() / 2;
		lefts < 0 ? lefts = 0 : lefts;
		tops < 0 ? tops = 0 : tops;
		lefts > $(".Details_img").width() - $(".zhezhao").width() ? lefts = $(".Details_img").width() - $(".zhezhao").width() : lefts;
		tops > $(".Details_img").height() - $(".zhezhao").height() ? tops = $(".Details_img").height() - $(".zhezhao").height() : tops;
		$(".zhezhao").css({
			"left": lefts + "px",
			"top": tops + "px"
		});
		var bilix = $(".datu").width() / $(".Details_img").width();
		var biliy = $(".datu").height() / $(".Details_img").height();
		$(".datu").scrollTop(biliy * tops);
		$(".datu").scrollLeft(bilix * lefts)
	});
	$(".Details_img").mouseover(function() {
		$(".zhezhao").show();
		$(".datu").show()
	});
	$(".Details_img").mouseout(function() {
		$(".zhezhao").hide();
		$(".datu").hide()
	});
	$(".xiangqingnav li").click(function() {
		$(this).css({
			"background": "#ce0000",
			"color": "#fff"
		}).siblings().css({
			"background": "#f5f5f5",
			"color": "#666"
		});
		var x = $(this).index();
		if(x == 0 || x == 1) {
			$(window).scrollTop($(".content_head").offset().top - 40)
		} else if(x == 2) {
			$(window).scrollTop($(".shouhou").offset().top)
		} else {
			$(window).scrollTop($(".goodsComments").offset().top)
		}
	});
	var y = 0;
	$(".Other span").click(function() {
		var x = $(this).index();
		if(x == "0") {
			$(".pingjiahezi:eq(0)").show().siblings(".pingjiahezi").hide();
			y = 0
		}
		if(x == $(".Other span").length - 1) {
			$(".pingjiahezi:last-child").show().siblings(".pingjiahezi").hide();
			y = 2
		}
	});
	$(".num").click(function() {
		y = $(this).text() - 1;
		$(".pingjiahezi").eq(y).show().siblings(".pingjiahezi").hide()
	});
	$(".Other span").eq($(".Other span").length - 2).click(function() {
		y += 1;
		y > 2 ? y = $(".pingjiahezi").length - 1 : y;
		$(".pingjiahezi").eq(y).show().siblings(".pingjiahezi").hide()
	});
	$(".Other span").eq(1).click(function() {
		y -= 1;
		y < 0 ? y = 0 : y;
		$(".pingjiahezi").eq(y).show().siblings(".pingjiahezi").hide()
	});

	function getQueryString(pid) {
		var reg = new RegExp("(^|&)" + pid + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		console.log(r);
		if(r != null) {
			return decodeURIComponent(r[2])
		}
		return ''
	}
	var pids = getQueryString("pid");
	$.ajax({
		type: "get",
		url: "../json/type.json",
		success: function(res) {
			$.each(res.list, function(index, ele) {
				console.log(ele);
				if(ele.productCode == pids) {
					console.log(ele.logo);
					$(".Details_img>img").attr("src", ele.logo);
					$(".img_box").html(ele.imgs);
					$(".head_content h1").html(ele.productName);
					$(".chuxiao").html((ele.finalPrice / 100).toFixed(2));
					$(".shichangjia").html((ele.marketPrice / 100).toFixed(2));
					$(".kucun>a").html(ele.provinceStock);
					$(".Commodity_id a").html(ele.predictArrival);
					$(".content_head").html("<div>编码：" + ele.productCode + "</div><div>名称：" + ele.productName + "</div><div>分类：" + ele.fenlei + "</div><div>品牌：" + ele.pinpai + "</div><div>香型：" + ele.xiangxing + "</div><div>酒精度：" + ele.jiujingdu + "</div><div>产地：" + ele.chandi + "</div><div>净含量：" + ele.hanliang + "</div><div>适用场景：" + ele.changjing + "</div>");
					$(".sum a").html(ele.provinceStock);
					$(".shangjia>img").attr("src", ele.tubiao);
					$("#biaoti>p").html("<a>白酒</a>&nbsp;&nbsp;>&nbsp;&nbsp;" + ele.pinpai);
					$(".allimgs").html(ele.bigimg)
				}
			});
			$(".datu>img").attr("src", $(".Details_img>img:first-child").attr("src"));
			$(".img_box img").click(function() {
				$(".datu>img").attr("src", $(this).attr("src"));
				$(".Details_img>img").attr("src", $(this).attr("src"))
			})
		}
	});
	$(".btnsone").click(function() {
		
		if(!localStorage.zhanghao1) {
			location.href = "Landing.html"
		} else {
			var buycarimg = $(".Details_img>img").attr("src");
			var buycarname = $(".head_content h1").html();
			var buycarprice = $(".chuxiao").html();
			var buysum = Number($(".sum input").val());
			var buycun = $(".sum a").html();
			var buyid = Number($(".content_head>div:nth-child(1)").html().substr(3));
			var df = localStorage.jiuarr;
			if(df == undefined || df == null) {
				localStorage.jiuarr = "[]";
			}
			var arr = JSON.parse(localStorage.jiuarr);
			var shangpin = {
				"logo": buycarimg,
				"name": buycarname,
				"price": buycarprice,
				"sum": buysum,
				"kucun": buycun,
				"pid": buyid
			};
			var a = JSON.parse(localStorage.jiuarr);
			if(CheckCookie(buyid)) {
				updateNum(buyid, buysum)
			} else {
				arr.push(shangpin);
				localStorage.jiuarr = JSON.stringify(arr)
			}
		}
		if(!localStorage.jiuarr){
		$(".goods_all").html("<img src='https://www.1919.cn/images/shopcart.png'></img><span>购物车中还没有商品，赶紧选购吧！</span>")
		}else{
			var x=JSON.parse(localStorage.jiuarr)
			$(".goods_all").html('<img src="'+x[0].logo+'" alt="" /><span>'+x[0].name+'</span>')
		}
		
		
		
	});

	function CheckCookie(pid) {
		var arr = JSON.parse(localStorage.jiuarr);
		for(var i = 0; i < arr.length; i += 1) {
			if(pid == arr[i].pid) {
				return true
			}
		}
		return false
	}

	function updateNum(pid, num) {
		var arr = JSON.parse(localStorage.jiuarr);
		console.log(arr);
		for(var i = 0; i < arr.length; i += 1) {
			if(pid == arr[i].pid) {
				arr[i].sum += num;
			}
		}
		localStorage.jiuarr = JSON.stringify(arr)
	}
});