jQuery(document).ready(function($) {
    $('.module-box').change(function() { // Listen to change event
        $(this).parent().toggleClass('selected');
        var $checked = $('.module-box').filter(':checked'); // Store checked checkboxes
        if ($checked.length) { // Perform filtering if one or more is checked
            var sections = $checked.map(function() { // Collect ALL values from all .module-box into an array
                return $(this).val().toLowerCase();
            }).get();
            $('.command').each(function() {// Iterate through each list item and evaluate
                var $t = $(this);

                if (sections.indexOf($t.data('module').toLowerCase()) >= 0) {
                    $t.show();
                } else {
                    $t.hide();
                }
            });
        }
        else { // If nothing is checked, show all list items
            $('.command').show();
        }
    });
    $('#searchbar').keyup(function(){
        var val = $(this).val().toLowerCase();
        $('.commands .command').hide();
        $('.commands .command').each(function(){
            var text = $(this).html().toLowerCase();
            if(text.indexOf(val) != -1) {
                $(this).show();
            }
        });
    });
    // needed to handle the pressing of the X on the search bar
    $('#searchbar').on('search', (function(){
        var val = $(this).val().toLowerCase();
        $('.commands .command').hide();
        $('.commands .command').each(function(){
            var text = $(this).html().toLowerCase();
            if(text.indexOf(val) != -1) {
                $(this).show();
            }
        });
    }));
});