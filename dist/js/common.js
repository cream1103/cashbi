var __animation__ = false;

$(window).load(function(){
    var color_numb_item = $('.scritp_color_value');
    var color_numb_value = color_numb_item.html();
    if(color_numb_value <= 400 ){
        color_numb_item.addClass('red_colors_numb');
    }
    else{
        color_numb_item.addClass('green_colors_numb');
    }
});

//определение обрезания текста в FAQ
function faqSlide(){
    $('.hidds_wrappers').each(function(){
        var wHeight = $(this).find('.wr_z').height();
        var pHeight = $(this).find('.h_var').height();
        var sravn = pHeight > wHeight;
        if(sravn == true){
            $(this).parents('.one_q_user').addClass('overClass');
            console.log()
        }
        else{
            $(this).parents('.one_q_user').removeClass('overClass');
        }
    });
}
//определение обрезания текста в FAQ

$(window).on('load', function(){
    faqSlide();
});
$(window).on('resize', function(){
    faqSlide();
});

$(document).ready(function(){


    //блокировка textarea в отзывах
    var yoUr = $('.your_balance').text();
    var neEd = $('.need_balance').text();
    var chRes = yoUr <= neEd;
    if(chRes == true){
        $('#review').attr("disabled", 'disabled').attr("placeholder", 'К сожалению вы пока не можете оставить отзыв, тк выплаченый вам кэшбек не привышает 400 руб.');
    }
    else{
        $('#review').removeAttr( "disabled" ).attr("placeholder", 'Написать отзыв');
    }
    //блокировка textarea в отзывах


    //гамбургер в FAQ синий блок
    $('.mobile-menuZ').click(function() {
        $(this).parents('.class_blue_menu_vi_xs').find('.slidedown_block').slideToggle(300);
        $(this).toggleClass('toggle');
        $(this).parents('.blue_gam').toggleClass('bord_radius');
    });
    //гамбургер в FAQ синий блок


    //раскрытие текста FAQ
    $('.clicks_class').click(function(){
        $(this).parents('.one_q_user').toggleClass('xs-restyle');
    });
    $('.click_toggle').click(function(){
        $(this).parents('.one_q_user').removeClass('xs-restyle');
        $(this).text("Закрыть")
    });
    $('.link_to_slide').bind( "click", function() {
        $(this).text(function(i, text){
            return text === "Зaкрыть" ? "Показать полностью " : "Зaкрыть";
        });
        $(this).parents('.overClass').toggleClass('autoHeight');
    });
    //раскрытие текста FAQ


    // для смены градиента
    var yell = $('.yellow_gradient');
    var blue = $('.blue_gradient');
    blue.mouseover(function(){
        $(this).find('.span_bef').stop().animate({'opacity':'1'}, 200);
        $(this).find('.span_aft').stop().animate({'opacity':'0'}, 200);
    });
    blue.mouseout(function(){
        $(this).find('.span_bef').stop().animate({'opacity':'0'}, 200);
        $(this).find('.span_aft').stop().animate({'opacity':'1'}, 200);
    });
    yell.mouseover(function(){
        $(this).find('.span_bef').stop().animate({'opacity':'1'}, 200);
        $(this).find('.span_aft').stop().animate({'opacity':'0'}, 200);
    });
    yell.mouseout(function(){
        $(this).find('.span_bef').stop().animate({'opacity':'0'}, 200);
        $(this).find('.span_aft').stop().animate({'opacity':'1'}, 200);
    });
    // для смены градиента


    //таб уведомлений
    $('.tabs span').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tabs span').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });
    //таб уведомлений

    //инициализация fancybox
    $("#inline").fancybox({
        'maxHeight':600,
        'autoSize': true

    });
    //инициализация fancybox

    //сворачивание addblock
        $('.close_addBlock').click(function(){
            $(this).parents('.adblock_block').slideUp(100);
        });
    //сворачивание addblock

    //маска инпутов
     $(function($){
        $("#phone").mask("+7 (999) 999 9999");
        $("#bank_card").mask("9999 9999 9999 9999");
    });
    //маска инпутов

    //удаление сохраненного реквизита в ЛК вывод стредств
    $('.pos_abs_span_cross').click(function(){
        $(this).parents('tr').remove();
    });
    //удаление сохраненного реквизита в ЛК вывод стредств


    //input file в ЛК профиль
    $(function (){
        if($('#chose_file').length)
        {
            $('#chose_file').click(function(){
                $('#chose_file_input').click();
                return(false);
            });

            $('#chose_file_input').change(function(){
                $('#chose_file_text').html($(this).val());
            }).change(); // .change() в конце для того чтобы событие сработало при обновлении страницы
        }
    });
    //input file в ЛК профиль

    //инициализация formstyler
    function valueFunct(){
        setTimeout(function() {
            $('.jq-selectbox__dropdown .value_chose').on('click', function(){
                setTimeout(function() {
                    $('.select_refresh').trigger('refresh');
                }, 1);
                var leng = $(this).index();
                var slot = $('.t' + leng);

                $('.likt_tab_block').fadeOut(0).css({
                    'paddingTop':'0px',
                    'borderTop':'2px solid transparent'
                });
                $(slot).css({
                    'paddingTop':'20px',
                    'borderTop':'2px solid #DDDBD4'
                });
                $(slot).fadeIn(0);
            });
        }, 100)
    }


    (function($) {
        $('.form_styler').styler({
            selectVisibleOptions: 12,
            onSelectOpened: function() {
                valueFunct()
            }
        });
    })(jQuery);


    //инициализация formstyler


    //якорь отзывов
    $('.subm_btns[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        var ofsTop = $target.offset().top -155;
        $('html, body').stop().animate({
            'scrollTop': ofsTop
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
    //якорь отзывов




    //аккордеон меню
    $(function () {
        var el = $('.nav_list_first li a');
        $('.nav_list_first li:has("ul")').append('<span></span>');
        el.click(function() {
            //setTimeout(windowHeight(), 500);
            var checkedElement = $(this).next(),
                visibleElement = $('.nav_list_first ul:visible');

            visibleElement.stop().animate({'height':'toggle'}, 300).parent().removeClass('active');
            if((checkedElement.is('ul')) && (!checkedElement.is(':visible'))) {
                checkedElement.stop().animate({'height':'toggle'}, 300).parent().addClass('active');
                return false;
            }
            if((checkedElement.is('ul')) && (checkedElement.is(':visible'))) {
                return false;
            }
        });
    });
    //аккордеон меню

    //липкий сайдбар
//    var stickySidebar = $('.sticky');
//
//    if (stickySidebar.length > 0) {
//        var stickyHeight = stickySidebar.height(),
//            sidebarTop = stickySidebar.offset().top;
//    }
//// on scroll move the sidebar
//    $(window).scroll(function () {
//        if (stickySidebar.length > 0) {
//            var scrollTop = $(window).scrollTop() + 147;
//
//            if (sidebarTop < scrollTop) {
//                stickySidebar.css('top', scrollTop - sidebarTop);
//
//                // stop the sticky sidebar at the footer to avoid overlapping
//                var sidebarBottom = stickySidebar.offset().top + stickyHeight,
//                    stickyStop = $('.main-content').offset().top + $('.main-content').height() - 23;
//                if (stickyStop < sidebarBottom) {
//                    var stopPosition = $('.main-content').height() - stickyHeight  - 23;
//                    stickySidebar.css('top', stopPosition);
//                }
//            }
//            else {
//                stickySidebar.css('top', '0');
//            }
//        }
//    });
//    $(window).resize(function () {
//        if (stickySidebar.length > 0) {
//            stickyHeight = stickySidebar.height();
//        }
//    });
    //липкий сайдбар


    function windowHeight(){

        var bohi = $(window).height() - 107;
        var columnHeight = $('.sticky').height();
        if(bohi > columnHeight) {
            console.log(bohi + ">" + columnHeight);
            //липкий сайдбар
            var stickySidebar = $('.sticky');

            if (stickySidebar.length > 0) {
                var stickyHeight = stickySidebar.height(),
                    sidebarTop = stickySidebar.offset().top;
            }
// on scroll move the sidebar
            $(window).scroll(function () {
                if (stickySidebar.length > 0) {
                    var scrollTop = $(window).scrollTop() + 147;

                    if (sidebarTop < scrollTop) {
                        stickySidebar.css('top', scrollTop - sidebarTop);

                        // stop the sticky sidebar at the footer to avoid overlapping
                        var sidebarBottom = stickySidebar.offset().top + stickyHeight,
                            stickyStop = $('.main-content').offset().top + $('.main-content').height() - 23;
                        if (stickyStop < sidebarBottom) {
                            var stopPosition = $('.main-content').height() - stickyHeight  - 23;
                            stickySidebar.css('top', stopPosition);
                        }
                    }
                    else {
                        stickySidebar.css('top', '0');
                    }
                }
            });
            $(window).resize(function () {
                if (stickySidebar.length > 0) {
                    stickyHeight = stickySidebar.height();
                }
            });
            //липкий сайдбар

        } else {
            console.log(bohi + "<" + columnHeight);

            $('.nav_list_first').css({
                'max-height':'67vh',
                'overflow-y':'auto'
            });
            //липкий сайдбар
            var stickySidebar = $('.sticky');

            if (stickySidebar.length > 0) {
                var stickyHeight = stickySidebar.height(),
                    sidebarTop = stickySidebar.offset().top;
            }
// on scroll move the sidebar
            $(window).scroll(function () {
                if (stickySidebar.length > 0) {
                    var scrollTop = $(window).scrollTop() + 147;

                    if (sidebarTop < scrollTop) {
                        stickySidebar.css('top', scrollTop - sidebarTop);

                        // stop the sticky sidebar at the footer to avoid overlapping
                        var sidebarBottom = stickySidebar.offset().top + stickyHeight,
                            stickyStop = $('.main-content').offset().top + $('.main-content').height() - 23;
                        if (stickyStop < sidebarBottom) {
                            var stopPosition = $('.main-content').height() - stickyHeight  - 23;
                            stickySidebar.css('top', stopPosition);
                        }
                    }
                    else {
                        stickySidebar.css('top', '0');
                    }
                }
            });
            $(window).resize(function () {
                if (stickySidebar.length > 0) {
                    stickyHeight = stickySidebar.height();
                }
            });
        }
    }

    //таймер акций
    var timer;

    var compareDate = new Date();
    compareDate.setDate(compareDate.getDate() + 7); //пример на 7 дней

    timer = setInterval(function() {
        timeBetweenDates(compareDate);
    }, 1000);

    function timeBetweenDates(toDate) {
        var dateEntered = toDate;
        var now = new Date();
        var difference = dateEntered.getTime() - now.getTime();

        if (difference <= 0) {

            // Timer done
            clearInterval(timer);

        } else {

            var seconds = Math.floor(difference / 1000);
            var minutes = Math.floor(seconds / 60);
            var hours = Math.floor(minutes / 60);
            var days = Math.floor(hours / 24);

            hours %= 24;
            minutes %= 60;
            seconds %= 60;

            $(".days").text(days);
            $(".hours").text(hours);
            $(".minutes").text(minutes);
            $(".seconds").text(seconds);
        }
    }
    //таймер акций


    $('.link_to_slide_top_block').click(function(){
        $('.hidds_wrapper').toggleClass('ad');
        $(this).toggleClass('rotate_carrot')
    });

        //звёзды рейтинга
    $('.star').on('change', function() {
        var stars = $(this).val();
        console.log(stars);
    });
        //звёзды рейтинга

    __animation__ = $('.wrapper').hasClass('__animation__');

    // Управление скользящим боковым меню start ***
    // --- закрытие

    $('.ara_inside_menu').click(function(){
        $('#it_1').toggleClass('toggle_hidden_class');
        $('#it_2').toggleClass('toggle_hidden_class');
    });
    $('#slide-menu-container_2').on('click', function(e){
        var target = e.target || e.srcElement;
        if(target.id === this.id){
            $('body').css('overflow','auto');
            $('#slide-menu-container_2').removeClass('show');
            $('#it_1').removeClass('toggle_hidden_class');
            $('#it_2').addClass('toggle_hidden_class');
        }
    });

    // --- открытие
    $('#enter_aut a').on('click', function(){
        var ret = window.innerWidth < 980;
        if(ret){
            setTimeout(function(){$('body').css('overflow','hidden');},200);
            $('#slide-menu-container_2').addClass('show');
        }
        return !ret;
    });

    //скрытие уведомлений
    $('.close_span').click(function(){
        $(this).parents('.one_alerts').remove();
    });
    //скрытие уведомлений

    //управление блоком событий в шапке
    $('#enter_aut').bind('click', function(e) {
        e.stopPropagation();
        var box = $('#aut_position');

        if (box.is(':visible')) {
            box.slideUp(300);
            $('.profile_hover_block').removeClass('active_shadow');
        } else {
            box.slideDown(300);
            $('.profile_hover_block').addClass('active_shadow');
        }
    });

    $('#aut_position').bind('click', function(e) {
        e.stopPropagation();
    });
    $('body').bind('click', function() {
        $('#aut_position').slideUp(300);
        $('.profile_hover_block').removeClass('active_shadow');
    });
    //управление блоком событий в шапке


    // Управление эффектами и анимацией после загрузки страницы
    function setAnimateHandler(_delay){
        setTimeout(function(){
            $('.animate_text').addClass('start-once');
            setTimeout(function(){$('.animate_text').removeClass('start-once');}, 1200);
        }, _delay);
        return false;
    }


    // все, что касается интерактивного слайдера more cashback --- start ---
    function progressBar(){
        var step = 0, interval;
        var blue = $('.present.blue span'),
            sky = $('.present.sky span'),
            red = $('.present.red span');
        var lLabel = $('#_left-col p'),
            rLabel = $('#_right-col p'),
            slider = $('#a-slider'),
            bar = $('#progress-bar');
        interval = setInterval(function(){
            slider.val(step);
            bar.css('width', 100 - step / 3 + '%');
            lLabel.text((step*10000/300).toFixed(0) + ' руб.');
            if(step == 0){
                blue.parent().addClass('fill');
            }else if(step == 100){
                sky.parent().addClass('fill');
                blue.text('+' + (step/10).toFixed(0) + '%');
                rLabel.text('+' + (step/10).toFixed(0) + '%');
            }else if(step == 200){
                red.parent().addClass('fill');
                sky.text('+' + (step/10).toFixed(0) + '%');
                rLabel.text('+' + (step/10).toFixed(0) + '%');
            }else if(step == 300){
                red.text('+' + (step/10).toFixed(0) + '%');
                rLabel.text('+' + (step/10).toFixed(0) + '%');
            }
            step++;
            if(step > 300){
                clearInterval(interval);
                $('.present').removeClass('animate_on');
            }
        }, 3);
    }

    function progressChart(){
        var step = 0, interval;
        var lLabel = $('#_left-col p'),
            rLabel = $('#_right-col p'),
            slider = $('#a-slider2'),
            bar = $('#progress-bar'),
            chart = $('#chart').find('span');
        interval = setInterval(function(){
            slider.val(step);
            bar.css('width', 100 - step / 3 + '%');
            // анимация для графика
            chart.css('width', 100 - step / 3  + '%');
            // --------------------
            lLabel.text((step*100/300).toFixed(0) + ' чел.');
            rLabel.text((step*10000/300).toFixed(0));
            step++;
            if(step > 300){
                clearInterval(interval);
                // $('.present').removeClass('animate_on');
            }
        }, 3);
    }

    var viewportAnimation1 = true, viewportAnimation2 = true;
    $(window).scroll(function(){
        var frameHeight = $(window).height();
        var curScroll = $(window).scrollTop();

        if(__animation__){
            var animate_text = $('.animate_text').offset().top;
            var animate_text_h = $('.animate_text').height();
            if(curScroll < animate_text && curScroll + frameHeight > animate_text + animate_text_h){
                if(viewportAnimation1) setAnimateHandler(1000);
                viewportAnimation1 = false;
            }else viewportAnimation1 = true;

            var animate_slider = $('#animated_slider').offset().top;
            var animate_slider_h = $('#animated_slider').height();
            if(curScroll < animate_slider && curScroll + frameHeight > animate_slider + animate_slider_h){
                if(viewportAnimation2){
                    setTimeout(function(){
                        // $('.animate_hover_wrapp').addClass('fill');
                        if($('#a-slider2').length>0) progressChart();
                        if($('#a-slider').length>0) progressBar();
                    }, 500);
                }
                viewportAnimation2 = false;
            }
        }
    });

    if(__animation__) viewportAnimation1 = setAnimateHandler(2000);

    function colourizePresent(c){
        if(this.cvar === undefined) this.cvar = '0';
        if(c !== this.cvar){
            var blue = $('.present.blue'), sky = $('.present.sky'), red = $('.present.red'), bar = $('#progress-bar'), slider = $('#a-slider');
            blue.removeClass('fill').children('span').text('+0%');
            sky.removeClass('fill').children('span').text('+0%');
            red.removeClass('fill').children('span').text('+0%');
            switch(c){
                case '3':
                    red.addClass('fill').children('span').text('+30%');
                case '2':
                    sky.addClass('fill').children('span').text('+20%');
                case '1':
                    blue.addClass('fill').children('span').text('+10%');
            }
            this.cvar = c;
        }
    }

    $('#a-slider2').on('touchmove mousemove change', function(event){
        var res_r,
            res_p,
            bar = $('#progress-bar'),
            chart = $('#chart').find('span');
        chart.css('width',100 - this.value/3 + '%');
        res_r = (this.value / 3).toFixed(0);
        res_p = res_r * 100;
        $('#_left-col p').text(res_r + ' чел.');
        $('#_right-col p').text(res_p);
        bar.css('width',100 - this.value/3 + '%');
    });

    $('#a-slider').on('touchmove mousemove change', function(event){
        var res_r,
            res_p,
            bar = $('#progress-bar'),
            chart = $('#chart').find('span');
        chart.css('width',100 - this.value/3 + '%');
        if(this.value >= 0 && this.value <= 100){
            res_r = this.value * 4;
            res_p = '+0%';
            colourizePresent('0');
        }else if(this.value > 100 && this.value <= 200){
            res_r = (this.value - 100) * 26 + 400;
            res_p = '+10%';
            colourizePresent('1');
        }else if(this.value > 200 && this.value < 300){
            res_r = (this.value - 200) * 70 + 3000;
            res_p = '+20%';
            colourizePresent('2');
        }else{
            res_r = 10000;
            res_p = '+30%';
            colourizePresent('3');
        }
        $('#_left-col p').text(parseInt(res_r) + ' руб.');
        $('#_right-col p').text(res_p);
        bar.css('width',100 - this.value/3 + '%');
    });

    $('#progress-bar').on('click', function(event){
        var x = event.offsetX, w = event.currentTarget.clientWidth, pw = event.currentTarget.parentElement.clientWidth;
        var pointer = parseInt((pw - w + x) * 100 / pw * 3);
        $('#a-slider').val(pointer).change();
        $('#a-slider2').val(pointer).change();
    });
    // все, что касается интерактивного слайдера more cashback --- end ---


    // Управление скользящим боковым меню start ***
    // --- закрытие
    $('#slide-menu-container').on('click', function(e){

        var target = e.target || e.srcElement;
        if(target.id === this.id){
            $('body').css('overflow','auto');
            $('#slide-menu-container').removeClass('show');

        }
    });

    // --- открытие
    $('.navbar-toggle.collapsed').on('click', function(){
        var ret = $(window).width() < 981;
        if(ret){
            setTimeout(function(){$('body').css('overflow','hidden');},200);
            $('#slide-menu-container').addClass('show');//.find('input[type=search]').focus();
        }
        return !ret;
    });

    // --- обработка нажатия Enter в поле ввода поисковой фразы
    $('input[list]').on('onkeypress', function(event){
        if(event.keyCode == 13) $(this).closest('form').find('[type=submit]').click();
    });
    // Управление скользящим боковым меню end ***


    //инициализация каресели отзывов на лэндинге
    $('.bxslider').bxSlider({
        auto: true,
        pause: 4000,
        autoHover: true,
        speed: 1000
    });
    //инициализация каресели отзывов на лэндинге

    //инициализация слайдера на главной
	var bx_text = $('.bxslider_first_text .one-slide');
	console.log(bx_text);
    $('.bxslider_first').bxSlider({
        auto: true,//true
        pause: 5000,
        autoHover: true,
        speed: 1000,
		onSlideBefore: function($el, $old, $new){
			bx_text[$old].classList.remove('show');
		},
		onSlideAfter: function($el, $old, $new){
			bx_text[$new].classList.add('show');
		}
    });
    //инициализация слайдера на главной



    //скрипт для якоря вверх
    $('#back-top').hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
    //скрипт для якоря вверх

    //скрипт для смены placeholder для мобильных
    function windowSize(){
        if ($(window).width() < 600){
            $('#search_shop_id').attr('placeholder', 'Найти свой магазин');
        } else {
            $('#search_shop_id').attr('placeholder', 'Найти свой магазин, например SAPATO');
        }
    }
//    $(window).load(windowSize); // при загрузке
//    $(window).resize(windowSize); // при изменении размеров
// или "два-в-одном", вместо двух последних строк:
    // $(window).on('load resize',function(){windowSize();});
    //скрипт для смены placeholder для мобильных


    //вызов слайдера товаров
    var bxSliderShops = null;
    function sliderFunction(){
        if($(window).width() < 600){
            if(bxSliderShops) bxSliderShops;
            else{
                bxSliderShops = $('.bxslider_shops');
                bxSliderShops.bxSlider({
                    slideWidth: 250,
                    minSlides: 2,
                    maxSlides: 3,
                    moveSlides: 2,
                    slideMargin: 16
                });
            }
        }else if($(window).width() > 616 && bxSliderShops){
            bxSliderShops.destroySlider();
            bxSliderShops = null;
        }
    }

    var bxSliderShops1 = null;
    function sliderFunctions(){
        if($(window).width() < 600){
            if(bxSliderShops1) bxSliderShops1;
            else{
                bxSliderShops1 = $('.bxslider_rev');
                bxSliderShops1.bxSlider({
                    minSlides: 1,
                    maxSlides: 1,
                    moveSlides: 1
                });
            }
        }else if($(window).width() > 601 && bxSliderShops1){
            bxSliderShops1.destroySlider();
            bxSliderShops1 = null;
        }
    }

    var bxSliderShops2 = null;
    function sliderFunctions2(){
        if($(window).width() < 600){
            if(bxSliderShops2) bxSliderShops2;
            else{
                bxSliderShops2 = $('.slider_class');
                bxSliderShops2.bxSlider({
                    minSlides: 1,
                    maxSlides: 1,
                    moveSlides: 1
                });
            }
        }else if($(window).width() > 601 && bxSliderShops2){
            bxSliderShops2.destroySlider();
            bxSliderShops2 = null;
        }
    }
//    $(window).load(windowSize); // при загрузке
//    $(window).resize(windowSize); // при изменении размеров
// или "два-в-одном", вместо двух последних строк:
    $(window).on('load', function(){
        windowSize();
        sliderFunction();
        sliderFunctions();
        sliderFunctions2();
        windowHeight();
    });
    $(window).on('resize', function(){
        sliderFunctions();
        sliderFunctions2();
    });
    //вызов слайдера товаров
    var resizeTimeout = null;
    $(window).on('resize', function(){
        if(!resizeTimeout){
            resizeTimeout = setTimeout(function(){
                resizeTimeout = null;
                windowSize();
                sliderFunction();
            }, 500);
        }
    });

    $('input[type=email]').on('keyup blur', function(){
        validMail(event);
    });
    $('input[type=password].retry').on('keyup blur', function(){
        comparePassword(event);
    });
    $('form').on('submit', function(){
        submitFormCheck(event);
    });

});



function submitFormCheck(e){
    e.preventDefault();
    var form = e.target || e.srcElement;
    var err = form.querySelectorAll('.input_red');
    if(err.length == 0){
        // здесь собственно обработчик отсылки формы, прошедшей предварительную валидацию

        // весь код ниже служит исключительно для демонстрации вывода вспомогательных
        // эффектов и уведомлений, сопровождающий процесс выполнения ajax-запроса
        if(this.rnd === undefined) this.rnd == 'success';
        if(this.rnd === 'success') this.rnd = 'error';
        else this.rnd = 'success';
        var shadow = document.createElement('div');
        shadow.classList.add('form-popup-processing');
        form.appendChild(shadow);
        setTimeout(function(){ shadow.classList.add('show'); }, 100);
        setTimeout(function(){
            shadow.classList.remove('show');
            var txt = {
                'success': 'Форма отправлена',
                'error': 'Сообщение об ошибке'
            }
            var msg = document.createElement('div');
            msg.classList.add('form-popup-msg');
            msg.innerHTML = txt[this.rnd];
            form.appendChild(msg);
            setTimeout(function(){ msg.classList.add('show'); msg.classList.add(this.rnd); }, 100);
            setTimeout(function(){
                msg.classList.remove('show');
                setTimeout(function(){ form.removeChild(msg); }, 1000);
            }, 3000);
            setTimeout(function(){ form.removeChild(shadow); }, 1000);
        }, 3000);
        // ------------------------------------------------------------------------------
    }
}

function comparePassword(e){
    e = e || event;
    var target = e.target || e.srcElement;
    var prev = target.form.querySelector('input[type=password]');
    var ret = (prev.value === target.value);
    if(ret) target.classList.remove('input_red');
    else target.classList.add('input_red');
    $('.conversion_block_style').addClass('reHeightClassPass');
    return ret;
}


// *********************************************
// перенесено из vetall.js, исходный файл удален

function validMail(e){
    e = e || event;
    var target = e.target || e.srcElement;
    var re = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    if(target.value == '') target.classList.remove('input_red');
    else{
        // if(target.value == '' || !re.test(target.value)){
        if(!re.test(target.value)){
            target.classList.add('input_red');
            target.parentNode.classList.add('mail_icon');
            target.parentNode.classList.remove('mail_icon_activ');
            target.nextElementSibling.style.height = '0px';
            $('input[type=password]').val('');
        }else{
            target.classList.remove('input_red');
            target.parentNode.classList.remove('mail_icon');
            target.parentNode.classList.add('mail_icon_activ');

            if(target.nextElementSibling.classList.contains('block_input_pass')) target.nextElementSibling.style.height = '84px';
            if(target.nextElementSibling.classList.contains('block_reg_pass')) target.nextElementSibling.style.height = '114px';

            var ent = "Войти";
            var reg = "Зарегистрироваться";
            $('.type_subm_form_btn').attr('value', ent);
            $('.password_form .type_subm_form_btn').attr('value', reg);

            var redas = $(window).width() < 980;
            $('.conversion_block_style').addClass('reHeightClass');

        }

    }
}
/*
 function emptyMail(e){
 e = e || event;
 var target = e.target || e.srcElement;
 if(target.value == ''){
 target.classList.remove('input_red');
 }
 }
 .show_me_all_shops {
 padding-top: 53px;
 background: url(../img/bg/01.jpg) top 20px left;
 width: 100%;
 }
 window.onscroll = function() {
 var scrolled = window.pageYOffset || document.documentElement.scrollTop;
 //  console.log(scrolled + 'px');
 $('.show_me_all_shops').css('background-position', 'top ' + scrolled * -.3 + 'px left');
 $('.more_cashback').css('background-position', 'top ' + scrolled * -.3 + 'px left');
 $('.cash_back_wrapp').css('background-position', 'top ' + scrolled * -.3 + 'px left');
 }
 */