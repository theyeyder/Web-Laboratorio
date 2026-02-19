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

 // Botón  -> WhatsApp mejorado

  document.addEventListener('DOMContentLoaded', function() {
    // Año dinámico
    const yearElement = document.getElementById('yearFooter');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Botón principal "Enviar mensaje" -> WhatsApp
    const btnWhats = document.getElementById('btnWhatsAppContacto');
    if (btnWhats) {
        btnWhats.addEventListener('click', function() {
            const phone = "573024175911";
            let texto = "Hola, deseo comunicarme con Ustedes para recibir más información.";
            const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(texto);
            window.open(url, "_blank");
        });
    }

    // Mejora del botón flotante de WhatsApp
    const floatBtn = document.querySelector('.whatsapp-float');
    
    if (floatBtn) {
        // 1. Animación inicial con JavaScript (mejor control)
        floatBtn.style.opacity = '0';
        floatBtn.style.transform = 'scale(0)';
        
        setTimeout(() => {
            floatBtn.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            floatBtn.style.opacity = '1';
            floatBtn.style.transform = 'scale(1)';
        }, 400);

        // 2. Iniciar pulso después de 2 segundos
        setTimeout(() => {
            floatBtn.classList.add('pulse');
        }, 2000);

        // 3. Efecto de vibración cuando el usuario lleva el mouse cerca
        let shakeTimeout;
        floatBtn.addEventListener('mouseenter', () => {
            // Detener pulso al interactuar
            floatBtn.classList.remove('pulse');
            
            // Pequeña vibración de bienvenida
            floatBtn.classList.add('shake');
            
            // Remover vibración después de la animación
            clearTimeout(shakeTimeout);
            shakeTimeout = setTimeout(() => {
                floatBtn.classList.remove('shake');
            }, 500);
        });

        // 4. Reanudar pulso después de 5 segundos sin interacción
        floatBtn.addEventListener('mouseleave', () => {
            setTimeout(() => {
                if (!floatBtn.matches(':hover')) {
                    floatBtn.classList.add('pulse');
                }
            }, 5000);
        });

        // 5. Efecto adicional cuando el usuario hace scroll
        let lastScrollTop = 0;
        let scrollTimeout;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Pequeña animación al hacer scroll
            floatBtn.style.transform = `scale(${scrollTop > lastScrollTop ? 0.95 : 1.05})`;
            
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                floatBtn.style.transform = 'scale(1)';
            }, 150);
            
            lastScrollTop = scrollTop;
        });

        // 6. Animación especial cuando la página lleva mucho tiempo abierta
        setTimeout(() => {
            if (!floatBtn.matches(':hover')) {
                floatBtn.classList.add('shake');
                setTimeout(() => {
                    floatBtn.classList.remove('shake');
                }, 500);
            }
        }, 30000); // 30 segundos después
    }

    // 7. Detectar si el usuario está inactivo (opcional)
    let inactivityTimer;
    function resetInactivityTimer() {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            if (floatBtn && !floatBtn.matches(':hover')) {
                floatBtn.classList.add('pulse');
            }
        }, 60000); // 1 minuto de inactividad
    }

    // Eventos para resetear el timer de inactividad
    ['mousemove', 'keydown', 'scroll', 'click'].forEach(event => {
        window.addEventListener(event, resetInactivityTimer);
    });

    resetInactivityTimer();
});