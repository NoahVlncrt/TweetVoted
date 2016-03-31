Template.tweetCard.events({
  'click .uparrow': function(){
    tweetArray = Tweets.findOne({_id: this._id});
    
    if(Meteor.userId() === null) {
      console.log("Please login.")
    } else if (tweetArray.votes.down.includes(Meteor.userId()) === true){
      console.log("it seems like you have already voted")
    } else {
      Tweets.update(this._id, {$inc:{score: 1}});
      Tweets.update({_id: this._id}, {$push:{"votes.up": Meteor.userId()}});
    }
  },
  'click .downarrow': function(){
    tweetArray = Tweets.findOne({_id: this._id});
    
    console.log(tweetArray.votes.down.includes(Meteor.userId()));
    
    if(Meteor.userId() === null) {
      console.log("Please login.")
    } else if (tweetArray.votes.down.includes(Meteor.userId()) === true){
      console.log("it seems like you have already voted")
    } else {
      Tweets.update(this._id, {$inc:{score: -1}});
      Tweets.update({_id: this._id}, {$push:{"votes.down": Meteor.userId()}});
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
