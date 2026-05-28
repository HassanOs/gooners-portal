export default function SectionHeader({
  title,
  subtitle,
  center  = true,
  light   = false,
  red     = false,
}) {
  const alignClass = center ? 'text-center' : 'text-left'
  const lineAlign  = center ? 'mx-auto'      : ''

  const titleColor = light ? 'text-white' : red ? 'text-gunner-red' : 'text-gray-900'
  const subColor   = light ? 'text-gray-300' : 'text-gray-500'

  return (
    <div className={`mb-10 ${alignClass}`}>
      <h2 className={`section-title ${titleColor}`}>{title}</h2>
      <span className={`title-underline ${lineAlign}`} aria-hidden="true" />
      {subtitle && (
        <p className={`mt-2 text-base md:text-lg ${subColor} max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}