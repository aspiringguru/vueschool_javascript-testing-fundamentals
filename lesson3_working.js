// Potential User Class that requires testing
class User {
  constructor(details) {
    const { firstname, lastname } = details;
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get name() {
    return `${this.firstname} ${this.lastname}`;
  }
}

//-------above = code for class we are testing

const nameTest = function() {
  // Define a user Object
  const userDetails = {
    firstname: "Jane",
    lastname: "Doe"
  };
  // Instantiate a new User
  const testUser = new User(userDetails);
  // Print out result of the test
  console.log("userDetails: ", userDetails);
  console.log("testUser.name: ", testUser.name);
  console.log("Username is correct: ", testUser.name === "Jane sssDoe");
  console.log("Username is correct: ", testUser.name === "Jane Doe");
};

// Execute the test
nameTest();
