interface Props {
  color: string;
}

export default function WaveFloor({ color }: Props) {
  return (
    <span className='w-full flex drop-shadow-[0px_-4px_2px_rgba(0,0,0,.25)]'>
      <span id='wave' className={`h-20 w-full bg-[${color}]`}></span>
    </span>
  );
}
