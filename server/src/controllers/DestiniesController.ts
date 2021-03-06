import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Destiny from '../models/Destiny';
import destinyView from '../views/destinies_view';

export default {
  async index(request: Request, response: Response){
    const destiniesRepository = getRepository(Destiny);

    const destinies = await destiniesRepository.find({
      relations: ['attachments']
    });

    return response.json(destinyView.renderMany(destinies));
  },

  /*
  async show(request: Request, response: Response){
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images']
    });

    return response.json(orphanageView.render(orphanage));
  },
  */

  async createAttachment(request: Request, response: Response){
    const destiniesRepository = getRepository(Destiny);

    const requestAttachments = request.files as Express.Multer.File[];
    
    const attachments = requestAttachments.map(attachment => {
      return { attachment: attachment.filename }
    });

    const data = {
      attachments,
      destiny: 1
    };

    //const destiniesAttachment = destiniesRepository.create(data);
  }, 

  /*
  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    } = request.body;
  
    const destiniesRepository = getRepository(Destiny);

    const requestAttachments = request.files as Express.Multer.File[];

    const images = requestAttachments.map(attachment => {
      return { path: attachment.filename }
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images
    };

    const schema = Yup.object().shape({
      name: Yup.string().required('O nome é obrigatório'),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      )
    });

    await schema.validate(data, {
      abortEarly: false, //retorna todos os erros de uma vez
    });
  
    const orphanage = orphanagesRepository.create(data);
  
    await orphanagesRepository.save(orphanage);
  
    return response.status(201).json(orphanage);
  }
  */
};