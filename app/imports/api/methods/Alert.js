import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Alerts } from '/imports/api/alert/AlertCollection';

Meteor.methods({
  CellAlert(id, numbers) {
    check(id, String);
    check(numbers, Array);
    const { Alert } = require('/imports/api/server/secretAlertCode.js');
    const sendingAlert = Alerts.find({ _id: id }).fetch();
    const problem = sendingAlert.alertType;
    const d = Date();
    let not = '';
    if (sendingAlert.test) {
      not = 'not ';
    }
    const time = moment(d).format('MMMM Do YYYY, h:mm:ss a');
    const alertMessage = `${problem} has been reported in the areas of ${sendingAlert.area} 
                          at ${time}. This is ${not}a test.`;
    Alert.sendPhone(alertMessage, numbers);
    return 'ok';
  },

  SirenAlert(area, message) {
    check(area, String);
    check(message, String);
    const { Alert } = require('/imports/api/server/secretAlertCode.js');
    Alert.sendRadio('Flash Flood plz no drown turn around');
    return 'ok';
  },

  EmailAlert(id, list) {
    // check(id, String);
    check(list, Array);
    const sendingAlert = Alerts.find({ _id: id }).fetch();
    const problem = sendingAlert.alertType;
    const d = Date();
    let not = '';
    if (sendingAlert.test) {
      not = 'not ';
    }
    const time = moment(d).format('MMMM Do YYYY, h:mm:ss a');
    const { Alert } = require('/imports/api/server/secretAlertCode.js');
    const alertSubject = `${problem} in your area, this is ${not}a test`;
    const alertMessage = `${problem} has been reported in the areas of ${sendingAlert.area} 
                          at ${time}. This is ${not}a test.`;
    // Alert.sendEmail(id, list, alertSubject, alertMessage);
    console.log(id, list, alertSubject, alertMessage);
  },
});
