$('#place-order').on('submit', function (e) {
    $.post('/shop/cart/clear', {}, function (data, status) {
        console.log(`Status: ${status}`)
    })
})

$('#sort-dropdown').on('submit', function (e) {
    $.post('/shop/products/sort', { order: $('#sort-select').val()}, function (data) {
        // console.log(data);
    })
})