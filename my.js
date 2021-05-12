$(document).ready(function() {
  /* Изменение высоты меню (при скролле тоже) */
  var topPosition = $(window).scrollTop();
  var headerMenu  = $('.header_menu');
  var logo1 = $('.logo-althaus');
  var logo2 = $('.logo-althaus2');
  var logoBox = $('.logo-main');
  var headerMainFirst = $('.header-main-first');
  var headerMainLast = $('.header-main-last');
  var divShoppingCart = $('#divShoppingCart');

  // console.log(topPosition);

  if (topPosition > 25) {
    logo1.removeClass('active');
    logo2.addClass('active');
  } else {
    logo2.removeClass('active');
    logo1.addClass('active');
  }

  if (topPosition > 45) {
    headerMenu.addClass('active');
    headerMainFirst.addClass('active');
    headerMainLast.addClass('active');
    divShoppingCart.addClass('active');
  } else {
    headerMenu.removeClass('active');
    headerMainFirst.removeClass('active');
    headerMainLast.removeClass('active');
    divShoppingCart.removeClass('active');
  }

  if (topPosition > 35) logoBox.css('height', '35px');
  else logoBox.css('height', '' + (71 - topPosition) + 'px');

  $(window).scroll(function() {
    var topPosition = $(window).scrollTop();

    // console.log(topPosition);

    if (topPosition > 25) {
      logo1.removeClass('active');
      logo2.addClass('active');
    } else {
      logo2.removeClass('active');
      logo1.addClass('active');
    }

    if (topPosition > 45) {
      headerMenu.addClass('active');
      headerMainFirst.addClass('active');
      headerMainLast.addClass('active');
      divShoppingCart.addClass('active');
    } else {
      headerMenu.removeClass('active');
      headerMainFirst.removeClass('active');
      headerMainLast.removeClass('active');
      divShoppingCart.removeClass('active');
    }

    if (topPosition > 35) logoBox.css('height', '35px');
    else logoBox.css('height', '' + (71 - topPosition) + 'px');
  });

  /* Ограничение кол-ва символов в названии товара */
  var productNameGlCollection = $('.product_name_gl');
  var productNameCollection = $('.product_name');
  // console.log(productNameCollection);
  if (productNameCollection.length > 0) {
    // console.log("работает");
    productNameGlCollection = productNameCollection;
  }
  // var productNameGl = productNameGlCollection[0].innerHTML;
  // console.log(productNameGlCollection);
  var count = 0;
  for (var key = 0; key < productNameGlCollection.length; key++) {
    var productNameGl = productNameGlCollection[key].innerHTML;
    // console.log(productNameGl);
    count++;
    // var productNameGlSymbolLength = 
    if (productNameGl.length > 20) {
      // console.log(productNameGl);
      var productNameGlNew = productNameGl.substring(0, 18) + '...';
      // console.log(productNameGlNew);
      productNameGlCollection[key].innerHTML = productNameGlNew;
    }
  }
  // console.log(count);
});



//Изменение цвета логотипа выше 1080 пикселей
var screenWidth = document.body.clientWidth;
var screenHeight = screenWidth / 1.777777777777778;
var topPosition = $(window).scrollTop();
var logo = $('.top-logo-img');
var logoMobile = $('.top-logo-img-mobile');
var topContacts = $('.top-contacts');
//var topIconPhone = $('.top-icon-phone');
var screenHeightOriginal = document.body.clientHeight;
var wrapView = $('.wrap-view');
//console.log('Top-position: ' + topPosition);
//console.log('Ширина: ' + screenWidth);
//console.log('Высота: ' + screenHeightOriginal);

if (screenWidth > 768) {
  if (topPosition > screenHeight - 130) {
    logo.addClass('active');
    logoMobile.addClass('active');
  } else {
    logo.removeClass('active');
    logoMobile.removeClass('active');
  }

  if (topPosition > screenHeight - 70) {
    topContacts.addClass('active');
  } else {
    topContacts.removeClass('active');
  }
} /*else {
  if (topPosition > 935) {
    logo.addClass('active');
    logoMobile.addClass('active');
    topIconPhone.addClass('active');
  } else {
    logo.removeClass('active');
    logoMobile.removeClass('active');
    topIconPhone.removeClass('active');
  }
}*/

if (screenHeightOriginal > 1000) {
  wrapView.css({"padding-top":"300px", "padding-bottom":"300px"});
}




// Функция отлавливает находится ли объект в видимости
function inWindow(s){
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var currentEls = $(s);
  var result = [];
  currentEls.each(function(){
    var el = $(this);
    var offset = el.offset();
    if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
      result.push(this);
  });
  return $(result);
}




$(window).load(function() {

  $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");

  // Фиксируем меню, если высота больше 35px 
  if ($(window).scrollTop() > 50) $('.navbar').addClass('flipped');
  else $('.navbar').removeClass('flipped');

  // Добавляем кнопку обратного звонка
  /*if ($(window).scrollTop() > 700) $('.callback-button').addClass('visible');
  else $('.callback-button').removeClass('visible');*/

});




$(document).ready(function() {
  // Выподающий текст
  $('.plus-1').on('click', function() {
    $(this).toggleClass('open');
    $('.plus-ul-1').slideToggle();
  });
  $('.plus-2').on('click', function() {
    $(this).toggleClass('open');
    $('.plus-ul-2').slideToggle();
  });
  $('.plus-3').on('click', function() {
    $(this).toggleClass('open');
    $('.plus-ul-3').slideToggle();
  });


  // Плавный скролл
  $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 0;
    
    // Если кликаем по "Дополнительно"
    if(this.hash == '#dop' || this.hash == '#device') fixed_offset = 100;
    else fixed_offset = 0;

    // Если кликаем по вкладкам "Зачем"
    if(this.hash == '#testdrive' || 
      this.hash == '#lkp' || 
      this.hash == '#competence' || 
      this.hash == '#vin' || 
      this.hash == '#diagnostics' || 
      this.hash == '#tabprice' || 
      this.hash == '#honesty' || 
      this.hash == '#pressure' || 
      this.hash == '#time' || 
      this.hash == '#efficiency') return;

    $('html,body').stop().animate({ 
      scrollTop: $(this.hash).offset().top - fixed_offset
    }, 700);
    e.preventDefault();

    $('.navbar-collapse').collapse('hide');
    $a = $($(this).attr('href'));  
    return false;
  });

  // Выделяем ссылки, если якорь в фокусе
  // $(document).on("scroll", onScroll);

  
  // Увеличиваем по высоте логотип в мобильных версиях
  // и наоборот, при нажатии на кнопку "меню"
  // и ссылки внутри меню

  // Отлавливаем клик по кнопке "меню"
  $('.navbar-toggler').on('click', function() {
    $('.navbar-brand').toggleClass('open');
  });

  var navbarInWindow = [];

  // Отлавливаем клик по ссылкам внутри меню
  $('a[href="#price"]').on('click', function() {
    navbarInWindow = inWindow('.navbar-collapse.show');
    if(navbarInWindow.length > 0) {
      $('.navbar-brand').toggleClass('open');
      navbarInWindow = [];
    }
  });
  $('a[href="#top"]').on('click', function() {
    navbarInWindow = inWindow('.navbar-collapse.show');
    if(navbarInWindow.length > 0) {
      $('.navbar-brand').toggleClass('open');
      navbarInWindow = [];
    }
  });
  $('a[href="#why"]').on('click', function() {
    navbarInWindow = inWindow('.navbar-collapse.show');
    if(navbarInWindow.length > 0) {
      $('.navbar-brand').toggleClass('open');
      navbarInWindow = [];
    }
  });
  $('a[href="#device"]').on('click', function() {
    navbarInWindow = inWindow('.navbar-collapse.show');
    if(navbarInWindow.length > 0) {
      $('.navbar-brand').toggleClass('open');
      navbarInWindow = [];
    }
  });
  $('a[href="#guarantee"]').on('click', function() {
    navbarInWindow = inWindow('.navbar-collapse.show');
    if(navbarInWindow.length > 0) {
      $('.navbar-brand').toggleClass('open');
      navbarInWindow = [];
    }
  });
  $('a[href="#about"]').on('click', function() {
    navbarInWindow = inWindow('.navbar-collapse.show');
    if(navbarInWindow.length > 0) {
      $('.navbar-brand').toggleClass('open');
      navbarInWindow = [];
    }
  });
  $('a[href="#contact"]').on('click', function() {
    navbarInWindow = inWindow('.navbar-collapse.show');
    if(navbarInWindow.length > 0) {
      $('.navbar-brand').toggleClass('open');
      navbarInWindow = [];
    }
  });

  // маска для инпута телефон
  $("#phone-home").mask("8(999) 999-9999");
  $("#phone-proverka").mask("8(999) 999-9999");
  $("#phone-diagnostika").mask("8(999) 999-9999");
  $("#phone-expert").mask("8(999) 999-9999");
});



$(window).on("scroll", function() {
  // Фиксируем меню, если высота больше 45px 
  // Добавляем классу navbar класс flipped
  if ($(window).scrollTop() > 45) $('.navbar').addClass('flipped');
  // Иначе удаляем класс flipped
  else $('.navbar').removeClass('flipped');

  // Добавляем кнопку обратного звонка
  //if ($(window).scrollTop() > 700) $('.callback-button').addClass('visible');
  //else $('.callback-button').removeClass('visible');
});
