

    if(document.documentElement.clientWidth < 768) {
        $('.header-menu__list').hide();
        $('.header-menu__block').on('click' , function (){
            $('.header-menu__list').slideToggle();
        }
        );
        $('.top-section__link').html('Купить билет!');
        $('#subscribe-title').html('Подпишитесь на уникальные предложения');
        $('.footer-form__text').html('Мы будем отправлять вам больше профессиональной информации');
        $('.footer-list_resize').html('Служба поддержки');
    }

    if(document.documentElement.clientWidth > 760) {

        $('.top-section__link').html('Забронировать билет!');
        $('.footer-form__button').prop('value', '');
        $('.copyright__text').html('&#169; Redken - all rights reserved.');

    }

    if(document.documentElement.clientWidth < 1400){
        $('.footer-form__button').prop('value', 'Ok');
    }

    $('.search').hide();
    $('#search').on('click', function () {
        $('.search').animate({width: 'toggle'});

    });

    $('#location-link , #location').attr('data-fancybox','').attr('data-option','{&quot;iframe&quot; : {&quot;css&quot; : {&quot;width&quot; : &quot;80%&quot;, &quot;height&quot; : &quot;80%&quot;}}}' );
    $('b').css('color', '#F59BBB');

