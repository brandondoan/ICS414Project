import { Template } from 'meteor/templating';
import { Alerts } from '/imports/api/alert/AlertCollection';

Template.Landing_Page.onCreated(function onCreated() {
  this.subscribe(Alerts.getPublicationName());
});

Template.Landing_Page.events({
  'mousedown button': function (event) {
    const test = event.target.value;
    const testBool = (test === 'true'); // this is just to make it a boolean and not a string
    const newAlert = { // we make an object thingy to insert into db
      alertType: '',
      area: [],
      sendMethod: [],
      test: testBool,
    };
    console.log(Alerts);
    Alerts._collection.insert(newAlert); // i have no idea why this works
  },
})
