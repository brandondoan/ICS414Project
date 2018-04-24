import { Alerts } from '/imports/api/alert/AlertCollection';

export function removeAllEntities() {
  Alerts.removeAll();
}
