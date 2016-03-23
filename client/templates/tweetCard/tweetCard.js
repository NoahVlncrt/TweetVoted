Template.tweetCard.events({
  'click .uparrow': function(){
    Tweets.update(this._id, {$inc:{score:1}});
  },
  'click .downarrow': function(){
    Tweets.update(this._id, {$inc:{score:-1}});
  }
});
Template.tweetCard.helpers({
  equals: function(v1,v2){
    return (v1 === v2);
  }
});
