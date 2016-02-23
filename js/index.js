$(function () {
	// tooltip插件
	$('[data-toggle="tooltip"]').tooltip();

	// 顶部搜索功能
	var topSearch = $('.topbar-search');
	topSearch.click(function () {
		var $searchPanel = $('.topbar-search-panel');
		if ($searchPanel.is(':visible')) {
			$searchPanel.slideUp(200);
		}else{
			$searchPanel.slideDown(200);
		}
	});

	// 侧边手风琴菜单
	var $submenu = $('.submenu');
	var $mainmenu = $('.mainmenu');
	$mainmenu.on('click','li',function () {
		$(this).toggleClass('open')
		       .siblings().removeClass('open')
		       $(this).next('.submenu').slideToggle(100)
		       .siblings('ul.submenu').slideUp(100);
	});
    
    // 侧边手风琴折叠按钮
	var $sideFold = $('.sidebar-fold');
	var $sideNav  =$('.sidebar-nav');
	var $sideFix = $('.sidebar-fix');
	var $content = $('.content')
	$sideFold.click(function () {
		if ($sideNav.width()>50) {
			$sideNav.animate({width:'50px'},200);
			$sideFix.animate({width:'50px'},200);
			$content.animate({
				marginLeft:'50px'
			},200);
			$(this).find('span').replaceWith('<span class="icon-align-center"></span>');
		}else{
			$sideNav.animate({width:'180px'},200);
			$sideFix.animate({width:'180px'},200);
			$content.animate({
				marginLeft:'180px'
			},200);
			$(this).find('span').replaceWith('<span class="icon-align-justify"></span>');
		}                                                               
	});
   
    	
      
	
	
	



})