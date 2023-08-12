const CardProduct = (product) => {
  return (
    <Link to={`/products/${product.id}`} key={product.id}>
      <div>
        <img src={product.imageUrl} alt="" />
        <h3>{product.name}</h3>
        <h4>{`R$ ${product.price}`}</h4>
      </div>
    </Link>
  );
};

export default CardProduct;