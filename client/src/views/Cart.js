import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Cart extends Component {
    render() {
        return (
            <div>
                {/* <!-- CORE : begin --> */}
			<div id="core">

				{/* <!-- PAGE HEADER : begin --> */}
				<div id="page-header">
					<div className="container">
						<h1>Cart</h1>
						<ul className="breadcrumbs">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/shop/products">Shop</Link></li>
							<li>Cart</li>
						</ul>
					</div>
				</div>
				{/* <!-- PAGE HEADER : begin --> */}

				<div className="container">

					{/* <!-- PAGE CONTENT : begin --> */}
					<div id="page-content">

						{/* <!-- SHOP CART : begin --> */}
						<div className="shop-cart">

							<form className="default-form" action="shop-checkout.html">

								{/* <!-- CART TABLE : begin --> */}
								<table className="cart-table">
									<thead>
										<tr>
											<th className="image-col"></th>
											<th className="title-col">Product</th>
											<th className="price-col">Price</th>
											<th className="quantity-col">Quantity</th>
											<th className="total-col">Total</th>
											<th className="remove-col"></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="product-image"><a href="shop-detail.html"><img src="../images/product_01_mini.jpg" alt=""/></a></td>
											<td><a href="shop-detail.html">Almond Supple Skin Oil</a></td>
											<td>$35.50</td>
											<td>
												<div className="quantity-input">
													<input type="number" className="m-type-2" defaultValue="1" min="1" max="100" step="1" />
												</div>
											</td>
											<td>$35.50</td>
											<td className="textalign-right"><a href="#" className="remove-item"><i className="fa fa-trash-o"></i></a></td>
										</tr>
										<tr>
											<td className="product-image"><a href="shop-detail.html"><img src="../images/product_02_mini.jpg" alt=""/></a></td>
											<td><a href="shop-detail.html">Almond Tonic Body Oil</a></td>
											<td>$36.50</td>
											<td>
												<div className="quantity-input">
													<input type="number" className="m-type-2" defaultValue="1" min="1" max="100" step="1" />
												</div>
											</td>
											<td>$36.50</td>
											<td className="textalign-right"><a href="#" className="remove-item"><i className="fa fa-trash-o"></i></a></td>
										</tr>
										<tr>
											<td className="product-image"><a href="shop-detail.html"><img src="../images/product_03_mini.jpg" alt=""/></a></td>
											<td><a href="shop-detail.html">Aroma Volumizing Mask</a></td>
											<td>$27.20</td>
											<td>
												<div className="quantity-input">
													<input type="number" className="m-type-2" defaultValue="1" min="1" max="100" step="1" />
												</div>
											</td>
											<td>$27.20</td>
											<td className="textalign-right"><a href="#" className="remove-item"><i className="fa fa-trash-o"></i></a></td>
										</tr>
									</tbody>
								</table>
								{/* <!-- CART TABLE : end --> */}

								{/* <!-- CART TOOLS : begin --> */}
								<div className="cart-tools">

									{/* <!-- CART COUPON : begin --> */}
									<div className="cart-coupon">
										<input type="text" className="m-type-2" />
										<button className="c-button m-type-2" type="submit">Apply Coupon</button>
									</div>
									{/* <!-- CART COUPON : end --> */}

									{/* <!-- CART BUTTONS : begin --> */}
									<div className="cart-buttons">
										<button className="c-button m-type-2" type="submit">Update Cart</button>
										<button className="c-button" type="submit">Checkout</button>
									</div>
									{/* <!-- CART BUTTONS : end --> */}

								</div>
								{/* <!-- CART TOOLS : end --> */}

							</form>

							{/* <!-- CART FOOTER : begin --> */}
							<div className="cart-footer">

								{/* <!-- CART SHIPPING : begin --> */}
								<div className="cart-shipping">
									<form className="default-form" action="shop-cart.html">

										<h2 className="heading-2 m-small">Cart Shipping</h2>
										<div className="form-field">
											<select className="selectbox-input">
												<option>Select Country...</option>
												<option defaultValue="country1">Country 1</option>
												<option defaultValue="country2">Country 2</option>
												<option defaultValue="country3">Country 3</option>
												<option defaultValue="country4">Country 4</option>
												<option defaultValue="country5">Country 5</option>
												<option defaultValue="country6">Country 6</option>
												<option defaultValue="country7">Country 7</option>
												<option defaultValue="country8">Country 8</option>
											</select>
										</div>
										<button className="c-button m-type-2" type="submit">Update Totals</button>

									</form>
								</div>
								{/* <!-- CART SHIPPING : end --> */}

								{/* <!-- CART TOTALS : begin --> */}
								<div className="cart-totals">

									<h2 className="heading-2 m-small">Cart Totals</h2>
									<dl>
										<dt>Cart Subtotal</dt>
										<dd>$30.24</dd>
										<dt>Shipping</dt>
										<dd>$1.99</dd>
										<dt>Total</dt>
										<dd><strong>$32.99</strong></dd>
									</dl>

								</div>
								{/* <!-- CART TOTALS : end --> */}

							</div>
							{/* <!-- CART FOOTER : end --> */}

						</div>
						{/* <!-- SHOP CART : end --> */}

					</div>
					{/* <!-- PAGE CONTENT : end --> */}

				</div>

			</div>
			{/* <!-- CORE : end --> */}
            </div>
        )
    }
}
