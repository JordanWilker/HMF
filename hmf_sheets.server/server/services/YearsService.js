import { dbContext } from '../db/DbContext'
// import Grant from '../models/Grant'
// import { BadRequest } from '../utils/Errors'
// import { logger } from '../utils/Logger'

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
    const dataCycles = await dbContext.Cycles.find({ yearId: id })
    dataYear.totalPaid = 0
    dataYear.philPaidAmount = 0
    dataYear.operaPaidAmount = 0
    dataYear.balletPaidAmount = 0
    dataYear.chordsPaidAmount = 0
    dataYear.quarterPool = dataYear.approvedPool / 4
    for (const key of dataGrants) {
      dataYear.totalPaid = dataYear.totalPaid + key.amountPaid
    }
    for (const key of dataCycles) {
      dataYear.philPaidAmount = dataYear.philPaidAmount + key.philPaidAmount
      dataYear.operaPaidAmount = dataYear.operaPaidAmount + key.operaPaidAmount
      dataYear.balletPaidAmount = dataYear.balletPaidAmount + key.balletPaidAmount
      dataYear.chordsPaidAmount = dataYear.chordsPaidAmount + key.chordsPaidAmount
    }
    dataYear.markModified('totalPaid quarterPool')
    await dataYear.save()
    return dataYear
  }
}

export const yearsService = new YearsService()
