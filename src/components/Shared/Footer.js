import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer grey-background">
            <article className="container">
                <ul className="social flex">
                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                </ul>
                <nav aria-label="Legal">
                    <ul className="legal flex">
                        <li><a href="#">Terms of Use 1</a></li><span>&nbsp;|&nbsp;</span>
                        <li><a href="#">Privacy Policy</a></li><span>&nbsp;|&nbsp;</span>
                        <li><a href="#">Accessibility Policy</a></li>
                    </ul>
                </nav>
                <p className="copyright text-right"><strong>Flone.</strong> &copy; Copyright, 2021.</p>
            </article>
        </footer>
    )
}

export default Footer