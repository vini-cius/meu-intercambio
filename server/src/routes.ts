import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import DestiniesController from './controllers/DestiniesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/destiniesAttch', upload.array('attachments'));
routes.get('/destinies', DestiniesController.index);
//routes.get('/orphanages/:id', OrphanagesController.show);

export default routes;
