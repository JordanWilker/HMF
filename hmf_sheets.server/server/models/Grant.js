import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Grant = new Schema(
  {
    group: { type: String, required: true },
    creatorId: { type: String, ref: 'Account', required: true },
    cycleId: { type: String, ref: 'Cycle', required: true },
    datePerformed: { type: String, required: true },
    irsId: { type: String, required: true },
    justinGroupName: { type: String, required: true },
    showName: { type: String, required: true },
    requestedAmount: { type: Number, required: true, default: 0 },
    approvedAmount: { type: Number, required: true, default: 0 },
    datePaid: { type: String, required: true, default: 0 },
    amountPaid: { type: Number, required: true, default: 0 },
    yearPaidId: { type: String, ref: 'Year', required: true, default: 0 }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Grant.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
Grant.virtual('creator', {
  localField: 'cycleId',
  ref: 'Cycle',
  foreignField: '_id',
  justOne: true
})
Grant.virtual('creator', {
  localField: 'yearPaidId',
  ref: 'Year',
  foreignField: '_id',
  justOne: true
})

export default Grant
