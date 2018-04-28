import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Alerts } from '/imports/api/alert/AlertCollection';

Template.Alert_Page.onCreated(function onCreated() {
  this.subscribe(Alerts.getPublicationName());
});

let sendOptions = [];

function addSendMethod(methods) {
  const id = FlowRouter.getParam('alert');
  Alerts.update({ _id: id }, {
    $set: { sendMethod: [methods], area: [methods], alertType: methods },
  });
}

Template.Alert_Page.events({
  'mousedown #cell': function (event) {
    // addSendMethod('cell');
    sendOptions.push('cell');
    console.log('send to cell');
  },
  'mousedown #tv': function (event) {
    // addSendMethod('tv');
    sendOptions.push('tv');
    console.log('send to tv');
  },
  'mousedown #radio': function (event) {
    // addSendMethod('radio');
    sendOptions.push('radio');
    console.log('send to radio');
  },
  'mousedown #sirens': function (event) {
    // addSendMethod('sirens');
    sendOptions.push('sirens');
    console.log('send to sirens');
  },
  'mousedown #sendAlert': function (event) {
    // Meteor.call('CellAlert', 'al', 'ert');
    let sanitizedArray = [];
    sanitizedArray = _.uniq(sendOptions, function (item) {
      return item;
    });
    _.each(sanitizedArray, function (method) {
      const id = FlowRouter.getParam('alert');
      console.log(id);
      console.log(method);
      switch (method) {
        case 'cell':
          Meteor.call('CellAlert', id, [0]); // the 0 is where numbers would go
          break;
        case 'tv':
          Meteor.call('EmailAlert', id, ['uhmwarning@gmail.com']); // this is where emails would go
          console.log('it herrr');
          break;
        case 'radio':
          Meteor.call('RadioAlert', id);
          break;
        case 'sirens':
          Meteor.call('SirenAlert', id);
          break;
      }
    });
    const id = FlowRouter.getParam('alert');
    Alerts.delete({ _id: id });
  },
});
