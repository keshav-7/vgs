import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showModal, setShowModal] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false); // Add to useState

  // Add to useEffect or standalone
  useEffect(() => {
    const handleScrollEffect = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);  

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = ['home', 'products', 'why', 'testimonials', 'faq', 'contact'];
  //     const scrollY = window.scrollY;
  //     sections.forEach(section => {
  //       const el = document.getElementById(section);
  //       if (el && el.offsetTop - 100 < scrollY && scrollY < el.offsetTop + el.offsetHeight) {
  //         setActiveSection(section);
  //       }
  //     });
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <img src="src/assets/logo.png" alt="VGS Group" className="logo-img" />
          </div>
          
          {/* Desktop Nav */}
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {['home', 'products', 'why', 'testimonials', 'faq', 'contact'].map(link => (
              <li key={link}>
                <a 
                  href={`#${link}`} 
                  className={`nav-link ${activeSection === link ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link);
                    setMenuOpen(false);
                  }}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <button onClick={() => setShowModal(true)} className="cta-btn">
                ☎️ 879520995
              </button>
            </li>
          </ul>
          
          {/* Hamburger */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="hero-title">VGS Sleep & Living</h1>
          <p className="hero-subtitle">Premium Blankets • Bed Sheets • Mats • Mattresses & More</p>
          <p className="hero-tagline">Believe in Quality</p>
          <button className="hero-cta" onClick={() => scrollToSection('products')}>
            View Collection
          </button>
          <div className="hero-stats">
            <span>Fast Sitamarhi Delivery</span>
            <span>879520995</span>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="products">
        <h2>Our Collection</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-img">🛏️</div>
            <h3>Blankets</h3>
            <p>Premium quality, soft & warm. Starting ₹999</p>
          </div>
          <div className="product-card">
            <div className="product-img">🛀</div>
            <h3>Bed Sheets</h3>
            <p>King/Queen/Double sizes. Starting ₹499</p>
          </div>
          <div className="product-card">
            <div className="product-img">🛌</div>
            <h3>Mattresses</h3>
            <p>Foam & Spring, 5-year warranty. Starting ₹4999</p>
          </div>
          <div className="product-card">
            <div className="product-img">🧘</div>
            <h3>Mats</h3>
            <p>Door mats, pooja mats. Starting ₹299</p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="why">
        <h2>Why VGS?</h2>
        <div className="features">
          <div className="feature">
            <h3>Quality First</h3>
            <p>Handpicked fabrics, tested for durability.</p>
          </div>
          <div className="feature">
            <h3>Fast Delivery</h3>
            <p>Sitamarhi & nearby areas, home delivery.</p>
          </div>
          <div className="feature">
            <h3>Trusted Local</h3>
            <p>Serving Sitamarhi since years.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <h2>Happy Customers</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"Excellent blankets, true quality!"</p>
            <span>- Local Customer, Puri</span>
          </div>
          <div className="testimonial">
            <p>"Best bed sheets in Sitamarhi."</p>
            <span>- Satisfied Buyer</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq">
        <h2>Frequently Asked</h2>
        <div className="faq-item">
          <h4>Home delivery available?</h4>
          <p>Yes, free in Sitamarhi area.</p>
        </div>
        <div className="faq-item">
          <h4>Payment methods?</h4>
          <p>Cash on delivery, UPI, bank transfer.</p>
        </div>
        <div className="faq-item">
          <h4>Exchange policy?</h4>
          <p>7 days no-questions return.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h2>Contact VGS</h2>
            <p>Get in touch for orders & queries</p>
          </div>
          
          <div className="contact-content">
            {/* Phone */}
            <div className="contact-item">
              <div className="contact-icon">☎️</div>
              <div>
                <h3>879520995</h3>
                <p>8210792425</p>
              </div>
            </div>
            
            {/* Location */}
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Dr Munshi Kumar Building</h3>
                <p>Bata Gali, Puri, Sitamarhi</p>
              </div>
            </div>
            
            {/* WhatsApp CTA */}
            <div className="whatsapp-cta">
              <a href="https://wa.me/91879520995" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
                WhatsApp Order ☀️
              </a>
            </div>
          </div>
          
          {/* Payment methods */}
          <div className="payment-methods">
            <span>Cash on Delivery</span>
            <span>UPI</span>
            <span>Bank Transfer</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <span>© 2026 VGS Sleep & Living</span>
          <span>Believe in Quality ☀️</span>
        </div>
      </footer>


      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>Order via WhatsApp</h3>
            <p>Share your requirements!</p>
            <a href="https://wa.me/91879520995" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">Chat Now 879520995</a>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
