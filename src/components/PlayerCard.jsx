const badgeClass = {
  Goalkeeper: 'badge-gk',
  Defender:   'badge-def',
  Midfielder: 'badge-mid',
  Forward:    'badge-fwd',
}

export default function PlayerCard({ player }) {
  const { name, number, position, nationality, image } = player

  return (
    <article
      className="group bg-white rounded-2xl shadow-md overflow-hidden
                 transition-all duration-300 hover:-translate-y-2
                 hover:shadow-card-hover hover:ring-2 hover:ring-gunner-red"
      aria-label={`${name}, No. ${number}, ${position}`}
    >
      <div className="relative overflow-hidden bg-gray-100" style={{ height: '280px' }}>
        <img
          src={image}
          alt={`${name} headshot`}
          className="w-full h-full object-cover object-top
                     transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-gunner-red
                        flex items-center justify-center shadow-md">
          <span className="text-white font-extrabold text-xs leading-none">{number}</span>
        </div>
      </div>

      <div className="p-4 text-center">
        <h3 className="font-bold text-gray-900 text-base leading-tight mb-1">{name}</h3>
        <p className="text-xs text-gray-400 mb-2">{nationality}</p>
        <span className={badgeClass[position] ?? 'badge-gk'}>
          {position}
        </span>
      </div>
    </article>
  )
}