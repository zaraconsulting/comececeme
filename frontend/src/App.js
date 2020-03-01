import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			{/* <!-- Add your site or application content here --> */}

			{/* <!--header area start--> */}
			<Navbar />
			{/* <!--header area end--> */}

			{/* <!--slider area start--> */}
			<div className="slider_area slider_four slider_five">
				<div className="slider_active owl-carousel">
					<div className="single_slider slider_nine">
						<div className="container-fluid p-0">
							<div className="row align-items-center">
								<div className="col-12">
									<div className="slider_content">
										<h4>view our</h4>
										<h1>coat hoody</h1>
										<p>products now</p>
										<a href="index.html">shop the collection</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="single_slider slider_ten">
						<div className="container-fluid">
							<div className="row align-items-center p-0">
								<div className="col-12">
									<div className="slider_content content_four">
										<h4>view our</h4>
										<h1>coat hoody</h1>
										<p>products now</p>
										<a href="index.html">shop the collection</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--slider area end--> */}

			{/* <!--new product start-->  */}
			<div className="new_product_area">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-2 col-md-2">
							<div className="product_section_title">
								<h3>
									Our
																 <br />
									<strong>Featured</strong>
									<br />
									products
																</h3>
							</div>
						</div>
						<div className="col-lg-10 col-md-10">
							<div className="tab-content tab_four tab_five">
								<div className="product_active owl-carousel">
									<div className="col-lg-3">
										<div className="single_product">
											<div className="product_thumb">
												<a href="single-product.html">
													<img className="primary_img" src="assets/img/product/product22.jpg" alt="Product" />
													<img className="secondary_img" src="assets/img/product/product23.jpg" alt="Stuff" />
												</a>
												<div className="product_action">

													<ul>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
													</ul>
												</div>
											</div>
											<div className="product_content">
												<div className="product_name">
													<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
												</div>
												<div className="product_meta">
													<div className="product_price">
														<span className="current_price">$65.00</span>
													</div>
													<div className="product_ratting">
														<ul>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>
									<div className="col-lg-3">
										<div className="single_product">
											<div className="product_thumb">
												<a href="single-product.html">
													<img className="primary_img" src="assets/img/product/product24.jpg" alt="Product" />
													<img className="secondary_img" src="assets/img/product/product25.jpg" alt="Stuff" />
												</a>
												<div className="product_action">

													<ul>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
													</ul>
												</div>
											</div>
											<div className="product_content">
												<div className="product_name">
													<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
												</div>
												<div className="product_meta">
													<div className="product_price">
														<span className="current_price">$65.00</span>
													</div>
													<div className="product_ratting">
														<ul>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>
									<div className="col-lg-3">
										<div className="single_product">
											<div className="product_thumb">
												<a href="single-product.html">
													<img className="primary_img" src="assets/img/product/product26.jpg" alt="Product" />
													<img className="secondary_img" src="assets/img/product/product27.jpg" alt="Stuff" />
												</a>
												<div className="product_action">

													<ul>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
													</ul>
												</div>
											</div>
											<div className="product_content">
												<div className="product_name">
													<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
												</div>
												<div className="product_meta">
													<div className="product_price">
														<span className="current_price">$65.00</span>
													</div>
													<div className="product_ratting">
														<ul>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>
									<div className="col-lg-3">
										<div className="single_product">
											<div className="product_thumb">
												<a href="single-product.html">
													<img className="primary_img" src="assets/img/product/product28.jpg" alt="Product" />
													<img className="secondary_img" src="assets/img/product/product23.jpg" alt="Stuff" />
												</a>
												<div className="product_action">

													<ul>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
													</ul>
												</div>
											</div>
											<div className="product_content">
												<div className="product_name">
													<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
												</div>
												<div className="product_meta">
													<div className="product_price">
														<span className="current_price">$65.00</span>
													</div>
													<div className="product_ratting">
														<ul>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>
									<div className="col-lg-3">
										<div className="single_product">
											<div className="product_thumb">
												<a href="single-product.html">
													<img className="primary_img" src="assets/img/product/product17.jpg" alt="Product" />
													<img className="secondary_img" src="assets/img/product/product18.jpg" alt="Stuff" />
												</a>
												<div className="product_action">

													<ul>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
													</ul>
												</div>
											</div>
											<div className="product_content">
												<div className="product_name">
													<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
												</div>
												<div className="product_meta">
													<div className="product_price">
														<span className="current_price">$65.00</span>
													</div>
													<div className="product_ratting">
														<ul>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>
									<div className="col-lg-3">
										<div className="single_product">
											<div className="product_thumb">
												<a href="single-product.html">
													<img className="primary_img" src="assets/img/product/product19.jpg" alt="Product" />
													<img className="secondary_img" src="assets/img/product/product20.jpg" alt="Stuff" />
												</a>
												<div className="product_action">

													<ul>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
													</ul>
												</div>
											</div>
											<div className="product_content">
												<div className="product_name">
													<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
												</div>
												<div className="product_meta">
													<div className="product_price">
														<span className="current_price">$65.00</span>
													</div>
													<div className="product_ratting">
														<ul>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--new product start-->  */}
			{/* <!--countdown section start-->  */}
			<div className="countdown_product count_four count_five">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="product_thumb countdown">
								<a href="single-product.html"><img src="assets/img/product/product46.jpg" alt="Stuff" /></a>
								<div className="count_hover">
									<a href="single-product.html"><img src="assets/img/product/product47.jpg" alt="Stuff" /></a>
								</div>
								<div className="sale_percent">
									<span>-4%</span>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="countdown_product_content">
								<div className="product_name">
									<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
								</div>
								<div className="product_ratting">
									<ul>
										<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
										<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
										<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
										<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
										<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
									</ul>
								</div>
								<div className="product_price">
									<span className="current_price">$65.00</span>
									<span className="old_price">$68.00</span>
								</div>
								<div className="product_desc">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique saepe consectetur possimus perferendis, accusantium.</p>
								</div>
								<div className="product_timing">
									<div data-countdown="2020/12/15"></div>
								</div>
								<div className="product_action">
									<ul>
										<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
										<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
										<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
										<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--countdown section end-->  */}

			{/* <!--new product start-->  */}
			<div className="new_product_area">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-2 col-md-2">
							<div className="product_section_title">
								<h3>top <br /> <strong>Seller</strong> <br /> products</h3>
							</div>
						</div>
						<div className="col-lg-10 col-md-10">
							<div className="tab-content tab_four tab_five">
								<div className="product_active owl-carousel">
									<div className="col-lg-3">
										<div className="single_product">
											<div className="product_thumb">
												<a href="single-product.html">
													<img className="primary_img" src="assets/img/product/product25.jpg" alt="Product" />
													<img className="secondary_img" src="assets/img/product/product20.jpg" alt="Stuff" />
												</a>
												<div className="product_action">

													<ul>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
													</ul>
												</div>
											</div>
											<div className="product_content">
												<div className="product_name">
													<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
												</div>
												<div className="product_meta">
													<div className="product_price">
														<span className="current_price">$65.00</span>
													</div>
													<div className="product_ratting">
														<ul>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>
									<div className="col-lg-3">
										<div className="single_product">
											<div className="product_thumb">
												<a href="single-product.html">
													<img className="primary_img" src="assets/img/product/product26.jpg" alt="Product" />
													<img className="secondary_img" src="assets/img/product/product27.jpg" alt="Stuff" />
												</a>
												<div className="product_action">

													<ul>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
													</ul>
												</div>
											</div>
											<div className="product_content">
												<div className="product_name">
													<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
												</div>
												<div className="product_meta">
													<div className="product_price">
														<span className="current_price">$65.00</span>
													</div>
													<div className="product_ratting">
														<ul>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>
									<div className="col-lg-3">
										<div className="single_product">
											<div className="product_thumb">
												<a href="single-product.html">
													<img className="primary_img" src="assets/img/product/product24.jpg" alt="Product" />
													<img className="secondary_img" src="assets/img/product/product25.jpg" alt="Stuff" />
												</a>
												<div className="sale_percent">
													<span>-4%</span>
												</div>
												<div className="product_action">

													<ul>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
													</ul>
												</div>
											</div>
											<div className="product_content">
												<div className="product_name">
													<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
												</div>
												<div className="product_meta">
													<div className="product_price">
														<span className="current_price">$65.00</span>
													</div>
													<div className="product_ratting">
														<ul>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>
									<div className="col-lg-3">
										<div className="single_product">
											<div className="product_thumb">
												<a href="single-product.html">
													<img className="primary_img" src="assets/img/product/product22.jpg" alt="Product" />
													<img className="secondary_img" src="assets/img/product/product23.jpg" alt="Stuff" />
												</a>
												<div className="product_action">

													<ul>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
													</ul>
												</div>
											</div>
											<div className="product_content">
												<div className="product_name">
													<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
												</div>
												<div className="product_meta">
													<div className="product_price">
														<span className="current_price">$65.00</span>
													</div>
													<div className="product_ratting">
														<ul>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>
									<div className="col-lg-3">
										<div className="single_product">
											<div className="product_thumb">
												<a href="single-product.html">
													<img className="primary_img" src="assets/img/product/product20.jpg" alt="Product" />
													<img className="secondary_img" src="assets/img/product/product21.jpg" alt="Stuff" />
												</a>
												<div className="product_action">

													<ul>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
													</ul>
												</div>
											</div>
											<div className="product_content">
												<div className="product_name">
													<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
												</div>
												<div className="product_meta">
													<div className="product_price">
														<span className="current_price">$65.00</span>
													</div>
													<div className="product_ratting">
														<ul>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>
									<div className="col-lg-3">
										<div className="single_product">
											<div className="product_thumb">
												<a href="single-product.html">
													<img className="primary_img" src="assets/img/product/product19.jpg" alt="Product" />
													<img className="secondary_img" src="assets/img/product/product18.jpg" alt="Stuff" />
												</a>
												<div className="product_action">

													<ul>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
													</ul>
												</div>
											</div>
											<div className="product_content">
												<div className="product_name">
													<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
												</div>
												<div className="product_meta">
													<div className="product_price">
														<span className="current_price">$65.00</span>
													</div>
													<div className="product_ratting">
														<ul>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--new product start-->  */}

			{/* <!--banner section area-->  */}
			<div className="banner_section_bg">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-7 col-md-8">
							<div className="banner_bg_content">
								<h3>A Single Step Skin Perfector!</h3>
								<h2>Makeup melt</h2>
								<h1>cleansing balm</h1>
								<a href="index.html">Shop collection now!</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--banner section end-->  */}
			{/* <!--new product start-->  */}
			<div className="new_product_area">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-2 col-md-2">
							<div className="product_section_title">
								<h3>Our <br /> <strong>2018</strong> <br />Trend  <br /> products</h3>
							</div>
						</div>
						<div className="col-lg-10 col-md-10">
							<div className="tab-content tab_four tab_five">
								<div className="product_active owl-carousel">
									<div className="col-lg-3">
										<div className="single_product">
											<div className="product_thumb">
												<a href="single-product.html">
													<img className="primary_img" src="assets/img/product/product20.jpg" alt="Product" />
													<img className="secondary_img" src="assets/img/product/product21.jpg" alt="Stuff" />
												</a>
												<div className="sale_percent">
													<span>-4%</span>
												</div>
												<div className="product_action">

													<ul>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
													</ul>
												</div>
											</div>
											<div className="product_content">
												<div className="product_name">
													<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
												</div>
												<div className="product_meta">
													<div className="product_price">
														<span className="current_price">$65.00</span>
													</div>
													<div className="product_ratting">
														<ul>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>
									<div className="col-lg-3">
										<div className="single_product">
											<div className="product_thumb">
												<a href="single-product.html">
													<img className="primary_img" src="assets/img/product/product17.jpg" alt="Product" />
													<img className="secondary_img" src="assets/img/product/product28.jpg" alt="Stuff" />
												</a>
												<div className="product_action">

													<ul>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
													</ul>
												</div>
											</div>
											<div className="product_content">
												<div className="product_name">
													<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
												</div>
												<div className="product_meta">
													<div className="product_price">
														<span className="current_price">$65.00</span>
													</div>
													<div className="product_ratting">
														<ul>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>
									<div className="col-lg-3">
										<div className="single_product">
											<div className="product_thumb">
												<a href="single-product.html">
													<img className="primary_img" src="assets/img/product/product23.jpg" alt="Product" />
													<img className="secondary_img" src="assets/img/product/product24.jpg" alt="Stuff" />
												</a>
												<div className="product_action">

													<ul>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
													</ul>
												</div>
											</div>
											<div className="product_content">
												<div className="product_name">
													<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
												</div>
												<div className="product_meta">
													<div className="product_price">
														<span className="current_price">$65.00</span>
													</div>
													<div className="product_ratting">
														<ul>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>
									<div className="col-lg-3">
										<div className="single_product">
											<div className="product_thumb">
												<a href="single-product.html">
													<img className="primary_img" src="assets/img/product/product21.jpg" alt="Product" />
													<img className="secondary_img" src="assets/img/product/product22.jpg" alt="Stuff" />
												</a>
												<div className="product_action">

													<ul>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
													</ul>
												</div>
											</div>
											<div className="product_content">
												<div className="product_name">
													<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
												</div>
												<div className="product_meta">
													<div className="product_price">
														<span className="current_price">$65.00</span>
													</div>
													<div className="product_ratting">
														<ul>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>
									<div className="col-lg-3">
										<div className="single_product">
											<div className="product_thumb">
												<a href="single-product.html">
													<img className="primary_img" src="assets/img/product/product19.jpg" alt="Product" />
													<img className="secondary_img" src="assets/img/product/product20.jpg" alt="Stuff" />
												</a>
												<div className="product_action">

													<ul>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
													</ul>
												</div>
											</div>
											<div className="product_content">
												<div className="product_name">
													<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
												</div>
												<div className="product_meta">
													<div className="product_price">
														<span className="current_price">$65.00</span>
													</div>
													<div className="product_ratting">
														<ul>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>
									<div className="col-lg-3">
										<div className="single_product">
											<div className="product_thumb">
												<a href="single-product.html">
													<img className="primary_img" src="assets/img/product/product18.jpg" alt="Product" />
													<img className="secondary_img" src="assets/img/product/product17.jpg" alt="Stuff" />
												</a>
												<div className="product_action">

													<ul>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="add to cart">+ add to cart</a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i> </a></li>
														<li><a href="index.html" data-toggle="modal" data-target="#modal_box" data-placement="top" title="Quick View"><i className="fa fa-eye"></i> </a></li>
													</ul>
												</div>
											</div>
											<div className="product_content">
												<div className="product_name">
													<h2><a href="single-product.html">Aesthetica Cosmetics</a></h2>
												</div>
												<div className="product_meta">
													<div className="product_price">
														<span className="current_price">$65.00</span>
													</div>
													<div className="product_ratting">
														<ul>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
															<li><a href="index.html"><i className="fa fa-star"></i> </a></li>
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--new product start-->  */}

			{/* <!--newsletter area start--> */}
			<div className="newsletter_area news_four">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="newsletter_content">
								<h2>Get <span>10%</span> Discount</h2>
								<p>Subscribe to the Beeta mailing list to receive an update on special<br /> promotions, new products, other discount information and more</p>
								<form action="#">
									<input placeholder="Your email address" type="text" />
									<button type="submit">Subscribe</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--newsletter area end--> */}

			{/* <!--blog area start--> */}
			<div className="blog_area blog_four">
				<div className="container">
					<div className="section_title">
						<div className="row">
							<div className="col-12">
								<h2>From Our Blog</h2>
								<p>Consequat magna massa vel suspendisse morbi aliquam faucibus ligula ante ipsum ac nulla.</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="blog_active owl-carousel">
							<div className="col-lg-4">
								<div className="single_blog">
									<div className="blog_thumb">
										<a href="blog-details.html"><img src="assets/img/blog/blog6.jpg" alt="Stuff" /></a>
									</div>
									<div className="blog_content">
										<div className="blog_title">
											<h3><a href="blog-details.html">Blog post</a></h3>
										</div>
										<div className="blog_meta">
											<i className="fa-calendar fa"></i>
											<span className="post_date">october 10, 2018</span>
											<span className="comment"> <a href="index.html">3  comments</a></span>
										</div>
										<div className="blog_desc">
											<p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="single_blog">
									<div className="blog_thumb">
										<a href="blog-details.html"><img src="assets/img/blog/blog7.jpg" alt="Stuff" /></a>
									</div>
									<div className="blog_content">
										<div className="blog_title">
											<h3><a href="blog-details.html">Post with Gallery</a></h3>
										</div>
										<div className="blog_meta">
											<i className="fa-calendar fa"></i>
											<span className="post_date">october 10, 2018</span>
											<span className="comment"> <a href="index.html">3  comments</a></span>
										</div>
										<div className="blog_desc">
											<p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="single_blog">
									<div className="blog_thumb">
										<a href="blog-details.html"><img src="assets/img/blog/blog8.jpg" alt="Stuff" /></a>
									</div>
									<div className="blog_content">
										<div className="blog_title">
											<h3><a href="blog-details.html">Post with Audio</a></h3>
										</div>
										<div className="blog_meta">
											<i className="fa-calendar fa"></i>
											<span className="post_date">october 10, 2018</span>
											<span className="comment"> <a href="index.html">3  comments</a></span>
										</div>
										<div className="blog_desc">
											<p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="single_blog">
									<div className="blog_thumb">
										<a href="blog-details.html"><img src="assets/img/blog/blog9.jpg" alt="Stuff" /></a>
									</div>
									<div className="blog_content">
										<div className="blog_title">
											<h3><a href="blog-details.html">Post with Video</a></h3>
										</div>
										<div className="blog_meta">
											<i className="fa-calendar fa"></i>
											<span className="post_date">october 10, 2018</span>
											<span className="comment"> <a href="index.html">3  comments</a></span>
										</div>
										<div className="blog_desc">
											<p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="single_blog">
									<div className="blog_thumb">
										<a href="blog-details.html"><img src="assets/img/blog/blog7.jpg" alt="Stuff" /></a>
									</div>
									<div className="blog_content">
										<div className="blog_title">
											<h3><a href="blog-details.html">Maecenas ultricies</a></h3>
										</div>
										<div className="blog_meta">
											<i className="fa-calendar fa"></i>
											<span className="post_date">october 10, 2018</span>
											<span className="comment"> <a href="index.html">3  comments</a></span>
										</div>
										<div className="blog_desc">
											<p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--blog area end--> */}

			{/* <!--shipping area start--> */}
			<div className="brand_area">
				<div className="container">
					<div className="row">
						<div className="brand_active owl-carousel">
							<div className="col-lg-3">
								<div className="single_brand">
									<a href="index.html"><img src="assets/img/brand/brand1.jpg" alt="Stuff" /></a>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="single_brand">
									<a href="index.html"><img src="assets/img/brand/brand2.jpg" alt="Stuff" /></a>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="single_brand">
									<a href="index.html"><img src="assets/img/brand/brand3.jpg" alt="Stuff" /></a>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="single_brand">
									<a href="index.html"><img src="assets/img/brand/brand4.jpg" alt="Stuff" /></a>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="single_brand">
									<a href="index.html"><img src="assets/img/brand/brand5.jpg" alt="Stuff" /></a>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="single_brand">
									<a href="index.html"><img src="assets/img/brand/brand3.jpg" alt="Stuff" /></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--shipping area end--> */}
			{/* <!--banner section area-->  */}
			<div className="banner_section banner_fullwidth">
				<div className="container-fluid p-0">
					<div className="row no-gutters">
						<div className="col-lg-4 col-md-4">
							<div className="single_banner">
								<a href="index.html"><img src="assets/img/banner/banner17.jpg" alt="Stuff" /></a>
							</div>
						</div>
						<div className="col-lg-4 col-md-4">
							<div className="single_banner">
								<a href="index.html"><img src="assets/img/banner/banner18.jpg" alt="Stuff" /></a>
							</div>
						</div>
						<div className="col-lg-4 col-md-4">
							<div className="single_banner">
								<a href="index.html"><img src="assets/img/banner/banner19.jpg" alt="Stuff" /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--banner section end--> */}

			{/* <!--footer area start--> */}
			<Footer />
			{/* <!--footer area end--> */}

			{/* <!-- modal area start -->  */}
			<div className="modal fade" id="modal_box" tabIndex="-1" role="dialog" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<div className="modal_body">
							<div className="container">
								<div className="row">
									<div className="col-lg-5 col-md-5 col-sm-12">
										<div className="modal_tab">
											<div className="tab-content  product-details-large">
												<div className="tab-pane fade show active" id="tab1" role="tabpanel" >
													<div className="modal_tab_img">
														<a href="index.html"><img src="assets/img/cart/cart4.jpg" alt="Stuff" /></a>
													</div>
												</div>
												<div className="tab-pane fade" id="tab2" role="tabpanel">
													<div className="modal_tab_img">
														<a href="index.html"><img src="assets/img/cart/cart3.jpg" alt="Stuff" /></a>
													</div>
												</div>
												<div className="tab-pane fade" id="tab3" role="tabpanel">
													<div className="modal_tab_img">
														<a href="index.html"><img src="assets/img/cart/cart5.jpg" alt="Stuff" /></a>
													</div>
												</div>
											</div>
											<div className="modal_tab_button">
												<ul className="nav product_navactive owl-carousel" role="tablist">
													<li >
														<a className="nav-link active" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="false"><img src="assets/img/cart/cart4.jpg" alt="Stuff" /></a>
													</li>
													<li>
														<a className="nav-link" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false"><img src="assets/img/cart/cart3.jpg" alt="Stuff" /></a>
													</li>
													<li>
														<a className="nav-link button_three" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false"><img src="assets/img/cart/cart5.jpg" alt="Stuff" /></a>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-lg-7 col-md-7 col-sm-12">
										<div className="modal_right">
											<div className="modal_title mb-10">
												<h2>Handbag feugiat</h2>
											</div>
											<div className="modal_price mb-10">
												<span className="new_price">$64.99</span>
												<span className="old_price" >$78.99</span>
											</div>
											<div className="modal_content mb-10">
												<p>Short-sleeved blouse with feminine draped sleeve detail.</p>
											</div>
											<div className="modal_size mb-15">
												<h2>size</h2>
												<ul>
													<li><a href="index.html">s</a></li>
													<li><a href="index.html">m</a></li>
													<li><a href="index.html">l</a></li>
													<li><a href="index.html">xl</a></li>
													<li><a href="index.html">xxl</a></li>
												</ul>
											</div>
											<div className="modal_add_to_cart mb-15">
												<form action="#">
													<input min="0" max="100" step="2" defaultValue="1" type="number" />
													<button type="submit">add to cart</button>
												</form>
											</div>
											<div className="modal_description mb-15">
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
											</div>
											<div className="modal_social">
												<h2>Share this product</h2>
												<ul>
													<li><a href="index.html"><i className="fa fa-facebook"></i> </a></li>
													<li><a href="index.html"><i className="fa fa-twitter"></i> </a></li>
													<li><a href="index.html"><i className="fa fa-pinterest"></i> </a></li>
													<li><a href="index.html"><i className="fa fa-google-plus"></i> </a></li>
													<li><a href="index.html"><i className="fa fa-linkedin"></i> </a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- modal area end -->  */}
		</div>
	);
}

export default App;
