const Users = ["Kristen", "Haruna"];

function message(Users, event) {
  Users.forEach(function (user) {
    console.log(user + ", thank you for the " + event + " gift!");
  });
}

message(Users, "birthday");
