
import { Link, NavLink, Outlet } from 'react-router-dom'

function MainLayout() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors hover:text-blue-600 ${
      isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
    }`

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            TripMate
          </Link>

          <div className="flex items-center gap-6 text-sm">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/destinations" className={navLinkClass}>
              Destinations
            </NavLink>

            <NavLink to="/my-trips" className={navLinkClass}>
              My Trips
            </NavLink>

            <NavLink to="/create-trip" className={navLinkClass}>
              Create Trip
            </NavLink>

            <NavLink to="/login" className={navLinkClass}>
              Login
            </NavLink>

            <Link
              to="/register"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Register
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
