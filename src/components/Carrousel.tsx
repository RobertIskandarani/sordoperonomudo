interface Categorias {
  id: number;
  category: string;
  href: string;
  image: string;
  color: string;
}

interface Props {
  items: Categorias[];
  className?: string;
}

export default function Carrousel({ items, className = '' }: Props) {
  return (
    <div
      className={`${className} w-full flex flex-row gap-5 overflow-x-scroll overflow-y-auto`}
    >
      {items.map((item) => (
        <a
          className='p-5 rounded-3xl bg-[var(--background-color)] min-w-60 w-60 max-w-60 flex flex-col gap-5 justify-start items-center relative z-[1]'
          href={item.href}
          key={item.id}
        >
          <div
            className='w-3/4 rounded-full aspect-square flex justify-center items-center'
            style={{ backgroundColor: `var(--${item.color})` }}
          >
            <img src={item.image} alt={item.category} />
          </div>
          <h1>{item.category}</h1>
          <span
            className='px-4 py-2 rounded-xl'
            style={{ backgroundColor: `var(--${item.color})` }}
          >
            Escuchar
          </span>
        </a>
      ))}
    </div>
  );
}
