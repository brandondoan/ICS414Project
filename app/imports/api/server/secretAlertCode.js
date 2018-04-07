import { _ } from 'meteor/underscore';

export const Alerts = {
  sendPhone(message, numbers) {
    _.each(numbers, function (input) {
      console.log(`Sending Alert: ${message} to ${input}`);
    });
  },
}
