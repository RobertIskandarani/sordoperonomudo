interface Props {
  color: string;
  type?: number;
  shadow?: boolean;
  className?: string;
}

export default function WaveFloor({
  color,
  type = 1,
  shadow = true,
  className = '',
}: Props) {
  return (
    <span
      className={`${className} w-full flex ${
        shadow ? 'drop-shadow-[0px_-4px_2px_rgba(0,0,0,.25)]' : ''
      }`}
    >
      <span
        id={type === 1 ? 'wave' : 'wave-2'}
        className={`h-20 w-full bg-[${color}]`}
      ></span>
    </span>
  );
}
