console.log("app.js is running...");
(function () {
    'use strict';

    /* ========== 0) الصورة غير الموجودة تختفي ويظهر مكانها الشكل البديل ========== */
    document.querySelectorAll('img').forEach(function (img) {
        function hide() { img.style.display = 'none'; }
        img.addEventListener('error', hide);
        if (img.complete && img.naturalWidth === 0) hide();
    });

    /* ========== 1) الهيدر يصغر عند النزول ========== */
    var header = document.querySelector('header');
    function onScroll() {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ========== 2) ظهور العناصر تدريجيا عند التمرير ========== */
    var selector = '.section-title, .leaders_item, .plan_item, .info_item, .tl_item, ' +
        '.weapon_item, .result_item, .gallery_item, .quiz_box, .sources_list li';
    var targets = document.querySelectorAll(selector);

    targets.forEach(function (el) {
        var firstClass = el.classList[0];
        var siblings = Array.prototype.filter.call(el.parentElement.children, function (c) {
            return c.classList[0] === firstClass;
        });
        var index = siblings.indexOf(el);
        el.style.setProperty('--i', index % 4);
        el.classList.add('reveal');
    });

    var drawTargets = document.querySelectorAll('.timeline');

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
        drawTargets.forEach(function (el) { revealObserver.observe(el); });
    } else {
        targets.forEach(function (el) { el.classList.add('in'); });
        drawTargets.forEach(function (el) { el.classList.add('in'); });
    }

    /* ========== 3) تمييز رابط القسم الحالي ========== */
    var links = document.querySelectorAll('.link_item');
    var sections = Array.prototype.map.call(links, function (a) {
        return document.querySelector(a.getAttribute('href'));
    });

    if ('IntersectionObserver' in window) {
        var navObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                links.forEach(function (a) {
                    var active = a.getAttribute('href') === '#' + entry.target.id;
                    a.classList.toggle('active', active);
                    if (active) {
                        /* يحرّك القائمة لتظهر الرابط النشط على الشاشات الضيقة */
                        var box = a.parentElement;
                        box.scrollTo({ left: a.offsetLeft - box.clientWidth / 2 + a.clientWidth / 2, behavior: 'smooth' });
                    }
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        sections.forEach(function (s) { if (s) navObserver.observe(s); });
    }

    /* ========== 4) نافذة تفاصيل القادة والخطط ========== */
    var modal = document.getElementById('modal');
    var modalTitle = document.getElementById('modalTitle');
    var modalText = document.getElementById('modalText');
    var modalClose = document.getElementById('modalClose');
    var lastFocus = null;

    function openModal(title, text) {
        lastFocus = document.activeElement;
        modalTitle.textContent = title;
        modalText.textContent = text;
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no_scroll');
        modalClose.focus();
    }

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no_scroll');
        if (lastFocus) lastFocus.focus();
    }

    /* الزر الذي فيه data-title يفتح النافذة (التنقل بين الصفحات في index.js) */
    document.querySelectorAll('.leaders_item button, .plan_item button').forEach(function (btn) {
        btn.addEventListener('click', function () {
            if (btn.dataset.title) {
                openModal(btn.dataset.title, btn.dataset.text);
            }
        });
    });
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    /* ========== 5) اختبار صغير ========== */
    var QUESTIONS = [
        { q: 'متى بدأت حرب أكتوبر؟', o: ['٦ أكتوبر ١٩٧٣', '٥ يونيو ١٩٦٧', '٢٦ يوليو ١٩٥٦', '١٩ مارس ١٩٨٩'] },
        { q: 'ما اسم خطة العبور المصرية؟', o: ['العملية بدر', 'العملية الفجر', 'العملية الصقر', 'العملية النسر'] },
        { q: 'ما الخط الدفاعي الذي حطمه الجيش المصري شرق القناة؟', o: ['خط بارليف', 'خط ماجينو', 'خط المنصورة', 'خط السويس'] },
        { q: 'ما الوسيلة التي فتحت الساتر الترابي بسرعة؟', o: ['مضخات المياه', 'الألغام', 'الطائرات', 'المدفعية الثقيلة'] },
        { q: 'ما رقم قرار مجلس الأمن الذي دعا إلى وقف إطلاق النار؟', o: ['٣٣٨', '٢٤٢', '١٨١', '٦٧٨'] }
    ];
    /* الإجابة الصحيحة هي الأولى في كل سؤال، ثم تُخلط الخيارات عند العرض */

    var box = document.getElementById('quizBox');
    var current = 0;
    var score = 0;

    function shuffle(arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = a[i]; a[i] = a[j]; a[j] = t;
        }
        return a;
    }

    function toArabic(n) {
        return String(n).replace(/\d/g, function (d) { return '٠١٢٣٤٥٦٧٨٩'[d]; });
    }

    function renderQuestion() {
        var item = QUESTIONS[current];
        var correct = item.o[0];
        var progress = (current / QUESTIONS.length) * 100;

        box.innerHTML = '';
        var step = document.createElement('div');
        step.className = 'quiz_step';
        step.innerHTML =
            '<div class="quiz_bar"><span style="width:' + progress + '%"></span></div>' +
            '<p class="quiz_count">السؤال ' + toArabic(current + 1) + ' من ' + toArabic(QUESTIONS.length) + '</p>' +
            '<h3 class="quiz_q"></h3><div class="quiz_opts"></div>';
        step.querySelector('.quiz_q').textContent = item.q;
        box.appendChild(step);

        var optsBox = step.querySelector('.quiz_opts');
        var answered = false;

        shuffle(item.o).forEach(function (text) {
            var b = document.createElement('button');
            b.className = 'quiz_opt';
            b.textContent = text;
            b.addEventListener('click', function () {
                if (answered) return;
                answered = true;
                var all = optsBox.querySelectorAll('.quiz_opt');
                all.forEach(function (x) {
                    x.disabled = true;
                    if (x.textContent === correct) x.classList.add('correct');
                });
                if (text === correct) {
                    score++;
                } else {
                    b.classList.add('wrong');
                }
                step.querySelector('.quiz_bar span').style.width = ((current + 1) / QUESTIONS.length * 100) + '%';

                var next = document.createElement('button');
                next.className = 'btn quiz_next';
                next.textContent = current === QUESTIONS.length - 1 ? 'عرض النتيجة' : 'السؤال التالي';
                next.addEventListener('click', function () {
                    current++;
                    if (current < QUESTIONS.length) renderQuestion(); else renderResult();
                });
                step.appendChild(next);
            });
            optsBox.appendChild(b);
        });
    }

    function renderResult() {
        var msg = score === QUESTIONS.length ? 'ممتاز! أنت تعرف الكثير عن حرب أكتوبر.'
            : score >= 3 ? 'جيد جدا! راجع الأقسام مرة أخرى لتكمل المعلومات.'
                : 'تصفح أقسام الموقع ثم أعد المحاولة.';
        box.innerHTML =
            '<div class="quiz_step quiz_end">' +
            '<div class="quiz_bar"><span style="width:100%"></span></div>' +
            '<div class="quiz_score">' + toArabic(score) + ' / ' + toArabic(QUESTIONS.length) + '</div>' +
            '<p class="quiz_msg">' + msg + '</p>' +
            '<button class="btn" id="quizRestart">إعادة الاختبار</button></div>';
        document.getElementById('quizRestart').addEventListener('click', function () {
            current = 0;
            score = 0;
            renderQuestion();
        });
    }

    /* ========== 6) مقاطع الفيديو ========== */
    /* DEBUG = true يعرض سبب تعذر التشغيل داخل الصفحة. غيّرها إلى false عند التسليم */
    var DEBUG = true;

    document.querySelectorAll('.film').forEach(function (film) {
        var video = film.querySelector('video');
        var screen = film.querySelector('.film_screen');
        if (!video || !screen) return;

        function missing() {
            if (film.classList.contains('empty')) return;
            film.classList.add('empty');
            video.style.display = 'none';

            var text = 'مقطع أرشيفي';
            if (DEBUG) {
                var code = video.error ? video.error.code : 0;
                var why = code === 3 ? 'الملف موجود لكن تالف أو ترميزه غير مدعوم (حوّله إلى mp4 بترميز H.264)'
                    : code === 2 ? 'خطأ في الشبكة أثناء التحميل'
                        : 'الملف غير موجود في هذا المسار، أو صيغته غير مدعومة';
                text = 'تعذر تشغيل الفيديو\n' + why + '\n' + decodeURI(video.getAttribute('src'));
            }

            var label = document.createElement('span');
            label.className = 'film_label';
            label.textContent = text;
            label.style.cssText = 'position:absolute;inset:0;z-index:3;display:grid;place-items:center;' +
                'padding:16px;text-align:center;white-space:pre-line;direction:rtl;' +
                'color:#ddd;font-size:0.85rem;line-height:1.8;word-break:break-all';
            screen.appendChild(label);
        }

        video.addEventListener('error', missing);
        if (video.networkState === 3) missing();
    });

    if (box) renderQuestion();
})();