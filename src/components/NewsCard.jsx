export default function NewsCard({ article }) {
  const { title, date, excerpt, image, category } = article

  return (
    <article
      className="group card-base flex flex-col h-full"
      aria-label={`Article: ${title}`}
    >
      <div className="relative overflow-hidden h-52 bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover
                     transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-gunner-red text-white
                         text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow">
          {category}
        </span>
      </div>

      <div className="flex flex-col flex-grow p-5">
        <p className="text-xs text-gray-400 font-medium mb-2 uppercase tracking-wide">
          {date}
        </p>
        <h3 className="font-bold text-gray-900 text-lg leading-snug mb-3 group-hover:text-gunner-red
                       transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-grow">
          {excerpt}
        </p>
        <a
          href="#"
          className="btn-outline mt-4 self-start text-sm py-2 px-4"
          onClick={(e) => e.preventDefault()}
          aria-label={`Read more about ${title}`}
        >
          Read More →
        </a>
      </div>
    </article>
  )
}