export interface ProjectLinks {
  demo?: string
  repo?: string
  docs?: string
}

export interface Project {
  slug: string
  title: string
  excerpt: string
  description: string
  tech: string[]
  links?: ProjectLinks
  lessons?: string[]
  images?: string[]
  year?: number
  featured?: boolean
}
