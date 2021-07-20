(function($) {
    $('.cz-registration-form').each(function(i) {

        // $this = $(this);
        $(this).submit(function(e) {
            e.preventDefault();

            var form = $(this);
            var data = form.serialize();
            data = data + '&action=cz_register_submission_for_webinar';

            $.ajax({
                type: "POST",
                url: czAjax.ajaxurl,
                dataType: 'JSON',
                data: data,
                success: function(response) {
                    console.log(response);
                    if (response.result == "error") {
                        // add the errors to form
                        var error_html = '<p><ul>';

                        if (response.errors.validation) {
                            response.errors.validation.forEach(function(item) {
                                error_html += '<li>' + item + '</li>';
                            })
                        }

                        if (response.errors.missing_fields) {
                            response.errors.missing_fields.forEach(function(item) {
                                error_html += '<li>' + item + ' field is required.</li>';
                            })
                        }

                        error_html += '</ul></p>';

                        form.find('#cz-webinar-error-list').html(error_html);

                        form.addClass('errors-active');

                    } else {
                        var success_html = '<div id="cz-webinar-succcess"><p><strong>' + response.message + '</strong></p></div>';
                        form.html(success_html);
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    alert('There was an error communicating with the server');
                    console.log(xhr);
                    console.log(ajaxOptions);
                    console.log(thrownError);
                }
            })


        });
    });

})(jQuery);