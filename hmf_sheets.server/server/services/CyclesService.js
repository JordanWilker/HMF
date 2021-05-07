import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import { logger } from '../utils/Logger'

class CyclesService {
  async getCycles() {
    const cycles = await dbContext.Cycles.find()
    return cycles
  }

  async findById(id) {
    const cycle = await dbContext.Cycles.findById(id)
    if (!cycle) {
      throw new BadRequest('Invalid Id')
    }
    return cycle
  }

  async getCyclesByYear(id) {
    const cycle = await dbContext.Cycles.find({ year: id })
    if (!cycle) {
      throw new BadRequest('Invalid Year')
    }
    return cycle
  }

  async createCycle(body) {
    return await dbContext.Cycles.create(body)
  }

  async deleteCycle(id, userId) {
    return await dbContext.Cycles.findOneAndDelete({ _id: id, creatorId: userId })
  }

  async getCycleById(id) {
    return await dbContext.Cycles.findOne({ _id: id }).populate('yearId')
  }

  async editCycle(id, userId, body) {
    return await dbContext.Cycles.findByIdAndUpdate({ _id: id, creatorId: userId }, body, { new: true })
  }

  async updateRPC(id) {
    const grants = await dbContext.Grants.find({ cycleId: id })
    const cycle = await dbContext.Cycles.findOne({ _id: id })
    cycle.totalRPC = 0
    for (const key of grants) {
      logger.log(key.totalRPC)
      cycle.totalRPC = cycle.totalRPC + key.requestedAmount
    }
    cycle.markModified('totalRPC')
    await cycle.save()
    return cycle
  }

  async updateAPC(id) {
    const grants = await dbContext.Grants.find({ cycleId: id })
    const cycle = await dbContext.Cycles.findOne({ _id: id })
    cycle.totalAPC = 0
    for (const key of grants) {
      logger.log(key.totalRPC)
      cycle.totalAPC = cycle.totalAPC + key.approvedAmount
    }
    cycle.markModified('totalAPC')
    await cycle.save()
    return cycle
  }
}

export const cyclesService = new CyclesService()
