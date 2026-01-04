import { useState, FormEvent } from 'react'
import { useAuth } from '../context/AuthContext'
import '../style/Admin.css'

interface MenuItem {
  id: number
  name: string
  price: string
  image: string
  category: string
  description: string
}

const Admin = () => {
  const { logout } = useAuth()
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: 'Whisky Old Fashioned',
      price: 'R$ 32,00',
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800&auto=format&fit=crop',
      category: 'Drinks',
      description: 'Whisky bourbon, açúcar mascavo e bitter.'
    },
    {
      id: 2,
      name: 'Gin Tônica Premium',
      price: 'R$ 28,00',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop',
      category: 'Drinks',
      description: 'Gin premium, água tônica e especiarias.'
    }
  ])

  const [newItem, setNewItem] = useState<Omit<MenuItem, 'id'>>({
    name: '',
    price: '',
    image: '',
    category: '',
    description: ''
  })

  const [editingId, setEditingId] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewItem({ ...newItem, [name]: value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    if (editingId) {
      // Editar item existente
      setMenuItems(menuItems.map(item =>
        item.id === editingId ? { id: editingId, ...newItem } : item
      ))
      setEditingId(null)
    } else {
      // Adicionar novo item
      const newId = menuItems.length > 0 ? Math.max(...menuItems.map(item => item.id)) + 1 : 1
      setMenuItems([...menuItems, { id: newId, ...newItem }])
    }
    
    setNewItem({ name: '', price: '', image: '', category: '', description: '' })
  }

  const handleEdit = (item: MenuItem) => {
    setNewItem({
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category,
      description: item.description
    })
    setEditingId(item.id)
  }

  const handleDelete = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este item?')) {
      setMenuItems(menuItems.filter(item => item.id !== id))
    }
  }

  const handleCancel = () => {
    setNewItem({ name: '', price: '', image: '', category: '', description: '' })
    setEditingId(null)
  }

  return (
    <div className="admin-page">
      <div className="admin-container">
        {/* HEADER */}
        <div className="admin-header">
          <div className="admin-header-content">
            <div>
              <h1 className="admin-title">Painel Administrativo</h1>
              <p className="admin-subtitle">Gerencie o cardápio do Bar do Bispo</p>
            </div>
            <button onClick={logout} className="logout-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Sair
            </button>
          </div>
        </div>

        <div className="admin-content">
          {/* FORM */}
          <div className="admin-form-section">
            <div className="admin-card">
              <h2 className="section-title">
                {editingId ? 'Editar Item' : 'Adicionar Novo Item'}
              </h2>
              
              <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nome do Item</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={newItem.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Whisky Old Fashioned"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="price">Preço</label>
                    <input
                      id="price"
                      type="text"
                      name="price"
                      value={newItem.price}
                      onChange={handleInputChange}
                      placeholder="Ex: R$ 32,00"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="category">Categoria</label>
                    <select
                      id="category"
                      name="category"
                      value={newItem.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Selecione uma categoria</option>
                      <option value="Drinks">Drinks</option>
                      <option value="Comidas">Comidas</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="image">URL da Imagem</label>
                    <input
                      id="image"
                      type="url"
                      name="image"
                      value={newItem.image}
                      onChange={handleInputChange}
                      placeholder="https://..."
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="description">Descrição</label>
                  <textarea
                    id="description"
                    name="description"
                    value={newItem.description}
                    onChange={handleInputChange}
                    placeholder="Descreva o item..."
                    rows={3}
                    required
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-primary">
                    {editingId ? 'Salvar Alterações' : 'Adicionar Item'}
                  </button>
                  {editingId && (
                    <button type="button" onClick={handleCancel} className="btn-secondary">
                      Cancelar
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* LIST */}
          <div className="admin-list-section">
            <div className="admin-card">
              <h2 className="section-title">
                Itens do Cardápio ({menuItems.length})
              </h2>
              
              {menuItems.length === 0 ? (
                <div className="empty-state">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"/>
                    <path d="M6 6H18"/>
                    <path d="M6 10H18"/>
                    <path d="M6 14H12"/>
                  </svg>
                  <p>Nenhum item cadastrado</p>
                  <span>Adicione itens usando o formulário acima</span>
                </div>
              ) : (
                <div className="items-grid">
                  {menuItems.map(item => (
                    <div key={item.id} className="item-card">
                      <div className="item-image">
                        <img src={item.image} alt={item.name} />
                        <div className="item-category-badge">{item.category}</div>
                      </div>
                      <div className="item-content">
                        <h3 className="item-name">{item.name}</h3>
                        <p className="item-price">{item.price}</p>
                        <p className="item-description">{item.description}</p>
                        <div className="item-actions">
                          <button onClick={() => handleEdit(item)} className="btn-edit">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                            </svg>
                            Editar
                          </button>
                          <button onClick={() => handleDelete(item.id)} className="btn-delete">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="3 6 5 6 21 6"/>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                            </svg>
                            Excluir
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
