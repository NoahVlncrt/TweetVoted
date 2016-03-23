Template.latest.helpers({
	tweets: function(){
			return Tweets.find({}, {sort:{createdAt: -1}
		});
	}
});
Template.latest.onRendered(function(){
	$("#topTab").removeClass("active");
	$("#latestTab").addClass("active");
});