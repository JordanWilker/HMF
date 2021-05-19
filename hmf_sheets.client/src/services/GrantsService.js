import { AppState } from '../AppState'
import { Grant } from '../models/Grant'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class GrantsService {
  async getGrants() {
    const res = await api.get('api/grants')
    AppState.grants = res.data.map(d => new Grant(d))
  }

  async getGrantsByYear(id) {
    const res = await api.get(`api/years/${id}/grants`)
    logger.log(res.data)
    AppState.grants = res.data.map(d => new Grant(d))
  }

  async getGrantById(id) {
    const res = await api.get(`api/grants/${id}`)
    AppState.activeGrant = new Grant(res.data)
  }

  async getGrantsByCycle(id) {
    const res = await api.get(`api/cycles/${id}/grants`)
    AppState.grants = res.data.map(d => new Grant(d))
  }
}
export const grantsService = new GrantsService()
