
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {

        // =====================================
        // 1. LEADER DETAILS
        // =====================================

        var leaderDetails = {
            elsadat: {
                title: 'محمد أنور السادات',
                text: 'رئيس الجمهورية والقائد الأعلى للقوات المسلحة. اتخذ قرار الحرب وحدد موعدها بالتنسيق مع سوريا. وبعد الحرب اتجه إلى المفاوضات التي انتهت بتوقيع معاهدة السلام عام ١٩٧٩.'
            },

            a7med: {
                title: 'أحمد إسماعيل علي',
                text: 'وزير الحربية والقائد العام للقوات المسلحة خلال حرب أكتوبر. أشرف على الاستعداد للحرب وإدارة العمليات العسكرية وتنسيق جهود القوات المسلحة.'
            },

            sa3d: {
                title: 'سعد الدين الشاذلي',
                text: 'رئيس أركان حرب القوات المسلحة خلال حرب أكتوبر. أسهم في إعداد خطط العمليات وتنظيم عبور القوات، وسجل تجربته في مذكراته.'
            },

            gamasy: {
                title: 'محمد عبدالغني الجمسي',
                text: 'رئيس هيئة عمليات القوات المسلحة خلال حرب أكتوبر. ساهم في إعداد خطط العمليات وتحديد التوقيت المناسب للهجوم.'
            },

            shafie: {
                title: 'حسين الشافعي',
                text: 'كان حسين الشافعي سياسيًا مصريًا وعضوًا في مجلس قيادة ثورة يوليو، وليس من القادة العسكريين الذين أداروا عمليات حرب أكتوبر.'
            },

            abughazala: {
                title: 'عبد الحليم أبو غزالة',
                text: 'كان من الضباط الذين شاركوا في حرب أكتوبر، وتولى لاحقًا مناصب قيادية بارزة في القوات المسلحة المصرية.'
            },

            abdelmunim: {
                title: 'عبد المنعم رياض',
                text: 'رئيس أركان حرب القوات المسلحة خلال حرب الاستنزاف، واستشهد في 9 مارس 1969، قبل حرب أكتوبر.'
            },

            ahmedbadawy: {
                title: 'أحمد بدوي',
                text: 'شارك في حرب أكتوبر وتولى قيادة الفرقة السابعة مشاة، ثم شغل مناصب قيادية بارزة في القوات المسلحة.'
            },

            mohamedfawzi: {
                title: 'محمد فوزي',
                text: 'تولى قيادة القوات المسلحة ووزارة الحربية قبل حرب أكتوبر، وأسهم في إعادة تنظيم الجيش المصري بعد حرب يونيو 1967.'
            },

            mohamedsadeq: {
                title: 'محمد صادق',
                text: 'تولى وزارة الحربية ورئاسة الأركان في مرحلة الإعداد لحرب أكتوبر، وكان من الشخصيات العسكرية المؤثرة في فترة ما قبل الحرب.'
            }
        };

        // =====================================
        // 2. MODAL ELEMENTS
        // =====================================

        var modal = document.getElementById('modal');
        var modalTitle = document.getElementById('modalTitle');
        var modalText = document.getElementById('modalText');
        var modalClose = document.getElementById('modalClose');

        if (!modal || !modalTitle || !modalText || !modalClose) {
            console.warn('Leaders modal elements not found.');
            return;
        }

        var lastFocus = null;
        var activeDetails = null;

        // =====================================
        // 3. TRANSLATION
        // =====================================

        function translate(text) {
            if (
                window.siteI18n &&
                typeof window.siteI18n.t === 'function'
            ) {
                return window.siteI18n.t(text);
            }

            return text;
        }

        // =====================================
        // 4. OPEN MODAL
        // =====================================

        function openLeaderModal(details, button) {
            lastFocus = button;
            activeDetails = details;

            modalTitle.textContent = translate(details.title);
            modalText.textContent = translate(details.text);

            modal.hidden = false;
            modal.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');

            document.body.classList.add('no_scroll');

            modalClose.focus();
        }

        // =====================================
        // 5. CLOSE MODAL
        // =====================================

        function closeLeaderModal() {
            if (!modal.classList.contains('open')) return;

            modal.classList.remove('open');
            modal.hidden = true;
            modal.setAttribute('aria-hidden', 'true');

            document.body.classList.remove('no_scroll');

            activeDetails = null;

            if (lastFocus) {
                lastFocus.focus();
                lastFocus = null;
            }
        }

        // =====================================
        // 6. LEADER BUTTONS
        // =====================================

        document.querySelectorAll('[data-leader-id]').forEach(function (button) {

            button.addEventListener('click', function () {

                var id = button.getAttribute('data-leader-id');
                var details = leaderDetails[id];

                if (!details) {
                    console.warn('Leader not found:', id);
                    return;
                }

                openLeaderModal(details, button);
            });

        });

        // =====================================
        // 7. MODAL EVENTS
        // =====================================

        modalClose.addEventListener('click', closeLeaderModal);

        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                closeLeaderModal();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (
                event.key === 'Escape' &&
                modal.classList.contains('open')
            ) {
                closeLeaderModal();
            }
        });

        // =====================================
        // 8. LANGUAGE CHANGE
        // =====================================

        document.addEventListener('languagechange', function () {

            if (!activeDetails) return;

            modalTitle.textContent = translate(activeDetails.title);
            modalText.textContent = translate(activeDetails.text);

        });

    });

})();
