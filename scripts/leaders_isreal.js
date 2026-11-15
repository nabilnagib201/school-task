
(function () {
    'use strict';

    var leaderDetails = {
        golda: {
            title: 'جولدا مائير',
            text: 'رئيسة وزراء إسرائيل خلال حرب أكتوبر 1973. تولت القيادة السياسية وإدارة القرارات الاستراتيجية والعلاقات الخارجية خلال الحرب.'
        },

        moshe: {
            title: 'موشيه ديان',
            text: 'وزير الدفاع الإسرائيلي خلال حرب أكتوبر 1973، وكان مسؤولًا عن القرارات الدفاعية والعسكرية على المستوى السياسي.'
        },

        david: {
            title: 'ديفيد إليعازر',
            text: 'رئيس الأركان الإسرائيلي خلال حرب أكتوبر 1973، وتولى مسؤولية القيادة العسكرية العامة وإدارة العمليات على الجبهتين.'
        },

        chaim: {
            title: 'حاييم بارليف',
            text: 'رئيس الأركان الإسرائيلي الأسبق، وارتبط اسمه بخط بارليف الدفاعي على الضفة الشرقية لقناة السويس.'
        },

        sharon: {
            title: 'أرييل شارون',
            text: 'قائد الفرقة المدرعة 143 خلال الحرب، وكان من أبرز القادة الإسرائيليين المشاركين في أحداث ثغرة الدفرسوار.'
        },

        gonen: {
            title: 'شموئيل جونين',
            text: 'قائد القيادة الجنوبية الإسرائيلية عند اندلاع حرب أكتوبر， وتولى مسؤولية الجبهة المصرية في بداية الحرب.'
        },

        hofi: {
            title: 'إسحاق حوفي',
            text: 'قائد القيادة الشمالية الإسرائيلية خلال حرب أكتوبر، وتولى مسؤولية الجبهة السورية.'
        },

        benny: {
            title: 'بيني بيليد',
            text: 'قائد سلاح الجو الإسرائيلي خلال حرب أكتوبر 1973، وتولى قيادة القوات الجوية وإدارة مهامها.'
        },

        abraham: {
            title: 'أبراهام أدان',
            text: 'قائد الفرقة المدرعة 162 الإسرائيلية، وشاركت قواته في العمليات العسكرية على الجبهة المصرية.'
        },

        albert: {
            title: 'ألبرت مادلر',
            text: 'قائد عسكري إسرائيلي شارك في معارك سيناء خلال حرب أكتوبر 1973، وقُتل يوم 13 أكتوبر.'
        }
    };

    var modal = document.getElementById('modal');
    var modalTitle = document.getElementById('modalTitle');
    var modalText = document.getElementById('modalText');
    var modalClose = document.getElementById('modalClose');

    if (!modal || !modalTitle || !modalText || !modalClose) return;

    var lastFocus = null;

    document.querySelectorAll('.leader_details_button[data-leader-id]')
        .forEach(function (button) {

            button.addEventListener('click', function () {
                var id = button.getAttribute('data-leader-id').trim();
                var details = leaderDetails[id];

                if (!details) {
                    console.error('Leader ID not found:', id);
                    return;
                }

                lastFocus = button;

                modalTitle.textContent = details.title;
                modalText.textContent = details.text;

                modal.hidden = false;
                modal.classList.add('open');
                modal.setAttribute('aria-hidden', 'false');
                document.body.classList.add('no_scroll');

                modalClose.focus();
            });
        });

    function closeModal() {
        modal.classList.remove('open');
        modal.hidden = true;
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no_scroll');

        if (lastFocus) lastFocus.focus();
    }

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', function (event) {
        if (event.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
})();
