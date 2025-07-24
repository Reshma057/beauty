import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAdd }) => (
  <div className="border rounded-lg p-4 shadow">
    <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
    </Link>
    <p className="text-pink-600 font-bold">${product.price}</p>
    <button
      onClick={() => onAdd(product)}
      className="bg-pink-500 text-white px-4 py-2 mt-2 rounded hover:bg-pink-600"
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
