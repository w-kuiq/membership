$(function () {
	// tooltip插件
	$('[data-toggle="tooltip"]').tooltip();
    //dataTable插件
    $('#manage2-table').dataTable({
        "oLanguage": {
		"sLengthMenu": "每页显示 _MENU_ 条记录",
		"sZeroRecords": "抱歉， 没有找到",
		"sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
		"sInfoEmpty": "没有数据",
		"sInfoFiltered": "(从 _MAX_ 条数据中检索)",
		"sSearch":"搜索",
		"oPaginate": {
		"sFirst": "首页",
		"sPrevious": "前一页",
		"sNext": "后一页",
		
		"sLast": "尾页"
		},
		"sZeroRecords": "没有检索到数据",
		"sProcessing": "<img src='./loading.gif' />"
		},
		"aLengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
    });
    $('.manage-table').css('width','100%');


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

	//内容部分小卡片底部的折叠展开
	$('.section-fold ').click(function () {
		$(this).toggleClass('open')
		       .parent().parent().parent().siblings().find('.section-fold').removeClass('open');
	});


	//表格部分
 //    var $a1 = $('tr.grand-parent');
	// $a1.click(function () {
	// 	    $(this).children().children().children().toggleClass('glyphicon-minus');
	// 	    $(this).toggleClass('selected')
	// 	           .siblings('.parent_'+this.id).slideToggle();
	// 	       // .siblings('tr.child_'+this.id).slideToggle();
	// });
	// var $a2 = $('tr.parent');
	// $a2.click(function () {
	// 	    $(this).children().children().children().toggleClass('glyphicon-minus');
	// 	    $(this).toggleClass('selected')
	// 	           .siblings('.child_'+this.id).slideToggle();
	// 	       // .siblings('tr.child_'+this.id).slideToggle();
	// });
	var testdata1='';

	// $('tr.grand-parent').click(function () {
	// 	$(this).siblings('.parent_'+this.id).toggle(200);
	// 	$(this).siblings('.child_'+this.id).hide();
	// });

	// var $tr2 = $("<tr class='parent'><td>2</td><td>二级</td><td>123465</td><td>sfsf</td><td>20元</td><td>1人</td></tr>");
	// $('tr.grand-parent').click(function () {
	// 	$(this).after($tr2).toggleClass(hide);
	// });

	var $tr2 = $("<tr class='parent' onclick='asd();'><td>2</td><td>二级</td><td>123465</td><td>sfsf</td><td>20元</td><td>1人</td></tr>");
	$('tr.grand-parent').click(function () {
		$(this).after($tr2);
	});


	
});

	function asd(){
		var $tr3 = $("<tr class='child'><td>2</td><td>3级</td><td>123465</td><td>sfsf</td><td>20元</td><td>1人</td></tr>");
		$('tr.parent').click(function () {
			$(this).after($tr3);
		});
	}