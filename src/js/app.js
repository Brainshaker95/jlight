/* eslint-disable no-console */
import $ from './jlight';

$(() => {
  const $button = $('button');
  const $divs = $('div');
  const $spans = $('.span');
  const $link = $('a');

  console.log($divs.slice(1, 5));

  // const $div = $('<div>');

  // const $checkbox = $('<input>');

  // $checkbox.attr('type', 'checkbox');

  // $('body').append($checkbox);
  // $('body').prepend('<div>');

  // $('div')
  //   .first()
  //   .addClass('yo')
  //   .css('width', '1rem')
  //   .css('height', '1rem')
  //   .css('bottom', '0')
  //   .css('right', '0')
  //   .css('background-color', 'blue')
  //   .css('position', 'absolute');

  // $('div')
  //   .last()
  //   .addClass('yo')
  //   .text('A')
  //   .css('width', '1rem')
  //   .css('height', '1rem')
  //   .css('background-color', 'red')
  //   .css('position', 'absolute');

  // $('div').delegate('click', () => {
  //   console.log('aaa');

  //   $('.yo')
  //     .last()
  //     .animate({
  //       // left: '100px',
  //       // top: '100px',
  //       fontSize: '30px',
  //     }, 10);
  // });

  // $('.yo')
  //   .last()
  //   .on('mouseover', ({ currentTarget }) => {
  //     $(currentTarget).animate({
  //       fontSize: '100px',
  //     }, 10);
  //   })
  //   .on('mouseleave', ({ currentTarget }) => {
  //     $(currentTarget).animate({
  //       fontSize: '16px',
  //     }, 10);
  //   });
});
