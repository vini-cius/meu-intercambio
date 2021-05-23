import Destiny from '../models/Destiny';
import attachmentsView from './attachments_view';

export default {
  render (destiny: Destiny) {
    return {
      id_destiny: destiny.id_destiny,
      destiny: destiny.destiny,
      attachments: attachmentsView.renderMany(destiny.attachments)
    }
  },

  renderMany(destinies: Destiny[]){
    return destinies.map(destiny => this.render(destiny));
  }
}