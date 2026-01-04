import '../style/About.css'

const About = () => {
  return (
    <section className="about">
      {/* HERO SECTION */}
      <div className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="about-badge">Nossa História</span>
            <h1 className="about-hero-title">
              Tradição, Qualidade e <span className="highlight">Experiência</span>
            </h1>
            <p className="about-hero-subtitle">
              Reunidas em um só lugar para criar momentos inesquecíveis
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="about-main">
        <div className="container">
          <div className="about-content-grid">
            {/* TEXT CONTENT */}
            <div className="about-text-content">
              <div className="about-section">
                <h2 className="about-section-title">Nossa Origem</h2>
                <p className="about-lead">
                  Fundado em <strong>2025</strong>, o <strong>Bar do Bispo</strong> nasceu
                  com o propósito de oferecer muito mais do que bebidas e comidas de
                  qualidade.
                </p>
                <p>
                  Nosso objetivo é criar um ambiente acolhedor, moderno e seguro, 
                  onde amigos e famílias possam viver momentos únicos. Cada visita 
                  é uma oportunidade de criar memórias especiais em um espaço 
                  cuidadosamente projetado.
                </p>
              </div>

              <div className="about-section">
                <h2 className="about-section-title">Nossa Filosofia</h2>
                <p>
                  Desde o início, investimos em um cardápio cuidadosamente elaborado,
                  combinando drinks autorais, clássicos consagrados e pratos preparados
                  com ingredientes selecionados. Cada detalhe foi pensado para
                  proporcionar uma experiência completa, que une sabor, conforto e
                  bom atendimento.
                </p>
                <p>
                  Acreditamos que um bar vai além de servir bebidas - é um espaço 
                  de conexão, celebração e descoberta de novos sabores.
                </p>
              </div>

              <div className="about-section">
                <h2 className="about-section-title">Nosso Compromisso</h2>
                <p>
                  Nosso compromisso é com a excelência no atendimento, a valorização
                  da cultura local e a constante evolução dos nossos serviços. Mais
                  do que um bar, somos um ponto de encontro para celebrar boas
                  histórias.
                </p>
                <p>
                  Estamos sempre em busca de inovação, mantendo a tradição e 
                  qualidade que nos tornaram referência na cidade.
                </p>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="about-sidebar">
              <div className="about-card">
                <div className="about-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                    <path d="M2 17L12 22L22 17"/>
                    <path d="M2 12L12 17L22 12"/>
                  </svg>
                </div>
                <h3>Missão</h3>
                <p>Proporcionar experiências únicas através de drinks artesanais, ambiente acolhedor e atendimento excepcional.</p>
              </div>

              <div className="about-card">
                <div className="about-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1004 1.98232 16.07 2.85999"/>
                    <path d="M22 4L12 14.01L9 11.01"/>
                  </svg>
                </div>
                <h3>Visão</h3>
                <p>Ser reconhecido como o bar mais exclusivo e inovador da região, referência em qualidade e experiência.</p>
              </div>

              <div className="about-card">
                <div className="about-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"/>
                  </svg>
                </div>
                <h3>Valores</h3>
                <p>Excelência, inovação, respeito, qualidade e compromisso com a satisfação dos nossos clientes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="about-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">2025</div>
              <div className="stat-label">Ano de Fundação</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">500+</div>
              <div className="stat-label">Drinks Únicos</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Clientes Satisfeitos</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">98%</div>
              <div className="stat-label">Avaliação Positiva</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
