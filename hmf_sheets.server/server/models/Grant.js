import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Grant = new Schema(
  {
    group: { type: String, required: true },
    creatorId: { type: String, ref: 'Account', required: true },
    cycleId: { type: String, ref: 'Cycles', required: true },
    datePerformed: { type: String, required: true },
    irsId: { type: String, required: true },
    justinGroupName: { type: String, required: true },
    showName: { type: String, required: true },
    requestedAmount: { type: Number, required: true, default: 0 },
    approvedAmount: { type: Number, required: true, default: 0 },
    datePaid: { type: String, required: true, default: null },
    amountPaid: { type: Number, required: true, default: 0 },
    yearPaid: { type: Number, ref: 'Years', required: true, default: null }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Grant.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Grant
