import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { grantsService } from '../services/GrantsService'

export class GrantsController extends BaseController {
  constructor() {
    super('api/grants')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getGrantById)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createGrant)
      .delete('/:id', this.deleteGrant)
      .put('/:id', this.editGrant)
  }

  async getAll(req, res, next) {
    try {
      return res.send(await grantsService.getGrants())
    } catch (error) {
      next(error)
    }
  }

  async getGrantById(req, res, next) {
    return res.send(await grantsService.getGrantById(req.params.id))
  }

  async createGrant(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id
      return res.send(await grantsService.createGrant(req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteGrant(req, res, next) {
    try {
      return res.send(await grantsService.deleteGrant(req.params.id, req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }

  async editGrant(req, res, next) {
    try {
      return res.send(await grantsService.editGrant(req.params.id, req.userInfo, req.body))
    } catch (error) {
      next(error)
    }
  }
}
