/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import $, {
  ajax,
  get,
  post,
  noop,
  uniqid,
  lcfirst,
  ucfirst,
  doEasing,
  isEmptyObject,
  isSameObject,
  preventEvent,
  generateHash,
  camelToKebab,
  camelToSnake,
  kebabToCamel,
  kebabToSnake,
  snakeToCamel,
  snakeToKebab,
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
