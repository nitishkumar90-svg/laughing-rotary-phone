import React from 'react'

const Filters = () => {
    return (
        <form className="filters container">
            <h2 className="subheading text-left pad-3">Filters<a className="hide-on-webview" href="#" id="toggle-filter"><i className="fas fa-filter"></i></a>
            </h2>

            <article id="filter-options" className="filter-options hidden-on-mobile-view">
                <fieldset className="">
                    <legend className="pad-top-10 font-bold">Flone Assured</legend>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <img src="./img/verified.png" className="verified-image-filter" alt="" />
                </fieldset>
                <fieldset>
                    <legend className="pad-top-10 font-bold">Colour</legend>
                    <ul className="filter-list ks-cboxtags">
                        <li><input type="checkbox" name="colour" value="black" id="black" /> <label for="black">Black</label>
                        </li>
                        <li><input type="checkbox" name="colour" value="white" id="white" /> <label for="white">White</label>
                        </li>
                        <li><input type="checkbox" name="colour" value="grey" id="grey" /> <label for="grey">Grey</label></li>
                        <li><input type="checkbox" name="colour" value="red" id="red" /> <label for="red">Red</label></li>
                        <li><input type="checkbox" name="colour" value="blue" id="blue" /> <label for="blue">Blue</label></li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend className="pad-top-10 font-bold">Sizes</legend>
                    <ul className="filter-list ks-cboxtags">
                        <li><input type="checkbox" name="size" value="XS" id="XS" /> <label for="XS">XS</label></li>
                        <li><input type="checkbox" name="size" value="S" id="S" /> <label for="S">S</label></li>
                        <li><input type="checkbox" name="size" value="M" id="M" /> <label for="M">M</label></li>
                        <li><input type="checkbox" name="size" value="L" id="L" /> <label for="L">L</label></li>
                        <li><input type="checkbox" name="size" value="XL" id="XL" /> <label for="XL">XL</label></li>
                    </ul>
                </fieldset>
                <fieldset>
                    <legend className="pad-top-10 font-bold">Ratings (above)</legend>
                    <ol>
                        <li>
                            <input type="radio" name="rating" value="4" id="aboveFour" />
                            <label for="aboveFour">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                    className="fas fa-star"></i><i className="far fa-star"></i>
                            </label>
                        </li>
                        <li>
                            <input type="radio" name="rating" value="3" id="aboveThree" />
                            <label for="aboveThree">

                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                    className="far fa-star"></i><i className="far fa-star"></i>
                            </label>
                        </li>
                        <li>
                            <input type="radio" name="rating" value="2" id="aboveTwo" />
                            <label for="aboveTwo">

                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i
                                    className="far fa-star"></i><i className="far fa-star"></i>
                            </label>
                        </li>
                        <li>
                            <input type="radio" name="rating" value="1" id="aboveOne" />
                            <label for="aboveOne">
                                <i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i
                                    className="far fa-star"></i><i className="far fa-star"></i>
                            </label>
                        </li>
                    </ol>
                </fieldset>
                <fieldset className="text-center pad-top-10">
                    <button className="filter-button">Apply Filter(s)</button>
                </fieldset>
                <fieldset className="text-center pad-top-4 pad-bot-4">
                    <button className="transparent-background font-normal"><u>Reset</u></button>
                </fieldset>
            </article>
        </form>
    )
}

export default Filters