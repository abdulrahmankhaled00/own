export default function BoardOfDirectors() {
  const directors = [
    { name: "Mr. Reda Own", position: "Chairman" },
    { name: "Mr. Ahmed Own", position: "Vice-President" },
    { name: "Mr. Mohamed Own", position: "Board Member" },
    { name: "Mr. Ehab Own", position: "Board Member" },
  ]

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-8">Board of Directors</h2>
          <div className="w-16 h-px bg-stone-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {directors.map((director, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 bg-stone-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-medium text-stone-800 mb-2">{director.name}</h3>
              <p className="text-stone-600">{director.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
