/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import $, {
  ajax,
  get,
  post,
  noop,
  uuid,
  ucfirst,
  isSameObject,
  preventEvent,
  dashCaseToCamelCase,
  camelCaseToDashCase,
} from './index';

$(() => {
  const $button = $('button');
  const $divs = $('div');
  const $spans = $('.span');
  const $input = $('input');
  const $link = $('a');

  window.$ = $;

  // Try something
});
