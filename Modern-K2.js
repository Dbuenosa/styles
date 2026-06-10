/* =====================================================
   NINTEX K2 FIVE - MODERN PROFILE
   ===================================================== */

(function () {

    const ModernK2 = {

        init: function () {
            this.enableTheme();
            this.decorateViews();
            this.decorateControls();
            this.decorateWorkflowActions();
            this.observeDynamicContent();
        },

        enableTheme: function () {
            document.body.classList.add('modern-k2');
        },

        decorateViews: function () {

            $('.view').each(function () {

                const panel = $(this).find('> .innerpanel');

                if (panel.length) {
                    panel.addClass('k2-modern-panel');
                }
            });
        },

        decorateControls: function () {

            $('input, textarea, select').each(function () {

                $(this).addClass('k2-modern-input');
            });
        },

        decorateWorkflowActions: function () {

            $('a.SourceCode-Forms-Controls-Web-Button').each(function () {

                const text = $(this).text().trim().toLowerCase();

                if (text.includes('approve')) {
                    $(this).addClass('k2-success');
                }

                if (text.includes('reject')) {
                    $(this).addClass('k2-danger');
                }
            });
        },

        observeDynamicContent: function () {

            const observer = new MutationObserver(() => {
                this.decorateControls();
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
    };

    $(document).ready(function () {
        ModernK2.init();
    });

})();