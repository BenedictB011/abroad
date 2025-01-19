$(document).ready(function (e) {
    var $searchBase = $('input[name="search-base"]');
    var $formSearchJobs = $('#form-search-jobs');
    var $cardBody = $formSearchJobs.find('div.card-body');
    var $cardFooter = $formSearchJobs.find('div.card-footer');
    var $btnSubmit = $('#search-jobs-submit');

    $btnSubmit.prop('disabled', true);

    if (!$('input[name="search-base"]:checked').length) {
        $('#label-base-1').trigger('click');
    }

    $searchBase.on('change', function (e) {
        let val = $('input[name="search-base"]:checked').val();

        if (val === 'seabased') {
            $cardBody
                .find('#keywords')
                .prop('disabled', false);
                
            $cardBody
                .find('select')
                .prop('disabled', true)
                .val('');

            $cardBody.find('.select2-clear').trigger('change');

            $cardBody
                .find('input[type="checkbox"]')
                .prop('disabled', true)
                .prop('checked', false);

            $btnSubmit.prop('disabled', false);
        } else if (val === 'landbased') {
            $cardBody
                .find(':input')
                .prop('disabled', false);

            $cardBody
                .find(':input')
                .prop('disabled', false);

            $btnSubmit.prop('disabled', false);
        } else {
            $cardBody
                .find(':input:not([name="search-base"])')
                .prop('disabled', true);

            $cardBody
                .find(':input')
                .prop('disabled', true);
        }
    });

    $searchBase.trigger('change');

    $('form').areYouSure();
});
