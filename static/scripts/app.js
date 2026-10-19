(function () {
    'use strict';

    /* 1) الهيدر يصغر ويظهر ظله عند النزول */
    var header = document.querySelector('header');
    function onScroll() {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* 2) ظهور العناصر تدريجيا عند التمرير (مع تأخير متتابع للبطاقات) */
    var targets = document.querySelectorAll('.section-title, .leaders_item, .plan_item');
    targets.forEach(function (el) {
        el.classList.add('reveal');
        var siblings = el.parentElement.querySelectorAll('.leaders_item, .plan_item');
        var index = Array.prototype.indexOf.call(siblings, el);
        el.style.setProperty('--i', Math.max(index, 0));
    });

    if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        targets.forEach(function (el) { revealObserver.observe(el); });
    } else {
        targets.forEach(function (el) { el.classList.add('in'); });
    }

    /* 3) تمييز رابط القسم الحالي في القائمة */
    var links = document.querySelectorAll('.link_item');
    var sections = Array.prototype.map.call(links, function (a) {
        return document.querySelector(a.getAttribute('href'));
    });

    if ('IntersectionObserver' in window) {
        var navObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    links.forEach(function (a) {
                        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
                    });
                }
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        sections.forEach(function (s) { if (s) navObserver.observe(s); });
    }
})();
