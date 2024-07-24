export interface IconProps {
  className?: string;
}

export interface Categoria {
  id: string;
  nombre: string;
  slug: string;
  imagen: string;
  color: string;
  'otras-categorias': {
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
