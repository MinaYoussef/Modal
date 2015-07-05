  function Modal(conf,callbackbtn1,callbackbtn2,callbackbtn3,callbackbtn4){
         if(conf && typeof conf == 'string'){
       	var para = conf;

       }
  	var options = {
  			height : "auto",
  			width : "35",
  			title:"",
  			body: "Please Enter All Required Fields",
  			top: "20",
  			left: "30",
  			header: "auto",
  			footer: "auto",
  			footerText : "",
  			button1: "OK",
  			button2: "Button 2",
  			button3: "Button 3",
  			button4: "Button 4",
  			showButton1 : true,
  			showButton2 :false,
  			showButton3 :false,
  			showButton4 :false,
  			dark : false
  		}
  	   var config = $.extend({}, options, conf || {});

  var modalBlock = '<div class="modal_background"></div>';
  $('body').prepend(modalBlock);
  var modal = '<div class="modal_box"><a href="#" class="modal_close"></a><div class="modal_header"><h3>' + config.title + '</h3></div><div class="modal_inner"><p class="modal_body">' +(para || config.body) + '</p></div><div class="modal_footer"><p class="modal_footerText">' + config.footerText + '</p><button style="display: none;" class="modal_btn_1">'+config.button1+'</button><button style="display: none;" class="modal_btn_2">'+config.button2+'</button><button style="display: none;" class="modal_btn_3">'+config.button3+'</button><button style="display: none;" class="modal_btn_4">'+config.button4+'</button></div></div>';
  //$('body').prepend(modal);
  $(modal).appendTo('.modal_background');

  var pageHeight = $(window).height();
  var pageWidth = $(window).width();

  			$('.modal_background').css({
  				'position':'fixed',
  				'top':'0',
  				'left':'0',
  				'background-color':'rgba(0,0,0,0.5)',
  				'height':'100%',
  				'width':'100%',
  				'z-index':'9999',
  				'overflow': 'scroll'    
  			});

  $('div.modal_box').css({
  					'left':config.left + '%',
  					//'top':options.top,
  					// 'display':'none',
  					//'height': options.height + 'px',
  					'width': config.width + '%',
  					'min-width': '150px',
  					'height': 'auto',
  					'position':'absolute',
  					'border':'3px solid #fff',
  					'box-shadow': '0px 2px 7px #292929',
  					'-moz-box-shadow': '0px 2px 7px #292929',
  					'-webkit-box-shadow': '0px 2px 7px #292929',
  					'border-radius':'10px',
  					'-moz-border-radius':'10px',
  					'-webkit-border-radius':'10px',
  					'background': '#f2f2f2',
  					'padding':'10px',
  					'z-index':'99999'
  }).animate({'top':config.top + '%'},200);

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   $('div.modal_box').css({
  					'left':'12%',
  					//'top':options.top,
  					// 'display':'none',
  					//'height': options.height + 'px',
  					'width': (config.width *2) + '%',
  					
  });
  }

  $('.modal_header').css({
  					'height': config.header + 'px',
  					'margin-top': '-10px',
  					'font-family': 'Verdana,Geneva,sans-serif'
  					//'border':'1px solid #000',
  					
  });

  $('.modal_footer').css({
  					'height': config.footer + 'px',
  					'font-family': 'Verdana,Geneva,sans-serif'
  					//'border':'1px solid #000',
  					
  });
  $('.modal_inner').css({
  					'height': config.height + 'px',
  					'font-family': 'Verdana,Geneva,sans-serif',
  					'margin-bottom': '10px',
  					'margin-top': '-5px',
  					//'border':'1px solid #000',
  					
  });
  $('.modal_body').css({
  					'font-size': '14px',
  					'padding-bottom':'10px',
  					'font-family': 'Verdana,Geneva,sans-serif'
  					//'border':'1px solid #000'

  });
  $('.modal_footerText').css({
  					'font-size': '14px',
  					'font-family': 'Verdana,Geneva,sans-serif'
  					//'border':'1px solid #000'

  });
  $('.modal_close').css({
  				'position':'relative',
  				'top':'-5px',
  				'left':'5px',
  				'float':'right',
  				'display':'block',
  				'height':'25px',
  				'width':'25px',
  				//'background': '#222',
  				'font-size':'18px',
  				'text-align':'center',
  				'text-decoration':'none',
  				'padding':'4px 1px 1px 1px',
          'font-family':'Arial, Helvetica, sans-serif',
  				'color': '#777'
  			}).html('X').mouseenter(function(){
  	$(this).css({'color':'#222'});
  }).mouseleave(function(){
  	$(this).css({'color':'#777'});
  	});

  if(config.showButton1 == true){
  $('.modal_btn_1').css({
  					'display':'block',
  					'height':'40px',
  					'width':'auto',
  					'padding': '0px 15px 0px 15px',
  					'background': '#446CB3',
  					'float':'right',
  					'cursor': 'pointer',
  					'border':'1px solid #fff',
  					'border-radius':'5px',
  					'border-radius':'5px',
  					'-moz-border-radius':'5px',
  					'-webkit-border-radius':'5px',
  					'font-size' : '18px',
  					'color': '#f2f2f2',
  					'margin': '0px 5px 0px 5px'
  					
  }).mouseenter(function(){
  	$(this).css({'background':'#2980b9'});
  }).mouseleave(function(){
  	$(this).css({'background':'#446CB3'});
  	});
  $('.modal_btn_1').click(function(){
  				CloseModal();			 
  			 }).show();
  }// end button 1

  if(config.showButton2 == true){
  $('.modal_btn_2').css({
  					'display':'block',
  					'height':'40px',
  					'width':'auto',
  					'padding': '0px 15px 0px 15px',
  					'background': '#446CB3',
  					'float':'right',
  					'cursor': 'pointer',
  					'border':'1px solid #fff',
  					'border-radius':'5px',
  					'border-radius':'5px',
  					'-moz-border-radius':'5px',
  					'-webkit-border-radius':'5px',
  					'font-size' : '18px',
  					'color': '#f2f2f2',
  					'margin': '0px 5px 0px 5px'
  					
  }).mouseenter(function(){
  	$(this).css({'background':'#2980b9'});
  }).mouseleave(function(){
  	$(this).css({'background':'#446CB3'});
  	}).show();
  }// end button 2

  if(config.showButton3 == true){
  $('.modal_btn_3').css({
  					'display':'block',
  					'height':'40px',
  					'width':'auto',
  					'padding': '0px 15px 0px 15px',
  					'background': '#446CB3',
  					'float':'right',
  					'cursor': 'pointer',
  					'border':'1px solid #fff',
  					'border-radius':'5px',
  					'border-radius':'5px',
  					'-moz-border-radius':'5px',
  					'-webkit-border-radius':'5px',
  					'font-size' : '18px',
  					'color': '#f2f2f2',
  					'margin': '0px 5px 0px 5px'
  					
  }).mouseenter(function(){
  	$(this).css({'background':'#2980b9'});
  }).mouseleave(function(){
  	$(this).css({'background':'#446CB3'});
  	}).show();
  }// end button 3

  if(config.showButton4 == true){
  $('.modal_btn_4').css({
  					'display':'block',
  					'height':'40px',
  					'width':'auto',
  					'padding': '0px 15px 0px 15px',
  					'background': '#446CB3',
  					'float':'right',
  					'cursor': 'pointer',
  					'border':'1px solid #fff',
  					'border-radius':'5px',
  					'border-radius':'5px',
  					'-moz-border-radius':'5px',
  					'-webkit-border-radius':'5px',
  					'font-size' : '18px',
  					'color': '#f2f2f2',
  					'margin': '0px 5px 0px 5px'
  					
  }).mouseenter(function(){
  	$(this).css({'background':'#2980b9'});
  }).mouseleave(function(){
  	$(this).css({'background':'#446CB3'});
  	}).show();
  } // end button 4

  if(config.dark == true){
  	$('div.modal_box').css({'color': '#bdc3c7','background': '#222','border':'3px solid #555'});
  	$('.modal_header,.modal_footer,.modal_inner,.modal_header,.modal_body,.modal_footerText').css({'color': '#ecf0f1'});
  	$('.modal_btn_1,.modal_btn_2,.modal_btn_3,.modal_btn_4').css({'border':'0px'});
  }

   $('.modal_close').click(function(){
  				CloseModal();			 
  			 });
   $('.modal_btn_1').click(function(){
  				CloseModal();
  				if(callbackbtn1 && typeof callbackbtn1 == 'function'){
                    callbackbtn1();
                  }			 
  			 });
   $('.modal_btn_2').click(function(){
  				if(callbackbtn2 && typeof callbackbtn2 == 'function'){
                    callbackbtn2();
                  }			 
  			 });
   $('.modal_btn_3').click(function(){
  				if(callbackbtn3 && typeof callbackbtn3 == 'function'){
                    callbackbtn3();
                  }			 
  			 });
    $('.modal_btn_4').click(function(){
  				if(callbackbtn4 && typeof callbackbtn4 == 'function'){
                    callbackbtn4();
                  }			 
  			 });



} // end Modal

 function CloseModal(){
 	$('.modal_box').animate({'opacity': 0},200).fadeOut();	
	$('.modal_background').fadeOut().remove();

 } // end CloseModal