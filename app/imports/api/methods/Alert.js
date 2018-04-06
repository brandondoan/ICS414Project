import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';

Meteor.methods({
  CellAlert(area, message) {
    check(area, String);
    check(message, String);
    console.log(`Alert ${message} in ${area}`);
    return 'ok';
  },

  SirenAlert(area, message) {
    check(area, String);
    check(message, String);
    console.log(`Alert ${message} in ${area}`);
    return 'ok';
  },
});
