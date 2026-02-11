(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Team carousel
    $(".team-carousel, .related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });
    
})(jQuery);


  document.addEventListener('DOMContentLoaded', function() {
    // Año dinámico
    document.getElementById('yearFooter').textContent = new Date().getFullYear();

    // Botón principal "Enviar mensaje" -> WhatsApp
    const btnWhats = document.getElementById('btnWhatsAppContacto');
    if (btnWhats) {
      btnWhats.addEventListener('click', function () {
        const phone = "573024175911"; // Número de WhatsApp

        // Mensaje básico (si después agregas campos, aquí los concatenas)
        let texto = "Hola, deseo comunicarme con Laboratorio-Mpr para recibir más información.";

        const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(texto);
        window.open(url, "_blank");
      });
    }

    // Animación sencilla para botón flotante de WhatsApp
    const floatBtn = document.querySelector('.whatsapp-float');
    if (floatBtn) {
      floatBtn.style.transform = 'scale(0)';
      setTimeout(() => {
        floatBtn.style.transition = 'transform 0.5s ease';
        floatBtn.style.transform = 'scale(1)';
      }, 400);
    }
  });