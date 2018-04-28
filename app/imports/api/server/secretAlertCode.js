import { _ } from 'meteor/underscore';
import { Email } from 'meteor/email';
import { Alerts } from '/imports/api/alert/AlertCollection';


export const Alert = {
  sendPhone(message, numbers) {
    const gateways = ['@vtext.com', '@txt.att.net', '@messaging.sprintpcs.com', '@tmomail.net']; // its gotta work
    _.each(numbers, function (number) {
      _.each(gateways, function (gateway) {
        console.log(`sending text alert to ${number}${gateway} with body: ${message}`);
        Email.send({ to: number + gateway, from: 'uhmwarning@gmail.com', subject: message, message: message });
      });
    });
  },
  sendRadio(message) {
    console.log(message);
  },

  sendSiren(message) {
    console.log(`Starting sirens in ${area}`);
  },

  sendEmail(list, subject, message) {
    _.each(list, function (input) {
      console.log(`sending text alert to ${input} with title: ${subject} and body: ${message}`);
      Email.send({ to: input, from: 'uhmwarning@gmail.com', subject: subject, message: message });
    });
  },
};

