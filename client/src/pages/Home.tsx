
import { useState } from 'react'
import { Link } from 'react-router-dom'

const destinations = [
  {
    name: 'Sigiriya',
    country: 'Sri Lanka',
    category: 'Heritage',
    image:
      'https://images.unsplash.com/photo-1588598198321-9735fd5b1c2d?w=800',
    description: 'Discover the ancient rock fortress.',
  },
  {
    name: 'Ella',
    country: 'Sri Lanka',
    category: 'Nature',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
    description: 'Enjoy beautiful mountains and green landscapes.',
  },
  {
    name: 'Mirissa',
    country: 'Sri Lanka',
    category: 'Beach',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800',
    description: 'Relax beside beautiful tropical beaches.',
  },
  {
    name: 'Kandy',
    country: 'Sri Lanka',
    category: 'Culture',
    image:
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800',
    description: 'Experience culture, history and traditions.',
  },
]

function Home() {
  const [search, setSearch] = useState('')

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative flex min-h-[600px] items-center bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-slate-900/20" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur">
              ✈ Your next adventure starts here
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Explore the world.
              <span className="block text-blue-300">
                Create unforgettable memories.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Discover amazing destinations, plan your trips, organize
              your activities and manage your travel budget — all in one place.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/destinations"
                className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Destinations
              </Link>

              <Link
                to="/create-trip"
                className="rounded-xl border border-white px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                Plan a Trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative z-10 mx-auto -mt-10 max-w-5xl px-6">
        <div className="rounded-2xl bg-white p-6 shadow-xl md:p-8">
          <h2 className="text-xl font-bold text-slate-800">
            Where would you like to go?
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Search for your next favourite destination.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search destinations..."
              className="min-w-0 flex-1 rounded-xl border border-slate-200 px-5 py-3.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <Link
              to="/destinations"
              className="rounded-xl bg-blue-600 px-8 py-3.5 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Find Places
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-semibold uppercase tracking-wider text-blue-600">
              Discover new places
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Popular Destinations
            </h2>

            <p className="mt-3 text-slate-500">
              Explore some of the most beautiful places in Sri Lanka.
            </p>
          </div>

          <Link
            to="/destinations"
            className="font-semibold text-blue-600 hover:text-blue-800"
          >
            View all destinations →
          </Link>
        </div>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {filteredDestinations.map((destination) => (
            <Link
              to="/destinations"
              key={destination.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  {destination.category}
                </span>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {destination.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {destination.country}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {destination.description}
                </p>

                <span className="mt-4 inline-block font-semibold text-blue-600">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <p className="mt-10 text-center text-slate-500">
            No destinations found. Try another search.
          </p>
        )}
      </section>

      {/* Why TripMate */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-wider text-blue-600">
              Travel made simple
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Everything you need for your journey
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Plan smarter and enjoy your travel experience with
              TripMate's helpful features.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-4xl">🌍</div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Discover Places
              </h3>
              <p className="mt-3 leading-7 text-slate-500">
                Find interesting destinations and discover new experiences
                for your next adventure.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-4xl">🗓️</div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Plan Your Trips
              </h3>
              <p className="mt-3 leading-7 text-slate-500">
                Organize your travel dates, daily activities and
                itinerary in one place.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-4xl">💰</div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Manage Your Budget
              </h3>
              <p className="mt-3 leading-7 text-slate-500">
                Track your travel expenses and keep your spending
                under control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Ready for your next adventure?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
          Start planning your journey today and make every trip memorable.
        </p>

        <Link
          to="/register"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold">TripMate</h2>
            <p className="mt-2 text-sm text-slate-400">
              Discover. Plan. Explore.
            </p>
          </div>

          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} TripMate. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
