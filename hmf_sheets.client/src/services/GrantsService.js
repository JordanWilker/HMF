import { AppState } from '../AppState'
import { Grant } from '../models/Grant'
import { api } from './AxiosService'

class GrantsService {
  async getGrants() {
    const res = await api.get('api/grants')
    AppState.grants = res.data.map(d => new Grant(d))
  }
}
export const grantsService = new GrantsService()
