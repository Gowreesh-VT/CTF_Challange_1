import Head from 'next/head';
import ProductCard from '../components/ProductCard';

// Dummy product data for the shopping website
const products = [
  {
    id: 1,
    name: 'Chocolate Chip Cookies',
    price: 4.99,
    image: '🍪',
    description: 'Classic homemade chocolate chip cookies'
  },
  {
    id: 2,
    name: 'Oatmeal Raisin Cookies',
    price: 3.99,
    image: '🍪',
    description: 'Healthy and delicious oatmeal cookies'
  },
  {
    id: 3,
    name: 'Double Chocolate Cookies',
    price: 5.49,
    image: '🍪',
    description: 'Rich double chocolate indulgence'
  },
  {
    id: 4,
    name: 'Peanut Butter Cookies',
    price: 4.49,
    image: '🥜',
    description: 'Creamy peanut butter perfection'
  },
  {
    id: 5,
    name: 'Sugar Cookies',
    price: 3.49,
    image: '🍪',
    description: 'Sweet and simple sugar cookies'
  },
  {
    id: 6,
    name: 'Gingerbread Cookies',
    price: 4.99,
    image: '🍪',
    description: 'Spiced gingerbread delights'
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Cookie Shop - Delicious Homemade Cookies</title>
        <meta name="description" content="Buy the best homemade cookies online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        {/* Header Section */}
        <header className="header">
          <h1>🍪 Cookie Shop</h1>
          <p className="tagline">Freshly Baked, Delivered Daily</p>
        </header>

        {/* Navigation */}
        <nav className="nav">
          <a href="/" className="nav-link active">Home</a>
          <button className="cart-button">
            🛒 Cart (0)
          </button>
        </nav>

        {/* Products Grid */}
        <section className="products-section">
          <h2>Our Delicious Cookies</h2>
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2026 Cookie Shop. All rights reserved.</p>
          <p className="footer-note">Enjoy our freshly baked cookies!</p>
        </footer>
      </main>
    </>
  );
}
