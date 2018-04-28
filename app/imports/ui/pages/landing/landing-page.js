import { Template } from 'meteor/templating';
import { Alerts } from '/imports/api/alert/AlertCollection';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.Landing_Page.onCreated(function onCreated() {
  this.subscribe(Alerts.getPublicationName());
});


  'mousedown button': function (event) {
    const test = event.target.value;
    const testBool = (test === 'true'); // this is just to make it a boolean and not a string
    const newAlert = { // we make an object thingy to insert into db
      alertType: '',
      area: ['s', 'nek'],
      sendMethod: ['s', 'nek'],
      test: testBool,
    };
    const id = Alerts._collection.insert(newAlert); // i have no idea why this works
    FlowRouter.go(`/${id}/cause`); // route to specific page for db items
  },

});
