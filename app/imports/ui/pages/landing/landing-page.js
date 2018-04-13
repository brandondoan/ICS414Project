import { Template } from 'meteor/templating';
import { Alerts } from '/imports/api/alert/AlertCollection';

Template.Landing_Page.onCreated(function onCreated() {
  console.log(this.subscribe(Alerts.getPublicationName()));
});
