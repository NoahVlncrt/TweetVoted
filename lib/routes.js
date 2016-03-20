FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render("main");
	}
});
FlowRouter.route('/new/tweet', {
	action: function() {
		BlazeLayout.render("newTweet");
	}
});