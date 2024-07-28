// pages/api/savePosts.ts
import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'posts.json')
    // Format JSON data with 2 spaces for indentation
    const jsonData = JSON.stringify(req.body, null, 2)

    // Ensure the data directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    fs.writeFile(filePath, jsonData, (err) => {
      if (err) {
        console.error('Error writing JSON data:', err)
        return res.status(500).json({ message: 'Error writing JSON data' })
      }
      res.status(200).json({ message: 'Data successfully written to file' })
    })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
