import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Alerts } from '/imports/api/alert/AlertCollection';

Template.Alert_Page.onCreated(function onCreated() {
  this.subscribe(Alerts.getPublicationName());
});

function addSendMethod(methods) {
  const id = FlowRouter.getParam('alert');
  Alerts.update({ _id: id }, {
    $set: { sendMethod: methods },
  });
}

Template.Alert_Page.events({
    'mousedown #cell': function (event) {
        addSendMethod('cell');
        console.log("send to cell");
    },
    'mousedown #tv': function (event) {
        addSendMethod('tv');
        console.log("send to tv");
    },
    'mousedown #radio': function (event) {
        addSendMethod('radio');
        console.log("send to radio");
    },
    'mousedown #sirens': function (event) {
        addSendMethod('sirens');
        console.log("send to sirens");
    },
    'mousedown #sendAlert': function (event) {
        Meteor.call('CellAlert', 'al', 'ert');
        console.log("sending alert");
    },

});



