
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import testRoutes from './routes/test.routes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/test', testRoutes)

// Welcome route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to TripMate API!',
    status: 'Server is running successfully',
  })
})

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'TripMate backend is healthy!',
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`TripMate server running on http://localhost:${PORT}`)
})
