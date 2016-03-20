Template.newTweet.events({
  'submit .newTweet': function(){
    event.preventDefault();
    var title = $("#title").val();
    var link = $("#link").val();
    
    Meteor.call('proccessData', link, title);
    
    $("#title").val("");
    $("#link").val("");
    FlowRouter.go("/");
  }
});