/* eslint-disable no-console */
import $ from './jlight';

$(() => {
  const $button = $('button');
  const $divs = $('div');
  const $link = $('a');

  console.log($('.test').children());

  $('input').on('input', ({ currentTarget }) => {
    console.log($(currentTarget).val());
  });

  $divs.on('test-event', (event, [boolean, foobar]) => {
    console.log(boolean);
    console.log(foobar);
  });

  $button.on('click', () => {
    $link.toggleClass('active');

    $divs
      .trigger('test-event', [true, 'foobar'])
      .css({
        color: 'red',
        backgroundColor: 'grey',
      });

    if ($link.hasClass('active')) {
      $link.show();
    } else {
      $link.hide();
    }
  });
});
