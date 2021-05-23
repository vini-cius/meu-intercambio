import Attachment from '../models/Attachment';

export default {
  render (attachment: Attachment) {
    return {
      id_attachment: attachment.id_attachment,
      url: `http://localhost:3333/uploads/${attachment.attachment}`
    }
  },

  renderMany(attachment: Attachment[]){
    return attachment.map(attachment => this.render(attachment));
  }
}