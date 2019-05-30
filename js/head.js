$(function() {
	$.ajax({
		type:"get",
		url:"../json/city.json",
		async:true,
		success:function(res){
			$.each(res, function(index,ele) {
				$.each(ele,function(index,ele){
						if (ele.prefix=="A") {
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".AA ul").html(x)
							})
							
						} else if(ele.prefix=="B"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".BB ul").html(x)
							})
						}else if(ele.prefix=="C"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".CC ul").html(x)
							})
						}else if(ele.prefix=="D"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".DD ul").html(x)
							})
						}else if(ele.prefix=="E"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".EE ul").html(x)
							})
						}else if(ele.prefix=="F"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".FF ul").html(x)
							})
						}else if(ele.prefix=="G"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".GG ul").html(x)
							})
						}else if(ele.prefix=="H"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".HH ul").html(x)
							})
						}else if(ele.prefix=="J"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".JJ ul").html(x)
							})
						}else if(ele.prefix=="K"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".KK ul").html(x)
							})
						}else if(ele.prefix=="L"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".LL ul").html(x)
							})
						}else if(ele.prefix=="M"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".MM ul").html(x)
							})
						}else if(ele.prefix=="N"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".NN ul").html(x)
							})
						}else if(ele.prefix=="P"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".PP ul").html(x)
							})
						}else if(ele.prefix=="Q"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".QQ ul").html(x)
							})
						}else if(ele.prefix=="R"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".RR ul").html(x)
							})
						}else if(ele.prefix=="S"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".SS ul").html(x)
							})
						}else if(ele.prefix=="T"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".TT ul").html(x)
							})
						}else if(ele.prefix=="W"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".WW ul").html(x)
							})
						}else if(ele.prefix=="X"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".XX ul").html(x)
							})
						}else if(ele.prefix=="Y"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".YY ul").html(x)
							})
						}else if(ele.prefix=="Z"){
							var x="";
							$.each(ele.cities,function(index,ele){
								x+="<li><a pid="+ele.provinceId+">"+ele.cityName+"</a></li>"
								$(".ZZ ul").html(x)
							})
						}
				})
				var x=""
			$(".sou>input").keyup(function(e){

				x=""
					$.each($(".sydf a"), function(index,ele) {
						
					 if($(".sou>input").val()==undefined||$(".sou>input").val()==""){
						$(".tan ul").html("")
						$(".tan ul").hide()
						
					}else if($(".sou>input").val()==ele.innerHTML.match($(".sou>input").val())){
						x+="<li><span>"+ele.innerHTML+"</span><span class='huoqu' sid="+ele.getAttribute("pid")+"></span></li>"
						$(".tan ul").show()

//						
				  }
					
				});
				$(".tan ul").html(x)
				$(".tan ul li").click(function(){
//					alert()
					$(".di>a").html($(this).children().first().html())
					$('.diz').html($(this).children().first().html())
					$("#shdz").hide()
					$(".tan ul").hide()
				})
				
			
				
				
				if($(".tan ul").height()<193){
					console.log($(".tan ul").height())
					$(".tan ul").css("height","auto")
				}else if($(".tan ul").height()>160){
					$(".tan ul").css("height","192px")	
					$(".tan ul").css("overflow","auto")
				}
				
					
				
//					console.log(res)
					
				
//				console.log(res)

//						$.each($(".huoqu"),function(index,ele){
////							console.log(ele.getAttribute("sid"))	
//						
//						})
//							$.each(res.items,function(index,ele){
////								console.log(ele)
//
//							$.each(ele.cities,function(index,ele){
////								console.log(ele)
//								$.each($(".huoqu"),function(index,ele){
////							
//									if(ele.getAttribute("sid")==ele.provinceId){
//										$(".huoqu").html(ele.provinceName)
//									}
////console.log(ele)
//						
//						})
////							
////						}
////						
//					})
//					
//					
//				})
							
						
			})
			
			
	
			});//res
			
			
			$(".miss").click(function(){
					$("#shdz").hide()
				})
			$(".fang ul li a").click(function(){
				$('.diz').html($(this).html())
				$(".di>a").html($(this).html()+"<i></i>")
				$('.fang').hide()	
			})
			
			
		}
		
	});
	$('.diz').click(function(){
				$("#shdz").show()
		
	})
	$(".di>a").click(function(){
		$('.fang').show()
	})
	
	
	
	
	
	
	
	
	if(localStorage.zhanghao == localStorage.zhanghao1) {

		if(localStorage.zhanghao1){
		var kk = localStorage.zhanghao1;
		var a = kk.split(",");
				$(".yhm").html(a[0]);
		$(".Login_registration div:nth-child(1) span").html("Hi~" + a[0] + "欢迎来到1919");
		$(".Login_registration div:nth-child(2) a:nth-child(1)").html("个人中心");
		$(".Login_registration div:nth-child(2) a:nth-child(2)").html("退出");
		$(".left_box").css("display", "none");
		$(".left-box").css("display", "block")
		}
	} else {
		$(".left_box").css("display", "block");
		$(".left-box").css("display", "none");
		$(".Login_registration div:nth-child(1) span").html("Hi~欢迎来到1919");
		$(".Login_registration div:nth-child(2) a:nth-child(1)").html("登陆");
		$(".Login_registration div:nth-child(2) a:nth-child(2)").html("注册")
	}
	$(".left_box :nth-child(6)").click(function() {
		location.href = "Registered.html"
	});
	$(".left_box :nth-child(5)").click(function() {
		location.href = "Landing.html"
	});
	$(".cartsAll").mouseover(function() {
		$(".cartsAll").css("background", "#FFFFFF");
		$(".goods_all").css("display", "block");
		$(".cartsAll>em").css("background-position", "-66px -3px")
	});
	$(".cartsAll").mouseout(function() {
		$(".cartsAll").css("background", "#FAFAFA");
		$(".goods_all").css("display", "none");
		$(".cartsAll>em").css("background-position", " -54px -3px")
	});
	$(".goods_all").mouseover(function() {
		$(".cartsAll").css("background", "#FFFFFF");
		$(".goods_all").css("background", "#F5F5F5");
		$(".goods_all").css("display", "block");
		$(".cartsAll>em").css("background-position", "-66px -3px")
	});
	$(".goods_all").mouseout(function() {
		$(".cartsAll").css("background", "#FAFAFA");
		$(".goods_all").css("background", "#FFFFFF");
		$(".goods_all").css("display", "none");
		$(".cartsAll>em").css("background-position", " -54px -3px")
	});
	$(".search_inp>ul").mouseover(function() {
		$("#inp_tex").css("left", "88px")
	});
	$(".search_inp>ul").mouseout(function() {
		$("#inp_tex").css("left", "0")
	});
	$(".Menu ul li ul").css("display", "none");
	$(".head_box_nav_content .Menu>ul>li").mouseover(function() {
		$(this).css("background", "white").siblings().css("background", "#F5F5F5");
		$(".Menu ul li ul").css("display", "none").eq($(this).index()).show()
	});
	$(".head_box_nav_content .Menu>ul>li").mouseout(function() {
		$(this).css("background", "#F5F5F5").siblings().css("background", "#F5F5F5");
		$(".Menu ul li ul").css("display", "none").eq($(this).index()).hide()
	});
	$(".head_box_nav_content li:nth-child(1)").mouseover(function() {
		$(".Menu").css("display", "block")
	});
	$(".Menu").mouseout(function() {
		$(".Menu").css("display", "none")
	});
	$(".Menu li>div:nth-child(1)").click(function() {
		$(".isbai").attr("type", "baijiu");
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "../json/type.json", true);
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
				var x = JSON.parse(xhr.response);
			}
		};
		xhr.send();
		location.href = "Listpage.html?type=" + $(".isbai").attr("type")
	});
	$(".cartsAll span").click(function() {
		location.href = "buycar.html"
	});
	$(".tc").click(function() {
		sessionStorage.zhanghao1 = localStorage.zhanghao1;
		localStorage.removeItem("zhanghao1");
		location.href = "Landing.html"
	})
	if(!localStorage.jiuarr||JSON.parse(localStorage.jiuarr).length==0){
		$(".goods_all").html("<img src='https://www.1919.cn/images/shopcart.png'></img><span>购物车中还没有商品，赶紧选购吧！</span>")
	}else{
		var x=JSON.parse(localStorage.jiuarr)
		$(".goods_all").html('<img src="'+x[0].logo+'" alt="" /><span>'+x[0].name+'</span>')
	}
});