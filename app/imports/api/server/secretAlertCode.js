import { _ } from 'meteor/underscore';

export const Alerts = {
  sendPhone(message, numbers) {
    _.each(numbers, function (input) {
      console.log(`Sending Text Alert: ${message} to ${input}`);
    });
  },
  sendRadio(message) {
    console.log(message);
  },
}
