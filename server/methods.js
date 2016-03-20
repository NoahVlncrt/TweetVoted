Meteor.methods({
  proccessData: function(link, title){
    tweetid = link.split('status/')[1];
		createdAt = new Date();
		title = title;
    
    T.get("statuses/show/:id", {id: tweetid})
		.then( Meteor.bindEnvironment(function (result){
			tweet = {
				name: result.data.user.name,
				handle: result.data.user.screen_name,
				text: result.data.text,
				profileimg: result.data.user.profile_image_url,
				user: result.data.user.url
			};
			Tweets.insert({
				title: title,
				tweetData: {
					name: tweet.name,
					handle: tweet.handle,
					text: tweet.text,
					profile: tweet.profileimg,
					user: tweet.user
				},
				createdAt: createdAt,
			});
		}));
 	}
});