import '../style/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="home">
      {/* HERO SECTION */}
      <div className="home-hero">
        <div className="home-hero-overlay"></div>
        <div className="home-hero-content">
          <div className="hero-badge">Bem-vindo</div>
          <h1 className="hero-title">
            <span className="title-line">Bar do</span>
            <span className="title-line highlight">Bispo</span>
          </h1>
          <p className="hero-subtitle">
            O melhor ponto para curtir bons drinks, boa música e momentos
            inesquecíveis. Uma experiência única em cada visita.
          </p>

          <div className="home-actions">
            <Link to="/cardapio" className="btn btn-primary">
              <span>Ver Cardápio</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            <Link to="/contact" className="btn btn-outline">
              Reservar Mesa
            </Link>
          </div>
        </div>
        
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>

      {/* SOBRE SECTION */}
      <div className="home-about">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Sobre Nós</span>
            <h2 className="section-title">Uma Experiência Única</h2>
          </div>
          
          <div className="about-content-grid">
            <div className="about-text">
              <p className="lead-text">
                O <strong>Bar do Bispo</strong> é referência em drinks artesanais, 
                ambiente aconchegante e atendimento de qualidade.
              </p>
              <p>
                Um espaço cuidadosamente projetado para quem aprecia boa companhia 
                e experiências únicas. Cada detalhe foi pensado para proporcionar 
                momentos memoráveis em um ambiente sofisticado e acolhedor.
              </p>
              <Link to="/about" className="link-arrow">
                Conheça nossa história
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Drinks Únicos</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Anos de Experiência</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DESTAQUES SECTION */}
      <div className="home-features">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Diferenciais</span>
            <h2 className="section-title">O Que Nos Torna Especiais</h2>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                  <path d="M2 17L12 22L22 17"/>
                  <path d="M2 12L12 17L22 12"/>
                </svg>
              </div>
              <h3>Drinks Exclusivos</h3>
              <p>Coquetéis autorais preparados por bartenders experientes com ingredientes premium.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18V5L21 3V16"/>
                  <circle cx="6" cy="18" r="3"/>
                  <circle cx="18" cy="16" r="3"/>
                </svg>
              </div>
              <h3>Música Ambiente</h3>
              <p>Playlist cuidadosamente selecionada para criar o clima perfeito em cada momento.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"/>
                  <path d="M6 6H18"/>
                  <path d="M6 10H18"/>
                  <path d="M6 14H12"/>
                </svg>
              </div>
              <h3>Petiscos Premium</h3>
              <p>Combinações ideais preparadas com ingredientes selecionados para acompanhar sua bebida.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CHAMADA FINAL */}
      <div className="home-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Venha Viver Essa Experiência</h2>
            <p>Reserve sua mesa e descubra por que somos o bar mais exclusivo da cidade.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-large">
                Fale Conosco
              </Link>
              <Link to="/cardapio" className="btn btn-outline btn-large">
                Ver Cardápio Completo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
