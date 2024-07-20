import type IconProps from '../../types/IconProps';

export default function VoiceIcon({ className }: IconProps) {
  return (
    <svg
      viewBox='0 0 100 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <rect width='100' height='100' fill='url(#pattern0_97_53)' />
      <defs>
        <pattern
          id='pattern0_97_53'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0_97_53' transform='scale(0.01)' />
        </pattern>
        <image
          id='image0_97_53'
          width='100'
          height='100'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
}
