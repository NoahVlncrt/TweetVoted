Template.tweetCard.events({
  'click .uparrow': function(){
    Tweets.update(this._id, {$inc:{score:1}});
  },
  'click .downarrow': function(){
    Tweets.update(this._id, {$inc:{score:-1}});
  }
});