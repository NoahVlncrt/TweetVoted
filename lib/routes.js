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
FlowRouter.route('/login', {
	action: function() {
		BlazeLayout.render("blank", {content:"login"});
	}
});
FlowRouter.route('/latest', {
	action: function() {
		BlazeLayout.render("main", {main: "latest"});
	}
});