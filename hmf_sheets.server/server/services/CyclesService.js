import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
// import { logger } from '../utils/Logger'

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
    const cycle = await dbContext.Cycles.find({ yearId: id })
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

  async updatePC(id) {
    const grants = await dbContext.Grants.find({ cycleId: id })
    const cycle = await dbContext.Cycles.findOne({ _id: id })
    const year1 = await dbContext.Years.findOne({ _id: cycle.yearId })
    const grantsYear1 = await dbContext.Grants.find({ yearPaid: year1.year })
    const grantsYear2 = await dbContext.Grants.find({ yearPaid: year1.year + 1 })
    const grantsYear3 = await dbContext.Grants.find({ yearPaid: year1.year + 2 })
    cycle.totalRPC = 0
    cycle.totalAPC = 0
    cycle.amountPaidYearOne = 0
    cycle.amountPaidYearTwo = 0
    cycle.amountPaidYearThree = 0
    for (const key of grants) {
      cycle.totalRPC = cycle.totalRPC + key.requestedAmount
      cycle.totalAPC = cycle.totalAPC + key.approvedAmount
    }
    for (const key of grantsYear1) {
      cycle.amountPaidYearOne = cycle.amountPaidYearOne + key.amountPaid
    }
    for (const key of grantsYear2) {
      cycle.amountPaidYearTwo = cycle.amountPaidYearTwo + key.amountPaid
    }
    for (const key of grantsYear3) {
      cycle.amountPaidYearThree = cycle.amountPaidYearThree + key.amountPaid
    }
    cycle.markModified('totalRPC totalAPC amountPaidYearOne amountPaidYearTwo amountPaidYearThree')
    await cycle.save()
    return cycle
  }
}

export const cyclesService = new CyclesService()
