import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-yellow-300 p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">Online Shopping System</h1>
    <div className="space-x-4 flex items-center">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/login" className="hover:underline">Login</Link>
      <Link to="/register" className="hover:underline">Register</Link>

      <Link to="/cart" className="flex items-center space-x-1 hover:underline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m1-17h-6a1 1 0 00-1 1v1h8v-1a1 1 0 00-1-1z"
          />
        </svg>
        <span>Cart</span>
      </Link>
    </div>
  </nav>
);

export default Navbar;
