import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

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
    return await dbContext.Cycles.findOne({ _id: id }).populate('year')
  }

  async editCycle(id, userId, body) {
    return await dbContext.Cycles.findByIdAndUpdate({ _id: id, creatorId: userId }, body, { new: true })
  }
}

export const cyclesService = new CyclesService()
