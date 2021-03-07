import React from 'react'

const Product = ({ values }) => {
    const ratings = values.Rating.map((elem) => <i key={elem.id} className={(elem === 1) ? "fas fa-star" : (elem === 0) ? "hidden" : "fas fa-star-half-alt"}></i>)
    const colors = values.colors.map((elem, index) => <li><input key={elem.id} type="radio" checked name="colour" id={`Color_${elem.name}_${values.id}`} value={elem.name} /> <label htmlFor={`Color_${elem.name}_${values.id}`}>{elem.name}</label></li>)
    const sizes = values.sizes.map((elem, index) => <li><input key={elem.id} type="radio" checked name="size" id={`Size_${elem.name}_${values.id}`} value={elem.name} /> <label htmlFor={`Size_${elem.name}_${values.id}`}>{elem.name}</label></li>)
    return (
        <article className="product">
            <header>
                <img src={require(`../../../img/Products/${values.imageURL}`).default} alt="Product Image" />
                <h3 className="pad-top-4">{values.name}<span className="float-right"><i className={values.isLiked ? "fas fa-heart color-red" : "far fa-heart"}></i></span></h3>
                <data className="pad-top-4" value="39"><del>${values.actualPrice}</del> <ins>${values.sellingPrice}</ins></data>
                <p className="pad-top-4">{values.description}</p>
                <dl className={values.isFloneAssured ? "pad-top-4" : "hidden"}>
                    <dt className="font-bold"><img title="Flone Assured" src={require('../../../img/verified.png').default} className="verified-image" alt="" /></dt>
                </dl>
                <dl className={(values.Rating.length > 0) ? "pad-top-4" : "hidden"}>
                    <dt className="font-bold">Rating</dt>
                    {ratings}
                </dl>
            </header>
            <form>
                <fieldset className={(values.colors.length > 0) ? "" : "hidden"}>
                    <legend className="pad-top-4 font-bold">Colours</legend>
                    <ul className="color-variant-fields pad-top-4">
                        {colors}
                    </ul>
                </fieldset>
                <fieldset className={(values.sizes.length > 0) ? "" : "hidden"}>
                    <legend className="pad-top-4 font-bold">Select Size</legend>
                    <ul className="size-fields pad-top-4">
                        {sizes}
                    </ul>
                </fieldset>
            </form>
            <footer className="product-footer">
                <button id={`Cart_${values.id}`} className={(values.sizes.length > 0) ? "cart-button" : "cart-button disabled"} type="button"><i className="fas fa-cart-plus"></i> Add to Cart</button>
            </footer>
        </article>
    )
}

export default Product