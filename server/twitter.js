var Twit = require('twit');

T = new Twit({
  consumer_key:         Meteor.settings.private.twitterapi.consumer_key,
  consumer_secret:      Meteor.settings.private.twitterapi.consumer_secret,
  access_token:         Meteor.settings.private.twitterapi.access_token,
  access_token_secret:  Meteor.settings.private.twitterapi.access_token_secret,
});