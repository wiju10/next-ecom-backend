import prisma from "./src/utils/prisma.js"

async function main() {
  prisma.user.create({
    data: {
      name: 'Johasdadn',
      email: 'john@exampasdasdle.com',
      password: 'insecure',
    },
  }).then(user => {
    console.log(user)
  }).catch(e => {
    console.log(e.message)
  })
}

main()