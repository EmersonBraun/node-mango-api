import { Express } from 'express'
import { bodyBarser } from '../middlewares/body-parser'

export default (app: Express): void => {
  app.use(bodyBarser)
}
