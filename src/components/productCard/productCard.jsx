import "./productCard.css";

const ProductCard = ({ title = "Makanan", imgSrc = "makanan.jpg", onClick=null }) => {
    return (
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center" onClick={onClick}>
            <div className="card-product">
                <h5>{title}</h5>
                <div className="card-img">
                    <img src={imgSrc} alt={title} />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
