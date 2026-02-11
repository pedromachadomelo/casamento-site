import express from 'express'
import compression from 'compression'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(compression())

// Serve static files
const publicPath = join(__dirname, '../dist/public')
app.use(express.static(publicPath))

// Handle all routes - serve index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(join(publicPath, 'index.html'))
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
