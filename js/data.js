$.when($.ajax({url:"../json/Hot.json",type:"get"}),$.ajax({url:"../json/city.json",type:"get"}),$.ajax({url:"../json/Recommended.json",type:"get"}),$.ajax({type:"get",url:"../json/nowKill.json",}),$.ajax({type:"get",url:"../json/zone.json",}),$.ajax({type:"get",url:"../json/Advertising.json",}),$.ajax({type:"get",url:"../json/type.json",}),$.ajax({type:"get",url:"../json/typetow.json",}),$.ajax({type:"get",url:"../json/typethree.json",}),$.ajax({type:"get",url:"../json/typefour.json",}),$.ajax({type:"get",url:"../json/typefive.json",}),$.ajax({type:"get",url:"../json/gg.json",}),$.ajax({type:"get",url:"../json/typeo.json",}),$.ajax({type:"get",url:"../json/typet.json",}),$.ajax({type:"get",url:"../json/typeoo.json",}),$.ajax({type:"get",url:"../json/typeoot.json",}),$.ajax({type:"get",url:"../json/typeooot.json",}),$.ajax({type:"get",url:"../json/typeto.json",}),$.ajax({type:"get",url:"../json/typettwo.json",}),$.ajax({type:"get",url:"../json/typetthree.json",}),$.ajax({type:"get",url:"../json/typethreeo.json",}),$.ajax({type:"get",url:"../json/typefouro.json",})).done(function(res1,res2,res3,res4,res5,res6,res7,res8,res9,res10,res11,res12,res13,res14,res15,res16,res17,res18,res19,res20,res21,res22){$.each(res1[0],function(index,ele){var LiquorStr="";var WineStr="";var ForeignwinStr="";var BeerStr="";$.each(ele,function(index,ele){if(ele.MerchanType=="Liquor"){LiquorStr+='<div><a><img src="'+ele.brandLogoImgUrl+'" alt="" /></a><span><p>'+ele.brandName+"</p><p>进店看看</p></span></div>"}else{if(ele.MerchanType=="Wine"){WineStr+='<div><a><img src="'+ele.brandLogoImgUrl+'" alt="" /></a><span><p>'+ele.brandName+"</p><p>进店看看</p></span></div>"}else{if(ele.MerchanType=="Foreignwin"){ForeignwinStr+='<div><a><img src="'+ele.brandLogoImgUrl+'" alt="" /></a><span><p>'+ele.brandName+"</p><p>进店看看</p></span></div>"}else{if(ele.MerchanType=="Beer"){BeerStr+='<div><a><img src="'+ele.brandLogoImgUrl+'" alt="" /></a><span><p>'+ele.brandName+"</p><p>进店看看</p></span></div>"}}}}$(".Liquorimg").html(LiquorStr);$(".Foreignwinimg").html(ForeignwinStr);$(".Wineimg").html(WineStr);$(".BeerStrimg").html(BeerStr)})});$.each(res4[0],function(index,ele){var kill="";$.each(ele,function(index,ele){kill+="<li>"+'<img src="../'+ele.killimg+'" alt="" />'+'<div class="Kill_name">'+"<span>"+ele.killName+"</span>"+"</div>"+'<div class="Kill_price">'+"<span><span>￥</span>"+ele.killprice+"</span>"+"<span><span>￥</span>"+ele.oldPrice+"</span>"+"</div>"+'<div class="kill_inventory">'+'<div class="Kill_progress_bar"><span style="width: '+130*Number(ele.nowsum/100)+'px;"></span></div>'+'<span class="Remaining"><span>'+ele.nowsum+"</span>%</span>"+"</div>"+'<div class="kill_now_buy">'+"	立即购买"+"</div>"+"</li>"});$(".current_Shopping_content ul").html(kill)});$.each(res5[0],function(index,ele){$.each(ele,function(index,ele){if(ele.type=="LiquorZone"){$(".zoneLiquor").append("<img src='"+ele.zoneimg+"' />");$(".zoneLiquor>div").append("<a>"+ele.zonename+"</a>")}else{if(ele.type=="WineZone"){$(".zonewineLiquor").append("<img src='"+ele.zoneimg+"' />");$(".zonewineLiquor>div").append("<a>"+ele.zonename+"</a>")}else{if(ele.type=="Foreignwine"){$(".zoneForeignwine").append("<img src='"+ele.zoneimg+"' />");$(".zoneForeignwine>div").append("<a>"+ele.zonename+"</a>")}else{if(ele.type=="Beer"){$(".zoneBeer").append("<img src='"+ele.zoneimg+"' />");$(".zoneBeer>div").append("<a>"+ele.zonename+"</a>")}else{if(ele.type=="Other"){$(".zoneOther").append("<img src='"+ele.zoneimg+"' />");$(".zoneOther>div").append("<a>"+ele.zonename+"</a>")}}}}}})});var pijiulis="";var baijiu="";var putaojiu="";var qitajiu="";var yangjiu="";var baijiutop="";var baijiutop2="";var ptj="";var ptj2="";var yj="";var yj2="";var pj="";var pj2="";var qt="";var qt2="";$.each(res3[0],function(index,ele){$.each(ele,function(index,ele){if(ele.categoryId==337063315819860000){if(ele.productName.match("啤酒")){pijiulis+="<li>"+'<img src="https://1919-new-bbc-pro-oss.1919.cn/'+ele.logo+'" alt="" />'+"<p>"+ele.productName+"</p>"+'<div class="Myself_box">'+"<span>自营</span>"+"<span><span>￥</span>"+(ele.finalPrice/100).toFixed(2)+"</span>"+"</div>"+"</li>"}else{baijiu+="<li>"+'<img src="https://1919-new-bbc-pro-oss.1919.cn/'+ele.logo+'" alt="" />'+"<p>"+ele.productName+"</p>"+'<div class="Myself_box">'+"<span>自营</span>"+"<span><span>￥</span>"+(ele.finalPrice/100).toFixed(2)+"</span>"+"</div>"+"</li>"}}else{if(ele.categoryId==337063315824054300){if(ele.productName.match("葡萄")){putaojiu+="<li>"+'<img src="https://1919-new-bbc-pro-oss.1919.cn/'+ele.logo+'" alt="" />'+"<p>"+ele.productName+"</p>"+'<div class="Myself_box">'+"<span>自营</span>"+"<span><span>￥</span>"+(ele.finalPrice/100).toFixed(2)+"</span>"+"</div>"+"</li>"}else{if(ele.productName.match("花雕")||ele.productName.match("稽山鉴水")){qitajiu+="<li>"+'<img src="https://1919-new-bbc-pro-oss.1919.cn/'+ele.logo+'" alt="" />'+"<p>"+ele.productName+"</p>"+'<div class="Myself_box">'+"<span>自营</span>"+"<span><span>￥</span>"+(ele.finalPrice/100).toFixed(2)+"</span>"+"</div>"+"</li>"
}}}else{yangjiu+="<li>"+'<img src="https://1919-new-bbc-pro-oss.1919.cn/'+ele.logo+'" alt="" />'+"<p>"+ele.productName+"</p>"+'<div class="Myself_box">'+"<span>自营</span>"+"<span><span>￥</span>"+(ele.finalPrice/100).toFixed(2)+"</span>"+"</div>"+"</li>"}}})});$(".pijiu ul").html(pijiulis);$(".baijiu ul").html(baijiu);$(".putaojiu ul").html(putaojiu);$(".qitajiu ul").html(qitajiu);$(".yangjiu ul").html(yangjiu);var nn=1;for(var i=0;i<2;i++){baijiutop+="<li>"+"<div>"+nn+++"</div>"+"<div>"+'<img src="'+res7[0].list[nn].logo+'" />'+"<div>"+"<a>"+res7[0].list[nn].productName+"</a>"+"<div>"+"<span>"+"1919五粮液自营店"+"</span>"+"</div>"+"</div>"+"</div>"+"</li>	"}for(var i=2;i<5;i++){baijiutop2+="<li>"+"<div>"+nn+++"</div>"+"<a>"+res7[0].list[nn].productName+"</a>"+"</li>"}var topone=baijiutop+baijiutop2;$(".hot_one ul").html(topone);var ll=1;for(var i=0;i<2;i++){ptj+="<li>"+"<div>"+ll+++"</div>"+"<div>"+'<img src="'+res8[0].list[ll].logo+'" />'+"<div>"+"<a>"+res8[0].list[ll].productName+"</a>"+"<div>"+"<span>"+"1919五粮液自营店"+"</span>"+"</div>"+"</div>"+"</div>"+"</li>	"}for(var i=2;i<5;i++){ptj2+="<li>"+"<div>"+ll+++"</div>"+"<a>"+res8[0].list[ll].productName+"</a>"+"</li>"}var toptwo=ptj+ptj2;$(".hot_two ul").html(toptwo);var qq=1;for(var i=0;i<2;i++){yj+="<li>"+"<div>"+qq+++"</div>"+"<div>"+'<img src="'+res9[0].list[qq].logo+'" />'+"<div>"+"<a>"+res9[0].list[qq].productName+"</a>"+"<div>"+"<span>"+"1919五粮液自营店"+"</span>"+"</div>"+"</div>"+"</div>"+"</li>	"}for(var i=2;i<5;i++){yj2+="<li>"+"<div>"+qq+++"</div>"+"<a>"+res9[0].list[qq].productName+"</a>"+"</li>"}var topthree=yj+yj2;$(".hot_three ul").html(topthree);var ww=1;for(var i=0;i<2;i++){pj+="<li>"+"<div>"+ww+++"</div>"+"<div>"+'<img src="'+res7[0].list[ww].logo+'" />'+"<div>"+"<a>"+res7[0].list[ww].productName+"</a>"+"<div>"+"<span>"+"1919五粮液自营店"+"</span>"+"</div>"+"</div>"+"</div>"+"</li>	"}for(var i=2;i<5;i++){pj2+="<li>"+"<div>"+ww+++"</div>"+"<a>"+res7[0].list[ww].productName+"</a>"+"</li>"}var topfour=pj+pj2;$(".hot_four ul").html(topfour);var ff=1;for(var i=0;i<2;i++){qt+="<li>"+"<div>"+ff+++"</div>"+"<div>"+'<img src="'+res11[0].list[ff].logo+'" />'+"<div>"+"<a>"+res11[0].list[ff].productName+"</a>"+"<div>"+"<span>"+"1919五粮液自营店"+"</span>"+"</div>"+"</div>"+"</div>"+"</li>	"}for(var i=2;i<5;i++){qt2+="<li>"+"<div>"+ff+++"</div>"+"<a>"+res11[0].list[ff].productName+"</a>"+"</li>"}var topfive=qt+qt2;$(".hot_five ul").html(topfive);var gg1="";var gg2="";var gg3="";var gg4="";var gg5="";$.each(res12[0],function(index,ele){$.each(ele,function(index,ele){if(ele.type=="baijiu"){gg1+='<li><img src="'+ele.imge+'" alt="" /></li>'}else{if(ele.type=="putaojiu"){gg2+='<li><img src="'+ele.imge+'" alt="" /></li>'}else{if(ele.type=="yangjiu"){gg3+='<li><img src="'+ele.imge+'" alt="" /></li>'}else{if(ele.type=="pijiu"){gg4+='<li><img src="'+ele.imge+'" alt="" /></li>'}else{gg5+='<li><img src="'+ele.imge+'" alt="" /></li>'}}}}})});$(".baijiugg ul").html(gg1);$(".putaojiugg ul").html(gg2);$(".yangjiugg ul").html(gg3);$(".pijiugg ul").html(gg4);$(".qitagg ul").html(gg5);var taba1="";var taba2="";var taba3="";var pttaba1="";var pttaba2="";var pttaba3="";var yjtaba1="";var yjtaba2="";var yjtaba3="";var pjtaba1="";var qttaba1="";$.each(res7[0].list,function(index,ele){taba1+="<li>"+'<img src="'+ele.logo+'"/>'+'<p class="mingzi">'+ele.productName+"</p>"+'<p class="qian"><span>￥</span>'+ele.finalPrice+"</p>"+'<p class="biao"><span>自营</span></p>'+"</li>"});$.each(res13[0].list,function(index,ele){taba2+="<li>"+'<img src="'+ele.logo+'"/>'+'<p class="mingzi">'+ele.productName+"</p>"+'<p class="qian"><span>￥</span>'+ele.finalPrice+"</p>"+'<p class="biao"><span>自营</span></p>'+"</li>"});$.each(res14[0].list,function(index,ele){taba3+="<li>"+'<img src="'+ele.logo+'"/>'+'<p class="mingzi">'+ele.productName+"</p>"+'<p class="qian"><span>￥</span>'+ele.finalPrice+"</p>"+'<p class="biao"><span>自营</span></p>'+"</li>"});$.each(res15[0].list,function(index,ele){pttaba1+="<li>"+'<img src="'+ele.logo+'"/>'+'<p class="mingzi">'+ele.productName+"</p>"+'<p class="qian"><span>￥</span>'+ele.finalPrice+"</p>"+'<p class="biao"><span>自营</span></p>'+"</li>"});$.each(res16[0].list,function(index,ele){pttaba2+="<li>"+'<img src="'+ele.logo+'"/>'+'<p class="mingzi">'+ele.productName+"</p>"+'<p class="qian"><span>￥</span>'+ele.finalPrice+"</p>"+'<p class="biao"><span>自营</span></p>'+"</li>"});$.each(res17[0].list,function(index,ele){pttaba3+="<li>"+'<img src="'+ele.logo+'"/>'+'<p class="mingzi">'+ele.productName+"</p>"+'<p class="qian"><span>￥</span>'+ele.finalPrice+"</p>"+'<p class="biao"><span>自营</span></p>'+"</li>"});$.each(res18[0].list,function(index,ele){yjtaba1+="<li>"+'<img src="'+ele.logo+'"/>'+'<p class="mingzi">'+ele.productName+"</p>"+'<p class="qian"><span>￥</span>'+ele.finalPrice+"</p>"+'<p class="biao"><span>自营</span></p>'+"</li>"});$.each(res19[0].list,function(index,ele){yjtaba2+="<li>"+'<img src="'+ele.logo+'"/>'+'<p class="mingzi">'+ele.productName+"</p>"+'<p class="qian"><span>￥</span>'+ele.finalPrice+"</p>"+'<p class="biao"><span>自营</span></p>'+"</li>"
});$.each(res20[0].list,function(index,ele){yjtaba3+="<li>"+'<img src="'+ele.logo+'"/>'+'<p class="mingzi">'+ele.productName+"</p>"+'<p class="qian"><span>￥</span>'+ele.finalPrice+"</p>"+'<p class="biao"><span>自营</span></p>'+"</li>"});$.each(res21[0].list,function(index,ele){pjtaba1+="<li>"+'<img src="'+ele.logo+'"/>'+'<p class="mingzi">'+ele.productName+"</p>"+'<p class="qian"><span>￥</span>'+ele.finalPrice+"</p>"+'<p class="biao"><span>自营</span></p>'+"</li>"});$.each(res22[0].list,function(index,ele){qttaba1+="<li>"+'<img src="'+ele.logo+'"/>'+'<p class="mingzi">'+ele.productName+"</p>"+'<p class="qian"><span>￥</span>'+ele.finalPrice+"</p>"+'<p class="biao"><span>自营</span></p>'+"</li>"});$(".bai1").html(taba1);$(".bai2").html(taba2);$(".bai3").html(taba3);$(".pt1").html(pttaba1);$(".pt2").html(pttaba2);$(".pt3").html(pttaba3);$(".yj1").html(yjtaba1);$(".yj2").html(yjtaba2);$(".yj3").html(yjtaba3);$(".pj1").html(pjtaba1);$(".qt1").html(qttaba1);$(".Liquor_name_nav a").mouseover(function(){$(this).css("background","#FFFFFF").siblings().css("background","rgb(255,255,255,0.6)");$(this).parent().parent().children("img").eq($(this).index()).show().siblings("img").hide()})});