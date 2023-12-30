import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Gui',
    email: '00579097@ufrgs.br',
  },
})

// ORM - Object Relational Mapper
