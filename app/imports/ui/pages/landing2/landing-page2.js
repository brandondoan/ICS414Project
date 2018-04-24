import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Alerts } from '/imports/api/alert/AlertCollection';

Template.Landing_Page2.onCreated(function onCreated() {
  this.subscribe(Alerts.getPublicationName());
});

function addAlert(alert) {
  const id = FlowRouter.getParam('alert');
  Alerts.update({ _id: id }, {
    $set: { alertType: alert },
  });
}

Template.Landing_Page2.events({
  'mousedown button': function (event) {
    addAlert('a');
  },
  'mousedown #ui #raised #segment': function (event) {
    console.log(event.target);
  },
});

Meteor.call('CellAlert', 'al', 'ert');
