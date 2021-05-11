import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GrantsService {
  async getGrants() {
    const grants = await dbContext.Grants.find()
    return grants
  }

  async getGrantsByYear(id) {
    const grant = await dbContext.Grants.find({ yearPaid: id })
    if (!grant) {
      throw new BadRequest('Invalid Year')
    }
    return grant
  }

  async getGrantsByCycle(id) {
    const grant = await dbContext.Grants.find({ cycleId: id })
    if (!grant) {
      throw new BadRequest('Invalid Cycle Id')
    }
    return grant
  }

  async createGrant(body) {
    return await dbContext.Grants.create(body)
  }

  async deleteGrant(id, userId) {
    return await dbContext.Grants.findOneAndDelete({ _id: id, creatorId: userId })
  }

  async getGrantById(id) {
    return await dbContext.Grants.findOne({ _id: id }).populate('cycleId yearPaidId')
  }

  async editGrant(id, userId, body) {
    return await dbContext.Grants.findByIdAndUpdate({ _id: id, creatorId: userId }, body, { new: true })
  }
}

export const grantsService = new GrantsService()
