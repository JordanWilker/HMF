import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Cycle = new Schema(
  {
    name: { type: String, required: true },
    creatorId: { type: String, ref: 'Account', required: true },
    year: { type: String, ref: 'Years', required: true },
    philRequestedAmount: { type: Number, required: true, default: 0 },
    totalRPC: { type: Number, required: true, default: 0 },
    totalAPC: { type: Number, required: true, default: 0 },
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
    amountPaidYearOne: { type: String, required: true, default: 0 },
    amountPaidYearTwo: { type: String, required: true, default: 0 },
    amountPaidYearThree: { type: String, required: true, default: 0 }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Cycle.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
Cycle.virtual('year', {
  localField: 'year',
  ref: 'Years',
  foreignField: 'year',
  justOne: true
})

export default Cycle
