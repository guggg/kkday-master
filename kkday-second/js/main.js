$(function() {
  $(".recommand-col").slick({
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $(".slick-next").click(function() {
    $(".slick-next").addClass("opacity-0");
    $(".slick-prev").removeClass("opacity-0");
  });
  $(".slick-prev").click(function() {
    $(".slick-prev").addClass("opacity-0");
    $(".slick-next").removeClass("opacity-0");
  });
  $(".allCityCon").click(function() {
    $(".allCity .dropdown").slideToggle();
  });

  $("#thedate").datepicker({
    dateFormat: "yy-mm-dd",
    minDate: 0,
    numberOfMonths: 2
  });
  
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 20000,
    values: [80, 12000],
    slide: function(event, ui) {
      $("#amount").val("$" + ui.values[0] + " ~ $" + ui.values[1]);
    }
  });
  $("#amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " ~ $" +
      $("#slider-range").slider("values", 1)
  );
  $(".checkbox").click(function(){
    $(this).children("i").toggleClass("fa-check-square");
  })
  $(".trangle").click(function(){
    $(this).toggleClass("fa-sort-desc");
    $(this).nextAll().slideToggle();
  })
  $(".guideLan .checkbox:nth-of-type(1)").click(function(){
    $(".guideLan .checkbox .fa").toggleClass("fa-check-square");
  })
  $(".aIconCon").hover(function(){
    $(this).children(".dropdown-content").slideToggle();
  })
  $(".gotop").click(function(){
    $("html, body").animate({
      scrollTop: 0,
    })
    return false;
  })
  $(".gotop").hide();
	$(window).scroll(function(){
		var scrollHeight = $(window).scrollTop();
		if(scrollHeight > 200){
			$(".gotop").fadeIn();
		}else{		
			$(".gotop").fadeOut();
		}
  })
  $(".pick-condition").click(function(){
    $(".sideMenu-group").toggleClass("open");
    $(".pick-confirm").toggleClass("open");
    $('html, body').animate({
      scrollTop: 100,
    })
  });
  $('.pick-confirm-btn').click(function(){
    $(".sideMenu-group").toggleClass("open");
    $(".pick-confirm").toggleClass("open");
  })
  $('#pick-cancel').click(function(){
    $(".sideMenu-group").toggleClass("open");
    $(".pick-confirm").toggleClass("open");
  })
});
