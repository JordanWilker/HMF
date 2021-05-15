import { AppState } from '../AppState'
import { Year } from '../models/Year'
import { api } from './AxiosService'

class YearsService {
  async getYears() {
    const res = await api.get('api/years')
    AppState.years = res.data.map(d => new Year(d))
  }
}
export const yearsService = new YearsService()
