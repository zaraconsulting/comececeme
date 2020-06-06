// $('#place-order-btn').attr('disabled', true);

$('#place-order').on('submit', function (e) {
    $.post('/shop/cart/clear', {}, function (data, status) {
        console.log(`Status: ${status}`)
    })
})

$('#sort-dropdown').on('submit', function (e) {
    $.get('/shop/products/sort', { 'order': $('#sort-select').val() }, function (data) {
        // console.log(data);
    })
})

$('#review-form').on('submit', function (e) {
    e.preventDefault();


    var formData = {
        review_name: $('#review-name').val(),
        review_email: $('#review-email').val(),
        review_rating: $('#review-rating').val(),
        review_message: $('#review-message').val(),
        product_id: $('#product_id').val()
    };

    $.post($('#review-form').attr('action'), formData, (data) => window.location.replace(window.location.href));
})