var choose_one = $('option[value="Choose one..."]');
choose_one.attr('disabled', true);

var year = new Date().getFullYear();
$('#copyright-date').text(year);