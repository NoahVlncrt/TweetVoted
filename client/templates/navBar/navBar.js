Template.navBar.onRendered(function(){
  $('.dropdown-button').dropdown({
    alignment: 'under',
    gutter: 5
  })
});
Template.navBar.events({
  'click .logout': function(){
    AccountsTemplates.logout();
  }
});