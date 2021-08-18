import { Express } from 'express'
import { bodyBarser } from '../middlewares/body-parser'
import { contentType } from '../middlewares/content-type'
import { cors } from '../middlewares/cors'

export default (app: Express): void => {
  app.use(bodyBarser)
  app.use(cors)
  app.use(contentType)
}
