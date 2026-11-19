
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

type Destination = {
  id: number
  name: string
  location: string
  category: string
  description: string
  image: string
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Sigiriya',
    location: 'Central Province',
    category: 'Heritage',
    description: 'Explore the ancient rock fortress and its beautiful surroundings.',
    image: 'https://images.unsplash.com/photo-1588598198321-9735fd5b1c2d?w=900',
  },
  {
    id: 2,
    name: 'Ella',
    location: 'Uva Province',
    category: 'Nature',
    description: 'Enjoy green mountains, waterfalls and scenic train journeys.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900',
  },
  {
    id: 3,
    name: 'Mirissa',
    location: 'Southern Province',
    category: 'Beach',
    description: 'Relax on tropical beaches and enjoy the beautiful coastline.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900',
  },
  {
    id: 4,
    name: 'Kandy',
    location: 'Central Province',
    category: 'Culture',
    description: 'Discover Sri Lankan traditions, culture and history.',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=900',
  },
  {
    id: 5,
    name: 'Nuwara Eliya',
    location: 'Central Province',
    category: 'Nature',
    description: 'Experience cool weather, tea plantations and mountain views.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900',
  },
  {
    id: 6,
    name: 'Galle',
    location: 'Southern Province',
    category: 'Heritage',
    description: 'Walk through historic streets and explore the famous Galle Fort.',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=900',
  },
  {
    id: 7,
    name: 'Arugam Bay',
    location: 'Eastern Province',
    category: 'Beach',
    description: 'Enjoy surfing, beaches and a relaxed coastal atmosphere.',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=900',
  },
  {
    id: 8,
    name: 'Anuradhapura',
    location: 'North Central Province',
    category: 'Heritage',
    description: 'Explore ancient cities, historic monuments and sacred places.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=900',
  },
]

const categories = ['All', 'Beach', 'Nature', 'Heritage', 'Culture']

function Destinations() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const matchesSearch =
        destination.name.toLowerCase().includes(search.toLowerCase()) ||
        destination.location.toLowerCase().includes(search.toLowerCase())

      const matchesCategory =
        category === 'All' || destination.category === category

      return matchesSearch && matchesCategory
    })
  }, [search, category])

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-blue-700 px-6 py-16 text-center text-white">
        <p className="font-semibold uppercase tracking-widest text-blue-200">
          Discover Sri Lanka
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Explore Destinations
        </h1>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
          Find amazing places, discover new experiences and plan your
          next unforgettable journey.
        </p>
      </section>

      {/* Search and Filters */}
      <section className="mx-auto max-w-7xl px-6 pt-10">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <label
            htmlFor="destination-search"
            className="mb-3 block font-semibold text-slate-800"
          >
            Search destinations
          </label>

          <input
            id="destination-search"
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by destination or province..."
            className="w-full rounded-xl border border-slate-200 px-5 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <div className="mt-6">
            <p className="mb-3 font-semibold text-slate-800">
              Filter by category
            </p>

            <div className="flex flex-wrap gap-3">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                    category === item
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destination Results */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Popular Places
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Discover your next travel destination.
            </p>
          </div>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            {filteredDestinations.length} destinations found
          </span>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDestinations.map((destination) => (
            <article
              key={destination.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-700">
                  {destination.category}
                </span>
              </div>

              <div className="p-5">
                <p className="text-sm text-slate-500">
                  📍 {destination.location}
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {destination.name}
                </h3>

                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">
                  {destination.description}
                </p>

                <Link
                  to={`/destinations/${destination.id}`}
                  className="mt-5 inline-block font-semibold text-blue-600 hover:text-blue-800"
                >
                  View Details →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
            <div className="text-5xl">🔍</div>

            <h3 className="mt-4 text-xl font-bold text-slate-900">
              No destinations found
            </h3>

            <p className="mt-2 text-slate-500">
              Try another search or select a different category.
            </p>

            <button
              onClick={() => {
                setSearch('')
                setCategory('All')
              }}
              className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  )
}

export default Destinations
