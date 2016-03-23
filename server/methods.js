Meteor.methods({
  proccessData: function(link, title){
    tweetid = link.split('status/')[1];
		createdAt = new Date();
		title = title;
    
    T.get("statuses/show/:id", {id: tweetid})
		.then( Meteor.bindEnvironment(function (result){
			
			if (result.data.extended_entities === undefined){
				tweetMedia = {
					type: null,
					url: null
				}
			} else {
				dataType = result.data.extended_entities.media[0].type
				
				if( (dataType === 'video') || (dataType === 'animated_gif') ){
					if(dataType === 'video') {
						tweetMedia = {
							type: 'video',
							url: result.data.extended_entities.media[0].video_info.variants[1].url
						}
					} else {
						tweetMedia = {
							type: 'gif',
							url: result.data.extended_entities.media[0].video_info.variants[0].url
						}
					}
				} else if (dataType === 'photo') {
					tweetMedia = {
						type: 'photo',
						url: result.data.extended_entities.media[0].media_url
					}
				} else {
					tweetMedia = {
						type: null,
						url: null
					}
				}
			}
				
			
			console.log(tweetMedia.type);
			
			tweet = {
				name: result.data.user.name,
				handle: result.data.user.screen_name,
				text: result.data.text
			};
			Tweets.insert({
				title: title,
				score: 0,
				tweetData: {
					name: tweet.name,
					handle: tweet.handle,
					text: tweet.text,
					Media: {
						type: tweetMedia.type,
						url: tweetMedia.url
					}
				},
				createdAt: createdAt,
				createdBy: this.userId
			});
		}));
 	},
});