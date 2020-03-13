let token;

// fetch data from api
fetch('/shop/client_token')

    .then(res => res.json())
    .then(data => {
        // store data in token variable
        token = data;
        // console.log(token);

        // Create a Braintree client
        braintree.client.create(
            // Authorize it with either personal Authentication Key, or token variable
            { authorization: token },
            function (clientErr, clientInstance) {
                if (clientErr) {
                    console.error(clientErr);
                }

                var options = {
                    client: clientInstance,
                    fields: {
                        number: {
                            selector: '#cc-number',
                            placeholder: '4111 1111 1111 1111',
                        },
                        expirationDate: {
                            selector: '#cc-date',
                            placeholder: 'MM/YYYY',
                        },
                        // expirationMonth: {
                        //     selector: '#cc-month',
                        //     placeholder: 'MM',
                        // },
                        // expirationYear: {
                        //     selector: '#cc-year',
                        //     placeholder: 'YYYY',
                        // },
                        cvv: {
                            selector: '#cc-cvv',
                            placeholder: '555',
                        },
                        postalCode: {
                            selector: '#cc-postal',
                            placeholder: '90210',
                        }
                    },
                    styles: {
                        input: {} 
                    }
                };

                braintree.hostedFields.create(options, function (hostedFieldsErr, hostedFieldsInstance) {
                    if (hostedFieldsErr) {
                        console.error(hostedFieldsErr);
                        return;
                    }

                    // Button is always disabled unless function is invoked
                    $('#submit').removeAttr('disabled')

                    $('#submit').on('click', e => {
                        e.preventDefault(); // Essential for making sure we don't lose the nonce across server requests

                        // Create the nonce
                        hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
                            if (tokenizeErr) {
                                console.error(tokenizeErr);
                            }

                            // Send nonce to server
                            $.ajax({
                                type: 'POST',
                                url: '/shop/checkout',
                                data: { 'nonce': payload.nonce }
                            }).done(function (result) {
                                // Do something once the AJAX operation is complete
                            })
                            hostedFieldsInstance.teardown(function (teardownErr) {
                                if (teardownErr) {
                                    console.error(teardownErr);
                                }
                                $('#paymentModal').modal('toggle');
                                // console.info("Hosted Fields Torn Down")
                            })
                        })
                    });

                })
            }

        )

    })

