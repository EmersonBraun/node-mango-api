import { Express } from 'express'
import { bodyBarser, contentType, cors } from '../middlewares'

export default (app: Express): void => {
  app.use(bodyBarser)
  app.use(cors)
  app.use(contentType)
}
