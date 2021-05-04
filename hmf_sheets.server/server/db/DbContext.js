import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import GrantSchema from '../models/Grant'
import CycleSchema from '../models/Cycle'
import YearSchema from '../models/Year'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Grants = mongoose.model('Grant', GrantSchema)
  Cycles = mongoose.model('Cycle', CycleSchema)
  Years = mongoose.model('Year', YearSchema)
}

export const dbContext = new DbContext()
