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


$('#checkout-form').on('submit', function (e) {
    e.preventDefault();
    
    var formData = {
        firstName: $('#checkout-first-name').val(),
        lastName: $('#checkout-last-name').val(),
        company: $('#checkout-company').val(),
        address: $('#checkout-address').val(),
        city: $('#checkout-city').val(),
        state: $('#checkout-state').val(),
        postalCode: $('#checkout-postalcode').val(),
        phone: $('#checkout-phone').val(),
        email: $('#checkout-email').val(),
        address_shipping: $('#enable-shipping-address').val(),
        firstNameShipping: $('#checkout-first-name-shipping').val(),
        lastNameShipping: $('#checkout-last-name-shipping').val(),
        companyShipping: $('#checkout-company-shipping').val(),
        cityShipping: $('#checkout-city-shipping').val(),
        stateShipping: $('#checkout-state-shipping').val(),
        postalCodeShipping: $('#checkout-postalcode-shipping').val(),
        note: $('#checkout-note').val()
    }

    $.post($('#checkout-form').attr('action'), formData, (data) => console.log("It worked!"))
})