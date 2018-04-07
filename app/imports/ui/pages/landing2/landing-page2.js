import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Template } from 'meteor/templating';

Template.body.events({
  'click button'(event, instance) {
    Meteor.call('CellAlert', 'al', 'ert', (error, result) => {
      console.log(result);
      instance.returnMessage.set(result);
    });
  },
});
Meteor.call('CellAlert', 'al', 'ert', (error, result) => {
  console.log(result);
});
