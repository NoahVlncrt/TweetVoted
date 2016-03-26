var addUsers = function(userId){
  console.log(Meteor.users.find().count())
  if(Meteor.users.find().count() === 1){
    Roles.addUsersToRoles(userId, ['admin']);    
  } else {
    Roles.addUsersToRoles(userId, ['user']);  
  }
};
AccountsTemplates.configure({
  postSignUpHook: addUsers
})