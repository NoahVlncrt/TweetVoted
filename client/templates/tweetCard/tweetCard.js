Template.tweetCard.events({
  'click .uparrow': function(){
    tweetArray = Tweets.findOne({_id: this._id});
    locateOwner = function(){
      return tweetArray.alreadyVoted.user === this.userId
    };
    
    if(Meteor.userId() === null) {
      console.log("Please login before using the service.");
    } else {
      if(tweetArray.alreadyVoted.find(locateOwner).user === Meteor.userId()) {
        console.log("It seems you have already voted!");
      } else {
        Tweets.update(this._id, {$inc:{score: 1}});
        Tweets.update({_id: this._id}, {$push:{alreadyVoted: {user: this.userId, voteType: "up"}}});
      }
    }
  },
  'click .downarrow': function(){
    tweetArray = Tweets.findOne({_id: this._id});
    
    if(Meteor.userId() === null) {
      console.log("Please login before using the service.");
    } else {
      
      if(tweetArray.alreadyVoted.includes(Meteor.userId()) === true) {
        console.log("It seems you have already voted!");
      } else {
        Tweets.update(this._id, {$inc:{score: -1}});
        Tweets.update({_id: this._id}, {$push:{alreadyVoted: {user: Meteor.userId(), voteType: "down"}}});
      }
    }
  }
});
Template.tweetCard.helpers({
  equals: function(v1,v2){
    return (v1 === v2);
  },
  voted: function() {
    return Tweets.find({alreadyVoted: this.userId});
  }
});
