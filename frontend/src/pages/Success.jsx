import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
      <p className="text-lg mb-6">Thank you for your purchase. Your order has been placed successfully.</p>
      <Link to="/" className="text-blue-500 underline">Go back to Home</Link>
    </div>
  );
};

export default Success;
