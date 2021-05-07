import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Cycle = new Schema(
  {
    name: { type: String, required: true },
    creatorId: { type: String, ref: 'Account', required: true },
    yearId: { type: String, ref: 'Year', required: true },
    totalRPC: { type: Number, required: true, default: 0 },
    totalAPC: { type: Number, required: true, default: 0 },
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
    amountPaidYearOne: { type: Number, required: true, default: 0 },
    amountPaidYearTwo: { type: Number, required: true, default: 0 },
    amountPaidYearThree: { type: Number, required: true, default: 0 }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Cycle.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
Cycle.virtual('creator', {
  localField: 'yearId',
  ref: 'Year',
  foreignField: '_id',
  justOne: true
})

export default Cycle
