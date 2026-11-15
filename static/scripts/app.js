
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {

        // =====================================
        // 1. IMAGE FALLBACK
        // =====================================

        document.querySelectorAll('img').forEach(function (img) {
            img.addEventListener('error', function () {
                img.classList.add('image-error');
                img.style.visibility = 'hidden';
            });
        });

        // =====================================
        // 2. HEADER SCROLL ANIMATION
        // =====================================

        var header = document.querySelector('header');

        function handleHeaderScroll() {
            if (!header) return;

            header.classList.toggle(
                'scrolled',
                window.scrollY > 50
            );
        }

        window.addEventListener('scroll', handleHeaderScroll, {
            passive: true
        });

        handleHeaderScroll();

        // =====================================
        // SCROLL REVEAL ANIMATION
        // =====================================

        var revealSelectors = [
            '.leader_profile',
            '.leaders_item',
            '.plan_item',
            '.battle_item',
            '.weapon_item',
            '.result_item',
            '.gallery_item',
            '.timeline_item',
            '.word_box'
        ];

        var revealElements = document.querySelectorAll(
            revealSelectors.join(',')
        );

        if ('IntersectionObserver' in window) {
            var revealObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.12
            });

            revealElements.forEach(function (element, index) {
                element.classList.add('reveal');
                element.style.setProperty(
                    '--reveal-delay',
                    Math.min(index % 5, 4) * 90 + 'ms'
                );
                revealObserver.observe(element);
            });
        } else {
            revealElements.forEach(function (element) {
                element.classList.add('visible');
            });
        }

        // =====================================
        // 4. ACTIVE NAVIGATION LINKS
        // =====================================

        var sections = document.querySelectorAll('main section[id]');
        var navLinks = document.querySelectorAll('nav a[href*="#"]');

        if ('IntersectionObserver' in window && sections.length) {
            var sectionObserver = new IntersectionObserver(
                function (entries) {
                    entries.forEach(function (entry) {
                        if (!entry.isIntersecting) return;

                        navLinks.forEach(function (link) {
                            var href = link.getAttribute('href');
                            var id = href && href.split('#')[1];

                            link.classList.toggle(
                                'active',
                                id === entry.target.id
                            );
                        });
                    });
                },
                {
                    threshold: 0.35
                }
            );

            sections.forEach(function (section) {
                sectionObserver.observe(section);
            });
        }

        // =====================================
        // 5. GENERIC LEADER / PLAN MODAL
        // =====================================

        var modal = document.getElementById('modal');
        var modalTitle = document.getElementById('modalTitle');
        var modalText = document.getElementById('modalText');
        var modalClose = document.getElementById('modalClose');

        if (modal && modalTitle && modalText && modalClose) {
            var lastFocus = null;

            function openModal(title, text, button) {
                lastFocus = button;

                modalTitle.textContent = title;
                modalText.textContent = text;

                modal.hidden = false;
                modal.classList.add('open');
                modal.setAttribute('aria-hidden', 'false');

                document.body.classList.add('no_scroll');

                modalClose.focus();
            }

            function closeModal() {
                modal.classList.remove('open');
                modal.hidden = true;
                modal.setAttribute('aria-hidden', 'true');

                document.body.classList.remove('no_scroll');

                if (lastFocus) {
                    lastFocus.focus();
                }
            }

            document.querySelectorAll(
                '.leaders_item button, .plan_item button'
            ).forEach(function (button) {
                button.addEventListener('click', function () {
                    var title = button.dataset.title;
                    var text = button.dataset.text;

                    if (!title || !text) return;

                    openModal(title, text, button);
                });
            });

            modalClose.addEventListener('click', closeModal);

            modal.addEventListener('click', function (event) {
                if (event.target === modal) {
                    closeModal();
                }
            });

            document.addEventListener('keydown', function (event) {
                if (
                    event.key === 'Escape' &&
                    modal.classList.contains('open')
                ) {
                    closeModal();
                }
            });
        }

// =====================================
// 6. QUIZ - ARABIC ONLY
// =====================================

var quizBox = document.getElementById('quizBox');

if (quizBox) {

    var questions = [
        {
            q: 'متى بدأت حرب أكتوبر؟',
            a: ['6 أكتوبر 1973', '5 يونيو 1967', '23 يوليو 1952'],
            c: 0
        },
        {
            q: 'ما اسم العملية المصرية لعبور قناة السويس؟',
            a: ['بدر', 'القدس', 'الكرامة'],
            c: 0
        },
        {
            q: 'من كان رئيس مصر أثناء الحرب؟',
            a: ['جمال عبد الناصر', 'محمد أنور السادات', 'حسني مبارك'],
            c: 1
        },
        {
            q: 'ما اسم خط الدفاع الإسرائيلي على قناة السويس؟',
            a: ['خط ماجينو', 'خط بارليف', 'خط ألون'],
            c: 1
        },
        {
            q: 'ما القناة التي عبرتها القوات المصرية؟',
            a: ['قناة السويس', 'قناة بنما', 'قناة كيل'],
            c: 0
        }
    ];

    var current = 0;
    var score = 0;

    function renderQuiz() {
        if (current >= questions.length) {
            quizBox.innerHTML = `
                <div class="quiz-result">
                    <h3>انتهى الاختبار!</h3>
                    <p>نتيجتك: ${score} / ${questions.length}</p>
                    <button type="button" id="quizRestart">إعادة الاختبار</button>
                </div>
            `;

            document.getElementById('quizRestart')
                .addEventListener('click', startQuiz);

            return;
        }

        var item = questions[current];

        quizBox.innerHTML = `
            <div class="quiz-question">
                <p class="quiz-progress">
                    السؤال ${current + 1} من ${questions.length}
                </p>

                <h3>${item.q}</h3>

                <div class="quiz-answers">
                    ${item.a.map(function (answer, index) {
                        return `
                            <button type="button"
                                class="quiz-answer"
                                data-index="${index}">
                                ${answer}
                            </button>
                        `;
                    }).join('')}
                </div>
            </div>
        `;

        quizBox.querySelectorAll('.quiz-answer').forEach(function (button) {
            button.addEventListener('click', function () {
                if (Number(button.dataset.index) === item.c) {
                    score++;
                }

                current++;
                renderQuiz();
            });
        });
    }

    function startQuiz() {
        current = 0;
        score = 0;
        renderQuiz();
    }

    startQuiz();
}
        // =====================================
        // 7. VIDEO FALLBACK
        // =====================================

        document.querySelectorAll('video').forEach(function (video) {
            video.addEventListener('error', function () {
                video.classList.add('video-error');
            });
        });

    });

})();
