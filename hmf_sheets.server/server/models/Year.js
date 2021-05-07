import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Year = new Schema(
  {
    creatorId: { type: String, ref: 'Account', required: true },
    year: { type: Number, required: true },
    approvedPool: { type: Number, required: true, default: 0 },
    quarterPool: { type: Number, required: true, default: 0 },
    philRequestedAmount: { type: Number, required: true, default: 0 },
    philApprovedAmount: { type: Number, required: true, default: 0 },
    philPaidAmount: { type: Number, required: true, default: 0 },
    operaRequestedAmount: { type: Number, required: true, default: 0 },
    operaApprovedAmount: { type: Number, required: true, default: 0 },
    operaPaidAmount: { type: Number, required: true, default: 0 },
    balletRequestedAmount: { type: Number, required: true, default: 0 },
    balletAcceptedAmount: { type: Number, required: true, default: 0 },
    balletPaidAmount: { type: Number, required: true, default: 0 },
    chordsRequestedAmount: { type: Number, required: true, default: 0 },
    chordsApprovedAmount: { type: Number, required: true, default: 0 },
    chordsPaidAmount: { type: Number, required: true, default: 0 },
    totalPaid: { type: Number, required: true, default: 0 }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Year.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Year
