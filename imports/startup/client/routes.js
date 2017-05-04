import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/app-body.js';
import '../../ui/pages/dashboard.js';
import '../../ui/components/header.js';
import '../../ui/components/footer.js';

FlowRouter.route('/',{
	action : function(params,queryParams){
		BlazeLayout.render('App_body', {header: 'header', main: 'dashboard', footer:'footer' });
	},
	name : "home"
});

// FlowRouter.route('/oauth',{
// 	action : function(params,queryParams){
// 		BlazeLayout.render('App_body',{header: 'header', main : 'dashboard', footer: 'footer'});
// 	},
// 	name : "dashboard"
// });