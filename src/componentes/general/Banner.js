import img1 from "../../imgs/chocolate.jpg";
import img2 from "../../imgs/confiteria.jpg";
import img3 from "../../imgs/galleta.jpg";

const Banner = () => {
    return (
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={img1} class="d-block w-100" alt=""/>

                    <div className="container">
                        <div className="carousel-caption text-start">
                            <p><a className="btn btn-lg btn-warning" href="/">Chocolates</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <img src={img2} class="d-block w-100" alt=""/>

                    <div className="container">
                        <div className="carousel-caption">
                            <p><a className="btn btn-lg btn-primary" href="/">Confitería</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <img src= {img3} class="d-block w-100" alt=""/>

                    <div className="container">
                        <div className="carousel-caption text-end">
                            <p><a className="btn btn-lg btn-light" href="/">Galletas</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Banner;