import React from 'react'

const Product = ({ values }) => {
    const ratings = values.Rating.map((elem, index) => <i key={index} className={(elem === 1) ? "fas fa-star" : (elem === 0) ? "hidden" : "fas fa-star-half-alt"}></i>)
    const colors = values.Colors.map((elem) => <li key={elem.id}><input type="radio" name="colour" id={`Color_${elem.name}_${elem.id}`} value={elem.name} /> <label htmlFor={`Color_${elem.name}_${elem.id}`}>{elem.name}</label></li>)
    const sizes = values.Sizes.map((elem) => <li key={elem.id}><input type="radio" name="size" id={`Size_${elem.name}_${elem.id}`} value={elem.name} /> <label htmlFor={`Size_${elem.name}_${elem.id}`}>{elem.name}</label></li>)
    const verifiedImage = require('../../../img/verified.png').default

    return (
        <article className="product">
            <header>

                <h3 className="pad-top-4">{values.name}<span className="float-right"><i className={values.isLiked ? "fas fa-heart color-red" : "far fa-heart"}></i></span></h3>
                <data className="pad-top-4" value="39"><del>${values.actualPrice}</del> <ins>${values.sellingPrice}</ins></data>
                <p className="pad-top-4">{values.description}</p>
                <dl className={values.IsFloneAssured ? "pad-top-4" : "hidden"}>
                    <dt className="font-bold"><img title="Flone Assured" src={verifiedImage} className="verified-image" alt="" /></dt>
                </dl>
                <dl className={(values.Rating.length > 0) ? "pad-top-4" : "hidden"}>
                    <dt className="font-bold">Rating</dt>
                    {ratings}
                </dl>
            </header>
            <form>
                <fieldset className={(values.Colors.length > 0) ? "" : "hidden"}>
                    <legend className="pad-top-4 font-bold">Colours</legend>
                    <ul className="color-variant-fields pad-top-4">
                        {colors}
                    </ul>
                </fieldset>
                <fieldset className={(values.Sizes.length > 0) ? "" : "hidden"}>
                    <legend className="pad-top-4 font-bold">Select Size</legend>
                    <ul className="size-fields pad-top-4">
                        {sizes}
                    </ul>
                </fieldset>
            </form>
            <footer className="product-footer">
                <button id={`Cart_${values.id}`} className={(values.Sizes.length > 0) ? "cart-button" : "cart-button disabled"} type="button"><i className="fas fa-cart-plus"></i> Add to Cart</button>
            </footer>
        </article>
    )
}

export default Product