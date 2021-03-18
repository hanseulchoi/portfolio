$(function(){
// ------------------------ VISUAL 꽃가루효과 ----------------------------

    $(function(){
      function reAction(){
      $('#startButton').trigger('click');
      setTimeout(function(){
          $('#stopButton').trigger('click');
      },4000);
    };

    // $('.uoc-icon').on('click',function(){
      reAction();
    // });
    });


// ------------------------ HEADER 섹션 ----------------------------

  $('.gnb li:nth-child(1)').click(function(){
    $('body,html').animate({scrollTop:969},1000)
  });
  $('.gnb li:nth-child(2)').click(function(){
    $('body,html').animate({scrollTop:2608},1000)
  });
  $('.gnb li:nth-child(3)').click(function(){
    $('body,html').animate({scrollTop:3279},1000)
  });
  $('.gnb li:nth-child(4)').click(function(){
    $('body,html').animate({scrollTop:5000},1000)
  });
  $('.navbar-nav li:nth-child(1)').click(function(){
    $('body,html').animate({scrollTop:1165},1000)
  });
  $('.navbar-nav li:nth-child(2)').click(function(){
    $('body,html').animate({scrollTop:5400},1000)
  });
  $('.navbar-nav li:nth-child(3)').click(function(){
    $('body,html').animate({scrollTop:6165},1000)
  });
  $('.navbar-nav li:nth-child(4)').click(function(){
    $('body,html').animate({scrollTop:8000},1000)
  });


// ------------------------ MAIN 섹션 ----------------------------

    // SKILL 스크롤에 따른 애니메이션
    $(window).scroll(function(){
        var sw = $(this).scrollTop();
        // console.log(sw)
        if(sw>=100){
          $('.btn_top').fadeIn(500);
        }
        if(sw>=500){
          $('.btn_top').fadeIn(500);
          $('#header').addClass('on')
        }
        if(sw>=2800){
          $('.section4').addClass('on')
        }
    });



    // 마우스 오버시 이미지 변경
      $('.thumbnail').mouseenter(function(){
        var txt = $(this).find('img').prop('src');
        console.log(txt);
        var txt2 = txt.replace('.off','.on');
        console.log(txt2);
        $(this).find('img').prop('src',txt2);
      });

      $('.thumbnail').mouseleave(function(){
        var txt =  $(this).find('img').attr('src');
        var txt2 = txt.replace('.on','.off');
        $(this).find('img').prop('src',txt2);
      });


// ------------------------ 포트폴리오 섹션 ----------------------------

    // ISOTOPE 이용 원하는 컨텐츠 불러오기
    $('.grid').isotope({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use element for option
        //   columnWidth: 250,        
        }
      })
      $('#allb').click(function(){
        $('.grid').isotope({filter:'.grid-item'});
      })
      $('#webb').click(function(){
        $('.grid').isotope({filter:'.web'});
      })
      $('#mobb').click(function(){
        $('.grid').isotope({filter:'.mob'});
      })
      $('#resb').click(function(){
        $('.grid').isotope({filter:'.res'});
      })

      $('.btn_modal li a').click(function(){
        $(this).removeClass('on');
        $(this).parent().addClass('on').siblings().removeClass('on');
        })

    // 포트폴리오 버튼 클릭시 모달창 띄우기
    $('.portfolio li').click(function(){
        $('.cover,.modal_pop').fadeIn(400);
        $('body,html').css({'overflow':'hidden'})
    });
    $('.cover,.btn_close').click(function(){
        $('.cover,.modal_pop').fadeOut(400);
        $('body,html').css({'overflow':'auto'})
    });

    // 클릭에 따른 이미지 변경
    $('.portfolio li').click(function(){
        var num = $(this).index();
        console.log(num);
        $('.modal_pop li').eq(num).show().siblings().hide();
    });

    $('.btn_down').click(function(){
      $('body,html').animate({scrollTop:969},1000)
    })


    // TOP버튼 클릭시 상단으로 이동
    $('.btn_top').click(function(){
        $('body,html').animate({scrollTop:0},500)        
    });
    
});