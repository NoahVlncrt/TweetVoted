var addUsers = function(userId){
  if(Meteor.users.find().count() === 1){
    Roles.addUsersToRoles(userId, ['admin']);    
  } else {
    Roles.addUsersToRoles(userId, ['user']);  
  }
  
};
AccountsTemplates.configure({
  postSignUpHook: addUsers
})