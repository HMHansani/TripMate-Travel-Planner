
import { Router } from 'express'
import { prisma } from '../config/prisma'

const router = Router()

// Test PostgreSQL database connection
router.get('/database', async (req, res) => {
  try {
    await prisma.$connect()

    const userCount = await prisma.user.count()

    res.json({
      success: true,
      message: 'Database connected successfully!',
      totalUsers: userCount,
    })
  } catch (error) {
    console.error('Database connection error:', error)

    res.status(500).json({
      success: false,
      message: 'Database connection failed',
    })
  }
})

export default router
