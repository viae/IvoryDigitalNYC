//get nodes once available custom plugin
jQuery.fn.nodeAvailable = function(fn){
    var sel = this.selector;
    var timer;
    var self = this;
    if (this.length > 0) {
        fn.call(this);
    }
    else {
        timer = setInterval(function(){
            if (jQuery(sel).length > 0) {
                fn.call(jQuery(sel));
                clearInterval(timer);
            }
        },50);
    }
};

jQuery(document).ready(function($){
/*
  Collect main functions w/nmspcs
----------------------------------- */
  window.mainScripts = function () {
    "use strict";
      window.Core = {

          ui : {

            setSubmenus : function(){
                $("ul.sf-menu").superfish({
                  delay: 175,
                  animation: {height:'show'},
                  speed: 'fast',
                  autoArrows: true,
                  disableHI: true
                });

                $(".sub-menu").css("display", "none");

                if( $(window).width() <= 770 ){

                  $(".menu").children("li").hover(function(){
                    theItem = $(this);
                    if( theItem.children(".sub-menu").length > 0 ){
                        $(".navigation").css("z-index", 1000);
                    }
                      //reset the z-index when scroll in order to hide
                      //the menu correctly due to the difference between deeps
                      $(window).scroll(function(event){
                        $(".navigation").css("z-index", 1);
                      });
                  }, function(){
                      $(".navigation").css("z-index", 1);
                  });
                }
                
            },
            setHomeSliderProps : function(){

              if( $("body").hasClass("minimal-layout") ){
                setTimeout(function() {
                  $(".intro-slider, .flex-direction-nav, .display-slide").remove();
                }, 50);
              }else{
                var winH = $(window).height();
                //set slider elements
                $(".intro-slider").css("position", "fixed").css("height", winH);
                $("#bg-slideshow").css("height", winH);
                $("#bg-slideshow ul li").css("height", winH);
                $("#bg-slideshow .flex-control-nav").css("top", winH-325);
                
                var n = 0;
                //src replacement to background images
                $("#bg-slideshow").find("img").each(function(i, elem) {
                    
                    var img = $(this);
                    var nItems = img.length;
                    var theIMG = img.attr("src");
                    var item = $("#bg-slideshow ul li");
                    
                    item.eq(n).css('background-image', 'url("' + theIMG + '")');
                    img.remove();
                    n++;
                                
                });

                //force img to fit the width
                var winW = $(window).width();
                    $('.flexslider ul li').each(function() {
                    $(this).width(winW);
                });

                //set the navigation handlers
                var visibleSpace = $(".top-angle").css("margin-top"),
                    border = $(".top-angle").css("border-top-width"),
                    vpMargin = parseInt(visibleSpace, 10),
                    bWidth = parseInt(border, 10);

                //adding new class in order to difference the handlers
                //from standard sliders in front the fullscreen back slider
                $(".flex-direction-nav").addClass("back-slider-handlers");
                $(".back-slider-handlers").height(vpMargin - 50);

                if( $("body").hasClass("straight-layout") ){
                  $(".back-slider-handlers").height(bWidth - 150);
                }

                if( $("body").hasClass("modernIE") || !$("body").hasClass("explorer") ){
                  $('.flex-prev').mouseenter(function(){
                  $('.prev-slide-state').fadeIn(250);
                    return false;
                  });
                  $('.flex-next').mouseenter(function(){
                    $('.next-slide-state').fadeIn(250);
                    return false;
                  });

                  $('.flex-prev').mouseout(function(){
                    $('.prev-slide-state').fadeOut(250);
                    return false;
                  });
                  $('.flex-next').mouseout(function(){
                    $('.next-slide-state').fadeOut(250);
                    return false;
                  });
                  $('html').mousemove(function(e){
                    $('.slide-state').css('left', e.clientX - 4).css('top', e.clientY - 21);
                  });
                }else{
                  $(".slide-state i").wrap("<a class='sldr-ie-hand' href='#'></a>");
                }
              }
            },
            removeDisplay : function(){
              $(".display-slide").fadeOut(200, function(){
                $(".display-slide").remove();
              });
            },
            setHomeSlider : function(){
              if( $("body").hasClass("sldr-fade") ){
                $('#bg-slideshow').flexslider({
                    animation: "fade",
                    slideshowSpeed: 10000,
                    start : function(slider) {
                            var theTitle = slider.slides.eq(slider.currentSlide).find("h3"),
                                theDesc  = slider.slides.eq(slider.currentSlide).find(".slide-desc");

                            Core.ui.setHomeSliderProps();

                            var theDivider = $("<div class='display-divider'></div>"),
                                displaySlide = $("<div class='display-slide'></div>");

                            displaySlide.appendTo(".content");
                            theTitle.clone().appendTo(displaySlide);
                            theDesc.clone().appendTo(displaySlide);
                            theDivider.insertAfter(".content .slide-title");
                            displaySlide.fadeIn(500, function(){
                              $(".display-divider").animate({
                                width: 15+'%'
                              }, 150);
                                  $(".content .slide-title").fadeIn(500);
                                  $(".content .slide-desc").fadeIn(250);
                              });

                              $(".back-slider-handlers").appendTo("#sldr-nav");
                              Core.tweaks.checkMobile(".flex-direction-nav");
                              if (window.clipboardData) { Core.tweaks.centerIeElm(".display-slide"); Core.tweaks.centerIeElm(".flex-direction-nav"); }
                              $(".prev-slide-state .sldr-ie-hand").click(function(){
                                slider.flexAnimate(slider.getTarget("prev"));
                              });
                              $(".next-slide-state .sldr-ie-hand").click(function(){
                                slider.flexAnimate(slider.getTarget("next"));
                              });
                              $(".content").swipe( {
                              //Generic swipe handler for all directions
                              swipeLeft:function(event, direction, distance, duration, fingerCount) {
                                slider.flexAnimate(slider.getTarget("next"));
                                slider.pause();
                              },
                              swipeRight:function(event, direction, distance, duration, fingerCount) {
                                slider.flexAnimate(slider.getTarget("prev"));
                                slider.pause();
                              },
                              threshold: 50
                            });
                            //Class helper for identify slides within the slider
                            //This is useful for stylish each slide in a isaloted way
                            $(".display-slide").addClass("slide-0");
                           },
                    before : function(slider){
                          Core.ui.removeDisplay();
                    },
                    after : function(slider){
                      if( mobileDevice === true ) {
                        setTimeout(function() {
                          var theTitle = slider.slides.eq(slider.currentSlide).find("h3"),
                                theDesc  = slider.slides.eq(slider.currentSlide).find(".slide-desc");
                            var theDivider = $("<div class='display-divider'></div>"),
                                displaySlide = $("<div class='display-slide'></div>");

                            displaySlide.appendTo(".content");
                            theTitle.clone().appendTo(displaySlide);
                            theDesc.clone().appendTo(displaySlide);
                            theDivider.insertAfter(".content .slide-title");
                            displaySlide.fadeIn(500, function(){
                              $(".display-divider").animate({
                                width: 15+'%'
                              }, 150);
                                  $(".content .slide-title").fadeIn(500);
                                  $(".content .slide-desc").fadeIn(250);
                              });
                            if (window.clipboardData) { Core.tweaks.centerIeElm(".display-slide"); }

                            //Class helper for identify slides within the slider
                            //This is useful for stylish each slide in a isaloted way
                            $(".display-slide").addClass("slide-" + slider.currentSlide);
                        }, 555);
                      }else{
                        var theTitle = slider.slides.eq(slider.currentSlide).find("h3"),
                            theDesc  = slider.slides.eq(slider.currentSlide).find(".slide-desc");
                        var theDivider = $("<div class='display-divider'></div>"),
                            displaySlide = $("<div class='display-slide'></div>");

                        displaySlide.appendTo(".content");
                        theTitle.clone().appendTo(displaySlide);
                        theDesc.clone().appendTo(displaySlide);
                        theDivider.insertAfter(".content .slide-title");
                        displaySlide.fadeIn(500, function(){
                          $(".display-divider").animate({
                            width: 15+'%'
                          }, 150);
                              $(".content .slide-title").fadeIn(500);
                              $(".content .slide-desc").fadeIn(250);
                          });
                        if (window.clipboardData) { Core.tweaks.centerIeElm(".display-slide"); }

                        //Class helper for identify slides within the slider
                        //This is useful for stylish each slide in a isaloted way
                        $(".display-slide").addClass("slide-" + slider.currentSlide);
                      }
                    }
                });
              }else{
                $('#bg-slideshow').flexslider({
                    animation: "slide",
                    start : function(slider) {
                            var theTitle = slider.slides.eq(slider.currentSlide).find("h3"),
                                theDesc  = slider.slides.eq(slider.currentSlide).find(".slide-desc");

                            Core.ui.setHomeSliderProps();

                            var theDivider = $("<div class='display-divider'></div>"),
                                displaySlide = $("<div class='display-slide'></div>");

                            displaySlide.appendTo(".content");
                            theTitle.clone().appendTo(displaySlide);
                            theDesc.clone().appendTo(displaySlide);
                            theDivider.insertAfter(".content .slide-title");
                            displaySlide.fadeIn(500, function(){
                              $(".display-divider").animate({
                                width: 15+'%'
                              }, 150);
                                $(".content .slide-title").fadeIn(500);
                                $(".content .slide-desc").fadeIn(250);
                              });
                              $(".back-slider-handlers").appendTo("#sldr-nav");
                              Core.tweaks.checkMobile(".flex-direction-nav");
                              if (window.clipboardData) { Core.tweaks.centerIeElm(".display-slide"); Core.tweaks.centerIeElm(".flex-direction-nav"); }
                              $(".prev-slide-state .sldr-ie-hand").click(function(){
                                slider.flexAnimate(slider.getTarget("prev"));
                              });
                              $(".next-slide-state .sldr-ie-hand").click(function(){
                                slider.flexAnimate(slider.getTarget("next"));
                              });
                              $(".content").swipe( {
                              //Generic swipe handler for all directions
                              swipeLeft:function(event, direction, distance, duration, fingerCount) {
                                slider.flexAnimate(slider.getTarget("next"));
                                slider.pause();
                              },
                              swipeRight:function(event, direction, distance, duration, fingerCount) {
                                slider.flexAnimate(slider.getTarget("prev"));
                                slider.pause();
                              },
                              threshold:50
                            });
                            //Class helper for identify slides within the slider
                            //This is useful for stylish each slide in a isaloted way
                            $(".display-slide").addClass("slide-0");
                           },
                    before : function(slider){
                          Core.ui.removeDisplay();
                    },
                    after : function(slider){
                          var theTitle = slider.slides.eq(slider.currentSlide).find("h3"),
                              theDesc  = slider.slides.eq(slider.currentSlide).find(".slide-desc");
                          var theDivider = $("<div class='display-divider'></div>"),
                              displaySlide = $("<div class='display-slide'></div>");

                          displaySlide.appendTo(".content");
                          theTitle.clone().appendTo(displaySlide);
                          theDesc.clone().appendTo(displaySlide);
                          theDivider.insertAfter(".content .slide-title");
                          displaySlide.fadeIn(500, function(){
                            $(".display-divider").animate({
                              width: 15+'%'
                            }, 150);
                              $(".content .slide-title").fadeIn(500);
                              $(".content .slide-desc").fadeIn(250);
                            });
                          if (window.clipboardData) { Core.tweaks.centerIeElm(".display-slide"); }
                          //Class helper for identify slides within the slider
                          //This is useful for stylish each slide in a isaloted way
                          $(".display-slide").addClass("slide-" + slider.currentSlide);
                    }
                });
              }
              //Remove the page title header
              $(".header-display").remove();
              $(".flex-control-paging").remove();
              //replace flexslider default handlers
              $(".flex-direction-nav").appendTo(".content");
            },
            setProjectHovers : function(){
                $("#container li").hover(function(){
                    $(this).find("div").stop(false,true).fadeIn(355);
                    $(this).find("h3").stop(false).css("opacity", 0).animate({
                      opacity: 1,
                      top: -5
                    }, 550, 'easeInOutQuint');
                    $(this).find("span").stop(false).css("opacity", 0).animate({
                      opacity: 1,
                      marginTop: -3
                    }, 1000, 'easeInOutQuint');
                  }, function(){
                    $(this).find("div").stop(false,true).fadeOut(255);
                    $(this).find("h3").stop(false,true).animate({
                      opacity: 0,
                      top: 0
                    }, 550, 'easeInOutQuint');
                    $(this).find("span").stop(false,true).animate({
                      opacity: 0,
                      marginTop: 0
                    }, 550, 'easeInOutQuint');
                });
            },
            setTitleProject : function(){
              setTimeout(function() {
                  var theTitle = $(".title-overlay h3"),
                      canvasH = $("#container li figure").find("img").height(),
                      middleCanvasH = canvasH/2,
                      titleH = $(".title-overlay h3").height(),
                      middleTitleH = titleH/2,
                      centerTitle = middleCanvasH - middleTitleH;

                  theTitle.css("margin-top", centerTitle);

              }, 750);
            },
            setHandHovers : function() {
              if( $("body").hasClass("single-portfolio") ){
                $('.action-scroll').bind('touchstart touchend', function(e) {
                    e.preventDefault();
                    $(".actions").addClass("active");
                });
              }
              
              $(".actions").on('mouseenter', function(){
                $(this).addClass("active");
              });
              $(".actions").on('mouseleave', function(){
                $(this).removeClass("active");
              });
            },
            setSubmenuHover : function(){
              $(".menu-item").hover(function(){
                  $(this).find(".sub-menu").stop(false,true).fadeIn(155);
                }, function(){
                  $(this).find(".sub-menu").stop(false,true).fadeOut(125);
              });
            },
            setIsotopeLayout : function(){
              // Isotope layout
              var $container = $('#container');

              var colClass = $('.projects').attr('class'),
                  colSplit = colClass.split("cols-"),
                  columnsNumber = colSplit[1];

              var columns = 3,
                  iniCols = columnsNumber;
              window.setColumns = function() {
                  var winWidth = $(document).width();
                  if(winWidth > 800){
                      columns = iniCols;
                  }
                  else if(winWidth > 420){
                      columns = 2;
                  }
                  else{
                      columns = 1;
                  }

                  var theWidth = 100/columns - 0.5;

                  $('#container li').css('width', getWidth);
                  function getWidth(){
                      return theWidth +'%';
                  }
              };
              setColumns();
              
              //just removing this function
              //you can disable the isotope behaviors
              $(window).smartresize(function(){
                setColumns();
                $container.isotope({
                  itemSelector : '#container li',
                  resizable: false,
                  masonry: { columnWidth: $container.width() / columns}
                });
                //istope filtering
                 if( $("body").hasClass("isotope-filtering") && $("body").hasClass("page-template-portfolio") ){
                    $('.categories li a').click(function(){
                      var selector = $(this).attr('data-filter');
                      $container.isotope({ filter: selector });

                      if( $("body").hasClass("menu-layout-3") && $("body").hasClass("menu-layout-fixed") ){
                        var menuHeight = $(".bottom-menu-angle").outerHeight();
                        $("html, body").animate({
                          scrollTop: $(".featured").offset().top - ( $(".categories ul").outerHeight() + menuHeight )
                        }, 100);
                      }else{
                        $("html, body").animate({
                          scrollTop: $(".featured").offset().top - $(".categories ul").outerHeight()
                        }, 100);
                      }

                      return false;

                    });
                  }
              }).smartresize();
                
              $container.imagesLoaded( function(){
                  $(window).smartresize();
              });
            },
            pageScroller : function(){
              var scroller = $(".action-scroll a");

              if( $("body").hasClass("angles-layout") ){
                scroller.click(function(){
                  var yWin = $(window).scrollTop(),
                      marginToScroll = $(".main-page").offset().top,
                      contentMarginTop =  $(".main-page").css("margin-top"),
                      trans = parseInt(contentMarginTop, 10),
                      toScroll = marginToScroll + trans;

                  $("html, body").animate({
                    scrollTop: yWin + toScroll
                  }, 250);
                });
              }else if( $("body").hasClass("straight-layout") ){
                scroller.click(function(){
                  var yWin = $(window).scrollTop(),
                      marginToScroll = $(".content-wrapper").offset().top,
                      contentMarginTop =  $(".content-wrapper").css("margin-top"),
                      trans = parseInt(contentMarginTop, 10),
                      toScroll = marginToScroll + trans;

                  $("html, body").animate({
                    scrollTop: yWin + toScroll
                  }, 250);
                });
              }else{
                scroller.click(function(){
                  var yWin = $(window).scrollTop(),
                      marginToScroll = $(".project-stream").offset().top,
                      contentMarginTop =  $(".project-stream").css("margin-top"),
                      trans = parseInt(contentMarginTop, 10),
                      toScroll = marginToScroll + trans;

                  $("html, body").animate({
                    scrollTop: yWin + toScroll
                  }, 250);
                });
              }
            },
            placeHeaders : function(){
              var pageTitle = $(".section-title");
              var infoBox = $(".info-box");
              var relatedPrjcts = $(".related-project");
              $( ".top-angle" ).before( pageTitle );
              $( ".top-angle" ).before( infoBox );
              $( ".top-angle" ).before( relatedPrjcts );

              if( $("body").hasClass("single-post") ){
                var postImg = $(".post-image");
                $( ".top-angle" ).before( postImg );
              }
            },
            myblurberrynights : function(){
              var postFeatImage = $(".post-image figure img").attr("src");
              $("body").append("<div class='back-single-feat-image'><div class='blurred'></div></div>");
              $(".blurred").css('background-image', 'url("' + postFeatImage + '")');

              $(".blurred").blurjs({
                  customClass: 'blurjs',
                  radius: 3,
                  persist: false
              });

              $("#wrapper").addClass("face-control");

            },
            setPaginationArrows : function(){
                var projectStreamH = $(".project-stream").height(),
                    middleProjectStreamH = projectStreamH / 4;

                if( $(window).width() >= 1070 ){
                  $(window).scroll(function() {
                    var topWin = $(window).scrollTop();
                    if( topWin < middleProjectStreamH) {
                       $(".arrow-nav").fadeOut(350);
                     }else{
                      $(".arrow-nav").fadeIn(350);
                     }
                  });
                }
            },
            setPagDirection : function(){
              $("<small class='pag-direction pag-direction-prev'>Prev Project</small>").appendTo(".prev-project span");
              $("<small class='pag-direction pag-direction-next'>Next Project</small>").appendTo(".next-project span");
            },
            setScrollTopHelper : function(){
              $("body").append("<a class='scroller-top' href='#'><i class='icon-angle-up'></i></a>");
              $(window).scroll(function() {
                var topWin = $(window).scrollTop();
                if( topWin < 750) {
                  $(".scroller-top").fadeOut(350);
                }else{
                  $(".scroller-top").fadeIn(350);
                }
              });
              $(".scroller-top").click(function(e){
                $("body,html").animate({ scrollTop :0 }, 1250, 'easeInOutQuint');
                e.preventDefault();
              });
            },
            openMenu : function(){

              if( $("body").hasClass("menu-layout-1") && $("body").hasClass("menu-layout-fixed") || $("body").hasClass("menu-layout-2") ){
                if( !$("body").hasClass("menu-layout-2") ){
                  setTimeout(function() {
                    Core.tweaks.centerStickyMenuLy1();
                  }, 150);
                }
                $("#overlay-header").animate({
                  opacity: 0.9
                }, 250, 'easeInQuint');
              }

              if( $("body").hasClass("menu-layout-3") ){
                Core.ui.openMenu3();
              }else{
                //menu behaviors dependant classes
                $("#overlay-header").addClass("over-viewed");
                $(".header").addClass("nav-opened");
                //display/hide elements
                $(".menu-launcher small").stop(false,true).fadeOut(175);
                $(".menu-closed").stop(false,true).fadeOut(100);
                $(".menu-opened").stop(false,true).fadeIn(100);
                $(".main-navigation").stop(false,true).css("margin-top", -15).show().delay(225).animate({
                  opacity: 1,
                  marginTop: 0
                }, 950, 'easeInOutQuint');
                if( $("body").hasClass("menu-layout-1") && !$("body").hasClass("menu-layout-fixed") ){
                  $("#overlay-header").animate({
                    opacity: 1
                  }, 250, 'easeInQuint');
                }
                //section dependencies
                if( $(".intro-slider").length > 0 ) {
                  //this element is needed to prevent opacity conflicts with the default background if it is set
                  $("<div class='slider-bg'></div>").appendTo("body");
                  if( !$("body").hasClass("menu-layout-fixed") ){
                    $(".intro-slider, .flex-direction-nav, .display-slide").delay(125).fadeOut(550);
                  }
                }
                if( !$('body').hasClass('content-info-box') && !$("body").hasClass("minimal-layout") ){
                  $(".header-display").stop(false,true).fadeOut(100);
                }
                if( $('body').hasClass('content-info-box') && !$("body").hasClass("minimal-layout") ){
                  $(".actions").fadeOut(100);
                }
                //var to get the ini margin to control the
                //nav behaviors when non feat images are added
                //into the blog posts
                window.nfeatImg = $(".post-image").find("img").length;
                window.crntTopMrg = $(".top-angle").css("margin-top");
                if( $("body").hasClass("single-post") && nfeatImg > 0 && !$("body").hasClass("minimal-layout") ){
                  var currentTopMar = $(".main-navigation").height();
                  if( !$("body").hasClass("menu-layout-fixed") ){
                    $('.post-image').animate({
                      opacity: 0
                    }, 250, 'easeInOutQuint');
                    $(".back-single-feat-image").stop(false,true).fadeOut(100);
                  }

                  window.postImgH = $('.post-image').find("img").height();
                  if( $(".header").hasClass("nav-opened") ){
                    $('.post-image').animate({
                      height: 569
                    }, 250, 'easeInOutQuint');
                  }else{
                    $('.post-image').animate({
                      height: postImgH
                    }, 250, 'easeInOutQuint');
                  }
                }else if( $("body").hasClass("single-post") && nfeatImg <= 0 ){
                  $('.top-angle').animate({
                    marginTop: 350 - 58 //the rest is the min height val in css .single-post .post-image rule
                  }, 250, 'easeInOutQuint');
                }
                //centering the section/option menu hover behaviors
                var disBody = $(".current-body");
                var disBodyH = $(".current-body").height(),
                    halfBodyH = disBodyH / 2;

                var navH = $(".navigation").outerHeight(),
                    shareH = $(".menu-share").outerHeight(),
                    sumOptions = navH + shareH;

                if( $("body").hasClass("menu-layout-1") || $("body").hasClass("menu-layout-2") ){
                  //get the initial current margin
                  //to pass it when the menu is closed
                  window.disMar = $(".current-body").css("margin-top", -halfBodyH + shareH + 25);
                  $('.current-body').css("opacity", 0);
                  $('.current-body').animate({
                    marginTop: -halfBodyH + shareH,
                    opacity: 0.1
                  }, 1750, 'easeInOutQuint');
                }else{
                  //get the initial current margin
                  //to pass it when the menu is closed
                  window.disMar = $(".current-body").css("margin-top", -halfBodyH + shareH + 25);
                  $('.current-body').css("opacity", 0);

                  $('.current-body').animate({
                    marginTop: -halfBodyH + shareH,
                    //opacity: 1
                  }, 1750, 'easeInOutQuint');
                }
              }
            },
            getHmenu : function(){
              //this function depends on menu-layout-3 and gets the
              //menu height in order to make the menu adaptable for devices
              //and any kind of screen size. It is used on resize() too
              var navH = $(".navigation").height(),
                  shH = $(".menu-share").height(),
                  nvgtnH = navH + shH;
                  $(".bottom-menu-angle").css("height", nvgtnH + 30);

                  if( $("body").hasClass("menu-layout-open") ){
                    $(".header").css("height", nvgtnH + 30);
                  }

                  //place the section display. This element depends on logo sizes
              var logoH = $(".logo").height(),
                  logoW = $(".logo").width();

              $(".current-page, .target-page").css("left", logoW + 23);
            },
            openMenu3 : function(){

              if( !$("body").hasClass("minimal-layout") && !$("body").hasClass("content-info-box") && !$("body").hasClass("menu-layout-open") ){
                $(".header-display").fadeOut(200);
              }

              var extraMenuBg = $("<div class='bottom-menu-angle'></div>");
              extraMenuBg.appendTo("#wrapper");
              
              Core.ui.getHmenu();

              $(".current-page, .target-page").hide().fadeIn(250);

              $(".header").addClass("nav-opened");
              $(".menu-launcher small").fadeOut(175);
              $(".menu-closed").fadeOut(100);
              $(".menu-opened").fadeIn(100);
              $(".main-navigation").css("margin-top", -15).show().delay(175).animate({
                opacity: 1,
                marginTop: 0
              }, 777, 'easeInOutQuint');

              Core.tweaks.setAngledSections();
              Core.ui.getHmenu();
              
              var marAnglMen = $(".bottom-menu-angle").css("top");
              window.logoMar = $(".logo img").css("margin-top");

              $(".bottom-menu-angle").css("top", -500);

              $(".bottom-menu-angle").animate({
                top: 0
              }, 750, 'easeInOutQuint');
              
              $(".logo img").animate({
                marginTop: 38
              }, 1000, 'easeInOutQuint');
              $(".current-page, .target-page").animate({
                marginTop: 23
              }, 1150, 'easeInOutQuint');
            },
            closeMenu : function(){

              $('.post-image, .top-angle, .current-body, .main-navigation').clearQueue();

              if( $("body").hasClass("menu-layout-3") ){
                Core.ui.closeMenu3();
              }else{
                $("#overlay-header").removeClass("over-viewed");
                if( $("body").hasClass("menu-layout-1") && !$("body").hasClass("menu-layout-fixed") ){
                  $("#overlay-header").animate({
                    opacity: 0
                  }, 250, 'easeInQuint');
                }else if( $("body").hasClass("menu-layout-1") && $("body").hasClass("menu-layout-fixed") || $("body").hasClass("menu-layout-2") ) {
                  $("#overlay-header").animate({
                    opacity: 0
                  }, 250, 'easeInQuint');
                }

                $(".header").removeClass("nav-opened");
                $(".main-navigation").stop(false,true).css("opacity", 0).hide();
                $(".menu-launcher small").fadeIn(150);
                $(".header-display").delay(250).fadeIn(500);
                if( $("body").hasClass("content-info-box") ){
                  $(".actions").stop(true, false).delay(500).fadeIn(250);
                }
                $(".menu-closed").fadeIn(100);
                $(".menu-opened").fadeOut(100);
                if( $(".intro-slider").length > 0 ) {
                  $(".intro-slider, .flex-direction-nav, .display-slide").fadeIn(500);
                  setTimeout(function() {
                    $(".slider-bg").remove();
                  }, 500);
                }

                if( $("body").hasClass("single-post") && nfeatImg > 0 ){
                  $(".back-single-feat-image").fadeIn(500);
                  $('.post-image').animate({
                    marginTop: 115,
                    opacity: 1
                  }, 250, 'swing');

                  if( $(".header").hasClass("nav-opened") ){
                    $('.post-image').animate({
                      height: 569
                    }, 250, 'easeInOutQuint');
                  }else{
                    $('.post-image').animate({
                      height: postImgH
                    }, 250, 'easeInOutQuint');
                  }

                }else if( $("body").hasClass("single-post") && nfeatImg <= 0 ){
                  $('.top-angle').animate({
                    marginTop: crntTopMrg
                  }, 250, 'easeInOutQuint');
                }
                $(".current-body").css("margin-top", disMar).css("opacity", 0);
              }
            },
            closeMenu3 : function(){
              $(".header").removeClass("nav-opened");
              $(".main-navigation").animate({
                opacity: 0
              }, 555, 'easeInOutQuint');
              $(".menu-launcher small").fadeIn(150);
              $(".header-display").delay(250).fadeIn(500);
              if( $("body").hasClass("content-info-box") ){
                $(".actions").stop(true, false).delay(500).fadeIn(250);
              }
              $(".menu-closed").fadeIn(100);
              $(".menu-opened").fadeOut(100);

              //$(".menu-bg-ly-3").fadeOut(250);
              $(".menu-bg-ly-3").animate({
                height: 0
              }, 550, 'easeInOutQuint');
              $(".bottom-menu-angle").animate({
                top: -500
              }, 750, 'easeInOutQuint');
              
              setTimeout(function() {
                $(".menu-bg-ly-3, .bottom-menu-angle").remove();
              }, 755);
              $(".logo img").animate({
                marginTop: logoMar
              }, 1000, 'easeInOutQuint');

              if( $(window).width() > 680 ){
                $(".menu-bg-ly-3").animate({
                  height: 0
                }, 550, 'easeInOutQuint');
                $(".bottom-menu-angle").animate({
                  top: -500
                }, 750, 'easeInOutQuint');
              }else{
                $(".menu-bg-ly-3").animate({
                  height: 0
                }, 750, 'easeInOutQuint');
                $(".bottom-menu-angle").animate({
                  top: -500
                }, 550, 'easeInOutQuint');
              }

              $('.post-image, .current-body, .main-navigation, .logo img, .bottom-menu-angle').clearQueue();

            },
            placeRelated : function(){
              var related   = $(".related-project"),
                  area  = $(".content");
              area.append(related);
            },
            openRelated : function(){
              var body = $("body, html");
              var top = body.scrollTop();
                body.animate({scrollTop :0}, '250', 'swing',function(){
                  if( !$("body").hasClass("menu-layout-fixed") && $("body").hasClass("menu-layout-1") || !$("body").hasClass("menu-layout-fixed") && $("body").hasClass("menu-layout-3") ){
                    $("#overlay-header").addClass("over-viewed");
                    $("#overlay-header").animate({
                      opacity: 1
                    }, 150, 'easeInQuint');
                  }
                  if( $("body").hasClass("menu-layout-1") && $("body").hasClass("menu-layout-fixed")  || $("body").hasClass("menu-layout-open") && $("body").hasClass("menu-layout-fixed") ){
                    $( "#overlay-header" ).clone().appendTo( "#wrapper" ).addClass("related-overlay over-viewed");
                  }
                    $(".related-project").fadeIn(500);
                    if( !$('body').hasClass("content-info-box") ){
                      $(".header-display").fadeOut(100);
                    }else {
                      $(".actions").fadeOut(150);
                    }
                });
              if( $("body").hasClass("minimal-layout") ){
                $(".header-display").animate({opacity : 0}, '250', 'swing');
              }
            },
            closeRelated : function(){
              $("#overlay-header").removeClass("over-viewed");
              $("#overlay-header").animate({
                opacity: 0
              }, 150, 'easeInQuint');
              $(".related-project").fadeOut(150);
              if( !$('body').hasClass("content-info-box") ){
                $(".header-display").fadeIn(500);
              }else{
                $(".actions").fadeIn(150).css("opacity", 1);
                clickNavState = false;
              }
              if( $("body").hasClass("minimal-layout") ){
                $(".header-display").animate({opacity : 1}, '250', 'swing');
              }
              if( $("body").hasClass("menu-layout-1") && $("body").hasClass("menu-layout-fixed") || $("body").hasClass("menu-layout-open") && $("body").hasClass("menu-layout-fixed") ){
                $( ".related-overlay" ).removeClass("over-viewed");
              }
            },
            showTargetPage : function(){
              if( $("body").hasClass("minimal-layout") && $("body").hasClass("menu-layout-2") ){
                $(".current-page").css("opacity", 0.1);
              }
              $(".menu li").hover(function(){
                if( $("body").hasClass("minimal-layout") && $("body").hasClass("menu-layout-2") ){
                  $(".current-page").css("opacity", 0);
                  $(".target-page").css("opacity", 0.1);
                }
                window.currentPage = $(".current-page");
                window.targetPage  = $(".target-page");

                currentPage.addClass("tog-view");
                setTimeout(function() {
                  targetPage.addClass("tog-view");
                }, 10);
              }, function(){
                currentPage.removeClass("tog-view");
                targetPage.removeClass("tog-view");
                if( $("body").hasClass("minimal-layout") && $("body").hasClass("menu-layout-2") ){
                  $(".target-page").css("opacity", 0);
                  $(".current-page").css("opacity", 0.1);
                }
              });

              //replace target place on hover
              var targetOut = $(".target-body");

              $(".menu li a").on("mouseenter", function(e){
                  
                  var $target = $(e.currentTarget);

                  if( $("body").hasClass("typewriter") ){
                    var text = $target.html();
                    var count = 0;
                    var speed = 75;

                    var type = function () {
                        lastText = targetOut.html();
                        lastText += text.charAt(count);
                        count++;
                        targetOut.html(lastText);
                    };
                    setInterval(function(){
                       type();
                    }, speed);
                  }else{
                    targetOut.hide().stop(false, true).fadeIn(250);
                    targetOut.html($target.html());
                  }
              });

              $(".menu li a").on("mouseleave", function(e){
                targetOut.empty();
              });

            },
            stackFilters : function(){
              window.filtersPos = $(".categories ul").offset().top;
              window.filtersH = $(".categories ul").height();

              $(window).scroll(function() {
                if( $("body").hasClass("menu-layout-fixed") && $("body").hasClass("menu-layout-open") ){
                  var fixMenuH = $(".bottom-menu-angle").outerHeight();
                  if( $(window).scrollTop() >= (filtersPos + fixMenuH - 225) ){
                    $(".categories ul").addClass("cats-stack");
                    $("body").css("margin-top", filtersH);
                    $(".cats-stack").css( "top", fixMenuH );
                  }else{
                    $(".categories ul").removeClass("cats-stack");
                    $("body").css("margin-top", 0);
                    $(".categories ul").css( "top", 0 );
                  }
                }else{
                  if( $(window).scrollTop() >= filtersPos ){
                    $(".categories ul").addClass("cats-stack");
                    $("body").css("margin-top", filtersH);
                  }else{
                    $(".categories ul").removeClass("cats-stack");
                    $("body").css("margin-top", 0);
                  }
                }
              });

            },
            setMap : function(){
				
              var locVals = mapLocation.split(","),
                  locLat = parseFloat(locVals[0]),
                  locLon = parseFloat(locVals[1]),
                  zoomMap = parseInt(mapZoom, 10);

                var map;
                function initialize() {
                    
                    var styles=[
                        {
                            stylers:[
                                {hue:"#00ffe6"},
                                {saturation:-100},
                                {gamma:0.8}
                            ]
                        }
                        ,{
                            featureType:"road",
                            elementType:"geometry",
                            stylers:[
                                {lightness:100},
                                {saturation:0}
                            ]
                        }
                        ,{
                            featureType:"road",
                            elementType:"labels",
                            stylers:[
                                {lightness:55}
                            ]
                        }
                        ,{
                            featureType:"road",
                            elementType:"labels.text.stroke",
                            stylers:[
                                {visibility:"off"}
                            ]
                        }
                        ,{
                            featureType:"poi.park",
                            elementType:"geometry",
                            stylers:[
                                {lightness:55}
                            ]
                        }
                    ];
                  
                    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
                    var latlng = new google.maps.LatLng(locLat, locLon);
                    var mapOptions = {
                        zoom: zoomMap,
                        center: latlng,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        navigationControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        scaleControl: false,
                        scrollwheel: false,
                        disableDefaultUI: true
                    };
                       
                    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
                    map.mapTypes.set('map_style', styledMap);
                    map.setMapTypeId('map_style');
                    var myLatlng = new google.maps.LatLng(locLat, locLon);
                    var image = new google.maps.MarkerImage(
                      ''+markerUrl+'',
                        new google.maps.Size(107,65),
                        new google.maps.Point(0,0),
                        new google.maps.Point(24,62)
                    );
                    
                    var marker = new google.maps.Marker({
                        position: myLatlng,
                        map: map,
                        clickable: false,
                        title: 'Flamingo',
                        icon: image
                    });

                    var dragFlag = false;
                    var start = 0, end = 0;

                    function thisTouchStart(e)
                    {
                        //this will stop de drag on touch devices
                        map.setOptions( { draggable: false });
                        dragFlag = true;
                        start = e.touches[0].pageY;
                    }

                    function thisTouchEnd()
                    {
                        dragFlag = false;
                    }

                    function thisTouchMove(e)
                    {
                        if ( !dragFlag ) return;
                        end = e.touches[0].pageY;
                        window.scrollBy( 0,( start - end ) );
                    }

                    document.getElementById("map-canvas").addEventListener("touchstart", thisTouchStart, true);
                    document.getElementById("map-canvas").addEventListener("touchend", thisTouchEnd, true);
                    document.getElementById("map-canvas").addEventListener("touchmove", thisTouchMove, true);
                }
                //initialize the map on load
                google.maps.event.addDomListener(window, 'load', initialize);

                $(function(){
                  $(".zoom-in").click(function(){
                    var zoom = map.getZoom();
                    map.setZoom(zoom+1);
                    return false;
                  });
                  $(".zoom-out").click(function(){
                    var zoom = map.getZoom();
                    map.setZoom(zoom-1);
                    return false;
                  });
                });
            }
          },//ui
          tweaks : {
            checkMobile : function(target){
              var deviceAgent = navigator.userAgent.toLowerCase();
              var isTouchDevice = Modernizr.touch ||
              (deviceAgent.match(/(iphone|ipod|ipad)/) ||
              deviceAgent.match(/(android)/)  ||
              deviceAgent.match(/(iemobile)/) ||
              deviceAgent.match(/iphone/i) ||
              deviceAgent.match(/ipad/i) ||
              deviceAgent.match(/ipod/i) ||
              deviceAgent.match(/blackberry/i) ||
              deviceAgent.match(/bada/i));

              if (isTouchDevice) {
                  $(target).remove();
              }
            },
            setAngledSections : function(){
                  var w = $(window).width();
                  
                  if( $("body").hasClass("minimal-layout") ){
                    $('.top-angle').remove();
                    $('.bottom-angle').remove();
                    $('.footer-angle').remove();
                  }

                  if( $("body").hasClass("straight-layout") ){
                    $(".main-page").css('marginTop', 40);
                    $('.bottom-angle').css('border-left-width', w);
                    $('.footer-angle').css('border-left-width', w);
                  }else{
                    $('.top-angle, .footer-angle').css('border-left-width', w);
                    $('.bottom-angle, .bottom-menu-angle').css('border-right-width', w);
                    //responsive stages for the angled parts
                    if ( w <= 1500 && w >= 1285 ){
                      $('.top-angle, .footer-angle').css('border-top-width', 360);
                      $('.bottom-angle, .bottom-menu-angle').css('border-bottom-width', 360);
                      $(".main-page").css('marginTop', -100);
                      if( $("body").hasClass("single-post") && $(".header").hasClass("nav-opened") ){
                        $(".main-page").css("marginTop", 0);
                      }else if( $("body").hasClass("single-post") ){
                        $(".top-angle").css("margin-top", -350);
                        $(".main-page").css("marginTop", 0);
                      }
                    }else if ( w <= 1284 && w >=721 ) {
                      $('.top-angle, .footer-angle').css('border-top-width', 185);
                      $('.bottom-angle, .bottom-menu-angle').css('border-bottom-width', 185);
                      $(".main-page").css('marginTop', -40);
                      if( $("body").hasClass("single-post") && $(".header").hasClass("nav-opened") ){
                        $(".main-page").css("marginTop", 0);
                      }else if( $("body").hasClass("single-post") ){
                        $(".top-angle").css("margin-top", -250);
                        $(".main-page").css("marginTop", 0);
                      }
                    }else if ( w <= 720 && w >= 0 ) {
                      $('.top-angle, .footer-angle').css('border-top-width', 125);
                      $('.bottom-angle, .bottom-menu-angle').css('border-bottom-width', 125);
                      $(".main-page").css('marginTop', -15);
                      if( $("body").hasClass("single-post") && $(".header").hasClass("nav-opened") ){
                        $(".main-page").css("marginTop", 0);
                      }else if( $("body").hasClass("single-post") ){
                        $(".top-angle").css("margin-top", -250);
                        $(".main-page").css("marginTop", 0);
                      }
                    }else{
                      $('.top-angle, .footer-angle').css('border-top-width', 325);
                      $('.bottom-angle, .bottom-menu-angle').css('border-bottom-width', 325);
                      $(".main-page").css('marginTop', -100);
                      if( $("body").hasClass("single-post") && $(".header").hasClass("nav-opened") ){
                        $(".main-page").css("marginTop", 0);
                      }else if( $("body").hasClass("single-post") ){
                        $(".top-angle").css("margin-top", -250);
                        $(".main-page").css("marginTop", 0);
                      }
                    }
                  }
            },
            setFlexVCNav : function(){
              $("ul.flex-direction-nav li, .nivo-directionNav").find('a').append("<i class='icon-caret-right'></i>");
              $(".vc-carousel .vc-carousel-control").append("<i class='icon-caret-right'></i>");
            },
            setCatsMobile : function(){
              if( $(window).width() < 770){
                var navH = $(".navigation, div.menu").height();
                $(".categories").css("margin-top", navH+100);
              }else{
                $(".categories").css("margin-top",0);
              }
            },
            setProjectHandlers : function(){
                var galExsts = $("#fullscreen-images"),
                    relExsts = $(".related-project"),
                    fullBtn = $(".action-fullscreen"),
                    relBtn = $(".actions-related");
                if( galExsts.length <= 0 ){
                    fullBtn.remove();
                }
                if( relExsts.length <= 0 ){
                    relBtn.remove();
                }
                if( galExsts.length > 0 && relExsts.length <= 0 ){
                    fullBtn.css("left", 0).css("top", -33);
                }
                if( relExsts.length > 0 && galExsts.length <= 0 ){
                    relBtn.css("left", 0).css("top", -30);
                }
            },
            setParallax : function(){

              function straightParallax() {
                var scrollPos = $(window).scrollTop();
                $('body, .slides li').css({
                  'background-position' : '50% ' + (-scrollPos/15)+"px"
                });
                if( !$('body').hasClass("content-info-box") ){
                  $('.header-display').css({
                    'margin-top': (scrollPos/9)+"px",
                    'opacity': 1-(scrollPos/100)
                  });
                }
              }

              function reverseParallax() {
                var scrollPos = $(window).scrollTop();
                $('body, .slides li').css({
                  'background-position' : '50% ' + (scrollPos/31)+"px"
                });
                if( !$('body').hasClass("content-info-box") ){
                  $('.header-display').css({
                    'margin-top': (-scrollPos/9)+"px",
                    'opacity': 1-(scrollPos/100)
                  });
                }
              }

              var pageH = $(".content-wrapper").height(),
                  reverseCheckpoint = pageH / 1.5; //height ratio

                //this technique is required because the fullscreen
                //background is being the parallax element and we need
                //to display it without repeating it always.
                //This makes the trick :)
                
                //First we need to check if the page has short content
                //If it is, the scroll speed ratio is lower
                if( pageH > 950 ){
                  $(window).scroll(function() {
                    var topWin = $(window).scrollTop();
                    if( topWin > reverseCheckpoint ) {
                      reverseParallax();
                     }else{
                      straightParallax();
                     }
                  });
                }else{
                  $(window).scroll(function() {
                    var scrollPos = $(window).scrollTop();
                    $('body, .slides li').css({
                      'background-position' : '50% ' + (-scrollPos/55)+"px"
                    });
                    if( !$('body').hasClass("content-info-box") ){
                      $('.header-display').css({
                        'margin-top': (scrollPos/9)+"px",
                        'opacity': 1-(scrollPos/100),
                        'z-index': 1-(scrollPos/5)
                      });
                    }
                  });
                }
            },
            addSeparatorStripe : function(){
              if( $(".wpb_row").find(".vc_separator_align_center").length > 0 || $(".wpb_row").find(".vc_separator_align_left").length > 0 || $(".wpb_row").find(".vc_separator_align_right").length > 0 ){
                var divider = $(".vc_separator_align_center, .vc_separator_align_left, .vc_separator_align_right");
                $('<div class="divider-stripe"></div>').insertAfter(divider);
              }
            },
            mapToBack : function(){
              //get map values to calculate how much the area must to be increased
              var mapHeight = $("#map-canvas").height(),
                  botAngleH = $(".bottom-angle").css("border-bottom-width"),
                  transBotAngleH = parseInt(botAngleH, 10),
                  footBotAngleH = $(".footer-angle").css("border-top-width"),
                  transFootBotAngleH = parseInt(footBotAngleH, 10),
                  sumSizes = transBotAngleH + transFootBotAngleH + mapHeight;

                  if( $("body").hasClass("straight-layout") ) {
                    $("#map-canvas").appendTo(".content");
                    $("#map-canvas").css("width", 100+'%');
                    $("#map-canvas").css("height", mapHeight + 300);
                    $("#map-canvas").wrap("<div class='map-area'></div>");
                    $("<div class='map-zoom'></div>").appendTo(".map-area");
                    $("<a class='zoom-in' href='#'><i class='icon-plus'></i></a>, <a class='zoom-out' href='#'><i class='icon-minus'></i></a>").appendTo(".map-zoom");
                    $(".footer").css("margin-top", mapHeight);
                  }else if( $("body").hasClass("minimal-layout") ){
                    var minMap = $("#map-canvas");
                  }else{
                    $("#map-canvas").appendTo(".content");
                    $("#map-canvas").css("width", 100+'%');
                    $("#map-canvas").css("height", sumSizes);
                    $("#map-canvas").wrap("<div class='map-area'></div>");
                    $("<div class='map-zoom'></div>").appendTo(".map-area");
                    $("<a class='zoom-in' href='#'><i class='icon-plus'></i></a>, <a class='zoom-out' href='#'><i class='icon-minus'></i></a>").appendTo(".map-zoom");
                    $(".footer").css("margin-top", mapHeight/2);
                  }
            },
            wdgtThumb : function(){

              var n = 0;
              var theIMGCanvas = $("<div class='tb-wdgt-wrap'></div>");
              theIMGCanvas.appendTo($(".tab-content ul li"));

                //pass the thumbs to a new element in order to create
                //a better layout for these widget elements
                $(".sb_tabbed .tab-content").find("img").each(function(i, elem) {
                    var img = $(this),
                        nItems = img.length,
                        theIMG = img.attr("src"),
                        item = $(".tb-wdgt-wrap");
                    
                    item.eq(n).css('background-image', 'url("' + theIMG + '")');
                    img.remove();
                    n++;
                });
            },
            imgToBg : function(){
                //src replacement to background images
                //when used within VC rows adding the handclass
                $('.wpb_row').filter(function(){
                    return $(this).has('.to-background').length > 0;
                }).each(function(){
                    var imgCanvas = $(this).find(".to-background"),
                        img = imgCanvas.find("img"),
                        theIMG = img.attr("src"),
                        item = $(".wpb_row");
                    
                    $(this).css('background-image', 'url("' + theIMG + '")');
                    imgCanvas.remove();
                });
            },
            stickyControl : function(){
              if( $(window).width() <= 771 && menuStickyControl === true ){
                $("body").removeClass("menu-layout-fixed");
              }else if( $(window).width() >= 771 && menuStickyControl === true ){
                $("body").addClass("menu-layout-fixed");
              }
            },
            centerStickyMenuLy1 : function(){
              var hWindow = $(window).height(),
                  midHWindow = hWindow / 2,
                  hMenu = $(".main-navigation").height(),
                  midHMenu = hMenu / 2,
                  stickyMiddle = midHWindow - midHMenu;
              $(".main-navigation").animate({
                top: stickyMiddle
              }, 1750, 'easeInOutQuint');
            },
            centerSocFoo : function(){
              var itemN = $(".social-icon").find("li").length;
              if( itemN == 1 ){
                $(".social-icon li").css("width", 100+'%');
              }else if( itemN == 2 ){
                $(".social-icon li").css("width", 50+'%');
              }else if( itemN == 3 ){
                $(".social-icon li").css("width", 33+'%');
              }else if( itemN == 4 ){
                $(".social-icon li").css("width", 25+'%');
              }else if( itemN == 5 ){
                $(".social-icon li").css("width", 20+'%');
              }else if( itemN == 6 ){
                $(".social-icon li").css("width", 16+'%');
              }else if( itemN == 7 ){
                $(".social-icon li").css("width", 14+'%');
              }
            },
            centerIeElm : function(elm){
              var menu = $(elm),
                  menuW = $(elm).width(),
                  middleMenuW = menuW/2;

              menu.css("left", 50+'%').css("margin-left", -middleMenuW);

            },
            copyColors : function(){
              var copyText = $(".copy-right");
              copyText.html(copyText.html().replace(/love/gi, '<small class="footer-highlight hight-red">love</small>'));
            }
          },//tweeks
          third : {
            setCycleTwtr : function(){
              $('.tweet_list').cycle({
                  fx:     'fade',
                  speed:  'fast',
                  timeout: 0,
                  next:   '.next',
                  prev:   '.prev'
              });
            },
            setTwitterIcn : function(){
              var wdgtTwtr = $(".widget-twitter"),
                  icnTwtr = $("<i class='icon-twitter'></i>");

              icnTwtr.appendTo(wdgtTwtr);
            }
          }//third
      };
      //need to know if the var is present on load 
      //to manage the different menu layouts
      window.menuStickyControl = $("body").hasClass("menu-layout-fixed");

      if( navigator.userAgent.match(/Android/i) ||
       navigator.userAgent.match(/webOS/i) ||
       navigator.userAgent.match(/iPhone/i) ||
       navigator.userAgent.match(/iPad/i) ||
       navigator.userAgent.match(/iPod/i)
       ){
        window.mobileDevice = true;
      } else {
        window.mobileDevice = false;
      }

      if( navigator.userAgent.match(/iPhone/i) ||
       navigator.userAgent.match(/iPad/i) ||
       navigator.userAgent.match(/iPod/i) ) {
        $("body").addClass("iosdevice");
      }
      



      //this method is used to prevent the hover default action on main menu
      var isTouch =  !!("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0;
      if( !isTouch ){ Core.ui.showTargetPage(); }

      $(".main-navigation").addClass("face-control");

      //in case the theme runs in a mobile
      //the bg is managed by a third party plugin
      //to prevent inconsistence with CSS3 :cover value
      if( mobileDevice === true ) {
        if( $(".intro-slider").length === 0 ){
          $.vegas();
          $("body").removeClass("image-bg");
        }
      }
      //in case a large slider is enabled
      //the theme removes any default bg
      //to improve load times in mob/desk
      if( $(".intro-slider").length > 0 ){
        $("body").removeClass("image-bg");
      }

      //hide for the iPhone´s search bar to minimize fixed back with scroll issue
      /mobi/i.test(navigator.userAgent) && !location.hash && setTimeout(function () {
        if (!pageYOffset) window.scrollTo(0, 1);
        if( $(".intro-slider").length > 0 ){
          Core.ui.setHomeSliderProps();
        }
      }, 1000);

      Core.ui.setSubmenus();
      Core.ui.pageScroller();
      Core.ui.setHandHovers();
      Core.tweaks.copyColors();
      if($('body').hasClass('page-template-template-contact-php')){  Core.tweaks.mapToBack(); }
      Core.tweaks.imgToBg();
      Core.tweaks.setAngledSections();
      Core.tweaks.addSeparatorStripe();
      Core.tweaks.centerSocFoo();
      Core.tweaks.stickyControl();
      Core.third.setCycleTwtr();

      //here we are listening for this method that is
      //only supported for IE (even ie10) in order
      //to center some absolute elements because IE
      //can´t manage a so simple task like this one.
      //we can´t access to IE10 with modernizer either
      if (window.clipboardData) {
        $("body").addClass("explorer");
        Core.tweaks.centerIeElm(".inner-header");
        Core.tweaks.centerIeElm(".display-slide");
        Core.tweaks.centerIeElm(".explorer .slide-state");
      }

       var ie11Styles = [
           'msTextCombineHorizontal'];

       /*Test all IE only CSS properties*/
       var d = document;
       var b = d.body;
       var s = b.style;
       var ieVersion = null;
       var property;

       // Test IE11 properties
       for (var i = 0; i < ie11Styles.length; i++) {
           property = ie11Styles[i];

           if (s[property] != undefined) {
               ieVersion = "ie11";
           }
       }

      if (ieVersion === "ie11") { $("body").addClass("modernIE").removeClass("explorer"); }

      if( $("body").find(".intro-slider").length > 0 ){ Core.ui.setHomeSlider(); }

      if( $("body").hasClass("menu-layout-1") ){
        var menuItem = $(".navigation a").hover(function(){
          var disBody = $(".target-body"),
              disBodyH = $(".target-body").height(),
              halfBodyH = disBodyH / 2;

          var navH = $(".navigation").outerHeight(),
              shareH = $(".menu-share").outerHeight(),
              sumOptions = navH + shareH;

              disBody.css("margin-top", -halfBodyH + shareH);
        });
      }

      if( $('body').hasClass("page") || $('body').hasClass("archive") ){
        Core.ui.setProjectHovers();
        Core.ui.setTitleProject();
      }
      
      if( $('body').hasClass('single-portfolio') ){
        Core.tweaks.setProjectHandlers();
        Core.ui.setPaginationArrows();
        Core.ui.setPagDirection();
        Core.ui.placeRelated();
      }

      if( !$('body').hasClass('content-info-box') ){
          Core.ui.placeHeaders();
      }else if( $('body').hasClass('single-portfolio') && $('body').hasClass('hide-info') ) {
        $('.info-box').hide();
      }

      if( $('body').hasClass('single-portfolio') && $('#ytVideo').length > 0 || $('body').hasClass('single-portfolio') && $('#vmPlayer').length > 0 ){
        $(".arrow-nav").addClass("face-control");
      }

      //functions portfolio dependant
      if( $('body').hasClass('blog') || $('body').hasClass('single-post') || $('body').hasClass('archive') || $('body').hasClass('category') || $('body').hasClass('search') || $('body').hasClass('single-tag')  ){
        Core.tweaks.wdgtThumb();
      }
      if( $('body').hasClass('single-post') ){
        Core.ui.myblurberrynights();
      }

      if( $('body').hasClass('parallax') && !mobileDevice ){
        Core.tweaks.setParallax();
      }else{
        $("body").removeClass("parallax");
      }

      if($('body').hasClass('page-template-portfolio') && $(".projects li").length > 0){
        Core.ui.setIsotopeLayout();
        Core.ui.stackFilters();
      }
      //set GoogleMap in case the map canvas is present
      //in any part of any page
      if( $("body.page-template-template-contact-php").find("#map-canvas").length > 0 ){
        Core.ui.setMap();
      }

      if( $(".widget-twitter").length > 0 ){ Core.third.setTwitterIcn(); }

      /*in case the user don´t want to use the menu displays
      for current and target pages, they can be removed
      from the option panel and this rule is applied*/
      if( $("body").hasClass("no-menu-displays") ){
        $(".current-page, .target-page").remove();
      }
      //enables the scroll top option that is disabled by default
      if( $("body").hasClass("scroll-helper-enabled") ){ Core.ui.setScrollTopHelper(); }

      //removes the filters in case of the option is enabled in the option panel
      if( $("body").hasClass("page-template-portfolio") && $(".categories ul").hasClass("hidden-filters") ){
        $(".categories ul").remove();
      }

      //in case of dark-layout is enabled. Add class
      if( $("body").hasClass("dark-layout") && mobileDevice === false )
          $("html").addClass("dark");

  };

  mainScripts();

  //Helper to detect if browser back button was clicked
  //to fix header displays deep issue
  if ( (window.history && history.pushState) ) {
    var historyEntries = window.history.length;
    if( historyEntries > 0 && $("body").hasClass("parallax") ){
        $(".header-display").css("z-index", -1);
    }
  }
  

  if (Function('/*@cc_on return document.documentMode===10@*/')()){
    document.documentElement.className+=' ie';
  }

  //assign & locate inner links to achieve a lazy/fade load between pages
  $("a[href*='http://"+window.location.hostname+"']").not('[target="_blank"]').not('not-inner').addClass("inner-link");

  $(function(){
    //fade when load pages from cat menu
    if( $("body").hasClass("page-template-portfolio") ){
      $(".categories li a").removeClass("inner-link");
    }else{
      $(".prettyphoto, .cboxElement, .fancybox, .lightbox").removeClass("inner-link");
    }
    $('.inner-link').click(function(){
      var link = $(this).attr('href');
      $("body, body.image-bg, body.pattern-bg").css("background-image", "url(' ')");
      if( $("html").hasClass("dark") ){
        $('body').fadeOut(550, function(){
            window.location.href = link;
        });
      }else{
        $('html').fadeOut(550, function(){
            window.location.href = link;
        });
      }
      return false;
    });
  });

  // Fullscreen galleries management
  if($('body').hasClass('gal-v1')){ Galleria.loadTheme(themeUrl+'/js/themes/one_plus/galleria.one_plus.min.js'); }
  else if($('body').hasClass('gal-v2')){ Galleria.loadTheme(themeUrl+'/js/themes/one_plus_light/galleria.one_plus_simple.min.js'); }
  else if($('body').hasClass('gal-v3')){ Galleria.loadTheme(themeUrl+'/js/themes/one_plus_bureau/galleria.one_plus_bureau.min.js'); }
  else if($('body').hasClass('gal-v4')){ Galleria.loadTheme(themeUrl+'/js/themes/flamingo/galleria.flamingo.min.js'); }

  // bind the method to Galleria.ready
  Galleria.ready(function(options) {

    function customCloseGal(){
      var instanceGal = jQuery('#galleria');
      if(instanceGal.length>0 && instanceGal.data('galleria')){
        instanceGal = instanceGal.data('galleria');
        instanceGal.destroy();
      }
    }

    $('.gal-close-btn').click(function(e){
      if( $("body").hasClass("menu-layout-3") ){
          $(".menu-bg-ly-3, .bottom-menu-angle").fadeIn(250);
      }
      if( $("body").hasClass("menu-layout-open") ){
          $(".menu-layout-open .header.nav-opened, .bottom-menu-angle").show();
      }
      $("#fullscreen-images").fadeOut(250);
      $(".header-display").css("z-index", -1);
      $("html, body").css("overflow", "visible");
      setTimeout(function() {
        customCloseGal();
      }, 350);
      $(".header").stop(true).delay(50).css("z-index", 10000);
      e.preventDefault();
    });

    var gallery = this;

    toFullscreen = function () {
      $("#preloader").fadeIn(100).delay(350).fadeOut(100);
        gallery.setOptions({
          maxScaleRatio: 0,
          imageCrop: 'landscape'
        }).refreshImage();
        },
    toNormal = function() {
      $("#preloader").fadeIn(100).delay(350).fadeOut(100);
        gallery.setOptions({
          maxScaleRatio: 1,
          imageCrop: 'landscape'
        }).refreshImage();
    };

    var state = false;
    $(".btn-toggle-fit").click(function(e){
        if(!state){
           toFullscreen();
        } else {
           toNormal();
        }
        state = !state;
        e.preventDefault();
    });

    if( $("body").hasClass("project-transition-slide") ){
      gallery.setOptions({
        transition: 'slide'
      });
    }else if( $("body").hasClass("project-transition-fade") ){
      gallery.setOptions({
        transition: 'fade'
      });
    }else if( $("body").hasClass("project-transition-flash") ){
      gallery.setOptions({
        transition: 'flash'
      });
    }else if( $("body").hasClass("project-transition-pulse") ){
      gallery.setOptions({
        transition: 'pulse'
      });
    }else if( $("body").hasClass("project-transition-fadeslide") ){
      gallery.setOptions({
        transition: 'fadeslide'
      });
    }else{
      gallery.setOptions({
        transition: false
      });
    }

    if( $("body").hasClass("project-size-fit") ){
        gallery.setOptions({
        maxScaleRatio: 1
    });
    }else if( $("body").hasClass("project-size-fullscreen") ){
        gallery.setOptions({
        maxScaleRatio: 0
      });
    }else{
        $(".galleria-toggle-fit").css("display", "block");
    }

  });

  function runGallery(){
    Galleria.run("#galleria", {
      extend: function(options) {
        gallery = this;
        
        this.bind("loadstart", function (a) {
          if ( $(window).width() < 768 ){
            $('.device-menu-firer').css("display", "none");
          }
          var
            current = gallery.getIndex(),
            galNumSlides = gallery.getDataLength();
            nextSlide = gallery.getNext(),
            slideRAW = gallery.getData(),
            active = gallery.getData().thumb; //this var gets the ID oject

            var checkYoutubeVideo = active.indexOf('youtube');
            var checkVimeoVideo = active.indexOf('vimeo');

            if(checkVimeoVideo != -1 || checkYoutubeVideo != -1){
              var
                classes = $('#galleria').attr('class'),
                classSgmnts = classes.split(' '),
                nclassSgmnts = classSgmnts.length;

              for (var i = 0; i < nclassSgmnts; i++) {
                classSingle = classSgmnts[i];
                cData = classSingle.replace("flamingo-video-","");
                cData = cData.split('-');

                var sizeSet = {
                  size: cData[0],
                  nSlide: cData[1]
                };

                slideSize = parseInt(sizeSet['size'],10);
                numSlide = parseInt(sizeSet['nSlide']-1,10);

                if(numSlide === current){
                  Galleria.configure({
                    maxVideoSize: slideSize
                  });
                }
              }
            }else{
              //the slide is a non flamingo-video (Youtube/vimeo) iframe or image
              Galleria.configure({
                maxVideoSize: 0
              });
            }
        });
      }
  });
}

  //main menu management for pages that have not action handlers
  if (!$("body").hasClass("single-portfolio")) {
    //display the main menu
    clickNavState = false;
    $(".menu-launcher a").click(function(e){
        if(!clickNavState){
            Core.ui.openMenu();
        } else {
           Core.ui.closeMenu();
        }
        clickNavState = !clickNavState;
        e.preventDefault();
    });

    //we are listening the scroll in order
    //to close, if viewed, the nav&related areas
    $(window).scroll(function() {
      var topWin = $(window).scrollTop();
      if( $("body").hasClass("angles-layout") ){
        var topMargin = parseInt( $(".top-angle").css("margin-top"), 10 );
        if( $("body").hasClass("single-post") ){
          var topMargin = $(".post-image").height();  
        }
      }else if( $("body").hasClass("straight-layout") ){
        var menuH = $(".header").outerHeight() + 50;
        var topMargin = parseInt($(".top-angle").css("border-top-width"), 10) - menuH;
        if( $("body").hasClass("single-post") ){
          var topMargin = $(".post-image").height();
        }
      }
      if( topWin > 125 && $("#overlay-header").hasClass("over-viewed") && !$("body").hasClass("minimal-layout") ) {
        Core.ui.closeMenu();
        clickNavState = false;
      }
      if( $("body").hasClass("menu-layout-fixed") && topWin > topMargin ){
        $("body").addClass("sticky-opacity");
      }else{
        $("body").removeClass("sticky-opacity");
      }
    });
  }
  //because in minimal-layout mode the menu is always in view
  if( $("body").hasClass("minimal-layout") && $("body").hasClass("menu-layout-3") && $(window).width() > 721 ){
    Core.ui.openMenu();
  }else if( $("body").hasClass("minimal-layout") && $("body").hasClass("menu-layout-1") || $("body").hasClass("minimal-layout") && $("body").hasClass("menu-layout-2") ){
    Core.ui.openMenu();
  }

  if( $("body").hasClass("menu-layout-open") && !$("body").hasClass("minimal-layout") ){
    $("body").removeClass("menu-layout-1 menu-layout-2");
    $("body").addClass("menu-layout-3");
    Core.ui.openMenu();
  }

  //needed to center the header handlers
  var canvasW = $(".action-scroll").outerWidth();
  $(".actions").css("width", canvasW);

  //if a gallery is loaded directly
  //and single-portfolio functions dependecies
  //with action handlers
  if($('body').hasClass('single-portfolio')){

    $('.fullscreen-btn').on('click', function(e) {
       if( $("body").hasClass("menu-layout-3") ){
          $(".menu-bg-ly-3, .bottom-menu-angle").fadeOut(150);
       }
       if( $("body").hasClass("menu-layout-open") ){
          $(".menu-layout-open .header.nav-opened").hide();
       }
       $(".header-display").css("z-index", 100);
       $("#fullscreen-images").fadeIn(750);

        //wait until the galleria wrapper is ready
        runGallery();
        //need to set the html opacity to 1 due to start effect
        $("html").stop(true).delay(250).fadeTo(250, 1);
        //and remove the header to have more available space for slides
        $(".header").stop(true).delay(50).css("z-index", 0);
        return false;
    });

    $(".show-fullscreen img").click(function(){
      $(".fullscreen-btn").trigger("click");
    });

    //display the main menu controlling handlers
    clickNavState = false;
    $(".menu-launcher a").click(function(e){
        if(!clickNavState){
            if (clickState === true) {
              Core.ui.closeRelated();
              clickState = !clickState;
              setTimeout(function() {
                Core.ui.openMenu();
              }, 500);
            }else{
              Core.ui.openMenu();
            }
        } else {
           Core.ui.closeMenu();
        }
        clickNavState = !clickNavState;
        e.preventDefault();
    });

    //display the related projects
    clickState = false;
    $(".actions-related").click(function(e){
        if(!clickState){
           Core.ui.openRelated();
        } else {
           Core.ui.closeRelated();
        }
        clickState = !clickState;
        e.preventDefault();
    });

    $(".close-related").click(function(e){
      Core.ui.closeRelated();
      clickState = !clickState;
      e.preventDefault();
    });
    //we are listening the scroll in order
    //to close, if viewed, the nav&related areas
    $(window).scroll(function() {
      var topWin = $(window).scrollTop();
      if( $("body").hasClass("angles-layout") ){
        var topMargin = parseInt( $(".top-angle").css("margin-top"), 10 );
      }else if( $("body").hasClass("straight-layout") ){
        var menuH = $(".header").outerHeight() + 50;
        var topMargin = parseInt($(".top-angle").css("border-top-width"), 10) - menuH;
      }
      if( topWin > 125 && $("#overlay-header").hasClass("over-viewed") && !$("body").hasClass("minimal-layout") ) {
        Core.ui.closeRelated();
        if( !$("body").hasClass("menu-layout-fixed") ){
          Core.ui.closeMenu();
        }else{
          Core.ui.closeMenu();
        }
        clickNavState = false;
        clickState = false;
      }

      if( $("body").hasClass("menu-layout-fixed") && topWin >  topMargin ){
        $("body").addClass("sticky-opacity");
      }else{
        $("body").removeClass("sticky-opacity");
      }

    });

  }

  var checkMenu;
  function rszCheck(){
    //because in minimal-layout mode the menu is always in view
    //this function needs to be on resize listening the window width
    //in order to hide the menu and preapare the whole layout for the
    //absolute positioning for this
    if( $("body").hasClass("menu-layout-1") && $("body").hasClass("menu-layout-fixed") ){ Core.tweaks.centerStickyMenuLy1(); }
    if( $("body").hasClass("minimal-layout") && $("body").hasClass("menu-layout-3") && $(window).width() > 721 || $("body").hasClass("menu-layout-open") && $(window).width() > 721 ){
      Core.ui.openMenu();
    }else if( $("body").hasClass("minimal-layout") && $("body").hasClass("menu-layout-3") && $(window).width() < 721 || $("body").hasClass("menu-layout-open") && $(window).width() < 721 ){
      window.logoMar = $(".logo img").css("margin-top");
      Core.ui.closeMenu();
      clickNavState = false;
    }
  }rszCheck();

  //resize dependencies
  $(window).bind('resize', function() {

    if (window.clipboardData) { Core.tweaks.centerIeElm(".inner-header"); Core.tweaks.centerIeElm(".display-slide"); }

    Core.ui.setSubmenus();
    Core.tweaks.setAngledSections();
    Core.ui.setHomeSliderProps();
    Core.tweaks.stickyControl();

    if( $("body").hasClass("menu-layout-3") ){
      //we need to remove the menu background
      //in order to prevent this element cloned
      //for each resize event
      $(".bottom-menu-angle").remove();
      Core.ui.getHmenu();
    }
    //with this method we can delay the end event. In this way
    //this funcion does not fire every time the browser is resized
    //it will only do this every 500ms after resize
    clearTimeout(checkMenu);
    checkMenu = setTimeout(function() {
        rszCheck();
    }, 250);

    if( $('body').hasClass("page") || $('body').hasClass("archive") ){
      Core.ui.setTitleProject();
    }

    if( $('body').hasClass('single-portfolio') ){
        Core.ui.setPaginationArrows();
    }
    if($('body').hasClass('page-template-portfolio')){
      Core.ui.stackFilters();
    }
   
  });
  //because some devices do not fire the resize event
  //on orientation change, we need to include the functions into de event
  $(window).bind('orientationchange', function() {
    Core.ui.setHomeSliderProps();
  });

  //Infinite Scroll
  function setInfinite(){
    var $container = $('#container');
    $container.infinitescroll({
      navSelector  : '.next-post',
      nextSelector : '.next-post a',
      itemSelector : '#container li'
    },
      function( newElements ) {
        var $newElems = $( newElements ).css({ opacity: 0 });
        $newElems.imagesLoaded(function() {
          $newElems.animate({ opacity: 1 });
          $container.isotope( 'appended', $newElems );

          $('#container li').unbind('hover');
          Core.ui.setProjectHovers();
          Core.ui.setTitleProject();

          $container.isotope('reLayout');
          $(window).smartresize();

        });
      }
    );
  }

  //on load dependencies
  $(window).load(function(){

    $("#preloader").fadeOut(1150);

    $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
        $('body').removeClass('loading');
      }
    });

    if( $(".wpb_wrapper .flexslider").length > 0 || $(".wpb_wrapper .nivoSlider").length > 0 || $(".wpb_wrapper .vc-carousel").length > 0 ){
        Core.tweaks.setFlexVCNav();
        $(".wpb_wrapper .flexslider").hover(function(){
          $(this).find(".flex-direction-nav a").fadeIn(10);
        }, function(){
          $(this).find(".flex-direction-nav a").fadeOut(100);
        });
    }

    if( $("body").hasClass("infinite-scrl") && $("body").hasClass("page-template-portfolio") ){
      setInfinite();
    }
    
  });
  
  //detect Youtube videos
  if($('#ytVideo').length > 0){
    $(function(){
      $(".movie").mb_YTPlayer();
      if( $("body").hasClass("parallax") ){
        $(".top-angle, .content-wrapper").addClass("face-control");
      }
    });
  //detect Vimeo videos
  }else if($('#vmPlayer').length > 0){
      if( $("body").hasClass("parallax") ){
        $(".top-angle, .content-wrapper").addClass("face-control");
      }
      var iframe = $('#vmPlayer')[0],
          player = $f(iframe);
      // Once the player is ready...
      player.addEvent('ready', function(player_id) {
        iframe.player = $f(player_id);
        //...we send the set to the API to mute the video
        if($('#vmPlayer').hasClass('muted')){ iframe.player.api('setVolume', 0); } 
      });
  }

  var bgStretch = true;
  // Detect mobile device
  if( navigator.userAgent.match(/Android/i) ||
   navigator.userAgent.match(/webOS/i) ||
   navigator.userAgent.match(/iPhone/i) ||
   navigator.userAgent.match(/iPad/i) ||
   navigator.userAgent.match(/iPod/i)
   ){
    mobileDevice = true;
  } else {
    mobileDevice = false;
  }

  $(window).resize(function() {
    videoResize();
  });
  videoResize();

  function videoResize(){

    if($('#vmPlayer').length > 0) {

      var winW = $(window).width();
      if(mobileDevice)
        winW = minWidth;
      var winH = $(window).height();
      var winRatio = winW/winH;
      if($('#bgVideo iframe').length > 0){
        imgW = $('#bgVideo iframe').width();
        imgH = $('#bgVideo iframe').height();
      }
      var imgRatio = imgW/imgH;
      var imgLeft=0;
      var imgTop=0;

      if(bgStretch){
        if(winRatio > imgRatio)
        {
          imgW = parseInt(winW);
          imgH = parseInt(imgW/imgRatio);
        }else{
          imgH = winH;
          imgW = parseInt(imgH*imgRatio);
        }
        }else{
        if(winRatio > imgRatio)
        {
          imgH = parseInt(winH);
          imgW = parseInt(imgH*imgRatio);

        }else{
          imgW = winW;
          imgH = parseInt(imgW/imgRatio);
        }
      }
      imgLeft = parseInt((winW-imgW)/2);
      imgTop = parseInt((winH-imgH)/2);

      if(mobileDevice && ($('#vmPlayer').length > 0) && ($('#ytPlayer').length > 0)){
        imgW = winW;
        imgH = winH;
        imgLeft = imgTop = 0;
      }
        $('#bgVideo div').css({width:imgW+'px', height:imgH+'px'});

        if($('#vmPlayer').length > 0){
          $('#vmPlayer').css({width:imgW+'px', height:imgH+'px'});
          $('#bgVideo div').css({left:imgLeft+'px', top:imgTop+'px'});
        }
    }
  }          
});//end document.ready