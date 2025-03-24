export interface Achievement {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  image: string
  credential?: string // URL opcional para verificar la credencial
}

