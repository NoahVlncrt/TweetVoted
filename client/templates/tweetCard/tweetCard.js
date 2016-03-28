Template.tweetCard.events({
  'click .uparrow': function(){
    
    tweetArray = Tweets.findOne({_id: this._id});
    
    if(Meteor.userId() === null) {
      console.log("Please login before using the service.");
    } else {
      
      if(tweetArray.alreadyVoted.includes(Meteor.userId()) === true) {
        console.log("It seems you have already voted!");
      } else {
        Tweets.update(this._id, {$inc:{score: 1}});
        Tweets.update({_id: this._id}, {$push:{alreadyVoted: Meteor.userId()}});
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
        Tweets.update({_id: this._id}, {$push:{alreadyVoted: Meteor.userId()}});
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
