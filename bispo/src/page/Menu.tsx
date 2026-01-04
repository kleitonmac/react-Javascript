import { useState } from 'react'
import '../style/Menu.css'

interface MenuItem {
  id: number
  name: string
  price: string
  image: string
  category: string
  description: string
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Whisky Old Fashioned',
    price: 'R$ 32,00',
    image:
      'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800&auto=format&fit=crop',
    category: 'Drinks',
    description: 'Whisky bourbon, açúcar mascavo e bitter.'
  },
  {
    id: 2,
    name: 'Gin Tônica Premium',
    price: 'R$ 28,00',
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop',
    category: 'Drinks',
    description: 'Gin premium, água tônica e especiarias.'
  },
  {
    id: 3,
    name: 'Hambúrguer Artesanal',
    price: 'R$ 35,00',
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
    category: 'Comidas',
    description: 'Carne artesanal, queijo e pão brioche.'
  },
  {
    id: 4,
    name: 'Batata com Cheddar',
    price: 'R$ 25,00',
    image:
      'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=800&auto=format&fit=crop',
    category: 'Comidas',
    description: 'Batata frita crocante com cheddar.'
  }
]

const Menu = () => {
  const [category, setCategory] = useState('Todos')
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const filteredItems =
    category === 'Todos'
      ? menuItems
      : menuItems.filter(item => item.category === category)

  return (
    <section className="menu">
      <h1 className="menu-title">Cardápio</h1>

      {/* FILTRO */}
      <div className="menu-filter">
        <button onClick={() => setCategory('Todos')}>Todos</button>
        <button onClick={() => setCategory('Drinks')}>Drinks</button>
        <button onClick={() => setCategory('Comidas')}>Comidas</button>
      </div>

      {/* GRID */}
      <div className="menu-grid">
        {filteredItems.map(item => (
          <div
            className="menu-card"
            key={item.id}
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.image} alt={item.name} />
            <div className="menu-card-content">
              <h3>{item.name}</h3>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <img src={selectedItem.image} alt={selectedItem.name} />
            <h2>{selectedItem.name}</h2>
            <p>{selectedItem.description}</p>
            <strong>{selectedItem.price}</strong>

            <a
              href={`https://wa.me/5599999999999?text=Olá, gostaria de pedir: ${selectedItem.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Pedir no WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

export default Menu
