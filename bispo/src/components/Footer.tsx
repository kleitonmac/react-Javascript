import '../style/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* LOGO E DESCRIÇÃO */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">🍺</div>
              <div className="footer-logo-text">
                <h3>Bar do Bispo</h3>
                <p>Drinks & Petiscos</p>
              </div>
            </div>
            <p className="footer-description">
              O melhor ponto para curtir bons drinks, boa música e momentos
              inesquecíveis. Uma experiência única em cada visita.
            </p>
            <div className="footer-social">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/5599999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>
                </svg>
              </a>
            </div>
          </div>

          {/* LINKS RÁPIDOS */}
          <div className="footer-section">
            <h4 className="footer-title">Links Rápidos</h4>
            <nav className="footer-nav">
              <Link to="/">Início</Link>
              <Link to="/cardapio">Cardápio</Link>
              <Link to="/sobre">Sobre Nós</Link>
              <Link to="/contato">Contato</Link>
            </nav>
          </div>

          {/* CONTATO */}
          <div className="footer-section">
            <h4 className="footer-title">Contato</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Rua Principal, 123 – Centro</span>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>(99) 99999-9999</span>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Terça a Domingo – 18h às 02h</span>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              © {currentYear} <strong>Bar do Bispo</strong>. Todos os direitos reservados.
            </p>
            <p className="footer-made">
              Feito com <span className="heart">❤️</span> para momentos especiais
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
