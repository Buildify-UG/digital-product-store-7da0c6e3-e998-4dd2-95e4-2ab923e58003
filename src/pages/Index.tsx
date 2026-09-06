import { ShoppingCart, Heart, Star, Search } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Floral Coloring Book',
    category: 'Coloring Books',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: 'Professional Resume Template',
    category: 'Templates',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1586281380349-2be2979c4f85?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: 'Premium Gift Card - $50',
    category: 'Gift Cards',
    price: 50.00,
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=400&fit=crop',
    rating: 5.0,
    reviews: 42
  },
  {
    id: 4,
    name: 'Mandala Coloring Book',
    category: 'Coloring Books',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1578926078328-123456789012?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 98
  },
  {
    id: 5,
    name: 'Wedding Invitation Template',
    category: 'Templates',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 67
  },
  {
    id: 6,
    name: 'Gift Card - $25',
    category: 'Gift Cards',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1556742212-5b321f3c261d?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 156
  },
  {
    id: 7,
    name: 'Business Card Template',
    category: 'Templates',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 45
  },
  {
    id: 8,
    name: 'Animals Coloring Book',
    category: 'Coloring Books',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1578926078328-123456789013?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 112
  }
];

export default function Index() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState(0);

  const categories = ['All', 'Templates', 'Coloring Books', 'Gift Cards'];
  
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">DesignHub</div>
          <div className="hidden md:flex flex-1 mx-8 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search templates, coloring books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-secondary rounded-lg transition">
              <Heart className="w-5 h-5 text-foreground" />
            </button>
            <button className="relative p-2 hover:bg-secondary rounded-lg transition">
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {cart > 0 && (
                <span className="absolute top-0 right-0 bg-destructive text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Digital Products</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">Templates, coloring books, and gift cards for every occasion</p>
          <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4 flex gap-4 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-muted'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-48 bg-muted overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
                <div className="absolute top-2 right-2 bg-destructive text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                  Popular
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-accent text-accent'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
                  <button
                    onClick={() => setCart(cart + 1)}
                    className="bg-primary text-primary-foreground p-2 rounded-lg hover:opacity-90 transition"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found matching your search.</p>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="bg-secondary py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="font-semibold text-foreground mb-2">Instant Download</h3>
              <p className="text-muted-foreground">Get your products immediately after purchase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔒</div>
              <h3 className="font-semibold text-foreground mb-2">Secure Checkout</h3>
              <p className="text-muted-foreground">Safe and encrypted payment processing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💯</div>
              <h3 className="font-semibold text-foreground mb-2">Money-Back Guarantee</h3>
              <p className="text-muted-foreground">30-day satisfaction guarantee on all products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition">About Us</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Careers</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition">Help Center</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Contact Us</a></li>
                <li><a href="#" className="hover:opacity-100 transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Refund Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition">Twitter</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Instagram</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground opacity-20 pt-8 text-center text-sm opacity-60">
            <p>&copy; 2024 DesignHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
