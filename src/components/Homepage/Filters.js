import React, { useContext } from 'react'
import { mainProducts } from '../../Context/mainContext';

const Filters = () => {
    const { filters, setFilters } = useContext(mainProducts);

    const handleFloneAssuredChange = (event) => {
        setFilters({
            ...filters,
            isFloneAssured: !filters.isFloneAssured
        });
    }

    const handleQuery = (event) => {
        setFilters({
            ...filters,
            query: event.target.value
        });
    }

    const verifiedImage = require('../../img/verified.png').default

    return (
        <form className="filters container">
            <h2 className="subheading text-left pad-3">Filters<a className="hide-on-webview" href="#" id="toggle-filter"><i className="fas fa-filter"></i></a>
            </h2>

            <article id="filter-options" className="filter-options hidden-on-mobile-view">
                <fieldset className="">
                    <legend className="pad-top-10 font-bold">Flone Assured</legend>
                    <label className="switch">
                        <input type="checkbox" value={filters.isFloneAssured} defaultChecked={true} onChange={handleFloneAssuredChange} />
                        <span className="slider round"></span>
                    </label>
                    <img src={verifiedImage} className="verified-image-filter" alt="" />
                </fieldset>
                <fieldset>
                    <legend className="pad-top-10 font-bold">Filter By</legend>
                    <input type="text" onKeyUp={handleQuery} />
                </fieldset>
            </article>
        </form>
    )
}

export default Filters