FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render("main", {main:"latest"});
	}
});
FlowRouter.route('/new/tweet', {
	action: function() {
		BlazeLayout.render("newTweet");
	}
});
AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'signin',
  path: '/login',
  layoutTemplate: 'blank',
  contentRegion: 'content'
});
AccountsTemplates.configureRoute('signUp', {
  layoutType: 'blaze',
  name: 'signup',
  path: '/signup',
  layoutTemplate: 'blank',
  contentRegion: 'content'
});