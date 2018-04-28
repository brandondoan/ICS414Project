import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Alerts } from '/imports/api/alert/AlertCollection';
// import { moment } from 'moment';

const moment = require('moment');

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
    const time = moment().format('MMMM Do YYYY, h:mm:ss a');
    const alertMessage = `${problem} has been reported in the areas of ${sendingAlert.area} 
                          at ${time}. This is ${not}a test.`;
    Alert.sendPhone(alertMessage, numbers);
    return 'ok';
  },

  RadioAlert(id) {
    check(id, String);
    const { Alert } = require('/imports/api/server/secretAlertCode.js');
    const sendingAlert = Alerts.find({ _id: id }).fetch();
    const problem = sendingAlert.alertType;
    const d = Date();
    let not = '';
    if (sendingAlert.test) {
      not = 'not ';
    }
    const time = moment().format('MMMM Do YYYY, h:mm:ss a');
    const alertMessage = `${problem} has been reported in the areas of ${sendingAlert.area} 
                          at ${time}. This is ${not}a test.`;
    Alert.sendRadio(alertMessage);
    return 'ok';
  },

  SirenAlert(id) {
    check(id, String);
    const { Alert } = require('/imports/api/server/secretAlertCode.js');
    const area = Alerts.find({ _id: id }).fetch().area;
    Alert.sendSiren(area);
    return 'ok';
  },

  EmailAlert(id, list) {
    // check(id, String);
    check(list, Array);
    const sendingAlert = Alerts.find({ _id: id }).fetch()[0];
    console.log(sendingAlert);
    const problem = sendingAlert.alertType;
    const d = Date();
    let not = '';
    if (!sendingAlert.test) {
      not = 'not ';
    }
    const time = moment(d).format('MMMM Do YYYY, h:mm:ss a');
    const { Alert } = require('/imports/api/server/secretAlertCode.js');
    const alertSubject = `${problem} in your area, this is ${not}a test`;
    const alertMessage = `${problem} has been reported in the areas of ${sendingAlert.area} at ${time}. This is ${not}a test.`;
    console.log(list, alertSubject, alertMessage);
    Alert.sendEmail(list, alertSubject, alertMessage);
  },
});
