(function () {
    'use strict';

    var leaderDetails = {
        elsadat: {
            title: 'محمد أنور السادات',
            text: 'رئيس الجمهورية والقائد الأعلى للقوات المسلحة. اتخذ قرار الحرب وحدد موعدها بالتنسيق مع سوريا. وبعد الحرب اتجه إلى المفاوضات التي انتهت بتوقيع معاهدة السلام عام ١٩٧٩.'
        },
        a7med: {
            title: 'أحمد إسماعيل علي',
            text: 'وزير الحربية والقائد العام للقوات المسلحة خلال حرب أكتوبر. أشرف على الاستعداد للحرب وإدارة العمليات العسكرية، وعمل على تنسيق جهود القوات المسلحة لتحقيق العبور.'
        },
        sa3d: {
            title: 'سعد الدين الشاذلي',
            text: 'رئيس أركان حرب القوات المسلحة خلال حرب أكتوبر. أسهم في إعداد خطط العمليات وتنظيم عبور القوات، وسجل تجربته وشهادته عن الحرب في مذكراته.'
        },
        gamasy: {
            title: 'محمد عبدالغني الجمسي',
            text: 'رئيس هيئة عمليات القوات المسلحة خلال حرب أكتوبر. وضع التوقيت المناسب للهجوم، وساهم في تطوير خطط العمليات وإعداد القوات للعبور.'
        },
        shafie: {
            title: 'حسين الشافعي',
            text: 'من القادة العسكريين الذين ساهموا في دعم عمليات أكتوبر، وبرز دوره في التخطيط والتنفيذ داخل الجيش المصري، بما عكس روح الانضباط والالتزام لتحقيق النصر.'
        },
        abughazala: {
            title: 'عبد الحليم أبو غزالة',
            text: 'قائد عسكري بارز ساهم في إعادة تنظيم الجبهة المصرية وتحضير القوات لاستعادة الأرض، وأصبح أحد الركائز التي أسهمت في نجاحها في حرب أكتوبر.'
        },
        abdelmunim: {
            title: 'عبد المنعم رياض',
            text: 'من أبرز القادة المصريين الذين أسهموا في إعداد الجيش للحرب، وترك بصمة واضحة في البناء العسكري والتخطيط الاستراتيجي الذي مهد لنجاح أكتوبر.'
        },
        ahmedbadawy: {
            title: 'أحمد بدوي',
            text: 'شارك في التخطيط والتنفيذ العسكري خلال المرحلة الحاسمة من حرب أكتوبر، وساهم في دعم الجبهة المصرية بإدارة العمليات وتحفيز القوات.'
        },
        mohamedfawzi: {
            title: 'محمد فوزي',
            text: 'من القامات العسكرية التي أسهمت في تجهيز الجبهة والرفع من جاهزية القوات، وبرز دوره في تفعيل الخطة التي حققت الأهداف العسكرية في المعركة.'
        },
        mohamedsadeq: {
            title: 'محمد صادق',
            text: 'كان من القادة العسكريين الذين ساهموا في إعداد القوات وإدارتها خلال المرحلة الحرجة من الحرب، وترك أثرًا واضحًا في نجاح تلك الحملة.'
        }
    };

    function getLeaderDetails(id) {
        return leaderDetails[id];
    }

    var modal = document.getElementById('modal');
    var modalTitle = document.getElementById('modalTitle');
    var modalText = document.getElementById('modalText');
    var modalClose = document.getElementById('modalClose');
    var lastFocus = null;

    document.querySelectorAll('[data-leader-id]').forEach(function (button) {
        button.addEventListener('click', function () {
            var details = getLeaderDetails(button.dataset.leaderId);
            if (!details) {
                console.error('No leader details found for:', button.dataset.leaderId);
                return;
            }

            lastFocus = button;
            modalTitle.textContent = details.title;
            modalText.textContent = details.text;
            modal.hidden = false;
            modal.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('no_scroll');
            document.getElementById('modalClose').focus();
        });
    });

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no_scroll');
        if (lastFocus) lastFocus.focus();
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function (event) {
        if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
})();