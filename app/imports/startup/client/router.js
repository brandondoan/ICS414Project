import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { $ } from 'meteor/jquery';


/*                        LANDING ROUTE                       */

export const landingPageRouteName = 'Landing_Page';
FlowRouter.route('/', {
  name: landingPageRouteName,
  action() {
    BlazeLayout.render('Landing_Layout', { main: landingPageRouteName });
  },
});

export const AlertRoute22 = 'Landing_Page2';
FlowRouter.route('/landing2', {
  name: AlertRoute22, action() {
    BlazeLayout.render('Landing_Layout2', { main: AlertRoute22 });
  },
});

export const AlertRoute32 = 'Alert_Page';
FlowRouter.route('/alert', {
  name: AlertRoute32, action() {
    BlazeLayout.render('Alert_Page', { main: AlertRoute32 });
  },
});

/*                        DIRECTORY ROUTE                       */

function addDirectoryBodyClass() {
  $('body').addClass('directory-page-body');
}

function removeDirectoryBodyClass() {
  $('body').removeClass('directory-page-body');
}

export const directoryPageRouteName = 'Directory_Page';
FlowRouter.route('/directory', {
  name: directoryPageRouteName,
  action() {
    BlazeLayout.render('Directory_Layout', { main: directoryPageRouteName });
  },
  triggersEnter: [addDirectoryBodyClass],
  triggersExit: [removeDirectoryBodyClass],
});

const alertRoutes = FlowRouter.group({
  prefix: '/:alert',
  name: 'alertRoutes',
});

export const AlertRoute2 = 'Landing_Page2';
alertRoutes.route('/cause', {
  name: AlertRoute2, action() {
    BlazeLayout.render('Landing_Layout2', { main: AlertRoute2 });
  },
});

export const AlertRoute3 = 'Alert_Page';
alertRoutes.route('/alert', {
  name: AlertRoute3, action() {
    BlazeLayout.render('Alert_Page', { main: AlertRoute3 });
  },
});


/*                        USER ROUTES                      */


function addUserBodyClass() {
  $('body').addClass('user-layout-body');
}

function removeUserBodyClass() {
  $('body').removeClass('user-layout-body');
}

const userRoutes = FlowRouter.group({
  prefix: '/:username',
  name: 'userRoutes',
  triggersEnter: [addUserBodyClass],
  triggersExit: [removeUserBodyClass],
});

export const profilePageRouteName = 'Profile_Page';
userRoutes.route('/profile', {
  name: profilePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: profilePageRouteName });
  },
});

export const filterPageRouteName = 'Filter_Page';
userRoutes.route('/filter', {
  name: filterPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: filterPageRouteName });
  },
});

/*                        MISC ROUTES                       */
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('Page_Not_Found');
  },
};
