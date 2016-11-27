var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Ergun'
  };

  setTimeout(() => {
      callback(user);
  }, 3000);

};

getUser(12, (userObject) => {
  console.log(userObject);
});
