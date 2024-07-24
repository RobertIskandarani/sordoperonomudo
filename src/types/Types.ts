export interface IconProps {
  className?: string;
}

export interface Categoria {
  id: string;
  nombre: string;
  slug: string;
  imagen: string;
  color: string;
  otrasCategorias: {
    id: string;
  }[];
}

export interface Invitado {
  apellido: string;
  nombre: string;
  imagen?: string;
  prefijo?: string;
  descripcion: string;
}

export interface Episodio {
  numero: string;
  portada: string;
  color: string;
  titulo: string;
  categorias: string[];
  invitados: Invitado[];
  descripcion: string;
  transcripcion: string;
  links: {
    spotify: string;
    youtube: string;
    apple: string;
    amazon: string;
    google: string;
  };
}
