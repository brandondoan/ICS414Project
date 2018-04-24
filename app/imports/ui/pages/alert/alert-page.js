import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Alerts } from '/imports/api/alert/AlertCollection';

Template.Alert_Page.onCreated(function onCreated() {
  this.subscribe(Alerts.getPublicationName());
});
git
function addSendMethod(methods) {
  const id = FlowRouter.getParam('alert');
  Alerts.update({ _id: id }, {
    $set: { sendMethod: methods },
  });
}

Template.Alert_Page.events({
  'mousedown button': function (event) {
    addSendMethod('a');
  },
  'mousedown #ui #raised #segment': function (event) {
    console.log(event.target);
  },
});

Meteor.call('CellAlert', 'al', 'ert');
