import express from 'express'

const port = 5050
const app = express()
app.listen(port, () => console.log(`server running at http://localhost:${port}`))
