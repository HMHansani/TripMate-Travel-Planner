
import { Link, useParams } from 'react-router-dom'

const destinationDetails = [
  {
    id: 1,
    name: 'Sigiriya',
    location: 'Central Province, Sri Lanka',
    category: 'Heritage',
    image:
      'https://images.unsplash.com/photo-1588598198321-9735fd5b1c2d?w=1600',
    description:
      'Sigiriya is one of Sri Lanka’s most famous historical landmarks. Known as Lion Rock, this ancient rock fortress offers incredible views, beautiful gardens and fascinating archaeological remains.',
    bestTime: 'January to April',
    attractions: ['Sigiriya Rock Fortress', 'Pidurangala Rock', 'Water Gardens'],
    tips: [
      'Start climbing early in the morning.',
      'Wear comfortable walking shoes.',
      'Carry enough drinking water.',
    ],
  },
  {
    id: 2,
    name: 'Ella',
    location: 'Uva Province, Sri Lanka',
    category: 'Nature',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600',
    description:
      'Ella is a beautiful mountain destination surrounded by tea plantations, waterfalls and green landscapes. It is perfect for hiking, sightseeing and relaxing.',
    bestTime: 'January to March',
    attractions: ['Nine Arch Bridge', 'Little Adam’s Peak', 'Ravana Falls'],
    tips: [
      'Take the scenic train journey.',
      'Carry a light jacket.',
      'Visit viewpoints early for clear views.',
    ],
  },
  {
    id: 3,
    name: 'Mirissa',
    location: 'Southern Province, Sri Lanka',
    category: 'Beach',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600',
    description:
      'Mirissa is a popular coastal destination with beautiful beaches, clear waters and relaxing seaside experiences.',
    bestTime: 'November to April',
    attractions: ['Mirissa Beach', 'Coconut Tree Hill', 'Parrot Rock'],
    tips: [
      'Use sunscreen during beach activities.',
      'Check sea conditions before swimming.',
      'Respect marine wildlife.',
    ],
  },
  {
    id: 4,
    name: 'Kandy',
    location: 'Central Province, Sri Lanka',
    category: 'Culture',
    image:
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1600',
    description:
      'Kandy is a historic city surrounded by green hills. It is well known for its cultural heritage, religious landmarks and beautiful lake.',
    bestTime: 'December to April',
    attractions: ['Temple of the Tooth', 'Kandy Lake', 'Royal Botanical Gardens'],
    tips: [
      'Dress respectfully when visiting religious sites.',
      'Explore the city on foot.',
      'Check cultural event schedules.',
    ],
  },
  {
    id: 5,
    name: 'Nuwara Eliya',
    location: 'Central Province, Sri Lanka',
    category: 'Nature',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600',
    description:
      'Nuwara Eliya is known for its cool climate, tea estates, beautiful gardens and mountain scenery.',
    bestTime: 'February to April',
    attractions: ['Gregory Lake', 'Horton Plains', 'Tea Plantations'],
    tips: [
      'Bring warm clothing.',
      'Start early for Horton Plains.',
      'Try locally produced Ceylon tea.',
    ],
  },
  {
    id: 6,
    name: 'Galle',
    location: 'Southern Province, Sri Lanka',
    category: 'Heritage',
    image:
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1600',
    description:
      'Galle is a historic coastal city famous for its colonial architecture, charming streets and iconic Galle Fort.',
    bestTime: 'December to April',
    attractions: ['Galle Fort', 'Galle Lighthouse', 'Unawatuna Beach'],
    tips: [
      'Explore the fort on foot.',
      'Visit during the late afternoon.',
      'Explore local shops and cafes.',
    ],
  },
  {
    id: 7,
    name: 'Arugam Bay',
    location: 'Eastern Province, Sri Lanka',
    category: 'Beach',
    image:
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1600',
    description:
      'Arugam Bay is a famous surfing destination with beautiful beaches and a relaxed atmosphere.',
    bestTime: 'May to September',
    attractions: ['Main Surf Point', 'Peanut Farm Beach', 'Elephant Rock'],
    tips: [
      'Check surfing conditions before entering the water.',
      'Bring sun protection.',
      'Respect local wildlife.',
    ],
  },
  {
    id: 8,
    name: 'Anuradhapura',
    location: 'North Central Province, Sri Lanka',
    category: 'Heritage',
    image:
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=1600',
    description:
      'Anuradhapura is an ancient city with remarkable archaeological sites, sacred places and historic monuments.',
    bestTime: 'May to September',
    attractions: ['Ruwanwelisaya', 'Jaya Sri Maha Bodhi', 'Jetavanaramaya'],
    tips: [
      'Wear comfortable walking shoes.',
      'Dress respectfully at religious sites.',
      'Carry water during sightseeing.',
    ],
  },
]

function DestinationDetails() {
  const { id } = useParams()

  const destination = destinationDetails.find(
    (item) => item.id === Number(id),
  )

  if (!destination) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Destination Not Found
        </h1>
        <p className="mt-3 text-slate-500">
          Sorry, we could not find this destination.
        </p>
        <Link
          to="/destinations"
          className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Back to Destinations
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Image */}
      <section className="relative h-105 overflow-hidden md:h-130">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

        <div className="absolute bottom-0 mx-auto w-full px-6 pb-12">
          <div className="mx-auto max-w-7xl">
            <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
              {destination.category}
            </span>

            <h1 className="mt-5 text-4xl font-bold text-white md:text-6xl">
              {destination.name}
            </h1>

            <p className="mt-3 text-lg text-slate-200">
              📍 {destination.location}
            </p>
          </div>
        </div>
      </section>

      {/* Destination Content */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            {/* Overview */}
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                About {destination.name}
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                {destination.description}
              </p>
            </div>

            {/* Attractions */}
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Popular Attractions
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {destination.attractions.map((attraction) => (
                  <div
                    key={attraction}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                  >
                    <span className="text-xl">📍</span>
                    <span className="font-medium text-slate-700">
                      {attraction}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Tips */}
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Travel Tips
              </h2>

              <ul className="mt-5 space-y-4">
                {destination.tips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-3 text-slate-600"
                  >
                    <span className="font-bold text-green-600">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Location
              </h2>

              <div className="mt-5 flex h-64 items-center justify-center rounded-xl bg-slate-100 text-center">
                <div>
                  <div className="text-4xl">🗺️</div>
                  <p className="mt-3 font-semibold text-slate-700">
                    {destination.name}, Sri Lanka
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Interactive map coming soon.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trip Planning Card */}
          <aside>
            <div className="sticky top-6 rounded-2xl bg-white p-7 shadow-md">
              <h2 className="text-xl font-bold text-slate-900">
                Plan Your Visit
              </h2>

              <div className="mt-6 border-b border-slate-100 pb-5">
                <p className="text-sm text-slate-500">Best time to visit</p>
                <p className="mt-2 font-semibold text-slate-800">
                  📅 {destination.bestTime}
                </p>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                Add {destination.name} to your next travel adventure and
                start planning your itinerary.
              </p>

              <Link
                to="/create-trip"
                className="mt-7 block rounded-xl bg-blue-600 px-5 py-3.5 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Plan a Trip
              </Link>

              <Link
                to="/destinations"
                className="mt-3 block rounded-xl border border-slate-200 px-5 py-3.5 text-center font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Back to Destinations
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default DestinationDetails
