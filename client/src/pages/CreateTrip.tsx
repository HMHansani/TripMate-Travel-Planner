
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CreateTrip() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    tripName: '',
    destination: '',
    startDate: '',
    endDate: '',
    travelers: '1',
    budget: '',
    notes: '',
  })

  const [error, setError] = useState('')

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (
      !formData.tripName ||
      !formData.destination ||
      !formData.startDate ||
      !formData.endDate ||
      !formData.budget
    ) {
      setError('Please complete all required fields.')
      return
    }

    if (formData.endDate < formData.startDate) {
      setError('End date must be after the start date.')
      return
    }

    if (Number(formData.travelers) < 1 || Number(formData.budget) <= 0) {
      setError('Please enter a valid number of travellers and budget.')
      return
    }

    setError('')

    // Temporary frontend demonstration.
    // We will connect this form to the backend later.
    alert('Your trip form was submitted successfully!')

    navigate('/my-trips')
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">

        <Link
          to="/my-trips"
          className="mb-6 inline-block text-sm font-semibold text-blue-600 hover:text-blue-800"
        >
          ← Back to My Trips
        </Link>

        <div className="mb-8">
          <p className="mb-2 font-semibold text-blue-600">
            PLAN YOUR NEXT ADVENTURE
          </p>

          <h1 className="text-4xl font-bold text-slate-900">
            Create New Trip
          </h1>

          <p className="mt-2 text-slate-500">
            Enter your travel details and start planning your journey.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-7 rounded-2xl bg-white p-6 shadow-sm sm:p-10"
        >

          <div>
            <h2 className="mb-5 text-xl font-bold text-slate-900">
              Basic Information
            </h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Trip Name *
                </label>

                <input
                  type="text"
                  name="tripName"
                  value={formData.tripName}
                  onChange={handleChange}
                  placeholder="Example: My Summer Vacation"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Destination *
                </label>

                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Select a destination</option>
                  <option value="Sigiriya">Sigiriya</option>
                  <option value="Ella">Ella</option>
                  <option value="Mirissa">Mirissa</option>
                  <option value="Kandy">Kandy</option>
                  <option value="Nuwara Eliya">Nuwara Eliya</option>
                  <option value="Galle">Galle</option>
                  <option value="Arugam Bay">Arugam Bay</option>
                  <option value="Anuradhapura">Anuradhapura</option>
                </select>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-7">
            <h2 className="mb-5 text-xl font-bold text-slate-900">
              Travel Details
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Start Date *
                </label>

                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  End Date *
                </label>

                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  min={formData.startDate || undefined}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Number of Travellers *
                </label>

                <input
                  type="number"
                  name="travelers"
                  min="1"
                  value={formData.travelers}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Total Budget (LKR) *
                </label>

                <input
                  type="number"
                  name="budget"
                  min="1"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Example: 50000"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-7">
            <h2 className="mb-5 text-xl font-bold text-slate-900">
              Additional Notes
            </h2>

            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              placeholder="Write your travel plans, preferences or special notes..."
              className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <div className="flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row">
            <button
              type="submit"
              className="flex-1 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Create Trip
            </button>

            <Link
              to="/my-trips"
              className="rounded-xl border border-slate-200 px-6 py-3 text-center font-semibold text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </Link>
          </div>

        </form>
      </div>
    </div>
  )
}

export default CreateTrip
