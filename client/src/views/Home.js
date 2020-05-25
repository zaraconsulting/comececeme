import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* <!-- MAIN SLIDER : begin --> */}
                <div id="main-slider" data-interval="8000">
                    <div className="slide-list">

                        {/* <!-- SLIDE 1 : begin --> */}
                        <div className="slide slide-1" data-label="Welcome to COMECECEME" style={{ "backgroundImage": "url( 'images/slide_01.jpg' )" }}>
                            <div className="slide-bg">
                                <div className="container">
                                    <div className="slide-inner">
                                        <div className="slide-content various-content textalign-left valign-middle">

                                            <h1>Welcome<br />to COMECECEME!</h1>
                                            <h3>HTML Template for Beauty Salons,<br />Hairdressers, Wellness or Spa</h3>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- SLIDE 1 : end --> */}

                        {/* <!-- SLIDE 2 : begin --> */}
                        <div className="slide slide-2" data-label="20% off All Hair" style={{"backgroundImage": "url( 'images/slide_02.jpg' )"}}>
                            <div className="slide-bg">
                                <div className="container">
                                    <div className="slide-inner">
                                        <div className="slide-content various-content textalign-right valign-middle">

                                            <h2>20% Off<br />All Hair</h2>
                                            <h3>This Friday Only!<br /><a href="ajax/reservation-form.html" className="m-open-ajax-modal">Make a Reservation</a></h3>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- SLIDE 2 : end --> */}

                        {/* <!-- SLIDE 3 : begin --> */}
                        <div className="slide slide-3" data-label="E-store Launched" style={{"backgroundImage": "url( 'images/slide_03.jpg' )"}}>
                            <div className="slide-bg">
                                <div className="container">
                                    <div className="slide-inner">
                                        <div className="slide-content various-content textalign-left valign-middle">

                                            <h2>Eshop<br />Launched</h2>
                                            <h3><a href="shop-list.html">Take a Look</a> at Our Products</h3>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- SLIDE 3 : end --> */}

                    </div>
                </div>
                {/* <!-- MAIN SLIDER : end --> */}

                {/* <!-- CORE : begin --> */}
                <div id="core">

                    {/* <!-- PAGE CONTENT : begin --> */}
                    <div id="page-content">
                        <div className="various-content">

                            {/* <!-- SERVICES SECTION : begin --> */}
                            <section>

                                {/* <!-- SECTION HEADER : begin --> */}
                                <header>
                                    <div className="container">
                                        <h2>Our Services</h2>
                                        <p className="subtitle">We offer a wide range of beauty services</p>
                                        <p className="more">
                                            <a href="services.html" className="c-button m-type-2">See all Services</a>
                                        </p>
                                    </div>
                                </header>
                                {/* <!-- SECTION HEADER : end --> */}

                                {/* <!-- SERVICE LIST : begin --> */}
                                <div className="c-service-list m-paginated" data-items="4" data-items-desktop="4" data-items-desktop-small="3" data-items-tablet="2" data-items-mobile="1">
                                    <div className="container">
                                        <div className="service-list-inner">
                                            <div className="service-list-item">

                                                {/* <!-- SERVICE : begin --> */}
                                                <div className="c-service">
                                                    <div className="service-image">
                                                        <a href="services.html#cosmetics">
                                                            <img src="images/service_01.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <h3 className="service-title"><a href="services.html#cosmetics">Cosmetics</a></h3>
                                                    <div className="service-description">
                                                        <p>Facials, Eyebrow &amp; Eyelashes, Microdermabrasion, Acne Treatments, Anti-Aging</p>
                                                    </div>
                                                </div>
                                                {/* <!-- SERVICE : end --> */}

                                            </div>
                                            <div className="service-list-item">

                                                {/* <!-- SERVICE : begin --> */}
                                                <div className="c-service">
                                                    <div className="service-image">
                                                        <a href="services.html#hairdressing">
                                                            <img src="images/service_02.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <h3 className="service-title">
                                                        <a href="services.html#hairdressing">Hairdressing</a>
                                                    </h3>
                                                    <div className="service-description">
                                                        <p>Wash, Cut &amp; Finish, Blow Dries, Hair Colouring &amp; Highlights, Evening Hairdressing</p>
                                                    </div>
                                                </div>
                                                {/* <!-- SERVICE : end --> */}

                                            </div>
                                            <div className="service-list-item">

                                                {/* <!-- SERVICE : begin --> */}
                                                <div className="c-service">
                                                    <div className="service-image">
                                                        <a href="services.html#body-treatments">
                                                            <img src="images/service_03.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <h3 className="service-title"><a href="services.html#body-treatments">Body Treatments</a></h3>
                                                    <div className="service-description">
                                                        <p>Body Wraps, Body Exfoliation Treatments, Cellulite Treatments, Lipo Laser, Depilation</p>
                                                    </div>
                                                </div>
                                                {/* <!-- SERVICE : end --> */}

                                            </div>
                                            <div className="service-list-item">

                                                {/* <!-- SERVICE : begin --> */}
                                                <div className="c-service">
                                                    <div className="service-image">
                                                        <a href="services.html#Hair">
                                                            <img src="images/service_04.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <h3 className="service-title"><a href="services.html#Hair">Hair</a></h3>
                                                    <div className="service-description">
                                                        <p>Exotic Hair, Swedish Massage, Hot Stone Massage, Aromatherapy Massage</p>
                                                    </div>
                                                </div>
                                                {/* <!-- SERVICE : end --> */}

                                            </div>
                                            <div className="service-list-item">

                                                {/* <!-- SERVICE : begin --> */}
                                                <div className="c-service">
                                                    <div className="service-image">
                                                        <a href="services.html">
                                                            <img src="images/service_05.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <h3 className="service-title"><a href="services.html">Nails</a></h3>
                                                    <div className="service-description">
                                                        <p>Nail Art, Paraffin Wax Treatment, Shellac Manicure, Gel Nails, French Manicure</p>
                                                    </div>
                                                </div>
                                                {/* <!-- SERVICE : end --> */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- SERVICE LIST : end --> */}

                            </section>
                            {/* <!-- SERVICES SECTION : end --> */}

                            {/* <!-- GALLERY SECTION : begin --> */}
                            <section>

                                {/* <!-- SECTION HEADER : begin --> */}
                                <header>
                                    <div className="container">
                                        <h2>Gallery</h2>
                                        <p className="subtitle">See how it looks inside our studio</p>
                                        <p className="more"><a href="gallery.html" className="c-button m-type-2">Enter Gallery</a></p>
                                    </div>
                                </header>
                                {/* <!-- SECTION HEADER : end --> */}

                                {/* <!-- GALLERY : begin --> */}
                                <div className="c-gallery m-paginated" data-items="4" data-items-desktop="4" data-items-desktop-small="3" data-items-tablet="2" data-items-mobile="1">
                                    <div className="thumb-list">
                                        <div className="thumb">
                                            <a href="images/gallery_01.jpg" className="lightbox" data-lightbox-group="gallery">
                                                <img src="images/gallery_01.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="thumb">
                                            <a href="images/gallery_02.jpg" className="lightbox" data-lightbox-group="gallery">
                                                <img src="images/gallery_02.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="thumb">
                                            <a href="images/gallery_03.jpg" className="lightbox" data-lightbox-group="gallery">
                                                <img src="images/gallery_03.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="thumb">
                                            <a href="images/gallery_04.jpg" className="lightbox" data-lightbox-group="gallery">
                                                <img src="images/gallery_04.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="thumb">
                                            <a href="images/gallery_05.jpg" className="lightbox" data-lightbox-group="gallery">
                                                <img src="images/gallery_05.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="thumb">
                                            <a href="images/gallery_06.jpg" className="lightbox" data-lightbox-group="gallery">
                                                <img src="images/gallery_06.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="thumb">
                                            <a href="images/gallery_07.jpg" className="lightbox" data-lightbox-group="gallery">
                                                <img src="images/gallery_07.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="thumb">
                                            <a href="images/gallery_08.jpg" className="lightbox" data-lightbox-group="gallery">
                                                <img src="images/gallery_08.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- GALLERY : end --> */}

                            </section>
                            {/* <!-- GALLERY SECTION : end --> */}

                            {/* <!-- BLOG SECTION : begin --> */}
                            <section>

                                {/* <!-- SECTION HEADER : begin --> */}
                                <header>
                                    <div className="container">
                                        <h2>Blog</h2>
                                        <p className="subtitle">Read about latest health trends</p>
                                        <p className="more"><a href="blog.html" className="c-button m-type-2">Read Blog</a></p>
                                    </div>
                                </header>
                                {/* <!-- SECTION HEADER : end --> */}

                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-3">

                                            {/* <!-- ARTICLE : begin --> */}
                                            <article className="c-article">
                                                <div className="article-image">
                                                    <a href="blog-image.html">
                                                        <img src="images/article_thumb_01.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <h3 className="article-title"><a href="blog-image.html">Far far away, behind the word mountains</a></h3>
                                            </article>
                                            {/* <!-- ARTICLE : end --> */}

                                        </div>
                                        <div className="col-sm-3">

                                            {/* <!-- ARTICLE : begin --> */}
                                            <article className="c-article">
                                                <div className="article-image">
                                                    <a href="blog-image.html">
                                                        <img src="images/article_thumb_02.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <h3 className="article-title">
                                                    <a href="blog-image.html">The Big Oxmox advised her not to do so</a>
                                                </h3>
                                            </article>
                                            {/* <!-- ARTICLE : end --> */}

                                        </div>
                                        <div className="col-sm-3">

                                            {/* <!-- ARTICLE : begin --> */}
                                            <article className="c-article">
                                                <div className="article-image">
                                                    <a href="blog-image.html">
                                                        <img src="images/article_thumb_03.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <h3 className="article-title">
                                                    <a href="blog-image.html">A small river named Duden flows by their place</a>
                                                </h3>
                                            </article>
                                            {/* <!-- ARTICLE : end --> */}

                                        </div>
                                        <div className="col-sm-3">

                                            {/* <!-- ARTICLE : begin --> */}
                                            <article className="c-article">
                                                <div className="article-image">
                                                    <a href="blog-image.html">
                                                        <img src="images/article_thumb_04.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <h3 className="article-title">
                                                    <a href="blog-image.html">Right at the coast of the Semantics</a>
                                                </h3>
                                            </article>
                                            {/* <!-- ARTICLE : end --> */}

                                        </div>
                                    </div>
                                </div>

                            </section>
                            {/* <!-- BLOG SECTION : end --> */}

                            {/* <!-- TESTIMONIALS SECTION : begin --> */}
                            <section>

                                {/* <!-- SECTION HEADER : begin --> */}
                                <header>
                                    <div className="container">
                                        <h2>Our Clients</h2>
                                        <p className="subtitle">Read why they love us so much</p>
                                        <p className="more"><a href="contact.html" className="c-button m-type-2">Become Our Client</a></p>
                                    </div>
                                </header>
                                {/* <!-- SECTION HEADER : end --> */}

                                {/* <!-- TESTIMONIAL LIST : begin --> */}
                                <div className="c-testimonial-list m-paginated">
                                    <div className="container">
                                        <div className="testimonial-list-inner">
                                            <div className="testimonial-list-item">

                                                {/* <!-- TESTIMONIAL : begin --> */}
                                                <div className="c-testimonial m-has-portrait">
                                                    <div className="testimonial-inner">
                                                        <p className="testimonial-portrait">
                                                            <span>
                                                                <img src="images/client_01.jpg" alt="" />
                                                            </span>
                                                        </p>
                                                        <blockquote>
                                                            <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
                                                            <footer><strong>Floor Simons</strong>, Startup CEO</footer>
                                                        </blockquote>
                                                    </div>
                                                </div>
                                                {/* <!-- TESTIMONIAL : end --> */}

                                            </div>
                                            <div className="testimonial-list-item">

                                                {/* <!-- TESTIMONIAL : begin --> */}
                                                <div className="c-testimonial m-has-portrait">
                                                    <div className="testimonial-inner">
                                                        <p className="testimonial-portrait"><span><img src="images/client_02.jpg" alt="" /></span></p>
                                                        <blockquote>
                                                            <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean imperdiet.</p>
                                                            <footer><strong>Nikki Neil</strong>, Blogger</footer>
                                                        </blockquote>
                                                    </div>
                                                </div>
                                                {/* <!-- TESTIMONIAL : end --> */}

                                            </div>
                                            <div className="testimonial-list-item">

                                                {/* <!-- TESTIMONIAL : begin --> */}
                                                <div className="c-testimonial m-has-portrait">
                                                    <div className="testimonial-inner">
                                                        <p className="testimonial-portrait"><span><img src="images/client_03.jpg" alt="" /></span></p>
                                                        <blockquote>
                                                            <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Aenean imperdiet. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Nam quam nunc.</p>
                                                            <footer><strong>Tarja Lee</strong>, Writer</footer>
                                                        </blockquote>
                                                    </div>
                                                </div>
                                                {/* <!-- TESTIMONIAL : end --> */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- TESTIMONIAL LIST : end --> */}

                            </section>
                            {/* <!-- TESTIMONIALS SECTION : end --> */}

                            {/* <!-- BRANDS SECTION : begin --> */}
                            <section>

                                {/* <!-- SECTION HEADER : begin --> */}
                                <header>
                                    <div className="container">
                                        <h2>Our Favourite brands</h2>
                                        <p className="subtitle">We use only the high quality original products</p>
                                    </div>
                                </header>
                                {/* <!-- SECTION HEADER : end --> */}

                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="textalign-center">

                                                {/* <!-- BRAND LOGO : begin --> */}
                                                <a href="/" className="no-border"><img src="images/brand_01.png" alt="" /></a>
                                                {/* <!-- BRAND LOGO : end --> */}

                                            </p>
                                        </div>
                                        <div className="col-sm-3">
                                            <p className="textalign-center">

                                                {/* <!-- BRAND LOGO : begin --> */}
                                                <a href="/" className="no-border"><img src="images/brand_02.png" alt="" /></a>
                                                {/* <!-- BRAND LOGO : end --> */}

                                            </p>
                                        </div>
                                        <div className="col-sm-3">
                                            <p className="textalign-center">

                                                {/* <!-- BRAND LOGO : begin --> */}
                                                <a href="/" className="no-border"><img src="images/brand_03.png" alt="" /></a>
                                                {/* <!-- BRAND LOGO : end --> */}

                                            </p>
                                        </div>
                                        <div className="col-sm-3">
                                            <p className="textalign-center">

                                                {/* <!-- BRAND LOGO : begin --> */}
                                                <a href="/" className="no-border"><img src="images/brand_04.png" alt="" /></a>
                                                {/* <!-- BRAND LOGO : end --> */}

                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </section>
                            {/* <!-- BRANDS SECTION : end --> */}

                        </div>
                    </div>
                    {/* <!-- PAGE CONTENT : end --> */}

                </div>
                {/* <!-- CORE : end --> */}
            </div>
        )
    }
}
