
import { useParams } from 'react-router-dom'

function DestinationDetails() {
  const { id } = useParams()

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Destination Details</h1>
      <p className="mt-3">Destination ID: {id}</p>
    </div>
  )
}

export default DestinationDetails
