// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here 
    this.currentID++;
    let user = {'id': this.currentID, 'name': name };
    this.follows[`${this.currentID}`] = new Set();
    this.users[`${this.currentID}`] = user;
    return this.currentID
  }

  getUser(userID) {
    // Your code here 
    if (this.users[userID]) return this.users[userID];
    return null;
  }

  follow(userID1, userID2) {
    // Your code here 
  }

  getFollows(userID) {
    // Your code here 
  }

  getFollowers(userID) {
    // Your code here 
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here 
  }
}

module.exports = SocialNetwork;

let socialNetwork = new SocialNetwork();

console.log(Object.keys(socialNetwork.users).length)//.to.equal(0);

console.log(socialNetwork.addUser("User 1"))//.to.equal(1);

console.log(Object.keys(socialNetwork.users).length)//.to.equal(1);

console.log(socialNetwork.users['1'])//.to.deep.equal({ id: 1, name: 'User 1' });
