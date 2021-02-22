import $ from 'jquery';


function Home() {
  return (
    <div className="">
        {/* SEARCH POPUP */}
        <div className="search-popup">
            {/* CROSS ICON */}
            <svg className="cross-icon big close-button search-popup-close">
                <use xlinkHref="#svg-cross-big"></use>
            </svg>
            {/* /CROSS ICON */}

            <form method="GET" className="search-popup-form">
                <input type="text" id="search" className="input-line" name="search" placeholder="What are you looking for...?" />
            </form>
            <p className="search-popup-text">Write what you are looking for and press enter to begin your search!</p>
        </div>
        {/* /SEARCH POPUP */}

        {/* INVENTORY BAG PREVIEW */}
        <div className="inventory-bag-preview">
            {/* INVENTORY CLOSE BUTTON */}
            <svg className="inventory-close-button cross-icon big">
                <use xlinkHref="#svg-cross-big"></use>
            </svg>
            {/* /INVENTORY CLOSE BUTTON */}
            <p className="items-in-inventory"><span className="quantity">8</span> items in inventory</p>
            <div className="line-separator"></div>

            {/* INVENTORY ITEMS PREVIEW */}
            <div className="inventory-items-preview">
                {/* INVENTORY ITEM PREVIEW */}
                <div className="inventory-item-preview">
                    {/* PRODUCT PREVIEW */}
                    <div className="product-preview small">
                        {/* PRODUCT PREVIEW IMG WRAP */}
                        <div className="product-preview-img-wrap">
                            {/* PRODUCT PREVIEW IMG */}
                            <a href="product-page.html">
                                <figure className="product-preview-img liquid">
                                    <img src="img/products/01.jpg" alt="product-01" />
                                </figure>
                            </a>
                            {/* /PRODUCT PREVIEW IMG */}
                        </div>
                        {/* /PRODUCT PREVIEW IMG WRAP */}

                        {/* REMOVE */}
                        <div className="bubble-ornament small red remove">
                            {/* CROSS ICON */}
                            <svg className="cross-cb-icon small">
                                <use xlinkHref="#svg-cross-cb-small"></use>
                            </svg>
                            {/* /CROSS ICON */}
                        </div>
                        {/* /REMOVE */}

                        {/* TAG QUANTITY */}
                        <div className="tag-quantity">
                            <p className="tag-quantity-text">x <span className="value">2</span></p>
                        </div>
                        {/* TAG QUANTITY */}

                        {/* PRODUCT PREVIEW TITLE */}
                        <a href="product-page.html" className="product-preview-title">New Funtendo 3XSD - black</a>
                        {/* PRODUCT PREVIEW INFO */}
                        <div className="product-preview-info">
                            {/* RATING ORNAMENT */}
                            <div className="rating-ornament small void yellow">
                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}

                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}

                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}

                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}

                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}
                            </div>
                            {/* /RATING ORNAMENT */}
                        </div>
                        {/* /PRODUCT PREVIEW INFO */}

                        {/* PRODUCT PRICE WRAP */}
                        <div className="product-price-wrap">
                            <p className="product-preview-price current"><span className="currency">$</span>199.00</p>
                        </div>
                        {/* /PRODUCT PRICE WRAP */}
                    </div>
                    {/* /PRODUCT PREVIEW */}
                </div>
                {/* /INVENTORY ITEM PREVIEW */}

                {/* INVENTORY ITEM PREVIEW */}
                <div className="inventory-item-preview">
                    {/* PRODUCT PREVIEW */}
                    <div className="product-preview small">
                        {/* PRODUCT PREVIEW IMG WRAP */}
                        <div className="product-preview-img-wrap">
                            {/* PRODUCT PREVIEW IMG */}
                            <a href="product-page.html">
                                <figure className="product-preview-img liquid">
                                    <img src="img/products/06.jpg" alt="product-06" />
                                </figure>
                            </a>
                            {/* /PRODUCT PREVIEW IMG */}
                        </div>
                        {/* /PRODUCT PREVIEW IMG WRAP */}

                        {/* REMOVE */}
                        <div className="bubble-ornament small red remove">
                            {/* CROSS ICON */}
                            <svg className="cross-cb-icon small">
                                <use xlinkHref="#svg-cross-cb-small"></use>
                            </svg>
                            {/* /CROSS ICON */}
                        </div>
                        {/* /REMOVE */}

                        {/* TAG QUANTITY */}
                        <div className="tag-quantity">
                            <p className="tag-quantity-text">x <span className="value">1</span></p>
                        </div>
                        {/* TAG QUANTITY */}

                        {/* PRODUCT PREVIEW TITLE */}
                        <a href="product-page.html" className="product-preview-title">Crimson red joystick</a>
                        {/* PRODUCT PREVIEW INFO */}
                        <div className="product-preview-info">
                            {/* RATING ORNAMENT */}
                            <div className="rating-ornament small void yellow">
                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}

                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}

                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}

                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon empty">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}

                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon empty">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}
                            </div>
                            {/* /RATING ORNAMENT */}
                        </div>
                        {/* /PRODUCT PREVIEW INFO */}

                        {/* PRODUCT PRICE WRAP */}
                        <div className="product-price-wrap">
                            <p className="product-preview-price current"><span className="currency">$</span>32.50</p>
                        </div>
                        {/* /PRODUCT PRICE WRAP */}
                    </div>
                    {/* /PRODUCT PREVIEW */}
                </div>
                {/* /INVENTORY ITEM PREVIEW */}

                {/* INVENTORY ITEM PREVIEW */}
                <div className="inventory-item-preview">
                    {/* PRODUCT PREVIEW */}
                    <div className="product-preview small">
                        {/* PRODUCT PREVIEW IMG WRAP */}
                        <div className="product-preview-img-wrap">
                            {/* PRODUCT PREVIEW IMG */}
                            <a href="product-page.html">
                                <figure className="product-preview-img liquid">
                                    <img src="img/products/05.jpg" alt="product-05" />
                                </figure>
                            </a>
                            {/* /PRODUCT PREVIEW IMG */}
                        </div>
                        {/* /PRODUCT PREVIEW IMG WRAP */}

                        {/* REMOVE */}
                        <div className="bubble-ornament small red remove">
                            {/* CROSS ICON */}
                            <svg className="cross-cb-icon small">
                                <use xlinkHref="#svg-cross-cb-small"></use>
                            </svg>
                            {/* /CROSS ICON */}
                        </div>
                        {/* /REMOVE */}

                        {/* TAG QUANTITY */}
                        <div className="tag-quantity">
                            <p className="tag-quantity-text">x <span className="value">4</span></p>
                        </div>
                        {/* TAG QUANTITY */}

                        {/* PRODUCT PREVIEW TITLE */}
                        <a href="product-page.html" className="product-preview-title">Carbon black joystick</a>
                        {/* PRODUCT PREVIEW INFO */}
                        <div className="product-preview-info">
                            {/* RATING ORNAMENT */}
                            <div className="rating-ornament small void yellow">
                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}

                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}

                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}

                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}

                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon empty">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}
                            </div>
                            {/* /RATING ORNAMENT */}
                        </div>
                        {/* /PRODUCT PREVIEW INFO */}

                        {/* PRODUCT PRICE WRAP */}
                        <div className="product-price-wrap">
                            <p className="product-preview-price current"><span className="currency">$</span>55.00</p>
                        </div>
                        {/* /PRODUCT PRICE WRAP */}
                    </div>
                    {/* /PRODUCT PREVIEW */}
                </div>
                {/* /INVENTORY ITEM PREVIEW */}

                {/* INVENTORY ITEM PREVIEW */}
                <div className="inventory-item-preview">
                    {/* PRODUCT PREVIEW */}
                    <div className="product-preview small">
                        {/* PRODUCT PREVIEW IMG WRAP */}
                        <div className="product-preview-img-wrap">
                            {/* PRODUCT PREVIEW IMG */}
                            <a href="product-page.html">
                                <figure className="product-preview-img liquid">
                                    <img src="img/products/14.jpg" alt="product-14" />
                                </figure>
                            </a>
                            {/* /PRODUCT PREVIEW IMG */}
                        </div>
                        {/* /PRODUCT PREVIEW IMG WRAP */}

                        {/* REMOVE */}
                        <div className="bubble-ornament small red remove">
                            {/* CROSS ICON */}
                            <svg className="cross-cb-icon small">
                                <use xlinkHref="#svg-cross-cb-small"></use>
                            </svg>
                            {/* /CROSS ICON */}
                        </div>
                        {/* /REMOVE */}

                        {/* TAG QUANTITY */}
                        <div className="tag-quantity">
                            <p className="tag-quantity-text">x <span className="value">1</span></p>
                        </div>
                        {/* TAG QUANTITY */}

                        {/* PRODUCT PREVIEW TITLE */}
                        <a href="product-page.html" className="product-preview-title">Magimons black framed print</a>
                        {/* PRODUCT PREVIEW INFO */}
                        <div className="product-preview-info">
                            {/* RATING ORNAMENT */}
                            <div className="rating-ornament small void yellow">
                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}

                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}

                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}

                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}

                                {/* RATING ORNAMENT ITEM */}
                                <div className="rating-ornament-item">
                                    {/* RATING ORNAMENT ICON */}
                                    <svg className="rating-ornament-icon">
                                        <use xlinkHref="#svg-star"></use>
                                    </svg>
                                </div>
                                {/* /RATING ORNAMENT ITEM */}
                            </div>
                            {/* /RATING ORNAMENT */}
                        </div>
                        {/* /PRODUCT PREVIEW INFO */}

                        {/* PRODUCT PRICE WRAP */}
                        <div className="product-price-wrap">
                            <p className="product-preview-price current"><span className="currency">$</span>20.00</p>
                        </div>
                        {/* /PRODUCT PRICE WRAP */}
                    </div>
                    {/* /PRODUCT PREVIEW */}
                </div>
                {/* /INVENTORY ITEM PREVIEW */}

                {/* INVENTORY ITEM PREVIEW */}
                <div className="inventory-item-preview empty">
                    {/* INVENTORY ICON */}
                    <svg className="inventory-icon">
                        <use xlinkHref="#svg-inventory-light"></use>
                    </svg>
                    {/* /INVENTORY ICON */}
                </div>
                {/* /INVENTORY ITEM PREVIEW */}

                {/* INVENTORY ITEM PREVIEW */}
                <div className="inventory-item-preview empty">
                    {/* INVENTORY ICON */}
                    <svg className="inventory-icon">
                        <use xlinkHref="#svg-inventory-light"></use>
                    </svg>
                    {/* /INVENTORY ICON */}
                </div>
                {/* /INVENTORY ITEM PREVIEW */}

                {/* INVENTORY ITEM PREVIEW */}
                <div className="inventory-item-preview empty">
                    {/* INVENTORY ICON */}
                    <svg className="inventory-icon">
                        <use xlinkHref="#svg-inventory-light"></use>
                    </svg>
                    {/* /INVENTORY ICON */}
                </div>
                {/* /INVENTORY ITEM PREVIEW */}

                {/* INVENTORY ITEM PREVIEW */}
                <div className="inventory-item-preview empty">
                    {/* INVENTORY ICON */}
                    <svg className="inventory-icon">
                        <use xlinkHref="#svg-inventory-light"></use>
                    </svg>
                    {/* /INVENTORY ICON */}
                </div>
                {/* /INVENTORY ITEM PREVIEW */}

                {/* INVENTORY ITEM PREVIEW */}
                <div className="inventory-item-preview empty">
                    {/* INVENTORY ICON */}
                    <svg className="inventory-icon">
                        <use xlinkHref="#svg-inventory-light"></use>
                    </svg>
                    {/* /INVENTORY ICON */}
                </div>
                {/* /INVENTORY ITEM PREVIEW */}

                {/* INVENTORY ITEM PREVIEW */}
                <div className="inventory-item-preview empty">
                    {/* INVENTORY ICON */}
                    <svg className="inventory-icon">
                        <use xlinkHref="#svg-inventory-light"></use>
                    </svg>
                    {/* /INVENTORY ICON */}
                </div>
                {/* /INVENTORY ITEM PREVIEW */}

                {/* INVENTORY ITEM PREVIEW */}
                <div className="inventory-item-preview empty">
                    {/* INVENTORY ICON */}
                    <svg className="inventory-icon">
                        <use xlinkHref="#svg-inventory-light"></use>
                    </svg>
                    {/* /INVENTORY ICON */}
                </div>
                {/* /INVENTORY ITEM PREVIEW */}

                {/* INVENTORY ITEM PREVIEW */}
                <div className="inventory-item-preview empty">
                    {/* INVENTORY ICON */}
                    <svg className="inventory-icon">
                        <use xlinkHref="#svg-inventory-light"></use>
                    </svg>
                    {/* /INVENTORY ICON */}
                </div>
                {/* /INVENTORY ITEM PREVIEW */}
            </div>
            {/* /INVENTORY ITEMS PREVIEW */}

            <div className="line-separator"></div>
            <p className="inventory-subtotal"><span className="subtotal-text">Inventory subtotal:</span> <span className="subtotal-value"><span className="currency">$</span><span className="value">670.50</span></span></p>
            <div className="line-separator"></div>
            {/* INVENTORY ACTIONS */}
            <div className="inventory-actions">
                <a href="inventory-bag.html" className="button full blue">Go to the inventory bag</a>
                <a href="checkout.html" className="button full violet">Proceed to checkout</a>
            </div>
            {/* /INVENTORY ACTIONS */}
        </div>
        {/* /INVENTORY BAG PREVIEW */}

        {/* MOBILE MENU WRAP */}
        <div className="mobile-menu-wrap">
            {/* CROSS ICON */}
            <svg className="cross-icon big mobile-menu-close">
                <use xlinkHref="#svg-cross-big"></use>
            </svg>
            {/* /CROSS ICON */}

            {/* SEARCH POPUP OPEN */}
            <svg className="search-popup-open search-icon">
                <use xlinkHref="#svg-search"></use>
            </svg>
            {/* /SEARCH POPUP OPEN */}

            {/* LOGO IMG */}
            <figure className="logo-img">
                <img src="img/brand/logo.png" alt="Logo" />
            </figure>
            {/* /LOGO IMG */}

            {/* MOBILE MENU */}
            <ul className="mobile-menu">
                {/* MOBILE MENU ITEM */}
                <li className="mobile-menu-item">
                    <a href="index.html" className="mobile-menu-item-link">Home</a>
                </li>
                {/* /MOBILE MENU ITEM */}

                {/* MOBILE MENU ITEM */}
                <li className="mobile-menu-item">
                    <p className="mobile-menu-item-link pd-dropdown-handler">eSports</p>
                    {/* ARROW ICON */}
                    <svg className="arrow-icon medium">
                        <use xlinkHref="#svg-arrow-medium"></use>
                    </svg>
                    {/* /ARROW ICON */}

                    {/* MOBILE DROPDOWN */}
                    <ul className="mobile-dropdown pd-dropdown">
                        {/* MOBILE DROPDOWN ITEM */}
                        <li className="mobile-dropdown-item">
                            <p className="mobile-dropdown-item-link pd-dropdown-handler">Main Pages</p>
                            {/* ARROW ICON */}
                            <svg className="arrow-icon medium">
                                <use xlinkHref="#svg-arrow-medium"></use>
                            </svg>
                            {/* /ARROW ICON */}

                            {/* MOBILE DROPDOWN */}
                            <ul className="mobile-dropdown pd-dropdown">
                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="esports-home.html" className="mobile-dropdown-item-link">eSports Home</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="esports-news.html" className="mobile-dropdown-item-link">eSports News</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="esports-post.html" className="mobile-dropdown-item-link">eSports Post Page</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="esports-tournament.html" className="mobile-dropdown-item-link">Tournament Page</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}
                            </ul>
                            {/* /MOBILE DROPDOWN */}
                        </li>
                        {/* /MOBILE DROPDOWN ITEM */}

                        {/* MOBILE DROPDOWN ITEM */}
                        <li className="mobile-dropdown-item">
                            <p className="mobile-dropdown-item-link pd-dropdown-handler">Match Overviews</p>
                            {/* ARROW ICON */}
                            <svg className="arrow-icon medium">
                                <use xlinkHref="#svg-arrow-medium"></use>
                            </svg>
                            {/* /ARROW ICON */}

                            {/* MOBILE DROPDOWN */}
                            <ul className="mobile-dropdown pd-dropdown">
                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="esports-match-overview-v1.html" className="mobile-dropdown-item-link">Match Overview V1</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="esports-match-overview-v2.html" className="mobile-dropdown-item-link">Match Overview V2</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="esports-match-overview-v3.html" className="mobile-dropdown-item-link">Match Overview V3</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="esports-match-overview-v4.html" className="mobile-dropdown-item-link">Match Overview V4</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}
                            </ul>
                            {/* /MOBILE DROPDOWN */}
                        </li>
                        {/* /MOBILE DROPDOWN ITEM */}

                        {/* MOBILE DROPDOWN ITEM */}
                        <li className="mobile-dropdown-item">
                            <p className="mobile-dropdown-item-link pd-dropdown-handler">Teams &amp; Players</p>
                            {/* ARROW ICON */}
                            <svg className="arrow-icon medium">
                                <use xlinkHref="#svg-arrow-medium"></use>
                            </svg>
                            {/* /ARROW ICON */}

                            {/* MOBILE DROPDOWN */}
                            <ul className="mobile-dropdown pd-dropdown">
                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="esports-team.html" className="mobile-dropdown-item-link">eSports Team Page</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="esports-player.html" className="mobile-dropdown-item-link">eSports Player Page</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="esports-streamers.html" className="mobile-dropdown-item-link">Streamers Page</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="esports-calendar.html" className="mobile-dropdown-item-link">Scores with Calendar</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}
                            </ul>
                            {/* /MOBILE DROPDOWN */}
                        </li>
                        {/* /MOBILE DROPDOWN ITEM */}

                        {/* MOBILE DROPDOWN ITEM */}
                        <li className="mobile-dropdown-item">
                            <p className="mobile-dropdown-item-link pd-dropdown-handler">eSports Widgets</p>
                            {/* ARROW ICON */}
                            <svg className="arrow-icon medium">
                                <use xlinkHref="#svg-arrow-medium"></use>
                            </svg>
                            {/* /ARROW ICON */}

                            {/* MOBILE DROPDOWN */}
                            <ul className="mobile-dropdown pd-dropdown">
                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="esports-widgets-v1.html" className="mobile-dropdown-item-link">Widgets Page 01</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="esports-widgets-v2.html" className="mobile-dropdown-item-link">Widgets Page 02</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="esports-widgets-v3.html" className="mobile-dropdown-item-link">Widgets Page 03</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}
                            </ul>
                            {/* /MOBILE DROPDOWN */}
                        </li>
                        {/* /MOBILE DROPDOWN ITEM */}
                    </ul>
                    {/* /MOBILE DROPDOWN */}
                </li>
                {/* /MOBILE MENU ITEM */}

                {/* MOBILE MENU ITEM */}
                <li className="mobile-menu-item">
                    <a href="news-v1.html" className="mobile-menu-item-link">News</a>
                </li>
                {/* /MOBILE MENU ITEM */}

                {/* MOBILE MENU ITEM */}
                <li className="mobile-menu-item">
                    <a href="news-v2.html" className="mobile-menu-item-link">Reviews</a>
                </li>
                {/* /MOBILE MENU ITEM */}

                {/* MOBILE MENU ITEM */}
                <li className="mobile-menu-item">
                    <p className="mobile-menu-item-link pd-dropdown-handler">Features</p>
                    {/* ARROW ICON */}
                    <svg className="arrow-icon medium">
                        <use xlinkHref="#svg-arrow-medium"></use>
                    </svg>
                    {/* /ARROW ICON */}

                    {/* MOBILE DROPDOWN */}
                    <ul className="mobile-dropdown pd-dropdown">
                        {/* MOBILE DROPDOWN ITEM */}
                        <li className="mobile-dropdown-item">
                            <p className="mobile-dropdown-item-link pd-dropdown-handler">Pixel Main Features</p>
                            {/* ARROW ICON */}
                            <svg className="arrow-icon medium">
                                <use xlinkHref="#svg-arrow-medium"></use>
                            </svg>
                            {/* /ARROW ICON */}

                            {/* MOBILE DROPDOWN */}
                            <ul className="mobile-dropdown pd-dropdown">
                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="index.html" className="mobile-dropdown-item-link">Main Homepage</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="home-v2.html" className="mobile-dropdown-item-link">Homepage V2</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="home-v3.html" className="mobile-dropdown-item-link">Homepage V3</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="news-v1.html" className="mobile-dropdown-item-link">News Page V1</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="news-v2.html" className="mobile-dropdown-item-link">News Page V2</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="news-v3.html" className="mobile-dropdown-item-link">News Page V3</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="news-v4.html" className="mobile-dropdown-item-link">News Page V4</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="post-v1.html" className="mobile-dropdown-item-link">Post Page V1</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="post-v2.html" className="mobile-dropdown-item-link">Post Page V2</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="post-v3.html" className="mobile-dropdown-item-link">Post Page V3</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="post-v4.html" className="mobile-dropdown-item-link">Post Page V4</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="browse-videos.html" className="mobile-dropdown-item-link">Browse Videos</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="post-video.html" className="mobile-dropdown-item-link">Video Post Page</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="search-results.html" className="mobile-dropdown-item-link">Search Results</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="calendar.html" className="mobile-dropdown-item-link">Events Calendar</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="event.html" className="mobile-dropdown-item-link">Open Event</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="404.html" className="mobile-dropdown-item-link">404 Error Page</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="shortcodes.html" className="mobile-dropdown-item-link">Shortcodes</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="menu-dropdowns.html" className="mobile-dropdown-item-link">Menu &amp; Dropdowns</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="headers-dividers.html" className="mobile-dropdown-item-link">Headers &amp; Dividers</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="pixel-popups.html" className="mobile-dropdown-item-link">Pixel Popups</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}
                            </ul>
                            {/* /MOBILE DROPDOWN */}
                        </li>
                        {/* /MOBILE DROPDOWN ITEM */}

                        {/* MOBILE DROPDOWN ITEM */}
                        <li className="mobile-dropdown-item">
                            <p className="mobile-dropdown-item-link pd-dropdown-handler">Account &amp; Company</p>
                            {/* ARROW ICON */}
                            <svg className="arrow-icon medium">
                                <use xlinkHref="#svg-arrow-medium"></use>
                            </svg>
                            {/* /ARROW ICON */}

                            {/* MOBILE DROPDOWN */}
                            <ul className="mobile-dropdown pd-dropdown">
                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="login-register.html" className="mobile-dropdown-item-link">Login &amp; Register</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="login-register-popups.html" className="mobile-dropdown-item-link">Login &amp; Register Popups</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="account-settings.html" className="mobile-dropdown-item-link">Account Settings</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="orders-history.html" className="mobile-dropdown-item-link">Account Orders</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="faq.html" className="mobile-dropdown-item-link">FAQs Page</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="contact.html" className="mobile-dropdown-item-link">Contact Page</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="sponsors.html" className="mobile-dropdown-item-link">Sponsors Page</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}
                            </ul>
                            {/* /MOBILE DROPDOWN */}
                        </li>
                        {/* /MOBILE DROPDOWN ITEM */}

                        {/* MOBILE DROPDOWN ITEM */}
                        <li className="mobile-dropdown-item">
                            <p className="mobile-dropdown-item-link pd-dropdown-handler">Pixel Forums</p>
                            {/* ARROW ICON */}
                            <svg className="arrow-icon medium">
                                <use xlinkHref="#svg-arrow-medium"></use>
                            </svg>
                            {/* /ARROW ICON */}

                            {/* MOBILE DROPDOWN */}
                            <ul className="mobile-dropdown pd-dropdown">
                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="forum.html" className="mobile-dropdown-item-link">Main Page</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="forum-categories.html" className="mobile-dropdown-item-link">Category Page</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="topic.html" className="mobile-dropdown-item-link">Main Topic</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="forum-badges.html" className="mobile-dropdown-item-link">Badges Big &amp; Small</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="profile-summary.html" className="mobile-dropdown-item-link">Profile Summary</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="profile-activity.html" className="mobile-dropdown-item-link">Profile Activity</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="profile-notifications.html" className="mobile-dropdown-item-link">Profile Notifications</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="profile-messages.html" className="mobile-dropdown-item-link">Profile Messages</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="profile-badges.html" className="mobile-dropdown-item-link">Profile Badges</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="profile-settings.html" className="mobile-dropdown-item-link">Profile Settings</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="forum-search-results.html" className="mobile-dropdown-item-link">Forum Results</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}
                            </ul>
                            {/* /MOBILE DROPDOWN */}
                        </li>
                        {/* /MOBILE DROPDOWN ITEM */}
                    </ul>
                    {/* /MOBILE DROPDOWN */}
                </li>
                {/* /MOBILE MENU ITEM */}

                {/* MOBILE MENU ITEM */}
                <li className="mobile-menu-item">
                    <p className="mobile-menu-item-link pd-dropdown-handler">Shop</p>
                    {/* ARROW ICON */}
                    <svg className="arrow-icon medium">
                        <use xlinkHref="#svg-arrow-medium"></use>
                    </svg>
                    {/* /ARROW ICON */}

                    {/* MOBILE DROPDOWN */}
                    <ul className="mobile-dropdown pd-dropdown">
                        {/* MOBILE DROPDOWN ITEM */}
                        <li className="mobile-dropdown-item">
                            <p className="mobile-dropdown-item-link pd-dropdown-handler">New Releases</p>
                            {/* ARROW ICON */}
                            <svg className="arrow-icon medium">
                                <use xlinkHref="#svg-arrow-medium"></use>
                            </svg>
                            {/* /ARROW ICON */}

                            {/* MOBILE DROPDOWN */}
                            <ul className="mobile-dropdown pd-dropdown">
                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="shop-v1-grid.html" className="mobile-dropdown-item-link">Shop 3 Columns Grid</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="shop-v1-list.html" className="mobile-dropdown-item-link">Shop 3 Columns List</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="shop-v2.html" className="mobile-dropdown-item-link">Shop 4 Columns</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-page.html" className="mobile-dropdown-item-link">Product Description</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-page.html" className="mobile-dropdown-item-link">Product Reviews</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-page.html" className="mobile-dropdown-item-link">Product Specifications</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="inventory-bag.html" className="mobile-dropdown-item-link">Inventory Bag (Cart)</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="checkout.html" className="mobile-dropdown-item-link">Checkout Page</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="order-confirmation.html" className="mobile-dropdown-item-link">Order Confirmation</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="wishlist.html" className="mobile-dropdown-item-link">Wishlist</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-compare.html" className="mobile-dropdown-item-link">Product Compare</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}
                            </ul>
                            {/* /MOBILE DROPDOWN */}
                        </li>
                        {/* /MOBILE DROPDOWN ITEM */}

                        {/* MOBILE DROPDOWN ITEM */}
                        <li className="mobile-dropdown-item">
                            <p className="mobile-dropdown-item-link pd-dropdown-handler">Shop Features</p>
                            {/* ARROW ICON */}
                            <svg className="arrow-icon medium">
                                <use xlinkHref="#svg-arrow-medium"></use>
                            </svg>
                            {/* /ARROW ICON */}

                            {/* MOBILE DROPDOWN */}
                            <ul className="mobile-dropdown pd-dropdown">
                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="shop-v1-grid.html" className="mobile-dropdown-item-link">Shop 3 Columns Grid</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="shop-v1-list.html" className="mobile-dropdown-item-link">Shop 3 Columns List</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="shop-v2.html" className="mobile-dropdown-item-link">Shop 4 Columns</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-page.html" className="mobile-dropdown-item-link">Product Description</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-page.html" className="mobile-dropdown-item-link">Product Reviews</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-page.html" className="mobile-dropdown-item-link">Product Specifications</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="inventory-bag.html" className="mobile-dropdown-item-link">Inventory Bag (Cart)</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="checkout.html" className="mobile-dropdown-item-link">Checkout Page</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="order-confirmation.html" className="mobile-dropdown-item-link">Order Confirmation</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="wishlist.html" className="mobile-dropdown-item-link">Wishlist</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-compare.html" className="mobile-dropdown-item-link">Product Compare</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}
                            </ul>
                            {/* /MOBILE DROPDOWN */}
                        </li>
                        {/* /MOBILE DROPDOWN ITEM */}

                        {/* MOBILE DROPDOWN ITEM */}
                        <li className="mobile-dropdown-item">
                            <p className="mobile-dropdown-item-link pd-dropdown-handler">Powerstation</p>
                            {/* ARROW ICON */}
                            <svg className="arrow-icon medium">
                                <use xlinkHref="#svg-arrow-medium"></use>
                            </svg>
                            {/* /ARROW ICON */}

                            {/* MOBILE DROPDOWN */}
                            <ul className="mobile-dropdown pd-dropdown">
                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="shop-v1-grid.html" className="mobile-dropdown-item-link">Shop 3 Columns Grid</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="shop-v1-list.html" className="mobile-dropdown-item-link">Shop 3 Columns List</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="shop-v2.html" className="mobile-dropdown-item-link">Shop 4 Columns</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-page.html" className="mobile-dropdown-item-link">Product Description</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-page.html" className="mobile-dropdown-item-link">Product Reviews</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-page.html" className="mobile-dropdown-item-link">Product Specifications</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="inventory-bag.html" className="mobile-dropdown-item-link">Inventory Bag (Cart)</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="checkout.html" className="mobile-dropdown-item-link">Checkout Page</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="order-confirmation.html" className="mobile-dropdown-item-link">Order Confirmation</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="wishlist.html" className="mobile-dropdown-item-link">Wishlist</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-compare.html" className="mobile-dropdown-item-link">Product Compare</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}
                            </ul>
                            {/* /MOBILE DROPDOWN */}
                        </li>
                        {/* /MOBILE DROPDOWN ITEM */}

                        {/* MOBILE DROPDOWN ITEM */}
                        <li className="mobile-dropdown-item">
                            <p className="mobile-dropdown-item-link pd-dropdown-handler">X-Rock</p>
                            {/* ARROW ICON */}
                            <svg className="arrow-icon medium">
                                <use xlinkHref="#svg-arrow-medium"></use>
                            </svg>
                            {/* /ARROW ICON */}

                            {/* MOBILE DROPDOWN */}
                            <ul className="mobile-dropdown pd-dropdown">
                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="shop-v1-grid.html" className="mobile-dropdown-item-link">Shop 3 Columns Grid</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="shop-v1-list.html" className="mobile-dropdown-item-link">Shop 3 Columns List</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="shop-v2.html" className="mobile-dropdown-item-link">Shop 4 Columns</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-page.html" className="mobile-dropdown-item-link">Product Description</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-page.html" className="mobile-dropdown-item-link">Product Reviews</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-page.html" className="mobile-dropdown-item-link">Product Specifications</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="inventory-bag.html" className="mobile-dropdown-item-link">Inventory Bag (Cart)</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="checkout.html" className="mobile-dropdown-item-link">Checkout Page</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="order-confirmation.html" className="mobile-dropdown-item-link">Order Confirmation</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="wishlist.html" className="mobile-dropdown-item-link">Wishlist</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-compare.html" className="mobile-dropdown-item-link">Product Compare</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}
                            </ul>
                            {/* /MOBILE DROPDOWN */}
                        </li>
                        {/* /MOBILE DROPDOWN ITEM */}

                        {/* MOBILE DROPDOWN ITEM */}
                        <li className="mobile-dropdown-item">
                            <p className="mobile-dropdown-item-link pd-dropdown-handler">Funtendo</p>
                            {/* ARROW ICON */}
                            <svg className="arrow-icon medium">
                                <use xlinkHref="#svg-arrow-medium"></use>
                            </svg>
                            {/* /ARROW ICON */}

                            {/* MOBILE DROPDOWN */}
                            <ul className="mobile-dropdown pd-dropdown">
                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="shop-v1-grid.html" className="mobile-dropdown-item-link">Shop 3 Columns Grid</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="shop-v1-list.html" className="mobile-dropdown-item-link">Shop 3 Columns List</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="shop-v2.html" className="mobile-dropdown-item-link">Shop 4 Columns</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-page.html" className="mobile-dropdown-item-link">Product Description</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-page.html" className="mobile-dropdown-item-link">Product Reviews</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-page.html" className="mobile-dropdown-item-link">Product Specifications</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="inventory-bag.html" className="mobile-dropdown-item-link">Inventory Bag (Cart)</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="checkout.html" className="mobile-dropdown-item-link">Checkout Page</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="order-confirmation.html" className="mobile-dropdown-item-link">Order Confirmation</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="wishlist.html" className="mobile-dropdown-item-link">Wishlist</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="product-compare.html" className="mobile-dropdown-item-link">Product Compare</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}
                            </ul>
                            {/* /MOBILE DROPDOWN */}
                        </li>
                        {/* /MOBILE DROPDOWN ITEM */}
                    </ul>
                    {/* /MOBILE DROPDOWN */}
                </li>
                {/* /MOBILE MENU ITEM */}

                {/* MOBILE MENU ITEM */}
                <li className="mobile-menu-item">
                    <p className="mobile-menu-item-link pd-dropdown-handler">
                        <img className="widget-option-img user-avatar micro" src="img/users/05.jpg" alt="avatar-01" />
                            James_Spiegel
                    </p>
                    {/* ARROW ICON */}
                    <svg className="arrow-icon medium">
                        <use xlinkHref="#svg-arrow-medium"></use>
                    </svg>
                    {/* /ARROW ICON */}

                    {/* MOBILE DROPDOWN */}
                    <ul className="mobile-dropdown pd-dropdown">
                        {/* MOBILE DROPDOWN ITEM */}
                        <li className="mobile-dropdown-item">
                            <p className="mobile-dropdown-item-link pd-dropdown-handler">Main Account</p>
                            {/* ARROW ICON */}
                            <svg className="arrow-icon medium">
                                <use xlinkHref="#svg-arrow-medium"></use>
                            </svg>
                            {/* /ARROW ICON */}

                            {/* MOBILE DROPDOWN */}
                            <ul className="mobile-dropdown pd-dropdown">
                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="account-settings.html" className="mobile-dropdown-item-link">Account Settings</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="#" className="mobile-dropdown-item-link">Shipping Details</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="#" className="mobile-dropdown-item-link">Billing Details</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="orders-history.html" className="mobile-dropdown-item-link">Orders History</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}
                            </ul>
                            {/* /MOBILE DROPDOWN */}
                        </li>
                        {/* /MOBILE DROPDOWN ITEM */}

                        {/* MOBILE DROPDOWN ITEM */}
                        <li className="mobile-dropdown-item">
                            <p className="mobile-dropdown-item-link pd-dropdown-handler">Pixel Forums</p>
                            {/* ARROW ICON */}
                            <svg className="arrow-icon medium">
                                <use xlinkHref="#svg-arrow-medium"></use>
                            </svg>
                            {/* /ARROW ICON */}

                            {/* MOBILE DROPDOWN */}
                            <ul className="mobile-dropdown pd-dropdown">
                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="profile-summary.html" className="mobile-dropdown-item-link">Summary</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="profile-activity.html" className="mobile-dropdown-item-link">Activity</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="profile-notifications.html" className="mobile-dropdown-item-link">Notifications</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="profile-messages.html" className="mobile-dropdown-item-link">Messages</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="profile-badges.html" className="mobile-dropdown-item-link">Profile Badges</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}

                                {/* MOBILE DROPDOWN ITEM */}
                                <li className="mobile-dropdown-item">
                                    <a href="profile-settings.html" className="mobile-dropdown-item-link">Settings</a>
                                </li>
                                {/* /MOBILE DROPDOWN ITEM */}
                            </ul>
                            {/* /MOBILE DROPDOWN */}
                        </li>
                        {/* /MOBILE DROPDOWN ITEM */}
                    </ul>
                    {/* /MOBILE DROPDOWN */}
                </li>
                {/* /MOBILE MENU ITEM */}

                {/* MOBILE MENU ITEM */}
                <li className="mobile-menu-item">
                    <a href="wishlist.html" className="mobile-menu-item-link">Wishlist (<span className="quantity">5</span>)</a>
                </li>
                {/* /MOBILE MENU ITEM */}

                {/* MOBILE MENU ITEM */}
                <li className="mobile-menu-item">
                    <a href="product-compare.html" className="mobile-menu-item-link">Compare (<span className="quantity">4</span>)</a>
                </li>
                {/* /MOBILE MENU ITEM */}
            </ul>
            {/* /MOBILE MENU */}
        </div>
        {/* /MOBILE MENU WRAP */}

        {/* HEADER WRAP */}
        <div className="header-wrap">
            {/* HEADER */}
            <div className="header grid-limit">
                {/* WIDGET SELECTABLES */}
                <div className="widget-selectables">
                    {/* WIDGET OPTIONS WRAP */}
                    <div className="widget-options-wrap">
                        {/* CURRENT OPTION */}
                        <div id="lang-dropdown-trigger" className="current-option">
                            {/* CURRENT OPTION VALUE */}
                            <div id="lang-dropdown-option-value" className="current-option-value">
                                <img className="widget-option-img" src="img/flags/flag-us.png" alt="flag-us" />
                                    <p className="widget-option-text">English</p>
                            </div>
                            {/* /CURRENT OPTION VALUE */}

                            {/* ARROW ICON */}
                            <svg className="arrow-icon">
                                <use xlinkHref="#svg-arrow"></use>
                            </svg>
                            {/* /ARROW ICON */}
                        </div>
                        {/* /CURRENT OPTION */}

                        {/* WIDGET OPTIONS */}
                        <div id="lang-dropdown" className="widget-options small">
                            {/* WIDGET OPTION */}
                            <div className="widget-option">
                                <img className="widget-option-img" src="img/flags/flag-us.png" alt="flag-us" />
                                    <p className="widget-option-text">English</p>
                            </div>
                            {/* /WIDGET OPTION */}

                            {/* WIDGET OPTION */}
                            <div className="widget-option">
                                <img className="widget-option-img" src="img/flags/flag-es.png" alt="flag-es" />
                                    <p className="widget-option-text">Spanish</p>
                            </div>
                            {/* /WIDGET OPTION */}

                            {/* WIDGET OPTION */}
                            <div className="widget-option">
                                <img className="widget-option-img" src="img/flags/flag-fr.png" alt="flag-fr" />
                                    <p className="widget-option-text">French</p>
                            </div>
                            {/* /WIDGET OPTION */}

                            {/* WIDGET OPTION */}
                            <div className="widget-option">
                                <img className="widget-option-img" src="img/flags/flag-jp.png" alt="flag-jp" />
                                    <p className="widget-option-text">Japanese</p>
                            </div>
                            {/* /WIDGET OPTION */}
                        </div>
                        {/* /WIDGET OPTIONS */}
                    </div>
                    {/* /WIDGET OPTIONS WRAP */}

                    {/* WIDGET OPTIONS WRAP */}
                    <div className="widget-options-wrap">
                        {/* CURRENT OPTION */}
                        <div id="curr-dropdown-trigger" className="current-option">
                            <p className="widget-option-text currency-text-info">Currency:</p>
                            {/* CURRENT OPTION VALUE */}
                            <div id="curr-dropdown-option-value" className="current-option-value highlighted">
                                <p className="widget-option-text">U$D</p>
                            </div>
                            {/* /CURRENT OPTION VALUE */}

                            {/* ARROW ICON */}
                            <svg className="arrow-icon">
                                <use xlinkHref="#svg-arrow"></use>
                            </svg>
                            {/* /ARROW ICON */}
                        </div>
                        {/* /CURRENT OPTION */}

                        {/* WIDGET OPTIONS */}
                        <div id="curr-dropdown" className="widget-options small short">
                            {/* WIDGET OPTION */}
                            <div className="widget-option">
                                <p className="widget-option-text">U$D</p>
                            </div>
                            {/* /WIDGET OPTION */}

                            {/* WIDGET OPTION */}
                            <div className="widget-option">
                                <p className="widget-option-text">Euros</p>
                            </div>
                            {/* /WIDGET OPTION */}

                            {/* WIDGET OPTION */}
                            <div className="widget-option">
                                <p className="widget-option-text">Pesos</p>
                            </div>
                            {/* /WIDGET OPTION */}
                        </div>
                        {/* /WIDGET OPTIONS */}
                    </div>
                    {/* /WIDGET OPTIONS WRAP */}
                </div>
                {/* /WIDGET SELECTABLES */}

                {/* WIDGET SELECTABLES */}
                <div className="widget-selectables">
                    {/* WIDGET OPTIONS WRAP */}
                    <div className="widget-options-wrap">
                        {/* CURRENT OPTION */}
                        <div id="account-dropdown-trigger" className="current-option">
                            {/* CURRENT OPTION VALUE */}
                            <div className="current-option-value">
                                <img className="widget-option-img user-avatar micro" src="img/users/05.jpg" alt="avatar-01" />
                                    <p className="widget-option-text">James_Spiegel</p>
                            </div>
                            {/* /CURRENT OPTION VALUE */}

                            {/* ARROW ICON */}
                            <svg className="arrow-icon">
                                <use xlinkHref="#svg-arrow"></use>
                            </svg>
                            {/* /ARROW ICON */}
                        </div>
                        {/* /CURRENT OPTION */}

                        {/* WIDGET OPTIONS */}
                        <div id="account-dropdown" className="widget-options short linkable">
                            {/* WIDGET OPTION HEADING */}
                            <div className="widget-option-heading blue">
                                <p className="widget-option-text">Main Account</p>
                            </div>
                            {/* /WIDGET OPTION HEADING */}

                            {/* WIDGET OPTION */}
                            <a href="account-settings.html" className="widget-option">
                                <p className="widget-option-text">Account Settings</p>
                            </a>
                            {/* /WIDGET OPTION */}

                            {/* WIDGET OPTION */}
                            <a href="#" className="widget-option">
                                <p className="widget-option-text">Shipping Details</p>
                            </a>
                            {/* /WIDGET OPTION */}

                            {/* WIDGET OPTION */}
                            <a href="#" className="widget-option">
                                <p className="widget-option-text">Billing Details</p>
                            </a>
                            {/* /WIDGET OPTION */}

                            {/* WIDGET OPTION */}
                            <a href="orders-history.html" className="widget-option">
                                <p className="widget-option-text">Orders History</p>
                            </a>
                            {/* /WIDGET OPTION */}

                            {/* WIDGET OPTION HEADING */}
                            <div className="widget-option-heading red">
                                <p className="widget-option-text">Pixel Forums</p>
                            </div>
                            {/* /WIDGET OPTION HEADING */}

                            {/* WIDGET OPTION */}
                            <a href="profile-summary.html" className="widget-option">
                                <p className="widget-option-text">Summary</p>
                            </a>
                            {/* /WIDGET OPTION */}

                            {/* WIDGET OPTION */}
                            <a href="profile-activity.html" className="widget-option">
                                <p className="widget-option-text">Activity</p>
                            </a>
                            {/* /WIDGET OPTION */}

                            {/* WIDGET OPTION */}
                            <a href="profile-notifications.html" className="widget-option">
                                <p className="widget-option-text">Notifications</p>
                            </a>
                            {/* /WIDGET OPTION */}

                            {/* WIDGET OPTION */}
                            <a href="profile-messages.html" className="widget-option">
                                <p className="widget-option-text">Messages</p>
                            </a>
                            {/* /WIDGET OPTION */}

                            {/* WIDGET OPTION */}
                            <a href="profile-badges.html" className="widget-option">
                                <p className="widget-option-text">Profile Badges</p>
                            </a>
                            {/* /WIDGET OPTION */}

                            {/* WIDGET OPTION */}
                            <a href="profile-settings.html" className="widget-option">
                                <p className="widget-option-text">Settings</p>
                            </a>
                            {/* /WIDGET OPTION */}
                        </div>
                        {/* /WIDGET OPTIONS */}
                    </div>
                    {/* /WIDGET OPTIONS WRAP */}

                    {/* WIDGET OPTIONS WRAP */}
                    <div className="widget-options-wrap">
                        {/* CURRENT OPTION */}
                        <a href="wishlist.html">
                            <div className="current-option">
                                {/* CURRENT OPTION VALUE */}
                                <div className="current-option-value">
                                    <i className="icon-heart widget-option-icon"></i>
                                    <p className="widget-option-text">Wishlist <span className="quantity">(5)</span></p>
                                </div>
                                {/* /CURRENT OPTION VALUE */}
                            </div>
                        </a>
                        {/* /CURRENT OPTION */}
                    </div>
                    {/* /WIDGET OPTIONS WRAP */}

                    {/* WIDGET OPTIONS WRAP */}
                    <div className="widget-options-wrap">
                        {/* CURRENT OPTION */}
                        <a href="product-compare.html">
                            <div className="current-option">
                                {/* CURRENT OPTION VALUE */}
                                <div className="current-option-value">
                                    <i className="icon-tag widget-option-icon"></i>
                                    <p className="widget-option-text">Compare <span className="quantity">(2)</span></p>
                                </div>
                                {/* /CURRENT OPTION VALUE */}
                            </div>
                        </a>
                        {/* /CURRENT OPTION */}
                    </div>
                    {/* /WIDGET OPTIONS WRAP */}

                    {/* BUTTON */}
                    <a href="#" className="button tiny red log-button">
                        Logout
                        {/* BUTTON ORNAMENT */}
                        <div className="button-ornament">
                            {/* ARROW ICON */}
                            <svg className="arrow-icon">
                                <use xlinkHref="#svg-arrow"></use>
                            </svg>
                            {/* /ARROW ICON */}
                        </div>
                        {/* /BUTTON ORNAMENT */}
                    </a>
                    {/* /BUTTON */}
                </div>
                {/* /WIDGET SELECTABLES */}
            </div>
            {/* /HEADER */}
        </div>
        {/* /HEADER WRAP */}

        {/* NAVIGATION WRAP */}
        <nav className="navigation-wrap void stick-on-top">
            {/* NAVIGATION */}
            <div className="navigation grid-limit">
                {/* LOGO */}
                <div className="logo">
                    {/* LOGO IMG */}
                    <figure className="logo-img">
                        <img src="img/brand/logo.png" alt="Logo" />
                    </figure>
                    {/* /LOGO IMG */}

                    {/* LOGO TEXT */}
                    <div className="logo-text">
                        <h2 className="logo-title">Pixel<span className="highlight">Diamond</span></h2>
                        <p className="logo-info">The Latest Gaming News</p>
                    </div>
                    {/* /LOGO TEXT */}
                </div>
                {/* /LOGO */}

                {/* INVENTORY BUTTON */}
                <div className="inventory-button">
                    {/* INVENTORY ICON */}
                    <svg className="inventory-icon">
                        <use xlinkHref="#svg-inventory"></use>
                    </svg>
                    {/* /INVENTORY ICON */}

                    {/* INVENTORY ITEM QUANTITY WRAP */}
                    <div className="inventory-item-quantity-wrap">
                        <p className="inventory-item-quantity">2</p>
                    </div>
                    {/* /INVENTORY ITEM QUANTITY WRAP */}
                </div>
                {/* /INVENTORY BUTTON */}

                {/* SEARCH BUTTON */}
                <div className="search-button search-popup-open">
                    {/* SEARCH ICON */}
                    <svg className="search-icon">
                        <use xlinkHref="#svg-search"></use>
                    </svg>
                    {/* /SEARCH ICON */}
                </div>
                {/* /SEARCH BUTTON */}

                {/* MAIN MENU */}
                <ul className="main-menu">
                    {/* MAIN MENU ITEM */}
                    <li className="main-menu-item">
                        <a href="index.html" className="main-menu-item-link">Home</a>
                    </li>
                    {/* /MAIN MENU ITEM */}

                    {/* MAIN MENU ITEM */}
                    <li className="main-menu-item">
                        <a href="esports-home.html" className="main-menu-item-link">
                            eSports
                            {/* SVG ARROW */}
                            <svg className="arrow-icon">
                                <use xlinkHref="#svg-arrow"></use>
                            </svg>
                            {/* /SVG ARROW */}
                        </a>

                        {/* SUBMENU */}
                        <ul className="submenu">
                            {/* SUBMENU ITEM */}
                            <li className="submenu-item grid-limit">
                                {/* LINK SECTIONS WRAP */}
                                <div className="link-sections-wrap">
                                    {/* LINK SECTIONS */}
                                    <div className="link-sections">
                                        {/* LINK SECTION */}
                                        <div className="link-section">
                                            {/* SECTION TITLE WRAP */}
                                            <div className="section-title-wrap violet">
                                                <h2 className="section-title small">Main Pages</h2>
                                                <div className="section-title-separator"></div>
                                            </div>
                                            {/* /SECTION TITLE WRAP */}

                                            {/* LINK LIST */}
                                            <ul className="link-list medium">
                                                {/* LINK LIST ITEM */}
                                                <li className="link-list-item">
                                                    <a href="esports-home.html">eSports Home</a>
                                                </li>
                                                {/* /LINK LIST ITEM */}

                                                {/* LINK LIST ITEM */}
                                                <li className="link-list-item">
                                                    <a href="esports-news.html">eSports News</a>
                                                </li>
                                                {/* /LINK LIST ITEM */}

                                                {/* LINK LIST ITEM */}
                                                <li className="link-list-item">
                                                    <a href="esports-post.html">eSports Post Page</a>
                                                </li>
                                                {/* /LINK LIST ITEM */}

                                                {/* LINK LIST ITEM */}
                                                <li className="link-list-item">
                                                    <a href="esports-tournament.html">Tournament Page</a>
                                                </li>
                                                {/* /LINK LIST ITEM */}
                                            </ul>
                                            {/* /LINK LIST */}
                                        </div>
                                        {/* /LINK SECTION */}

                                        {/* LINK SECTION */}
                                        <div className="link-section">
                                            {/* SECTION TITLE WRAP */}
                                            <div className="section-title-wrap violet">
                                                <h2 className="section-title small">Match Overviews</h2>
                                                <div className="section-title-separator"></div>
                                            </div>
                                            {/* /SECTION TITLE WRAP */}

                                            {/* LINK LIST */}
                                            <ul className="link-list medium">
                                                {/* LINK LIST ITEM */}
                                                <li className="link-list-item">
                                                    <a href="esports-match-overview-v1.html">Match Overview V1</a>
                                                </li>
                                                {/* /LINK LIST ITEM */}

                                                {/* LINK LIST ITEM */}
                                                <li className="link-list-item">
                                                    <a href="esports-match-overview-v2.html">Match Overview V2</a>
                                                </li>
                                                {/* /LINK LIST ITEM */}

                                                {/* LINK LIST ITEM */}
                                                <li className="link-list-item">
                                                    <a href="esports-match-overview-v3.html">Match Overview V3</a>
                                                </li>
                                                {/* /LINK LIST ITEM */}

                                                {/* LINK LIST ITEM */}
                                                <li className="link-list-item">
                                                    <a href="esports-match-overview-v4.html">Match Overview V4</a>
                                                </li>
                                                {/* /LINK LIST ITEM */}
                                            </ul>
                                            {/* /LINK LIST */}
                                        </div>
                                        {/* /LINK SECTION */}

                                        {/* LINK SECTION */}
                                        <div className="link-section">
                                            {/* SECTION TITLE WRAP */}
                                            <div className="section-title-wrap violet">
                                                <h2 className="section-title small">Teams &amp; Players</h2>
                                                <div className="section-title-separator"></div>
                                            </div>
                                            {/* /SECTION TITLE WRAP */}

                                            {/* LINK LIST */}
                                            <ul className="link-list medium">
                                                {/* LINK LIST ITEM */}
                                                <li className="link-list-item">
                                                    <a href="esports-team.html">eSports Team Page</a>
                                                </li>
                                                {/* /LINK LIST ITEM */}

                                                {/* LINK LIST ITEM */}
                                                <li className="link-list-item">
                                                    <a href="esports-player.html">eSports Player Page</a>
                                                </li>
                                                {/* /LINK LIST ITEM */}

                                                {/* LINK LIST ITEM */}
                                                <li className="link-list-item">
                                                    <a href="esports-streamers.html">Streamers Page</a>
                                                </li>
                                                {/* /LINK LIST ITEM */}

                                                {/* LINK LIST ITEM */}
                                                <li className="link-list-item">
                                                    <a href="esports-calendar.html">Scores with Calendar</a>
                                                </li>
                                                {/* /LINK LIST ITEM */}
                                            </ul>
                                            {/* /LINK LIST */}
                                        </div>
                                        {/* /LINK SECTION */}
                                    </div>
                                    {/* /LINK SECTIONS */}

                                    {/* LINK SECTIONS */}
                                    <div className="link-sections">
                                        {/* LINK SECTION */}
                                        <div className="link-section">
                                            {/* SECTION TITLE WRAP */}
                                            <div className="section-title-wrap violet">
                                                <h2 className="section-title small">Esports Widgets</h2>
                                                <div className="section-title-separator"></div>
                                            </div>
                                            {/* /SECTION TITLE WRAP */}

                                            {/* LINK LIST */}
                                            <ul className="link-list medium">
                                                {/* LINK LIST ITEM */}
                                                <li className="link-list-item">
                                                    <a href="esports-widgets-v1.html">Widgets Page 01</a>
                                                </li>
                                                {/* /LINK LIST ITEM */}
                                            </ul>
                                            {/* /LINK LIST */}

                                            {/* LINK LIST */}
                                            <ul className="link-list medium">
                                                {/* LINK LIST ITEM */}
                                                <li className="link-list-item">
                                                    <a href="esports-widgets-v2.html">Widgets Page 02</a>
                                                </li>
                                                {/* /LINK LIST ITEM */}
                                            </ul>
                                            {/* /LINK LIST */}

                                            {/* LINK LIST */}
                                            <ul className="link-list medium">
                                                {/* LINK LIST ITEM */}
                                                <li className="link-list-item">
                                                    <a href="esports-widgets-v3.html">Widgets Page 03</a>
                                                </li>
                                                {/* /LINK LIST ITEM */}
                                            </ul>
                                            {/* /LINK LIST */}
                                        </div>
                                        {/* /LINK SECTION */}
                                    </div>
                                    {/* /LINK SECTIONS */}

                                    {/* LINK SECTIONS */}
                                    <div className="link-sections">
                                        {/* LINK SECTION */}
                                        <div className="link-section full">
                                            {/* SECTION TITLE WRAP */}
                                            <div className="section-title-wrap violet">
                                                <h2 className="section-title small">Pixel Streamers</h2>
                                                <div className="section-title-separator"></div>
                                            </div>
                                            {/* /SECTION TITLE WRAP */}

                                            {/* STREAMER AVATARS */}
                                            <div className="streamer-avatars">
                                                {/* STREAMER AVATAR */}
                                                <div className="streamer-avatar">
                                                    <a href="esports-streamers.html">
                                                        {/* PP HEXAGON */}
                                                        <div className="pp-hexagon">
                                                            {/* HEXAGON ICON */}
                                                            <svg className="hexagon-icon hexagon-border">
                                                                <use xlinkHref="#svg-hexagon"></use>
                                                            </svg>
                                                            {/* /HEXAGON ICON */}

                                                            {/* HEXAGON ICON */}
                                                            <svg className="hexagon-icon hexagon-fill">
                                                                <use xlinkHref="#svg-hexagon"></use>
                                                            </svg>
                                                            {/* /HEXAGON ICON */}
                                                        </div>
                                                        {/* /PP HEXAGON */}

                                                        {/* STREAMER AVATAR IMG WRAP */}
                                                        <div className="streamer-avatar-img-wrap">
                                                            {/* STREAMER AVATAR IMG */}
                                                            <img className="streamer-avatar-img" src="img/streamers/streamer-hex-01.png" alt="st-avatar-01" />
                                                        </div>
                                                        {/* /STREAMER AVATAR IMG WRAP */}
                                                    </a>
                                                </div>
                                                {/* /STREAMER AVATAR */}

                                                {/* STREAMER AVATAR */}
                                                <div className="streamer-avatar">
                                                    <a href="esports-streamers.html">
                                                        {/* PP HEXAGON */}
                                                        <div className="pp-hexagon">
                                                            {/* HEXAGON ICON */}
                                                            <svg className="hexagon-icon hexagon-border">
                                                                <use xlinkHref="#svg-hexagon"></use>
                                                            </svg>
                                                            {/* /HEXAGON ICON */}

                                                            {/* HEXAGON ICON */}
                                                            <svg className="hexagon-icon hexagon-fill">
                                                                <use xlinkHref="#svg-hexagon"></use>
                                                            </svg>
                                                            {/* /HEXAGON ICON */}
                                                        </div>
                                                        {/* /PP HEXAGON */}

                                                        {/* STREAMER AVATAR IMG WRAP */}
                                                        <div className="streamer-avatar-img-wrap">
                                                            {/* STREAMER AVATAR IMG */}
                                                            <img className="streamer-avatar-img" src="img/streamers/streamer-hex-02.png" alt="st-avatar-02" />
                                                        </div>
                                                        {/* /STREAMER AVATAR IMG WRAP */}
                                                    </a>
                                                </div>
                                                {/* /STREAMER AVATAR */}

                                                {/* STREAMER AVATAR */}
                                                <div className="streamer-avatar">
                                                    <a href="esports-streamers.html">
                                                        {/* PP HEXAGON */}
                                                        <div className="pp-hexagon">
                                                            {/* HEXAGON ICON */}
                                                            <svg className="hexagon-icon hexagon-border">
                                                                <use xlinkHref="#svg-hexagon"></use>
                                                            </svg>
                                                            {/* /HEXAGON ICON */}

                                                            {/* HEXAGON ICON */}
                                                            <svg className="hexagon-icon hexagon-fill">
                                                                <use xlinkHref="#svg-hexagon"></use>
                                                            </svg>
                                                            {/* /HEXAGON ICON */}
                                                        </div>
                                                        {/* /PP HEXAGON */}

                                                        {/* STREAMER AVATAR IMG WRAP */}
                                                        <div className="streamer-avatar-img-wrap">
                                                            {/* STREAMER AVATAR IMG */}
                                                            <img className="streamer-avatar-img" src="img/streamers/streamer-hex-03.png" alt="st-avatar-03" />
                                                        </div>
                                                        {/* /STREAMER AVATAR IMG WRAP */}
                                                    </a>
                                                </div>
                                                {/* /STREAMER AVATAR */}

                                                {/* STREAMER AVATAR */}
                                                <div className="streamer-avatar">
                                                    <a href="esports-streamers.html">
                                                        {/* PP HEXAGON */}
                                                        <div className="pp-hexagon">
                                                            {/* HEXAGON ICON */}
                                                            <svg className="hexagon-icon hexagon-border">
                                                                <use xlinkHref="#svg-hexagon"></use>
                                                            </svg>
                                                            {/* /HEXAGON ICON */}

                                                            {/* HEXAGON ICON */}
                                                            <svg className="hexagon-icon hexagon-fill">
                                                                <use xlinkHref="#svg-hexagon"></use>
                                                            </svg>
                                                            {/* /HEXAGON ICON */}
                                                        </div>
                                                        {/* /PP HEXAGON */}

                                                        {/* STREAMER AVATAR IMG WRAP */}
                                                        <div className="streamer-avatar-img-wrap">
                                                            {/* STREAMER AVATAR IMG */}
                                                            <img className="streamer-avatar-img" src="img/streamers/streamer-hex-04.png" alt="st-avatar-04" />
                                                        </div>
                                                        {/* /STREAMER AVATAR IMG WRAP */}
                                                    </a>
                                                </div>
                                                {/* /STREAMER AVATAR */}

                                                {/* STREAMER AVATAR */}
                                                <div className="streamer-avatar">
                                                    <a href="esports-streamers.html">
                                                        {/* PP HEXAGON */}
                                                        <div className="pp-hexagon">
                                                            {/* HEXAGON ICON */}
                                                            <svg className="hexagon-icon hexagon-border">
                                                                <use xlinkHref="#svg-hexagon"></use>
                                                            </svg>
                                                            {/* /HEXAGON ICON */}

                                                            {/* HEXAGON ICON */}
                                                            <svg className="hexagon-icon hexagon-fill">
                                                                <use xlinkHref="#svg-hexagon"></use>
                                                            </svg>
                                                            {/* /HEXAGON ICON */}
                                                        </div>
                                                        {/* /PP HEXAGON */}

                                                        {/* STREAMER AVATAR IMG WRAP */}
                                                        <div className="streamer-avatar-img-wrap">
                                                            {/* STREAMER AVATAR IMG */}
                                                            <img className="streamer-avatar-img" src="img/streamers/streamer-hex-05.png" alt="st-avatar-05" />
                                                        </div>
                                                        {/* /STREAMER AVATAR IMG WRAP */}
                                                    </a>
                                                </div>
                                                {/* /STREAMER AVATAR */}
                                            </div>
                                            {/* /STREAMER AVATARS */}
                                        </div>
                                        {/* /LINK SECTION */}
                                    </div>
                                    {/* /LINK SECTIONS */}
                                </div>
                                {/* /LINK SECTIONS WRAP */}

                                {/* LINK SECTIONS WRAP */}
                                <div className="link-sections-wrap">
                                    {/* LINK SECTIONS */}
                                    <div className="link-sections">
                                        {/* LINK SECTION */}
                                        <div className="link-section">
                                            {/* SECTION TITLE WRAP */}
                                            <div className="section-title-wrap violet">
                                                <h2 className="section-title small">Featured Match</h2>
                                                <div className="section-title-separator"></div>
                                            </div>
                                            {/* /SECTION TITLE WRAP */}

                                            {/* WIDGET MATCH BOX */}
                                            <div className="widget-match-box">
                                                {/* WIDGET TITLE WRAP */}
                                                <div className="widget-title-wrap">
                                                    <h6 className="widget-title">Xenowatch league finals</h6>
                                                    <p className="widget-text">August 28th, 2018</p>
                                                </div>
                                                {/* /WIDGET TITLE WRAP */}

                                                {/* WIDGET TEAM VS */}
                                                <div className="widget-team-vs">
                                                    {/* WIDGET TEAM VS ITEM */}
                                                    <div className="widget-team-vs-item">
                                                        {/* TEAM INFO WRAP */}
                                                        <div className="team-info-wrap medium">
                                                            {/* TEAM LOGO */}
                                                            <img className="team-logo" src="img/teams/logos/01.png" alt="logo-01" />
                                                                {/* /TEAM LOGO */}

                                                                {/* TEAM INFO */}
                                                                <div className="team-info">
                                                                    {/* TEAM NAME */}
                                                                    <p className="team-name">The Lone Wolves</p>
                                                                    {/* /TEAM NAME */}

                                                                    {/* TEAM COUNTRY */}
                                                                    <p className="team-country">United States</p>
                                                                    {/* /TEAM COUNTRY */}
                                                                </div>
                                                            {/* /TEAM INFO */}
                                                        </div>
                                                        {/* /TEAM INFO WRAP */}

                                                        {/* TEAM SCORE */}
                                                        <p className="team-score">12</p>
                                                        {/* /TEAM SCORE */}
                                                    </div>
                                                    {/* /WIDGET TEAM VS ITEM */}

                                                    {/* WIDGET TEAM VS ITEM */}
                                                    <div className="widget-team-vs-item">
                                                        {/* TEAM INFO WRAP */}
                                                        <div className="team-info-wrap medium">
                                                            {/* TEAM LOGO */}
                                                            <img className="team-logo" src="img/teams/logos/02.png" alt="logo-02" />
                                                                {/* /TEAM LOGO */}

                                                                {/* TEAM INFO */}
                                                                <div className="team-info">
                                                                    {/* TEAM NAME */}
                                                                    <p className="team-name">Raging Rhinos</p>
                                                                    {/* /TEAM NAME */}

                                                                    {/* TEAM COUNTRY */}
                                                                    <p className="team-country">South Africa</p>
                                                                    {/* /TEAM COUNTRY */}
                                                                </div>
                                                            {/* /TEAM INFO */}
                                                        </div>
                                                        {/* /TEAM INFO WRAP */}

                                                        {/* TEAM SCORE */}
                                                        <p className="team-score">10</p>
                                                        {/* /TEAM SCORE */}
                                                    </div>
                                                    {/* /WIDGET TEAM VS ITEM */}
                                                </div>
                                                {/* /WIDGET TEAM VS */}
                                            </div>
                                            {/* /WIDGET MATCH BOX */}

                                            {/* WIDGET MATCH BOX */}
                                            <div className="widget-match-box">
                                                {/* WIDGET TITLE WRAP */}
                                                <div className="widget-title-wrap">
                                                    {/* WIDGET TITLE */}
                                                    <h6 className="widget-title">Match Stats</h6>
                                                    {/* /WIDGET TITLE */}

                                                    {/* STATS REFERENCE */}
                                                    <div className="stats-reference">
                                                        {/* STAT REFERENCE */}
                                                        <div className="stat-reference blue">
                                                            {/* STAT REFERENCE TEXT */}
                                                            <p className="stat-reference-text">TLW</p>
                                                            {/* /STAT REFERENCE TEXT */}
                                                        </div>
                                                        {/* /STAT REFERENCE */}

                                                        {/* STAT REFERENCE */}
                                                        <div className="stat-reference yellow">
                                                            {/* STAT REFERENCE TEXT */}
                                                            <p className="stat-reference-text">RRH</p>
                                                            {/* /STAT REFERENCE TEXT */}
                                                        </div>
                                                        {/* /STAT REFERENCE */}
                                                    </div>
                                                    {/* /STATS REFERENCE */}
                                                </div>
                                                {/* /WIDGET TITLE WRAP */}

                                                {/* WIDGET TEAM STATS */}
                                                <div className="widget-team-stats">
                                                    {/* PROGRESS STAT WRAP */}
                                                    <div className="progress-stat-wrap">
                                                        {/* BAR PROGRESS INFO */}
                                                        <p className="bar-progress-info">Total Kills</p>
                                                        {/* PROGRESS BAR WRAP */}
                                                        <div id="mn-pg-1" className="progress-bar-wrap">
                                                            <div className="bar-progress-wrap left">
                                                                <p id="tlw-kills-stat" className="bar-progress-text"></p>
                                                            </div>
                                                            <div className="bar-progress-wrap right">
                                                                <p id="rrh-kills-stat" className="bar-progress-text"></p>
                                                            </div>
                                                        </div>
                                                        {/* /PROGRESS BAR WRAP */}
                                                    </div>
                                                    {/* /PROGRESS STAT WRAP */}

                                                    {/* PROGRESS STAT WRAP */}
                                                    <div className="progress-stat-wrap">
                                                        {/* BAR PROGRESS INFO */}
                                                        <p className="bar-progress-info">Total Deaths</p>
                                                        {/* PROGRESS BAR WRAP */}
                                                        <div id="mn-pg-2" className="progress-bar-wrap">
                                                            <div className="bar-progress-wrap left">
                                                                <p id="tlw-deaths-stat" className="bar-progress-text"></p>
                                                            </div>
                                                            <div className="bar-progress-wrap right">
                                                                <p id="rrh-deaths-stat" className="bar-progress-text"></p>
                                                            </div>
                                                        </div>
                                                        {/* /PROGRESS BAR WRAP */}
                                                    </div>
                                                    {/* /PROGRESS STAT WRAP */}

                                                    {/* PROGRESS STAT WRAP */}
                                                    <div className="progress-stat-wrap">
                                                        {/* BAR PROGRESS INFO */}
                                                        <p className="bar-progress-info">Total Assists</p>
                                                        {/* PROGRESS BAR WRAP */}
                                                        <div id="mn-pg-3" className="progress-bar-wrap">
                                                            <div className="bar-progress-wrap left">
                                                                <p id="tlw-assists-stat" className="bar-progress-text"></p>
                                                            </div>
                                                            <div className="bar-progress-wrap right">
                                                                <p id="rrh-assists-stat" className="bar-progress-text"></p>
                                                            </div>
                                                        </div>
                                                        {/* /PROGRESS BAR WRAP */}
                                                    </div>
                                                    {/* /PROGRESS STAT WRAP */}
                                                </div>
                                                {/* /WIDGET TEAM STATS */}
                                            </div>
                                            {/* /WIDGET MATCH BOX */}
                                        </div>
                                        {/* /LINK SECTION */}
                                    </div>
                                    {/* /LINK SECTIONS */}
                                </div>
                                {/* /LINK SECTIONS WRAP */}

                                {/* LINK SECTIONS WRAP */}
                                <div className="link-sections-wrap">
                                    {/* LINK SECTIONS */}
                                    <div className="link-sections">
                                        {/* LINK SECTION */}
                                        <div className="link-section">
                                            {/* SECTION TITLE WRAP */}
                                            <div className="section-title-wrap violet">
                                                <h2 className="section-title small">Featured Articles</h2>
                                                <div className="section-title-separator"></div>
                                            </div>
                                            {/* /SECTION TITLE WRAP */}

                                            {/* POST PREVIEW SHOWCASE */}
                                            <div className="post-preview-showcase grid-1col gutter-small">
                                                {/* POST PREVIEW */}
                                                <div className="post-preview tiny e-sport">
                                                    {/* POST PREVIEW IMG WRAP */}
                                                    <a href="esports-post.html">
                                                        <div className="post-preview-img-wrap">
                                                            {/* POST PREVIEW IMG */}
                                                            <figure className="post-preview-img liquid">
                                                                <img src="img/posts/36.jpg" alt="post-36" />
                                                            </figure>
                                                            {/* /POST PREVIEW IMG */}
                                                        </div>
                                                    </a>
                                                    {/* /POST PREVIEW IMG WRAP */}

                                                    {/* POST PREVIEW TITLE */}
                                                    <a href="esports-post.html" className="post-preview-title">Gwen Parker is leading her team to the semifinals</a>
                                                    {/* POST AUTHOR INFO */}
                                                    <div className="post-author-info-wrap">
                                                        <p className="post-author-info small light">By <a href="search-results.html" className="post-author">Dexter</a><span className="separator">|</span>Dec 15th, 2018</p>
                                                    </div>
                                                    {/* /POST AUTHOR INFO */}
                                                </div>
                                                {/* /POST PREVIEW */}

                                                {/* POST PREVIEW */}
                                                <div className="post-preview tiny e-sport">
                                                    {/* POST PREVIEW IMG WRAP */}
                                                    <a href="esports-post.html">
                                                        <div className="post-preview-img-wrap">
                                                            {/* POST PREVIEW IMG */}
                                                            <figure className="post-preview-img liquid">
                                                                <img src="img/posts/38.jpg" alt="post-38" />
                                                            </figure>
                                                            {/* /POST PREVIEW IMG */}
                                                        </div>
                                                    </a>
                                                    {/* /POST PREVIEW IMG WRAP */}

                                                    {/* POST PREVIEW TITLE */}
                                                    <a href="esports-post.html" className="post-preview-title">Pro Soccer 2018 world league kicked off today!</a>
                                                    {/* POST AUTHOR INFO */}
                                                    <div className="post-author-info-wrap">
                                                        <p className="post-author-info small light">By <a href="search-results.html" className="post-author">Faye V.</a><span className="separator">|</span>Dec 15th, 2018</p>
                                                    </div>
                                                    {/* /POST AUTHOR INFO */}
                                                </div>
                                                {/* /POST PREVIEW */}

                                                {/* POST PREVIEW */}
                                                <div className="post-preview tiny e-sport">
                                                    {/* POST PREVIEW IMG WRAP */}
                                                    <a href="esports-post.html">
                                                        <div className="post-preview-img-wrap">
                                                            {/* POST PREVIEW IMG */}
                                                            <figure className="post-preview-img liquid">
                                                                <img src="img/posts/37.jpg" alt="post-37" />
                                                            </figure>
                                                            {/* /POST PREVIEW IMG */}
                                                        </div>
                                                    </a>
                                                    {/* /POST PREVIEW IMG WRAP */}

                                                    {/* POST PREVIEW TITLE */}
                                                    <a href="esports-post.html" className="post-preview-title">Last night the wolves beat the rhinos 12-10</a>
                                                    {/* POST AUTHOR INFO */}
                                                    <div className="post-author-info-wrap">
                                                        <p className="post-author-info small light">By <a href="search-results.html" className="post-author">Faye V.</a><span className="separator">|</span>Dec 15th, 2018</p>
                                                    </div>
                                                    {/* /POST AUTHOR INFO */}
                                                </div>
                                                {/* /POST PREVIEW */}

                                                {/* POST PREVIEW */}
                                                <div className="post-preview tiny e-sport">
                                                    {/* POST PREVIEW IMG WRAP */}
                                                    <a href="esports-post.html">
                                                        <div className="post-preview-img-wrap">
                                                            {/* POST PREVIEW IMG */}
                                                            <figure className="post-preview-img liquid">
                                                                <img src="img/posts/39.jpg" alt="post-39" />
                                                            </figure>
                                                            {/* /POST PREVIEW IMG */}
                                                        </div>
                                                    </a>
                                                    {/* /POST PREVIEW IMG WRAP */}

                                                    {/* POST PREVIEW TITLE */}
                                                    <a href="esports-post.html" className="post-preview-title">We had an interview with the great Emily Danniels</a>
                                                    {/* POST AUTHOR INFO */}
                                                    <div className="post-author-info-wrap">
                                                        <p className="post-author-info small light">By <a href="search-results.html" className="post-author">Vellatrix</a><span className="separator">|</span>Dec 15th, 2018</p>
                                                    </div>
                                                    {/* /POST AUTHOR INFO */}
                                                </div>
                                                {/* /POST PREVIEW */}

                                                {/* POST PREVIEW */}
                                                <div className="post-preview tiny e-sport">
                                                    {/* POST PREVIEW IMG WRAP */}
                                                    <a href="esports-post.html">
                                                        <div className="post-preview-img-wrap">
                                                            {/* POST PREVIEW IMG */}
                                                            <figure className="post-preview-img liquid">
                                                                <img src="img/posts/40.jpg" alt="post-40" />
                                                            </figure>
                                                            {/* /POST PREVIEW IMG */}
                                                        </div>
                                                    </a>
                                                    {/* /POST PREVIEW IMG WRAP */}

                                                    {/* POST PREVIEW TITLE */}
                                                    <a href="esports-post.html" className="post-preview-title">The Siberian Tigers arrived at New York for the finals</a>
                                                    {/* POST AUTHOR INFO */}
                                                    <div className="post-author-info-wrap">
                                                        <p className="post-author-info small light">By <a href="search-results.html" className="post-author">Vellatrix</a><span className="separator">|</span>Dec 15th, 2018</p>
                                                    </div>
                                                    {/* /POST AUTHOR INFO */}
                                                </div>
                                                {/* /POST PREVIEW */}
                                            </div>
                                            {/* /POST PREVIEW SHOWCASE */}
                                        </div>
                                        {/* /LINK SECTION */}
                                    </div>
                                    {/* /LINK SECTIONS */}
                                </div>
                                {/* /LINK SECTIONS WRAP */}
                            </li>
                            {/* /SUBMENU ITEM */}
                        </ul>
                        {/* /SUBMENU */}
                    </li>
                    {/* /MAIN MENU ITEM */}

                    {/* MAIN MENU ITEM */}
                    <li className="main-menu-item">
                        <a href="news-v1.html" className="main-menu-item-link">News</a>
                    </li>
                    {/* /MAIN MENU ITEM */}

                    {/* MAIN MENU ITEM */}
                    <li className="main-menu-item">
                        <a href="news-v2.html" className="main-menu-item-link">Reviews</a>
                    </li>
                    {/* /MAIN MENU ITEM */}

                    {/* MAIN MENU ITEM */}
                    <li className="main-menu-item">
                        <a href="#" className="main-menu-item-link">
                            Features
                            {/* SVG ARROW */}
                            <svg className="arrow-icon">
                                <use xlinkHref="#svg-arrow"></use>
                            </svg>
                            {/* /SVG ARROW */}
                        </a>

                        {/* SUBMENU */}
                        <ul className="submenu void">
                            {/* SUBMENU ITEM */}
                            <li className="submenu-item padded">
                                {/* LINK SECTIONS */}
                                <div className="link-sections">
                                    {/* LINK SECTION */}
                                    <div className="link-section">
                                        {/* SECTION TITLE WRAP */}
                                        <div className="section-title-wrap blue">
                                            <h2 className="section-title small">Pixel Main Features</h2>
                                            <div className="section-title-separator"></div>
                                        </div>
                                        {/* /SECTION TITLE WRAP */}

                                        {/* LINK LIST */}
                                        <ul className="link-list">
                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="index.html">Main Homepage</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="home-v2.html">Homepage V2</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="home-v3.html">Homepage V3</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="news-v1.html">News Page V1</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="news-v2.html">News Page V2</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="news-v3.html">News Page V3</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="news-v4.html">News Page V4</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}
                                        </ul>
                                        {/* /LINK LIST */}

                                        {/* LINK LIST */}
                                        <ul className="link-list">
                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="post-v1.html">Post Page V1</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="post-v2.html">Post Page V2</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="post-v3.html">Post Page V3</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="post-v4.html">Post Page V4</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="browse-videos.html">Browse Videos</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="post-video.html">Video Post Page</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="search-results.html">Search Results</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}
                                        </ul>
                                        {/* /LINK LIST */}

                                        {/* LINK LIST */}
                                        <ul className="link-list">
                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="calendar.html">Events Calendar</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="event.html">Open Event</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="404.html">404 Error Page</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="shortcodes.html">Shortcodes</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="menu-dropdowns.html">Menu &amp; Dropdowns</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="headers-dividers.html">Headers &amp; Dividers</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="pixel-popups.html">Pixel Popups</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}
                                        </ul>
                                        {/* /LINK LIST */}
                                    </div>
                                    {/* /LINK SECTION */}

                                    {/* LINK SECTION */}
                                    <div className="link-section">
                                        {/* SECTION TITLE WRAP */}
                                        <div className="section-title-wrap blue">
                                            <h2 className="section-title small">Account &amp; Company</h2>
                                            <div className="section-title-separator"></div>
                                        </div>
                                        {/* /SECTION TITLE WRAP */}

                                        {/* LINK LIST */}
                                        <ul className="link-list">
                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="login-register.html">Login &amp; Register</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="login-register-popups.html">Login &amp; Register Popups</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="account-settings.html">Account Settings</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="orders-history.html">Account Orders</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="faq.html">FAQs Page</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="contact.html">Contact Page</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="sponsors.html">Sponsors Page</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}
                                        </ul>
                                        {/* /LINK LIST */}
                                    </div>
                                    {/* /LINK SECTION */}

                                    {/* LINK SECTION */}
                                    <div className="link-section">
                                        {/* SECTION TITLE WRAP */}
                                        <div className="section-title-wrap red">
                                            <h2 className="section-title small">Pixel Forums</h2>
                                            <div className="section-title-separator"></div>
                                        </div>
                                        {/* /SECTION TITLE WRAP */}

                                        {/* LINK LIST */}
                                        <ul className="link-list">
                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="forum.html">Main Page</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="forum-categories.html">Category Page</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="topic.html">Main Topic</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="forum-badges.html">Badges Big &amp; Small</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="profile-summary.html">Profile Summary</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="profile-activity.html">Profile Activity</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="profile-notifications.html">Profile Notifications</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}
                                        </ul>
                                        {/* /LINK LIST */}

                                        {/* LINK LIST */}
                                        <ul className="link-list">
                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="profile-messages.html">Profile Messages</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="profile-badges.html">Profile Badges</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="profile-settings.html">Profile Settings</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}

                                            {/* LINK LIST ITEM */}
                                            <li className="link-list-item">
                                                <a href="forum-search-results.html">Forum Results</a>
                                            </li>
                                            {/* /LINK LIST ITEM */}
                                        </ul>
                                        {/* /LINK LIST */}
                                    </div>
                                    {/* /LINK SECTION */}
                                </div>
                                {/* /LINK SECTIONS */}

                                {/* LINE SEPARATOR */}
                                <div className="line-separator"></div>

                                {/* NEWS ITEMS PREVIEW */}
                                <div className="news-items-preview">
                                    {/* POST PREVIEW */}
                                    <div className="post-preview gaming-news">
                                        {/* POST PREVIEW IMG WRAP */}
                                        <a href="post-v1.html">
                                            <div className="post-preview-img-wrap">
                                                {/* POST PREVIEW IMG */}
                                                <figure className="post-preview-img liquid">
                                                    <img src="img/posts/09.jpg" alt="post-09" />
                                                </figure>
                                                {/* /POST PREVIEW IMG */}
                                            </div>
                                        </a>
                                        {/* /POST PREVIEW IMG WRAP */}

                                        {/* TAG ORNAMENT */}
                                        <a href="news-v1.html" className="tag-ornament">Gaming News</a>
                                        {/* /TAG ORNAMENT */}

                                        {/* POST PREVIEW TITLE */}
                                        <a href="post-v1.html" className="post-preview-title">New "Rizen" game is gonna be released in summer 2019</a>
                                        {/* POST AUTHOR INFO */}
                                        <div className="post-author-info-wrap">
                                            <p className="post-author-info small light">By <a href="search-results.html" className="post-author">Vellatrix</a><span className="separator">|</span>December 15th, 2018</p>
                                        </div>
                                        {/* /POST AUTHOR INFO */}
                                        {/* POST PREVIEW TEXT */}
                                        <p className="post-preview-text">Lorem ipsum dolor sit amet, consectetur bere adipisicing elit, sed do eiusmod por lorem incididunt ut labore.</p>
                                    </div>
                                    {/* /POST PREVIEW */}

                                    {/* POST PREVIEW */}
                                    <div className="post-preview game-review">
                                        {/* POST PREVIEW IMG WRAP */}
                                        <a href="post-v2.html">
                                            <div className="post-preview-img-wrap">
                                                {/* POST PREVIEW IMG */}
                                                <figure className="post-preview-img liquid">
                                                    <img src="img/posts/08.jpg" alt="post-08" />
                                                </figure>
                                                {/* /POST PREVIEW IMG */}

                                                {/* REVIEW RATING */}
                                                <div className="review-rating">
                                                    <div id="menu-rate-08-1" className="arc small"></div>
                                                </div>
                                                {/* /REVIEW RATING */}
                                            </div>
                                        </a>
                                        {/* /POST PREVIEW IMG WRAP */}

                                        {/* TAG ORNAMENT */}
                                        <a href="news-v2.html" className="tag-ornament">Game Reviews</a>
                                        {/* /TAG ORNAMENT */}

                                        {/* POST PREVIEW TITLE */}
                                        <a href="post-v2.html" className="post-preview-title">The new mecha cyborg game is breaking barriers</a>
                                        {/* POST AUTHOR INFO */}
                                        <div className="post-author-info-wrap">
                                            <p className="post-author-info small light">By <a href="search-results.html" className="post-author">Vellatrix</a><span className="separator">|</span>December 15th, 2018</p>
                                        </div>
                                        {/* /POST AUTHOR INFO */}
                                        {/* POST PREVIEW TEXT */}
                                        <p className="post-preview-text">Lorem ipsum dolor sit amet, consectetur bere adipisicing elit, sed do eiusmod por lorem incididunt ut labore.</p>
                                    </div>
                                    {/* /POST PREVIEW */}

                                    {/* POST PREVIEW */}
                                    <div className="post-preview e-sport">
                                        {/* POST PREVIEW IMG WRAP */}
                                        <a href="esports-post.html">
                                            <div className="post-preview-img-wrap">
                                                {/* POST PREVIEW IMG */}
                                                <figure className="post-preview-img liquid">
                                                    <img src="img/posts/38.jpg" alt="post-38" />
                                                </figure>
                                                {/* /POST PREVIEW IMG */}
                                            </div>
                                        </a>
                                        {/* /POST PREVIEW IMG WRAP */}

                                        {/* TAG ORNAMENT */}
                                        <a href="esports-news.html" className="tag-ornament">Esports</a>
                                        {/* /TAG ORNAMENT */}

                                        {/* POST PREVIEW TITLE */}
                                        <a href="esports-post.html" className="post-preview-title">Pro Soccer 2017 world league kicked off today!</a>
                                        {/* POST AUTHOR INFO */}
                                        <div className="post-author-info-wrap">
                                            <p className="post-author-info small light">By <a href="search-results.html" className="post-author">Faye V.</a><span className="separator">|</span>December 15th, 2018</p>
                                        </div>
                                        {/* /POST AUTHOR INFO */}
                                        {/* POST PREVIEW TEXT */}
                                        <p className="post-preview-text">Lorem ipsum dolor sit amet, consectetur bere adipisicing elit, sed do eiusmod por lorem incididunt ut labore.</p>
                                    </div>
                                    {/* /POST PREVIEW */}

                                    {/* POST PREVIEW */}
                                    <div className="post-preview geeky-news">
                                        {/* POST PREVIEW IMG WRAP */}
                                        <a href="post-v4.html">
                                            <div className="post-preview-img-wrap">
                                                {/* POST PREVIEW IMG */}
                                                <figure className="post-preview-img liquid">
                                                    <img src="img/posts/02.jpg" alt="post-02" />
                                                </figure>
                                                {/* /POST PREVIEW IMG */}
                                            </div>
                                        </a>
                                        {/* /POST PREVIEW IMG WRAP */}

                                        {/* TAG ORNAMENT */}
                                        <a href="news-v4.html" className="tag-ornament">Geeky news</a>
                                        {/* /TAG ORNAMENT */}

                                        {/* POST PREVIEW TITLE */}
                                        <a href="post-v4.html" className="post-preview-title">Jessica Tam to star in the new "Charlotte" series</a>
                                        {/* POST AUTHOR INFO */}
                                        <div className="post-author-info-wrap">
                                            <p className="post-author-info small light">By <a href="search-results.html" className="post-author">Vellatrix</a><span className="separator">|</span>December 15th, 2018</p>
                                        </div>
                                        {/* /POST AUTHOR INFO */}
                                        {/* POST PREVIEW TEXT */}
                                        <p className="post-preview-text">Lorem ipsum dolor sit amet, consectetur bere adipisicing elit, sed do eiusmod por lorem incididunt ut labore.</p>
                                    </div>
                                    {/* /POST PREVIEW */}
                                </div>
                                {/* /NEWS ITEMS PREVIEW */}
                            </li>
                            {/* /SUBMENU ITEM */}
                        </ul>
                        {/* /SUBMENU */}
                    </li>
                    {/* /MAIN MENU ITEM */}

                    {/* MAIN MENU ITEM */}
                    <li className="main-menu-item">
                        <a href="shop-v1-grid.html" className="main-menu-item-link">
                            Shop
                            {/* SVG ARROW */}
                            <svg className="arrow-icon">
                                <use xlinkHref="#svg-arrow"></use>
                            </svg>
                            {/* /SVG ARROW */}
                        </a>

                        {/* SUBMENU */}
                        <ul className="submenu void">
                            {/* SUBMENU ITEM */}
                            <li className="submenu-item v2">
                                {/* SUBMENU ITEM SLIDER */}
                                <div id="submenu-slider-1" className="submenu-slider">
                                    {/* DROPDOWN LIST */}
                                    <ul className="dropdown-list submenu-slider-options">
                                        {/* DROPDOWN LIST ITEM */}
                                        <li className="dropdown-list-item">
                                            <p className="dropdown-list-item-link">New Releases</p>
                                            {/* ARROW ICON */}
                                            <svg className="arrow-icon medium">
                                                <use xlinkHref="#svg-arrow-medium"></use>
                                            </svg>
                                            {/* /ARROW ICON */}
                                        </li>
                                        {/* /DROPDOWN LIST ITEM */}

                                        {/* DROPDOWN LIST ITEM */}
                                        <li className="dropdown-list-item">
                                            <p className="dropdown-list-item-link">Shop Features</p>
                                            {/* ARROW ICON */}
                                            <svg className="arrow-icon medium">
                                                <use xlinkHref="#svg-arrow-medium"></use>
                                            </svg>
                                            {/* /ARROW ICON */}
                                        </li>
                                        {/* /DROPDOWN LIST ITEM */}

                                        {/* DROPDOWN LIST ITEM */}
                                        <li className="dropdown-list-item">
                                            <p className="dropdown-list-item-link">Powerstation</p>
                                            {/* ARROW ICON */}
                                            <svg className="arrow-icon medium">
                                                <use xlinkHref="#svg-arrow-medium"></use>
                                            </svg>
                                            {/* /ARROW ICON */}
                                        </li>
                                        {/* /DROPDOWN LIST ITEM */}

                                        {/* DROPDOWN LIST ITEM */}
                                        <li className="dropdown-list-item">
                                            <p className="dropdown-list-item-link">Funtendo</p>
                                            {/* ARROW ICON */}
                                            <svg className="arrow-icon medium">
                                                <use xlinkHref="#svg-arrow-medium"></use>
                                            </svg>
                                            {/* /ARROW ICON */}
                                        </li>
                                        {/* /DROPDOWN LIST ITEM */}

                                        {/* DROPDOWN LIST ITEM */}
                                        <li className="dropdown-list-item">
                                            <p className="dropdown-list-item-link">X-Rock</p>
                                            {/* ARROW ICON */}
                                            <svg className="arrow-icon medium">
                                                <use xlinkHref="#svg-arrow-medium"></use>
                                            </svg>
                                            {/* /ARROW ICON */}
                                        </li>
                                        {/* /DROPDOWN LIST ITEM */}

                                        {/* DROPDOWN LIST ITEM */}
                                        <li className="dropdown-list-item">
                                            <p className="dropdown-list-item-link">Clothing &amp; Hats</p>
                                            {/* ARROW ICON */}
                                            <svg className="arrow-icon medium">
                                                <use xlinkHref="#svg-arrow-medium"></use>
                                            </svg>
                                            {/* /ARROW ICON */}
                                        </li>
                                        {/* /DROPDOWN LIST ITEM */}

                                        {/* DROPDOWN LIST ITEM */}
                                        <li className="dropdown-list-item">
                                            <p className="dropdown-list-item-link">Merchandise</p>
                                            {/* ARROW ICON */}
                                            <svg className="arrow-icon medium">
                                                <use xlinkHref="#svg-arrow-medium"></use>
                                            </svg>
                                            {/* /ARROW ICON */}
                                        </li>
                                        {/* /DROPDOWN LIST ITEM */}
                                    </ul>
                                    {/* /DROPDOWN LIST */}

                                    {/* SUBMENU SLIDER ITEMS WRAP */}
                                    <div className="submenu-slider-items-wrap">
                                        {/* SUBMENU SLIDER ITEMS */}
                                        <div className="submenu-slider-items">
                                            {/* SUBMENU SLIDER ITEM */}
                                            <div className="submenu-slider-item submenu-slider-item-1">
                                                {/* PRODUCT PREVIEW */}
                                                <div className="product-preview short">
                                                    {/* PRODUCT PREVIEW IMG WRAP */}
                                                    <div className="product-preview-img-wrap">
                                                        {/* PRODUCT PREVIEW IMG */}
                                                        <a href="product-page.html">
                                                            <figure className="product-preview-img liquid">
                                                                <img src="img/products/04.jpg" alt="product-04" />
                                                            </figure>
                                                        </a>
                                                        {/* /PRODUCT PREVIEW IMG */}
                                                    </div>
                                                    {/* /PRODUCT PREVIEW IMG WRAP */}

                                                    {/* PRODUCT PREVIEW TITLE */}
                                                    <a href="product-page.html" className="product-preview-title">Mee U - kawai 8 bundle</a>
                                                    {/* PRODUCT PREVIEW INFO */}
                                                    <div className="product-preview-info">
                                                        {/* PRODUCT PREVIEW CATEGORY */}
                                                        <a href="shop-v1-grid.html" className="product-preview-category">Funtendo</a>
                                                        {/* RATING ORNAMENT */}
                                                        <div className="rating-ornament small void yellow">
                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon empty">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon empty">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}
                                                        </div>
                                                        {/* /RATING ORNAMENT */}
                                                    </div>
                                                    {/* /PRODUCT PREVIEW INFO */}

                                                    {/* PRODUCT PRICE WRAP */}
                                                    <div className="product-price-wrap">
                                                        <p className="product-preview-price before"><span className="currency">$</span>310.00</p>
                                                        <p className="product-preview-price current"><span className="currency">$</span>280.00</p>
                                                    </div>
                                                    {/* /PRODUCT PRICE WRAP */}

                                                    {/* ADD TO BAG */}
                                                    <div className="button small violet add-to-bag">Add to bag</div>
                                                </div>
                                                {/* /PRODUCT PREVIEW */}

                                                {/* LINK SECTIONS */}
                                                <div className="link-sections">
                                                    {/* LINK SECTION */}
                                                    <div className="link-section">
                                                        {/* SECTION TITLE WRAP */}
                                                        <div className="section-title-wrap violet">
                                                            <h2 className="section-title small">New Releases</h2>
                                                            <div className="section-title-separator"></div>
                                                        </div>
                                                        {/* /SECTION TITLE WRAP */}

                                                        {/* LINK LIST */}
                                                        <ul className="link-list">
                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v1-grid.html">Shop 3 Columns Grid</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v1-list.html">Shop 3 Columns List</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v2.html">Shop 4 Columns</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Description</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Reviews</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Specifications</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="inventory-bag.html">Inventory Bag (Cart)</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="checkout.html">Checkout Page</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="order-confirmation.html">Order Confirmation</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}
                                                        </ul>
                                                        {/* /LINK LIST */}

                                                        {/* LINK LIST */}
                                                        <ul className="link-list">
                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="wishlist.html">Wishlist</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-compare.html">Product Compare</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}
                                                        </ul>
                                                        {/* /LINK LIST */}
                                                    </div>
                                                    {/* /LINK SECTION */}
                                                </div>
                                                {/* /LINK SECTIONS */}
                                            </div>
                                            {/* /SUBMENU SLIDER ITEM */}

                                            {/* SUBMENU SLIDER ITEM */}
                                            <div className="submenu-slider-item submenu-slider-item-2">
                                                {/* PRODUCT PREVIEW */}
                                                <div className="product-preview short">
                                                    {/* PRODUCT PREVIEW IMG WRAP */}
                                                    <div className="product-preview-img-wrap">
                                                        {/* PRODUCT PREVIEW IMG */}
                                                        <a href="product-page.html">
                                                            <figure className="product-preview-img liquid">
                                                                <img src="img/products/11.jpg" alt="product-11" />
                                                            </figure>
                                                        </a>
                                                        {/* /PRODUCT PREVIEW IMG */}
                                                    </div>
                                                    {/* /PRODUCT PREVIEW IMG WRAP */}

                                                    {/* PRODUCT PREVIEW TITLE */}
                                                    <a href="product-page.html" className="product-preview-title">Diamond men's black...</a>
                                                    {/* PRODUCT PREVIEW INFO */}
                                                    <div className="product-preview-info">
                                                        {/* PRODUCT PREVIEW CATEGORY */}
                                                        <a href="shop-v1-grid.html" className="product-preview-category">Clothing &amp; Hats</a>
                                                        {/* RATING ORNAMENT */}
                                                        <div className="rating-ornament small void yellow">
                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}
                                                        </div>
                                                        {/* /RATING ORNAMENT */}
                                                    </div>
                                                    {/* /PRODUCT PREVIEW INFO */}

                                                    {/* PRODUCT PRICE WRAP */}
                                                    <div className="product-price-wrap">
                                                        <p className="product-preview-price current"><span className="currency">$</span>16.00</p>
                                                    </div>
                                                    {/* /PRODUCT PRICE WRAP */}

                                                    {/* ADD TO BAG */}
                                                    <div className="button small violet add-to-bag">Add to bag</div>
                                                </div>
                                                {/* /PRODUCT PREVIEW */}

                                                {/* LINK SECTIONS */}
                                                <div className="link-sections">
                                                    {/* LINK SECTION */}
                                                    <div className="link-section">
                                                        {/* SECTION TITLE WRAP */}
                                                        <div className="section-title-wrap violet">
                                                            <h2 className="section-title small">Shop Features</h2>
                                                            <div className="section-title-separator"></div>
                                                        </div>
                                                        {/* /SECTION TITLE WRAP */}

                                                        {/* LINK LIST */}
                                                        <ul className="link-list">
                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v1-grid.html">Shop 3 Columns Grid</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v1-list.html">Shop 3 Columns List</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v2.html">Shop 4 Columns</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Description</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Reviews</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Specifications</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="inventory-bag.html">Inventory Bag (Cart)</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="checkout.html">Checkout Page</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="order-confirmation.html">Order Confirmation</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}
                                                        </ul>
                                                        {/* /LINK LIST */}

                                                        {/* LINK LIST */}
                                                        <ul className="link-list">
                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="wishlist.html">Wishlist</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-compare.html">Product Compare</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}
                                                        </ul>
                                                        {/* /LINK LIST */}
                                                    </div>
                                                    {/* /LINK SECTION */}
                                                </div>
                                                {/* /LINK SECTIONS */}
                                            </div>
                                            {/* /SUBMENU SLIDER ITEM */}

                                            {/* SUBMENU SLIDER ITEM */}
                                            <div className="submenu-slider-item submenu-slider-item-3">
                                                {/* PRODUCT PREVIEW */}
                                                <div className="product-preview short">
                                                    {/* PRODUCT PREVIEW IMG WRAP */}
                                                    <div className="product-preview-img-wrap">
                                                        {/* PRODUCT PREVIEW IMG */}
                                                        <a href="product-page.html">
                                                            <figure className="product-preview-img liquid">
                                                                <img src="img/products/09.jpg" alt="product-09" />
                                                            </figure>
                                                        </a>
                                                        {/* /PRODUCT PREVIEW IMG */}
                                                    </div>
                                                    {/* /PRODUCT PREVIEW IMG WRAP */}

                                                    {/* PRODUCT PREVIEW TITLE */}
                                                    <a href="product-page.html" className="product-preview-title">Galaxy Adventure RX...</a>
                                                    {/* PRODUCT PREVIEW INFO */}
                                                    <div className="product-preview-info">
                                                        {/* PRODUCT PREVIEW CATEGORY */}
                                                        <a href="shop-v1-grid.html" className="product-preview-category">Powerstation</a>
                                                        {/* RATING ORNAMENT */}
                                                        <div className="rating-ornament small void yellow">
                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}
                                                        </div>
                                                        {/* /RATING ORNAMENT */}
                                                    </div>
                                                    {/* /PRODUCT PREVIEW INFO */}

                                                    {/* PRODUCT PRICE WRAP */}
                                                    <div className="product-price-wrap">
                                                        <p className="product-preview-price current"><span className="currency">$</span>59.99</p>
                                                    </div>
                                                    {/* /PRODUCT PRICE WRAP */}

                                                    {/* ADD TO BAG */}
                                                    <div className="button small violet add-to-bag">Add to bag</div>
                                                </div>
                                                {/* /PRODUCT PREVIEW */}

                                                {/* LINK SECTIONS */}
                                                <div className="link-sections">
                                                    {/* LINK SECTION */}
                                                    <div className="link-section">
                                                        {/* SECTION TITLE WRAP */}
                                                        <div className="section-title-wrap violet">
                                                            <h2 className="section-title small">Powerstation</h2>
                                                            <div className="section-title-separator"></div>
                                                        </div>
                                                        {/* /SECTION TITLE WRAP */}

                                                        {/* LINK LIST */}
                                                        <ul className="link-list">
                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v1-grid.html">Shop 3 Columns Grid</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v1-list.html">Shop 3 Columns List</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v2.html">Shop 4 Columns</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Description</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Reviews</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Specifications</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="inventory-bag.html">Inventory Bag (Cart)</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="checkout.html">Checkout Page</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="order-confirmation.html">Order Confirmation</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}
                                                        </ul>
                                                        {/* /LINK LIST */}

                                                        {/* LINK LIST */}
                                                        <ul className="link-list">
                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="wishlist.html">Wishlist</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-compare.html">Product Compare</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}
                                                        </ul>
                                                        {/* /LINK LIST */}
                                                    </div>
                                                    {/* /LINK SECTION */}
                                                </div>
                                                {/* /LINK SECTIONS */}
                                            </div>
                                            {/* /SUBMENU SLIDER ITEM */}

                                            {/* SUBMENU SLIDER ITEM */}
                                            <div className="submenu-slider-item submenu-slider-item-4">
                                                {/* PRODUCT PREVIEW */}
                                                <div className="product-preview short">
                                                    {/* PRODUCT PREVIEW IMG WRAP */}
                                                    <div className="product-preview-img-wrap">
                                                        {/* PRODUCT PREVIEW IMG */}
                                                        <a href="product-page.html">
                                                            <figure className="product-preview-img liquid">
                                                                <img src="img/products/08.jpg" alt="product-08" />
                                                            </figure>
                                                        </a>
                                                        {/* /PRODUCT PREVIEW IMG */}
                                                    </div>
                                                    {/* /PRODUCT PREVIEW IMG WRAP */}

                                                    {/* PRODUCT PREVIEW TITLE */}
                                                    <a href="product-page.html" className="product-preview-title">Tales of Odd Dimensions</a>
                                                    {/* PRODUCT PREVIEW INFO */}
                                                    <div className="product-preview-info">
                                                        {/* PRODUCT PREVIEW CATEGORY */}
                                                        <a href="shop-v1-grid.html" className="product-preview-category">Funtendo</a>
                                                        {/* RATING ORNAMENT */}
                                                        <div className="rating-ornament small void yellow">
                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon empty">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon empty">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}
                                                        </div>
                                                        {/* /RATING ORNAMENT */}
                                                    </div>
                                                    {/* /PRODUCT PREVIEW INFO */}

                                                    {/* PRODUCT PRICE WRAP */}
                                                    <div className="product-price-wrap">
                                                        <p className="product-preview-price current"><span className="currency">$</span>59.99</p>
                                                    </div>
                                                    {/* /PRODUCT PRICE WRAP */}

                                                    {/* ADD TO BAG */}
                                                    <div className="button small violet add-to-bag">Add to bag</div>
                                                </div>
                                                {/* /PRODUCT PREVIEW */}

                                                {/* LINK SECTIONS */}
                                                <div className="link-sections">
                                                    {/* LINK SECTION */}
                                                    <div className="link-section">
                                                        {/* SECTION TITLE WRAP */}
                                                        <div className="section-title-wrap violet">
                                                            <h2 className="section-title small">Funtendo</h2>
                                                            <div className="section-title-separator"></div>
                                                        </div>
                                                        {/* /SECTION TITLE WRAP */}

                                                        {/* LINK LIST */}
                                                        <ul className="link-list">
                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v1-grid.html">Shop 3 Columns Grid</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v1-list.html">Shop 3 Columns List</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v2.html">Shop 4 Columns</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Description</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Reviews</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Specifications</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="inventory-bag.html">Inventory Bag (Cart)</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="checkout.html">Checkout Page</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="order-confirmation.html">Order Confirmation</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}
                                                        </ul>
                                                        {/* /LINK LIST */}

                                                        {/* LINK LIST */}
                                                        <ul className="link-list">
                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="wishlist.html">Wishlist</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-compare.html">Product Compare</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}
                                                        </ul>
                                                        {/* /LINK LIST */}
                                                    </div>
                                                    {/* /LINK SECTION */}
                                                </div>
                                                {/* /LINK SECTIONS */}
                                            </div>
                                            {/* /SUBMENU SLIDER ITEM */}

                                            {/* SUBMENU SLIDER ITEM */}
                                            <div className="submenu-slider-item submenu-slider-item-5">
                                                {/* PRODUCT PREVIEW */}
                                                <div className="product-preview short">
                                                    {/* PRODUCT PREVIEW IMG WRAP */}
                                                    <div className="product-preview-img-wrap">
                                                        {/* PRODUCT PREVIEW IMG */}
                                                        <a href="product-page.html">
                                                            <figure className="product-preview-img liquid">
                                                                <img src="img/products/07.jpg" alt="product-07" />
                                                            </figure>
                                                        </a>
                                                        {/* /PRODUCT PREVIEW IMG */}
                                                    </div>
                                                    {/* /PRODUCT PREVIEW IMG WRAP */}

                                                    {/* PRODUCT PREVIEW TITLE */}
                                                    <a href="product-page.html" className="product-preview-title">XRock One Bundle + Cam</a>
                                                    {/* PRODUCT PREVIEW INFO */}
                                                    <div className="product-preview-info">
                                                        {/* PRODUCT PREVIEW CATEGORY */}
                                                        <a href="shop-v1-grid.html" className="product-preview-category">Funtendo</a>
                                                        {/* RATING ORNAMENT */}
                                                        <div className="rating-ornament small void yellow">
                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon empty">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}
                                                        </div>
                                                        {/* /RATING ORNAMENT */}
                                                    </div>
                                                    {/* /PRODUCT PREVIEW INFO */}

                                                    {/* PRODUCT PRICE WRAP */}
                                                    <div className="product-price-wrap">
                                                        <p className="product-preview-price current"><span className="currency">$</span>399.00</p>
                                                    </div>
                                                    {/* /PRODUCT PRICE WRAP */}

                                                    {/* ADD TO BAG */}
                                                    <div className="button small violet add-to-bag">Add to bag</div>
                                                </div>
                                                {/* /PRODUCT PREVIEW */}

                                                {/* LINK SECTIONS */}
                                                <div className="link-sections">
                                                    {/* LINK SECTION */}
                                                    <div className="link-section">
                                                        {/* SECTION TITLE WRAP */}
                                                        <div className="section-title-wrap violet">
                                                            <h2 className="section-title small">X-Rock</h2>
                                                            <div className="section-title-separator"></div>
                                                        </div>
                                                        {/* /SECTION TITLE WRAP */}

                                                        {/* LINK LIST */}
                                                        <ul className="link-list">
                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v1-grid.html">Shop 3 Columns Grid</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v1-list.html">Shop 3 Columns List</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v2.html">Shop 4 Columns</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Description</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Reviews</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Specifications</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="inventory-bag.html">Inventory Bag (Cart)</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="checkout.html">Checkout Page</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="order-confirmation.html">Order Confirmation</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}
                                                        </ul>
                                                        {/* /LINK LIST */}

                                                        {/* LINK LIST */}
                                                        <ul className="link-list">
                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="wishlist.html">Wishlist</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-compare.html">Product Compare</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}
                                                        </ul>
                                                        {/* /LINK LIST */}
                                                    </div>
                                                    {/* /LINK SECTION */}
                                                </div>
                                                {/* /LINK SECTIONS */}
                                            </div>
                                            {/* /SUBMENU SLIDER ITEM */}

                                            {/* SUBMENU SLIDER ITEM */}
                                            <div className="submenu-slider-item submenu-slider-item-6">
                                                {/* PRODUCT PREVIEW */}
                                                <div className="product-preview short">
                                                    {/* PRODUCT PREVIEW IMG WRAP */}
                                                    <div className="product-preview-img-wrap">
                                                        {/* PRODUCT PREVIEW IMG */}
                                                        <a href="product-page.html">
                                                            <figure className="product-preview-img liquid">
                                                                <img src="img/products/12.jpg" alt="product-12" />
                                                            </figure>
                                                        </a>
                                                        {/* /PRODUCT PREVIEW IMG */}
                                                    </div>
                                                    {/* /PRODUCT PREVIEW IMG WRAP */}

                                                    {/* PRODUCT PREVIEW TITLE */}
                                                    <a href="product-page.html" className="product-preview-title">Diamond men's white...</a>
                                                    {/* PRODUCT PREVIEW INFO */}
                                                    <div className="product-preview-info">
                                                        {/* PRODUCT PREVIEW CATEGORY */}
                                                        <a href="shop-v1-grid.html" className="product-preview-category">Clothing &amp; Hats</a>
                                                        {/* RATING ORNAMENT */}
                                                        <div className="rating-ornament small void yellow">
                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}
                                                        </div>
                                                        {/* /RATING ORNAMENT */}
                                                    </div>
                                                    {/* /PRODUCT PREVIEW INFO */}

                                                    {/* PRODUCT PRICE WRAP */}
                                                    <div className="product-price-wrap">
                                                        <p className="product-preview-price current"><span className="currency">$</span>16.00</p>
                                                    </div>
                                                    {/* /PRODUCT PRICE WRAP */}

                                                    {/* ADD TO BAG */}
                                                    <div className="button small violet add-to-bag">Add to bag</div>
                                                </div>
                                                {/* /PRODUCT PREVIEW */}

                                                {/* LINK SECTIONS */}
                                                <div className="link-sections">
                                                    {/* LINK SECTION */}
                                                    <div className="link-section">
                                                        {/* SECTION TITLE WRAP */}
                                                        <div className="section-title-wrap violet">
                                                            <h2 className="section-title small">Clothing &amp; Hats</h2>
                                                            <div className="section-title-separator"></div>
                                                        </div>
                                                        {/* /SECTION TITLE WRAP */}

                                                        {/* LINK LIST */}
                                                        <ul className="link-list">
                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v1-grid.html">Shop 3 Columns Grid</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v1-list.html">Shop 3 Columns List</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v2.html">Shop 4 Columns</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Description</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Reviews</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Specifications</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="inventory-bag.html">Inventory Bag (Cart)</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="checkout.html">Checkout Page</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="order-confirmation.html">Order Confirmation</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}
                                                        </ul>
                                                        {/* /LINK LIST */}

                                                        {/* LINK LIST */}
                                                        <ul className="link-list">
                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="wishlist.html">Wishlist</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-compare.html">Product Compare</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}
                                                        </ul>
                                                        {/* /LINK LIST */}
                                                    </div>
                                                    {/* /LINK SECTION */}
                                                </div>
                                                {/* /LINK SECTIONS */}
                                            </div>
                                            {/* /SUBMENU SLIDER ITEM */}

                                            {/* SUBMENU SLIDER ITEM */}
                                            <div className="submenu-slider-item submenu-slider-item-7">
                                                {/* PRODUCT PREVIEW */}
                                                <div className="product-preview short">
                                                    {/* PRODUCT PREVIEW IMG WRAP */}
                                                    <div className="product-preview-img-wrap">
                                                        {/* PRODUCT PREVIEW IMG */}
                                                        <a href="product-page.html">
                                                            <figure className="product-preview-img liquid">
                                                                <img src="img/products/13.jpg" alt="product-13" />
                                                            </figure>
                                                        </a>
                                                        {/* /PRODUCT PREVIEW IMG */}
                                                    </div>
                                                    {/* /PRODUCT PREVIEW IMG WRAP */}

                                                    {/* PRODUCT PREVIEW TITLE */}
                                                    <a href="product-page.html" className="product-preview-title">Diamond white enamel...</a>
                                                    {/* PRODUCT PREVIEW INFO */}
                                                    <div className="product-preview-info">
                                                        {/* PRODUCT PREVIEW CATEGORY */}
                                                        <a href="shop-v1-grid.html" className="product-preview-category">Merchandise</a>
                                                        {/* RATING ORNAMENT */}
                                                        <div className="rating-ornament small void yellow">
                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}

                                                            {/* RATING ORNAMENT ITEM */}
                                                            <div className="rating-ornament-item">
                                                                {/* RATING ORNAMENT ICON */}
                                                                <svg className="rating-ornament-icon empty">
                                                                    <use xlinkHref="#svg-star"></use>
                                                                </svg>
                                                            </div>
                                                            {/* /RATING ORNAMENT ITEM */}
                                                        </div>
                                                        {/* /RATING ORNAMENT */}
                                                    </div>
                                                    {/* /PRODUCT PREVIEW INFO */}

                                                    {/* PRODUCT PRICE WRAP */}
                                                    <div className="product-price-wrap">
                                                        <p className="product-preview-price current"><span className="currency">$</span>10.99</p>
                                                    </div>
                                                    {/* /PRODUCT PRICE WRAP */}

                                                    {/* ADD TO BAG */}
                                                    <div className="button small violet add-to-bag">Add to bag</div>
                                                </div>
                                                {/* /PRODUCT PREVIEW */}

                                                {/* LINK SECTIONS */}
                                                <div className="link-sections">
                                                    {/* LINK SECTION */}
                                                    <div className="link-section">
                                                        {/* SECTION TITLE WRAP */}
                                                        <div className="section-title-wrap violet">
                                                            <h2 className="section-title small">Merchandise</h2>
                                                            <div className="section-title-separator"></div>
                                                        </div>
                                                        {/* /SECTION TITLE WRAP */}

                                                        {/* LINK LIST */}
                                                        <ul className="link-list">
                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v1-grid.html">Shop 3 Columns Grid</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v1-list.html">Shop 3 Columns List</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="shop-v2.html">Shop 4 Columns</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Description</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Reviews</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-page.html">Product Specifications</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="inventory-bag.html">Inventory Bag (Cart)</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="checkout.html">Checkout Page</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="order-confirmation.html">Order Confirmation</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}
                                                        </ul>
                                                        {/* /LINK LIST */}

                                                        {/* LINK LIST */}
                                                        <ul className="link-list">
                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="wishlist.html">Wishlist</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}

                                                            {/* LINK LIST ITEM */}
                                                            <li className="link-list-item">
                                                                <a href="product-compare.html">Product Compare</a>
                                                            </li>
                                                            {/* /LINK LIST ITEM */}
                                                        </ul>
                                                        {/* /LINK LIST */}
                                                    </div>
                                                    {/* /LINK SECTION */}
                                                </div>
                                                {/* /LINK SECTIONS */}
                                            </div>
                                            {/* /SUBMENU SLIDER ITEM */}
                                        </div>
                                        {/* /SUBMENU SLIDER ITEMS */}
                                    </div>
                                    {/* SUBMENU SLIDER ITEMS WRAP */}
                                </div>
                                {/* /SUBMENU ITEM SLIDER */}
                            </li>
                            {/* /SUBMENU ITEM */}
                        </ul>
                        {/* /SUBMENU */}
                    </li>
                    {/* /MAIN MENU ITEM */}
                </ul>
                {/* /MAIN MENU */}
            </div>
            {/* NAVIGATION */}
        </nav>
        {/* /NAVIGATION WRAP */}

    </div>
  );
}

export default Home;
