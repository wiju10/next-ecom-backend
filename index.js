// import express from "express"
// import prisma from "./src/utils/prisma.js"

// const app = express()
// const port = process.env.PORT || 8080

// app.use(express.json())


// app.get('/', async (req, res) => {
//     const allUsers = await prisma.user.findMany()
//     res.json(allUsers)
//   })

// app.listen(port, () => {
//   console.log(`App started; listening on port ${port}`)
// })

// app.post(`/users`, async (req, res) => {
//   const { name, email, password } = req.body
//   const users = await prisma.user.create({
//     data: {
//       name,
//       email,
//       password,
//     },
//   })
//   res.json(users)
// })

// app.post('/users', async (req, res) => {
//   const data = req.body

//   prisma.user.create({
//     data: {
//       name,
//       email,
//       password
//     }
//   }).then(user => {
//     return res.json(user)
//   })
// })

import express from "express"
import prisma from "./src/utils/prisma.js"

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())

app.get('/', async (req, res) => {
    const allUsers = await prisma.user.findMany()
    res.json(allUsers)
  })

app.listen(port, () => {
  console.log(`App started; listening on port ${port}`)
})

app.post(`/userz`, async (req, res) => {
  const { name, email, password } = req.body
  // const data = req.body

  const users = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  })
  res.json(users)
})