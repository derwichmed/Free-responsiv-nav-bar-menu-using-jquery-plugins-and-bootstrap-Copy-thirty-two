$(function (){
   $('body > header .nav_bar .nav_bar_item').mouseover(function (){
      $('body > header .nav_bar .nav_bar_item > div > .sub_menu:visible').hide();
      $(this).find('> div > .sub_menu').show();
   });
   
   $('body > header .nav_bar .nav_bar_item .sub_menu .sub_menu_item').mouseover(function (){
      $('body > header .nav_bar .nav_bar_item .sub_menu .sub_menu_item .sub_menu:visible').hide();
      $(this).find('> div > .sub_menu').show();
   });
   
   isNavBarHidden = true;
   $('#mobile_navs .menu_icon img').click(function (){
        if(isNavBarHidden){
          $('#pc_navs').fadeIn("slow");
          isNavBarHidden = false;
      }
        else{
          $('#pc_navs').fadeOut("slwo");
          isNavBarHidden = true;
      }
   });
});