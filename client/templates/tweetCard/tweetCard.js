Template.tweetCard.events({
  'click .uparrow': function(){
  	var tweetArray = Tweets.findOne({_id: this._id});
  	console.log(tweetArray.alreadyVoted.includes(Meteor.userId()))
    if(tweetArray.alreadyVoted.includes(Meteor.userId()) === true){
      console.log("YOU DID IT, GOOD JOB NOAH!")
    } else {
      console.log("WHY DID YOU FAIL YOU SHIT????")
    }
  },
  'click .downarrow': function(){
    Tweets.update(this._id, {$inc:{score:-1}});
    Tweets.update({_id: this._id}, {$push:{alreadyVoted: Meteor.userId()}});
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
