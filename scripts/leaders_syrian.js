
(function () {
    'use strict';

    var leaderDetails = {
        elasad: {
            title: 'حافظ الأسد',
            text: 'رئيس الجمهورية العربية السورية والقائد العام للقوات المسلحة خلال حرب أكتوبر 1973.'
        },
        talas: {
            title: 'مصطفى طلاس',
            text: 'وزير الدفاع السوري خلال حرب أكتوبر 1973، وشارك في القيادة العسكرية والإشراف على القوات.'
        },
        david: {
            title: 'يوسف شكور',
            text: 'رئيس هيئة الأركان العامة السورية خلال حرب أكتوبر، وشارك في إدارة العمليات العسكرية.'
        },
        'haider': {
            title: 'علي حيدر',
            text: 'قائد عسكري سوري ارتبط اسمه بقيادة القوات الخاصة السورية.'
        },
        abara: {
            title: 'ممدوح عبارة',
            text: 'من القيادات العسكرية السورية المرتبطة بسلاح المدفعية خلال الحرب.'
        },
        aslan: {
            title: 'علي أصلان',
            text: 'قائد عسكري سوري تولى مناصب قيادية في الجيش السوري.'
        },
        hofi: {
            title: 'ناجي جميل',
            text: 'قائد القوات الجوية السورية خلال فترة حرب أكتوبر.'
        },
        'al-abrash': {
            title: 'عمر الأبرش',
            text: 'قائد الفرقة السابعة الآلية على الجبهة السورية خلال حرب أكتوبر.'
        },
        turkmani: {
            title: 'حسن توركماني',
            text: 'قائد عسكري سوري تولى لاحقًا مناصب قيادية عليا في القوات المسلحة.'
        },
        'al-juhani': {
            title: 'توفيق الجهني',
            text: 'من القيادات العسكرية السورية المرتبطة بقيادة التشكيلات المدرعة.'
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
