const Products = () => {
  const sampleProducts = [
    { id: 1, name: 'T-Shirt', price: '$20' },
    { id: 2, name: 'Shoes', price: '$50' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4 font-bold">Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {sampleProducts.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h3 className="text-lg">{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
