import { useParams, Link } from 'react-router-dom';

const products = {
  1: {
    name: 'DJI mini 3',
    description: 'Fly More Combo DJI RC with extended battery and camera',
    price: '$959.00',
    image: '/images/DJI mini3.jpg',
  },
  2: {
    name: 'DJI Neo',
    description: 'Mini Drone with 4K UHD Camera',
    price: '$279.49',
    image: '/images/DJI neo.jpg',
  },
  3: {
    name: 'Apple iPhone16',
    description: 'iPhone16 512GB Ultramarine',
    price: '$1,699.00',
    image: '/images/iPhone16.jpg',
  },
  4: {
    name: 'DJI Osmo Action 4',
    description: 'Standard Combo - 4K/120fps Camera',
    price: '$468.00',
    image: '/images/DJI osmo.jpg',
  },
  5: {
    name: 'Apple iPhone16 Pro Max',
    description: 'iPhone16 Pro Max 512GB Desert Titanium',
    price: '$2,247.00',
    image: '/images/iPhone proMax.jpg',
  },
  6: {
    name: 'DJI RS3 Mini',
    description: '3-Axis Mirrorless Gimbal Lightweight Stabilizer for Camera',
    price: '$349.00',
    image: '/images/DJI RS3.jpg',
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products[id];

  if (!product)
    return (
      <div className="text-center mt-10 text-red-600">Product not found</div>
    );

  return (
    <div className="max-w-2xl mx-auto p-6">
      
      <div className="mb-6">
        <Link
          to="/"
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          ← Back to Home
        </Link>
      </div>

      <img
        src={product.image}
        alt={product.name}
        className="w-full mb-4 rounded"
      />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <h2 className="text-2xl text-red-600 font-semibold mb-6">{product.price}</h2>

      <div className="flex gap-4">
        <button className="bg-yellow-300 text-black px-6 py-2 rounded hover:bg-green-600">
          Add to Cart
        </button>
        <button className="bg-orange-400 text-white px-6 py-2 rounded hover:bg-blue-600">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
