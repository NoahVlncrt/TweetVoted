Template.tweetCard.events({
  'click .uparrow': function(){
    Tweets.update(this._id, {$inc:{score:1}});
    Tweets.update({_id: this._id}, {$push:{alreadyVoted: Meteor.userId()}});
  },
  'click .downarrow': function(){
    Tweets.update(this._id, {$inc:{score:-1}});
    Tweets.update({_id: this._id}, {$push:{alreadyVoted: Meteor.userId()}});
  }
});
Template.tweetCard.helpers({
  equals: function(v1,v2){
    return (v1 === v2);
  }
});
