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
  FlowRouter.go(`/${id}/alert`);
}

Template.Landing_Page2.events({

  'mousedown #surf': function (event) {
    addAlert('surf');
    console.log(event.target);
  },

  'mousedown #landslide': function (event) {
    addAlert('landslide');
    console.log(event.target);
  },

  'mousedown #flood': function (event) {
    addAlert('flood');
    console.log(event.target);
  },

  'mousedown #earthquake': function (event) {
    addAlert('earthquake');
    console.log(event.target);
  },

  'mousedown #tsunami': function (event) {
    addAlert('tsunami');
    console.log(event.target);
  },

  'mousedown #missile': function (event) {
    addAlert('missile');
    console.log(event.target);
  },

  'mousedown #amber': function (event) {
    addAlert('amber');
    console.log(event.target);
  },

  'mousedown #hurricane': function (event) {
    addAlert('hurricane');
    console.log(event.target);
  },
});

// Meteor.call('CellAlert', 'al', 'ert');
// Meteor.call('EmailAlert', FlowRouter.getParam('alert'), ['swoop.ty1@gmail.com']);


