import { CheckIn, Prisma } from '@prisma/client'

export interface CheckInsRepository {
  // unchecked = don't need to create gym or user, will use gymId and userId
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
  findManyByUserId(userId: string, page: number): Promise<CheckIn[]>
  findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>
}
