export class Cycle {
  constructor(data = {}) {
    this.id = data.id || data._id || 'placeholder id'
    this.name = data.name || 'test group'
    this.yearId = data.yearId || 'b'
    this.totalRPC = data.totalRPC
    this.totalAPC = data.totalAPC
    this.philRequestedAmount = data.philRequestedAmount
    this.philApprovedAmount = data.philApprovedAmount
    this.philPaidAmount = data.philPaidAmount
    this.operaRequestedAmount = data.operaRequestedAmount
    this.operaApprovedAmount = data.operaApprovedAmount
    this.operaPaidAmount = data.operaPaidAmount
    this.balletRequestedAmount = data.balletRequestedAmount
    this.balletApprovedAmount = data.balletApprovedAmount
    this.balletPaidAmount = data.balletPaidAmount
    this.chordsRequestedAmount = data.chordsRequestedAmount
    this.chordsApprovedAmount = data.chordsApprovedAmount
    this.chordsPaidAmount = data.chordsPaidAmount
    this.amountPaidYearOne = data.amountPaidYearOne
    this.amountPaidYearTwo = data.amountPaidYearTwo
    this.amountPaidYearThree = data.amountPaidYearThree
  }
}
