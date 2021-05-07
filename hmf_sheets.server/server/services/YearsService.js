import { dbContext } from '../db/DbContext'
// import Grant from '../models/Grant'
// import { BadRequest } from '../utils/Errors'
import { logger } from '../utils/Logger'

class YearsService {
  async getYears() {
    const years = await dbContext.Years.find()
    return years
  }

  async createYear(body) {
    return await dbContext.Years.create(body)
  }

  async deleteYear(id, userId) {
    return await dbContext.Years.findOneAndDelete({ _id: id, creatorId: userId })
  }

  async getYearById(id) {
    return await dbContext.Years.findOne({ _id: id })
  }

  async editYear(id, userId, body) {
    return await dbContext.Years.findByIdAndUpdate({ _id: id, creatorId: userId }, body, { new: true })
  }

  async updateYear(id) {
    const dataGrants = await dbContext.Grants.find({ yearPaidId: id })
    const dataYear = await dbContext.Years.findOne({ _id: id })
    dataYear.totalPaid = 0
    dataYear.quarterPool = dataYear.approvedPool / 4
    for (const key of dataGrants) {
      logger.log(key.amountPaid)
      dataYear.totalPaid = dataYear.totalPaid + key.amountPaid
    }
    dataYear.markModified('totalPaid quarterPool')
    await dataYear.save()
    return dataYear
  }
}

export const yearsService = new YearsService()
