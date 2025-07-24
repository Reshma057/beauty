import { useParams } from 'react-router-dom';
import products from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div className="p-6">Product not found.</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-60 mb-4" />
      <p><strong>Brand:</strong> {product.brand}</p>
      <p className="text-pink-600 font-bold text-lg mb-2">${product.price}</p>
      <p className="text-gray-800">{product.description}</p>
    </div>
  );
};

export default ProductDetails;
