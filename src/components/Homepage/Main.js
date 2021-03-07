import React from 'react'
import Filters from './Filters'
import ProductList from './Products/ProductList'

const Main = ({ products }) => {
    return (
        <main className="products">
            <header className="hero-header">
                <article className="container">
                    <article className="heading-header pad-left-3">
                        <h3>Final Sale for<br />Winters</h3>
                        <button className="btn-red mar-top-10">Show More</button>
                    </article>
                </article>
            </header>

            <article className="">
                <article className="container">
                    <article className="grid grid-1 grid-webview">
                        <Filters />
                        <section className="full-product-view grid-webview-product-section">
                            <article className="results container">
                                <article className="grid grid-2">
                                    <h2 className="subheading text-left  pad-3">Top Wear</h2>
                                    <article className="text-right">
                                        <select className="width-100 sort-by">
                                            <option value="">Sort By</option>
                                            <option value="">Popularity</option>
                                            <option value="">Newest First</option>
                                            <option value="">Relevance</option>
                                            <option value="">Price - Low To High</option>
                                            <option value="">Price - High To Low</option>
                                        </select>
                                    </article>
                                </article>
                                <ProductList products={products} />
                            </article>

                            <nav aria-label="Pagination" className="pagination text-center">
                                <p>Showing {products.length} of {products.length} products</p>
                                <ol className="pages flex flex-gap">
                                    <li className="disabled-page"><a href="#" aria-label="Previous Page"><text>&lt;</text></a></li>
                                    <li className="active-page"><a href="#" aria-label="Current Page, Page 1" aria-current="true">1</a></li>
                                    <li className="disabled-page"><a href="#" aria-label="Next Page"><text>&gt;</text></a></li>
                                </ol>
                            </nav>
                        </section>
                    </article>
                </article>
            </article>
        </main>
    )
}

export default Main