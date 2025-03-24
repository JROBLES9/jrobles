export interface Skill {
  id: string
  name: string
  icon: string
  level?: number // Porcentaje de dominio (0-100)
  category?: string // Categoría de la habilidad (frontend, backend, etc.)
}

