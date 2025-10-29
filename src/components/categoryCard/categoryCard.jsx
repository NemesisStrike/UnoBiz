import "./categoryCard.css";

const CategoryCard = ({ title = "Makanan", count = "200 UMKM", imgSrc = "makanan.jpg" }) => {
    return (
        <div className="card-category">
          <img src={imgSrc} alt={title} />
          <div className="card-info card-abs">
            <div className="d-flex align-items-center justify-content-between">
              <h5>{title}</h5>
              <i className="bi bi-arrow-right"></i>
            </div>
            <p>{count}</p>
          </div>
        </div>
    );
};

export default CategoryCard;
