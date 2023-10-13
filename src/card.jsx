const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const { img, product, price, rating, description, alt } = props;
  return (
    <div className="card">
      <img src={img} alt={alt} />

      <div className="footer">
        <b className="product">{product}</b>
        <p className="price">Price:{price}</p>
        <p className="rating">Rating:{rating}</p>
        <p className="desc">{description}</p>
        <i className="last-footer">Add to Chart</i>
      </div>
    </div>
  );
};

export default Card;
