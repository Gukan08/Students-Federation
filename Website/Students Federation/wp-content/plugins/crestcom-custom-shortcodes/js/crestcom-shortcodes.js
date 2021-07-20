jQuery(document).ready(function() {
    var $wrapper = jQuery('#franchisees-wrapper');

    jQuery('input[type=radio][name=order]').change(function() {
        if (this.value == 'a-z') {
            $wrapper.find('.franchisee-item').sort(function(a, b) {
                    return +a.dataset.count - +b.dataset.count;
                })
                .appendTo($wrapper);
        } else if (this.value == 'z-a') {
            $wrapper.find('.franchisee-item').sort(function(a, b) {
                    return +b.dataset.count - +a.dataset.count;
                })
                .appendTo($wrapper);
        }
    });

    var countrytarget = "";

    jQuery('.locations-filter-nav li').on('click', function(e) {
        if (jQuery(this).hasClass('active')) {

            var franchiseeItems = jQuery('.franchisee-item')

            if (countrytarget != "") {
                jQuery(".locations-filter-nav ul li").hide();

                franchiseeItems.hide();
                jQuery(".country-" + countrytarget).show();
                console.log('country is ' + countrytarget);
            } else {
                franchiseeItems.show();
            }

            jQuery('.locations-filter-nav li').removeClass('active')

        } else {
            var dropdownnav = jQuery('.locations-filter-nav select')

            var target = this.getAttribute('data-filter')
            var targetClass = '.region-' + target

            var franchiseeItems = jQuery('.franchisee-item')

            dropdownnav.val(target)
            franchiseeItems.hide()

            jQuery(targetClass).show()

            jQuery('.locations-filter-nav li').removeClass('active')
            this.classList.add('active')

        }
    });

    jQuery('.locations-filter-nav select').on('change', function(e) {
        var listnav = jQuery('.locations-filter-nav');

        var target = this.value
        if (target === 'franchisee-item') {
            var targetClass = '.franchisee-item'
        } else {
            var targetClass = '.region-' + target
        }

        var franchiseeItems = jQuery('.franchisee-item')

        listnav.find('li').removeClass('active')
        listnav.find('li[data-filter="' + target + '"]').addClass('active')

        franchiseeItems.hide()

        jQuery(targetClass).show()
    });

    jQuery('#txtCountrySelector').on('change', function(e) {
        countrytarget = jQuery(this).find(":selected").val();
        var franchiseeItems = jQuery('.franchisee-item');

        jQuery('.locations-filter-nav li').removeClass('active');

        if (countrytarget != "") {
            jQuery(".locations-filter-nav ul li").hide();
            franchiseeItems.hide();

            jQuery(".country-" + countrytarget).show();
        } else {
            jQuery(".locations-filter-nav ul li").show();
            franchiseeItems.show();
        }
    });

});