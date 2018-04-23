// app/controllers/index.js
import Controller from '@ember/controller';
import { match, gte, and } from '@ember/object/computed';

export default Controller.extend({

  headerMessage: 'We Want to Hear From You',
  isLongEnough: gte('sendMessageText.length', 5),
  isSendMessageEmailValid: match('sendMessageEmailAddress', /^.+@.+\..+$/),
  isMessageReadyToSend: and('isLongEnough','isSendMessageEmailValid'),
  actions: {
    sendContactMessage() {
      alert(`Sending Contents...\nFrom: ${this.get('sendMessageEmailAddress')}\nMessage: ${this.get('sendMessageText')}`);
      this.set('responseMessage', `Thank you! We have received your message and will get back to you soon!`);
      this.set('sendMessageText', '');
      this.set('sendMessageEmailAddress', '');
    }
  }

});
