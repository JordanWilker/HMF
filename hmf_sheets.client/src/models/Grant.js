export class Grant {
  constructor(data = {}) {
    this.id = data.id || data._id || 'placeholder id'
    this.group = data.group || 'test group'
    this.cycleId = data.cycleId || 'b'
    this.datePerformed = data.datePerformed
    this.irsId = data.irsId
    this.justinGroupName = data.justinGroupName
    this.showName = data.showName
    this.requestedAmount = data.requestedAmount
    this.approvedAmount = data.approvedAmount
    this.datePaid = data.datePaid
    this.amountPaid = data.amountPaid
    this.yearPaid = data.yearPaid
    this.yearPaidId = data.yearPaidId
  }
}
