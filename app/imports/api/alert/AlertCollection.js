import SimpleSchema from 'simpl-schema';
import BaseCollection from '/imports/api/base/BaseCollection';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';
import { Tracker } from 'meteor/tracker';

/** @module Profile */

/**
 * Profiles provide portfolio data for a user.
 * @extends module:Base~BaseCollection
 */
class AlertCollection extends BaseCollection {

  /**
   * Creates the Profile collection.
   */
  constructor() {
    super('Alert', new SimpleSchema({
      alertType: { type: String, label: 'Type of Alert', optional: true },
      area: { type: Array, label: 'Areas to be effected by Alert', optional: true },
      sendMethod: { type: Array, label: 'Methods to send the Alert', optional: true },
      test: { type: Boolean, label: 'Whether the alert is a test or not', optional: false },
    }, { tracker: Tracker }));
  }
  define({ alertType = '', sendMethod = [], test = '', area = [] }) {
    // make sure required fields are OK.
    const checkPattern = { alertType: String, test: Boolean, sendMethod: Array, area: Array };
    check({ alertType, test, sendMethod, area }, checkPattern);

    return this._collection.insert({ alertType, test, sendMethod, area });
  }

  /**
   * Returns an object representing the Profile docID in a format acceptable to define().
   * @param docID The docID of a Profile.
   * @returns { Object } An object representing the definition of docID.
   */
  // dumpOne(docID) {
  //   const doc = this.findDoc(docID);
  //   const firstName = doc.firstName;
  //   const lastName = doc.lastName;
  //   const username = doc.username;
  //   const bio = doc.bio;
  //   const interests = doc.interests;
  //   const picture = doc.picture;
  //   const title = doc.title;
  //   const github = doc.github;
  //   const facebook = doc.facebook;
  //   const instagram = doc.instagram;
  //   return { firstName, lastName, username, bio, interests, picture, title, github, facebook, instagram };
  // }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const Alerts = new AlertCollection();
