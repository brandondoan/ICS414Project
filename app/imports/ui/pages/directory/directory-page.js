import { Template } from 'meteor/templating';
import { Alerts } from '/imports/api/alert/AlertCollection';

Template.Directory_Page.onCreated(function onCreated() {
  this.subscribe(Alerts.getPublicationName());
});

Template.Directory_Page.helpers({

  /**
   * Returns a cursor to profiles, sorted by last name.
   */
  profiles() {
    return Alerts.find({}, { sort: { lastName: 1 } });
  },
});
