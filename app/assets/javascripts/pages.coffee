# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

# We extended the jQuery prototype in order to add a function (integrateDatepicker) that will search the
# children of the current element with a given selector and apply the datepicker behaviour on them.
# We also call this function when the document is ready on the body in order to avoid the explicit call on
# freshly rendered pages.

$.fn.extend {
  integrateDatepicker: (selector)->
    selector = selector || '.datepicker'
    $(@).find(selector).datepicker()
}
$(document).ready () ->
  $('body').integrateDatepicker()
$('#modal').integrateDatepicker();



