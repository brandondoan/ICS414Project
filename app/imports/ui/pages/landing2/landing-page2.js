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

  'mousedown #surf': function (event) {
      addAlert('surf');
      FlowRouter.go(`/alert`);
    console.log(event.target);
  },

    'mousedown #landslide': function (event) {
        addAlert('landslide');
        FlowRouter.go(`/alert`);
        console.log(event.target);
    },

    'mousedown #flood': function (event) {
        addAlert('flood');
        FlowRouter.go(`/alert`);
        console.log(event.target);
    },

    'mousedown #earthquake': function (event) {
        addAlert('earthquake');
        FlowRouter.go(`/alert`);
        console.log(event.target);
    },

    'mousedown #tsunami': function (event) {
        addAlert('tsunami');
        FlowRouter.go(`/alert`);
        console.log(event.target);
    },

    'mousedown #missile': function (event) {
        addAlert('missile');
        FlowRouter.go(`/alert`);
        console.log(event.target);
    },

    'mousedown #amber': function (event) {
        addAlert('amber');
        FlowRouter.go(`/alert`);
        console.log(event.target);
    },

    'mousedown #hurricane': function (event) {
        addAlert('hurricane');
        FlowRouter.go(`/alert`);
        console.log(event.target);
    },
});

Meteor.call('CellAlert', 'al', 'ert');
