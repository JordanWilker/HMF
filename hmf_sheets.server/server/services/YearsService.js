import { dbContext } from '../db/DbContext'
// import { BadRequest } from '../utils/Errors'

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
}

export const yearsService = new YearsService()
