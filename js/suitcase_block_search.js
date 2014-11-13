/**
 * Adds functionality to collapse the menu when viewing on a mobile device
 * Author: Ryan Frahm
 * Date: 8/11/14
 */

(function($) {
  Drupal.behaviors.suitcaseBlockSearch = {
    attach: function (context) {
      $('body', context).once('suitcaseBlockSearch', function() {
        var length_requirement = 7;
        $('.block .item-list').each(function() {
          if($(this).find('> ul > li').length > length_requirement) {
            var $e = $('<div class="block-search-input"><input type="text" value="" placeholder="Filter items" style="display: none"><div class="pull-down"><span>...</span></div><div class="clear-search" style="display: none"><span>x</span></div></div>');
            $e.find('input').keyup(function(e) {
              if($(this).val() == '') {
                $(this).parent().parent().find('li').show();
                $(this).parent().find('.clear-search').hide();
              } else {
                $(this).parent().find('.clear-search').show();
                $(this).parent().parent().find('li:not(:contains('+$(this).val()+'))').hide();
                $(this).parent().parent().find('li:contains('+$(this).val()+')').show();
              }
            });
            $(this).prepend($e);
          }
        });
        $('.block-search-input .clear-search').click(function(e) {
          $(this).parent().find('input').val('').keyup();
          $(this).hide();
        });
        $('.block-search-input .pull-down').click(function() {
          $(this).parent().find('input').toggle();
        });
      });
    }
  };
})(jQuery);