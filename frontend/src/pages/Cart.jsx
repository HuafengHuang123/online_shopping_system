import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const products = {
  1: { name: 'DJI mini 3', price: 959.0, image: '/images/DJI mini3.jpg' },
  2: { name: 'DJI Neo', price: 279.49, image: '/images/DJI neo.jpg' },
  3: { name: 'Apple iPhone16', price: 1699.0, image: '/images/iPhone16.jpg' },
  4: { name: 'DJI Osmo Action 4', price: 468.0, image: '/images/DJI osmo.jpg' },
  5: { name: 'Apple iPhone16 Pro Max', price: 2247.0, image: '/images/iPhone proMax.jpg' },
  6: { name: 'DJI RS3 Mini', price: 349.0, image: '/images/DJI RS3.jpg' },
};

const Cart = () => {
  const [cartItems, setCartItems] = useState({1: 1,3: 2,});
  const navigate = useNavigate();


  const removeItem = (id) => {
    const updatedCart = { ...cartItems };
    delete updatedCart[id];
    setCartItems(updatedCart);
  };

  const totalPrice = Object.entries(cartItems).reduce((total, [id, qty]) => {
    return total + products[id].price * qty;
  }, 0);

  const clearCart = () => setCartItems({});

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Link
          to="/"
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {Object.keys(cartItems).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="w-full mb-6 border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Product</th>
                <th className="text-left py-2">Quantity</th>
                <th className="text-left py-2">Price</th>
                <th className="text-left py-2">Subtotal</th>
                <th className="text-left py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(cartItems).map(([id, qty]) => (
                <tr key={id} className="border-b">
                  <td className="py-2 flex items-center space-x-4">
                    <img
                      src={products[id].image}
                      alt={products[id].name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span>{products[id].name}</span>
                  </td>
                  <td className="py-2">{qty}</td>
                  <td className="py-2">${products[id].price.toFixed(2)}</td>
                  <td className="py-2">${(products[id].price * qty).toFixed(2)}</td>
                  <td className="py-2">
                    <button
                      onClick={() => removeItem(id)}
                      className="text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-right font-bold text-xl mb-6">
            Total: ${totalPrice.toFixed(2)}
          </div>

          <div className="flex justify-between">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
            <button
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            onClick={() => navigate('/checkout', { state: { cartItems, products } })}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
