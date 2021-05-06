import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { yearsService } from '../services/YearsService'

export class YearsController extends BaseController {
  constructor() {
    super('api/years')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getYearById)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createYear)
      .delete('/:id', this.deleteYear)
      .put('/update/:id')
      .put('/:id', this.editYear)
  }

  async getAll(req, res, next) {
    try {
      return res.send(await yearsService.getYears())
    } catch (error) {
      next(error)
    }
  }

  async getYearById(req, res, next) {
    return res.send(await yearsService.getYearById(req.params.id))
  }

  async createYear(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id
      return res.send(await yearsService.createYear(req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteYear(req, res, next) {
    try {
      return res.send(await yearsService.deleteYear(req.params.id, req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }

  async editYear(req, res, next) {
    try {
      return res.send(await yearsService.editYear(req.params.id, req.userInfo, req.body))
    } catch (error) {
      next(error)
    }
  }

  async updateYear(req, res, next) {
    try {
      return res.send(await yearsService.updateYear(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
