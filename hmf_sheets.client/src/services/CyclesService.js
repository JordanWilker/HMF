import { AppState } from '../AppState'
import { Cycle } from '../models/Cycle'
import { api } from './AxiosService'

class CyclesService {
  async getCycles() {
    const res = await api.get('api/cycles')
    AppState.cycles = res.data.map(d => new Cycle(d))
  }
}
export const cyclesService = new CyclesService()
