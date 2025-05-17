import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cartItems = location.state?.cartItems || {};
  const products = location.state?.products || {};
  const [paymentMethod, setPaymentMethod] = useState('credit_card');

  const totalPrice = Object.entries(cartItems).reduce((total, [id, qty]) => {
    return total + products[id].price * qty;
  }, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {Object.keys(cartItems).length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          <ul className="mb-6">
            {Object.entries(cartItems).map(([id, qty]) => (
              <li key={id} className="flex items-center border-b py-4">
                <img src={products[id].image} alt={products[id].name} className="w-20 h-20 object-cover mr-4" />
                <div>
                  <h2 className="font-semibold">{products[id].name}</h2>
                  <p>Quantity: {qty}</p>
                  <p>Subtotal: ${(products[id].price * qty).toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="text-right font-bold text-xl mb-6">
            Total: ${totalPrice.toFixed(2)}
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2">Choose Payment Method:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2"
            >
              <option value="credit_card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="alipay">ApplePay</option>
            </select>
          </div>

          <button
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            onClick={() => navigate('/success')}
          >
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
