
import { Link } from 'react-router-dom'

type Trip = {
  id: number
  destination: string
  country: string
  startDate: string
  endDate: string
  travelers: number
  status: 'Upcoming' | 'Ongoing' | 'Completed'
  image: string
}

const trips: Trip[] = [
  {
    id: 1,
    destination: 'Ella',
    country: 'Sri Lanka',
    startDate: '2026-12-10',
    endDate: '2026-12-14',
    travelers: 2,
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900',
  },
  {
    id: 2,
    destination: 'Mirissa',
    country: 'Sri Lanka',
    startDate: '2026-08-05',
    endDate: '2026-08-08',
    travelers: 3,
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900',
  },
  {
    id: 3,
    destination: 'Kandy',
    country: 'Sri Lanka',
    startDate: '2026-11-25',
    endDate: '2026-11-27',
    travelers: 2,
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=900',
  },
]

function MyTrips() {
  const upcoming = trips.filter((trip) => trip.status === 'Upcoming').length
  const completed = trips.filter((trip) => trip.status === 'Completed').length

  const formatDate = (date: string) =>
    new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 font-semibold text-blue-600">YOUR TRAVEL DASHBOARD</p>
            <h1 className="text-4xl font-bold text-slate-900">My Trips</h1>
            <p className="mt-2 text-slate-500">
              Manage your travel plans and explore your next adventure.
            </p>
          </div>

          <Link
            to="/create-trip"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            + Create New Trip
          </Link>
        </div>

        <div className="mb-10 grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Total Trips</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              {trips.length}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Upcoming Trips</p>
            <h2 className="mt-2 text-3xl font-bold text-blue-600">
              {upcoming}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Completed Trips</p>
            <h2 className="mt-2 text-3xl font-bold text-green-600">
              {completed}
            </h2>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">
            Your Travel Plans
          </h2>
          <span className="text-sm text-slate-500">
            {trips.length} trips
          </span>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-52">
                <img
                  src={trip.image}
                  alt={trip.destination}
                  className="h-full w-full object-cover"
                />

                <span
                  className={`absolute right-4 top-4 rounded-full px-4 py-1.5 text-xs font-semibold ${
                    trip.status === 'Completed'
                      ? 'bg-green-100 text-green-700'
                      : trip.status === 'Ongoing'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {trip.status}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">
                  {trip.destination}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {trip.country}
                </p>

                <div className="mt-5 space-y-3 text-sm text-slate-600">
                  <p>📅 {formatDate(trip.startDate)} – {formatDate(trip.endDate)}</p>
                  <p>👥 {trip.travelers} Travellers</p>
                </div>

                <div className="mt-6 flex gap-3 border-t border-slate-100 pt-4">
                  <Link
                    to={`/destinations/${trip.id}`}
                    className="flex-1 rounded-lg bg-blue-50 px-3 py-2 text-center text-sm font-semibold text-blue-600 hover:bg-blue-100"
                  >
                    View Details
                  </Link>

                  <Link
                    to="/create-trip"
                    className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-200"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default MyTrips
