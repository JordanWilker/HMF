import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { cyclesService } from '../services/CyclesService'

export class CyclesController extends BaseController {
  constructor() {
    super('api/cycles')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getCycleById)
      .get('/year/:year', this.getCyclesByYear)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createCycle)
      .delete('/:id', this.deleteCycle)
      .put('/:id', this.editCycle)
  }

  async getAll(req, res, next) {
    try {
      return res.send(await cyclesService.getCycles())
    } catch (error) {
      next(error)
    }
  }

  async getCycleById(req, res, next) {
    return res.send(await cyclesService.getCycleById(req.params.id))
  }

  async getCyclesByYear(req, res, next) {
    return res.send(await cyclesService.getCyclesByYear(req.params.year))
  }

  async createCycle(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id
      return res.send(await cyclesService.createCycle(req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteCycle(req, res, next) {
    try {
      return res.send(await cyclesService.deleteCycle(req.params.id, req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }

  async editCycle(req, res, next) {
    try {
      return res.send(await cyclesService.editCycle(req.params.id, req.userInfo, req.body))
    } catch (error) {
      next(error)
    }
  }
}
