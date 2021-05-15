export class Year {
  constructor(data = {}) {
    this.id = data.id || data._id || 'placeholder id'
    this.year = data.year || 'test group'
    this.approvedPool = data.approvedPool || 'b'
    this.quarterPool = data.quarterPool
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
    this.totalPaid = data.totalPaid
  }
}
