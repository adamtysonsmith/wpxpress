   $(document.body).on('click', 'dropdown-menu-right li', function(event) {

      var $target = $(event.currentTarget);

      $target.closest('.input-group-btn')
         .find('[data-bind="label"]').text($target.text())
            .end()
         .children('.dropdown-toggle').dropdown('toggle');

      return false;

   });