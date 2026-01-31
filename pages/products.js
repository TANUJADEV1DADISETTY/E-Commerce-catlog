export async function getServerSideProps() {
  const res = await fetch("http://localhost:3001/api/products");
  const products = await res.json();

  return { props: { products } };
}

export default function Products({ products }) {
  return (
    <div data-testid="product-list">
      <h1>Product Catalog</h1>

      {products.map((p) => (
        <div key={p.id} data-testid="product-item">
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}
