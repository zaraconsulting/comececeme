import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Shop extends Component {
    render() {
        return (
            <div>
                {/* <!-- CORE : begin --> */}
			<div id="core" className="core-bg-2">

				{/* <!-- PAGE HEADER : begin --> */}
				<div id="page-header">
					<div className="container">
						<h1>Shop</h1>
						<ul className="breadcrumbs">
							<li><Link to="/">Home</Link></li>
							<li>Shop</li>
						</ul>
					</div>
				</div>
				{/* <!-- PAGE HEADER : begin --> */}

				<div className="container">
					<div className="row">
						<div className="col-md-8">

							{/* <!-- PAGE CONTENT : begin --> */}
							<div id="page-content">

								{/* <!-- PRODUCT LIST TOOLS : begin --> */}
								<div className="product-list-tools">
									<div className="row">
										<div className="col-sm-6">

											{/* <!-- PRODUCT LIST TITLE : begin --> */}
											<h2 className="product-list-title">Showing 12 Items</h2>
											{/* <!-- PRODUCT LIST TITLE : end --> */}

										</div>
										<div className="col-sm-6">

											{/* <!-- PRODUCT LIST SORTING : begin --> */}
											<form action="shop-list.html" className="default-form product-list-sorting">
												<select className="selectbox-input m-small m-type-2">
													<option value="default">Default Sorting</option>
													<option value="lowest">Lowest Price</option>
													<option value="highest">Highest Price</option>
												</select>
											</form>
											{/* <!-- PRODUCT LIST SORTING : end --> */}

										</div>
									</div>
								</div>
								{/* <!-- PRODUCT LIST TOOLS : end --> */}

								{/* <!-- PRODUCT LIST : begin --> */}
								<ul className="product-list">

									{/* <!-- PRODUCT : begin --> */}
									<li className="product">
										<div className="product-inner">
											<h3 className="product-title"><a href="shop-detail.html">Almond Supple Skin Oil</a></h3>
											<p className="product-image"><a href="shop-detail.html"><img src="../images/product_01_thumb.jpg" alt="" /></a></p>
											<div className="product-info">
												<div className="product-price">$35.50</div>
												<a href="shop-detail.html" className="product-btn c-button m-type-2 m-small">Buy</a>
											</div>
										</div>
									</li>
									{/* <!-- PRODUCT : end --> */}

									{/* <!-- PRODUCT : begin --> */}
									<li className="product">
										<div className="product-inner">
											<h3 className="product-title"><a href="shop-detail.html">Almond Tonic Body Oil</a></h3>
											<p className="product-image"><a href="shop-detail.html"><img src="../images/product_02_thumb.jpg" alt="" /></a></p>
											<div className="product-info">
												<div className="product-price">$36.50</div>
												<a href="shop-detail.html" className="product-btn c-button m-type-2 m-small">Buy</a>
											</div>
										</div>
									</li>
									{/* <!-- PRODUCT : end --> */}

									{/* <!-- PRODUCT : begin --> */}
									<li className="product">
										<div className="product-inner">
											<h3 className="product-title"><a href="shop-detail.html">Aroma Volumizing Mask</a></h3>
											<p className="product-image"><a href="shop-detail.html"><img src="../images/product_03_thumb.jpg" alt="" /></a></p>
											<div className="product-info">
												<div className="product-price">$27.20</div>
												<a href="shop-detail.html" className="product-btn c-button m-type-2 m-small">Buy</a>
											</div>
										</div>
									</li>
									{/* <!-- PRODUCT : end --> */}

									{/* <!-- PRODUCT : begin --> */}
									<li className="product">
										<div className="product-inner">
											<h3 className="product-title"><a href="shop-detail.html">Aromachology Repairing Mask</a></h3>
											<p className="product-image"><a href="shop-detail.html"><img src="../images/product_04_thumb.jpg" alt="" /></a></p>
											<div className="product-info">
												<div className="product-price"><span className="old-price">$26.49</span>$22.49</div>
												<a href="shop-detail.html" className="product-btn c-button m-type-2 m-small">Buy</a>
											</div>
										</div>
									</li>
									{/* <!-- PRODUCT : end --> */}

									{/* <!-- PRODUCT : begin --> */}
									<li className="product">
										<div className="product-inner">
											<h3 className="product-title"><a href="shop-detail.html">Brightening Moisture Mask</a></h3>
											<p className="product-image"><a href="shop-detail.html"><img src="../images/product_05_thumb.jpg" alt="" /></a></p>
											<div className="product-info">
												<div className="product-price">$59.99</div>
												<a href="shop-detail.html" className="product-btn c-button m-type-2 m-small">Buy</a>
											</div>
										</div>
									</li>
									{/* <!-- PRODUCT : end --> */}

									{/* <!-- PRODUCT : begin --> */}
									<li className="product">
										<div className="product-inner">
											<h3 className="product-title"><a href="shop-detail.html">Immortelle Divine Extract</a></h3>
											<p className="product-image"><a href="shop-detail.html"><img src="../images/product_06_thumb.jpg" alt="" /></a></p>
											<div className="product-info">
												<div className="product-price">$87.99</div>
												<a href="shop-detail.html" className="product-btn c-button m-type-2 m-small">Buy</a>
											</div>
										</div>
									</li>
									{/* <!-- PRODUCT : end --> */}

									{/* <!-- PRODUCT : begin --> */}
									<li className="product">
										<div className="product-inner">
											<h3 className="product-title"><a href="shop-detail.html">Precious Cream</a></h3>
											<p className="product-image"><a href="shop-detail.html"><img src="../images/product_07_thumb.jpg" alt="" /></a></p>
											<div className="product-info">
												<div className="product-price">$52.49</div>
												<a href="shop-detail.html" className="product-btn c-button m-type-2 m-small">Buy</a>
											</div>
										</div>
									</li>
									{/* <!-- PRODUCT : end --> */}

									{/* <!-- PRODUCT : begin --> */}
									<li className="product">
										<div className="product-inner">
											<h3 className="product-title"><a href="shop-detail.html">Precious Night Cream</a></h3>
											<p className="product-image"><a href="shop-detail.html"><img src="../images/product_08_thumb.jpg" alt="" /></a></p>
											<div className="product-info">
												<div className="product-price">$62.20</div>
												<a href="shop-detail.html" className="product-btn c-button m-type-2 m-small">Buy</a>
											</div>
										</div>
									</li>
									{/* <!-- PRODUCT : end --> */}

									{/* <!-- PRODUCT : begin --> */}
									<li className="product">
										<div className="product-inner">
											<h3 className="product-title"><a href="shop-detail.html">Shea Ultra Gentle Moisturizer</a></h3>
											<p className="product-image"><a href="shop-detail.html"><img src="../images/product_09_thumb.jpg" alt="" /></a></p>
											<div className="product-info">
												<div className="product-price">$29.99</div>
												<a href="shop-detail.html" className="product-btn c-button m-type-2 m-small">Buy</a>
											</div>
										</div>
									</li>
									{/* <!-- PRODUCT : end --> */}

									{/* <!-- PRODUCT : begin --> */}
									<li className="product">
										<div className="product-inner">
											<h3 className="product-title"><a href="shop-detail.html">Shea Ultra Rich Face Cream</a></h3>
											<p className="product-image"><a href="shop-detail.html"><img src="../images/product_10_thumb.jpg" alt="" /></a></p>
											<div className="product-info">
												<div className="product-price">$35.50</div>
												<a href="shop-detail.html" className="product-btn c-button m-type-2 m-small">Buy</a>
											</div>
										</div>
									</li>
									{/* <!-- PRODUCT : end --> */}

									{/* <!-- PRODUCT : begin --> */}
									<li className="product">
										<div className="product-inner">
											<h3 className="product-title"><a href="shop-detail.html">Almond Delightful Shape</a></h3>
											<p className="product-image"><a href="shop-detail.html"><img src="../images/product_11_thumb.jpg" alt="" /></a></p>
											<div className="product-info">
												<div className="product-price">$35.20</div>
												<a href="shop-detail.html" className="product-btn c-button m-type-2 m-small">Buy</a>
											</div>
										</div>
									</li>
									{/* <!-- PRODUCT : end --> */}

									{/* <!-- PRODUCT : begin --> */}
									<li className="product">
										<div className="product-inner">
											<h3 className="product-title"><a href="shop-detail.html">Almond Shaping Delight</a></h3>
											<p className="product-image"><a href="shop-detail.html"><img src="../images/product_12_thumb.jpg" alt="" /></a></p>
											<div className="product-info">
												<div className="product-price">$45.00</div>
												<a href="shop-detail.html" className="product-btn c-button m-type-2 m-small">Buy</a>
											</div>
										</div>
									</li>
									{/* <!-- PRODUCT : end --> */}

								</ul>
								{/* <!-- PRODUCT LIST : end --> */}

								{/* <!-- PAGINATION : begin --> */}
								<ul className="c-pagination">
									<li className="prev"><a href="#"><i className="fa fa-angle-left"></i></a></li>
									<li><a href="#">1</a></li>
									<li className="m-active"><a href="#">2</a></li>
									<li><a href="#">3</a></li>
									<li className="next"><a href="#"><i className="fa fa-angle-right"></i></a></li>
								</ul>
								{/* <!-- PAGINATION : end --> */}

							</div>
							{/* <!-- PAGE CONTENT : end --> */}

						</div>
						<div className="col-md-4">

							{/* <!-- SIDEBAR : begin --> */}
							<aside id="sidebar">

								{/* <!-- SIDEBAR CART : begin --> */}
								<div className="sidebar-widget sidebar-cart">
									<h3 className="widget-title">Your Cart</h3>
									<div className="widget-content">

										{/* <!-- CART PRODUCT LIST : begin --> */}
										<ul className="cart-product-list">
											<li>
												<div className="cart-product">
													<p className="product-image"><a href="shop-detail.html"><img src="../images/product_01_mini.jpg" alt="" /></a></p>
													<h4 className="product-title"><a href="shop-detail.html">Almond Supple Skin Oil</a></h4>
													<p className="product-price">1 x $35.50</p>
												</div>
											</li>
											<li>
												<div className="cart-product">
													<p className="product-image"><a href="shop-detail.html"><img src="../images/product_02_mini.jpg" alt="" /></a></p>
													<h4 className="product-title"><a href="shop-detail.html">Almond Tonic Body Oil</a></h4>
													<p className="product-price">1 x $36.50</p>
												</div>
											</li>
											<li>
												<div className="cart-product">
													<p className="product-image"><a href="shop-detail.html"><img src="../images/product_03_mini.jpg" alt="" /></a></p>
													<h4 className="product-title"><a href="shop-detail.html">Aroma Volumizing Mask</a></h4>
													<p className="product-price">1 x $27.20</p>
												</div>
											</li>
										</ul>
										{/* <!-- CART PRODUCT LIST : end --> */}

										{/* <!-- CART FOOTER : begin --> */}
										<footer className="cart-footer">
											<div className="cart-total"><h5>Total</h5><strong>$99.20</strong></div>
											<p className="cart-btn"><a href="shop-cart.html" className="c-button m-type-2">Open Cart</a></p>
										</footer>
										{/* <!-- CART FOOTER : end --> */}

									</div>
								</div>
								{/* <!-- SIDEBAR CART : end --> */}

								{/* <!-- SIDEBAR LINKS : begin --> */}
								<div className="sidebar-widget sidebar-links">
									<h3 className="widget-title">Categories</h3>
									<div className="widget-content">
										<ul>
											<li><a href="#">Hair Products</a></li>
											<li><a href="#">Face Care Products</a></li>
											<li><a href="#">Body Care Products</a></li>
										</ul>
									</div>
								</div>
								{/* <!-- SIDEBAR LINKS : end --> */}

								{/* <!-- SIDEBAR SEARCH : begin --> */}
								<div className="sidebar-widget sidebar-search">
									<h3 className="widget-title">Search</h3>
									<div className="widget-content">
										<form className="c-search-form" action="search-results.html">
											<div className="form-fields">
												<input type="text" data-placeholder="What to search..." />
												<button className="c-button" type="submit"><i className="fa fa-search"></i></button>
											</div>
										</form>
									</div>
								</div>
								{/* <!-- SIDEBAR SEARCH : end --> */}

								{/* <!-- SIDEBAR PRODUCTS : begin --> */}
								<div className="sidebar-widget sidebar-products">
									<h3 className="widget-title">Popular Products</h3>
									<div className="widget-content">
										<ul>
											<li>
												<h4 className="product-title"><a href="shop-detail.html">Aromachology Repairing Mask</a></h4>
												<p className="product-price"><span className="old-price">$26.49</span> $22.49</p>
											</li>
											<li>
												<h4 className="product-title"><a href="shop-detail.html">Almond Supple Skin Oil</a></h4>
												<p className="product-price">$35.50</p>
											</li>
											<li>
												<h4 className="product-title"><a href="shop-detail.html">Shea Ultra Gentle Moisturizer</a></h4>
												<p className="product-price">$29.99</p>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- SIDEBAR PRODUCTS : end --> */}

								{/* <!-- SIDEBAR TAGS : begin --> */}
								<div className="sidebar-widget sidebar-tags">
									<h3 className="widget-title">Popular Tags</h3>
									<div className="widget-content">
										<ul>
											<li><a href="#">Cream</a></li>
											<li><a href="#">Skin</a></li>
											<li><a href="#">Almond</a></li>
											<li><a href="#">Extract</a></li>
											<li><a href="#">Face</a></li>
											<li><a href="#">Shaping</a></li>
											<li><a href="#">Mask</a></li>
										</ul>
									</div>
								</div>
								{/* <!-- SIDEBAR TAGS : end --> */}

							</aside>
							{/* <!-- SIDEBAR : end --> */}

						</div>
					</div>
				</div>

			</div>
			{/* <!-- CORE : end --> */}
            </div>
        )
    }
}
