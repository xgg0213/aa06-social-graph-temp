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
    
    if (this.users[userID1] && this.users[userID2]) {
      this.follows[userID1].add(userID2);
      return true;
    }
    return false;
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

userID1 = socialNetwork.addUser("User 1");
userID2 = socialNetwork.addUser("User 2");

console.log(socialNetwork.follows[userID1].size)//.to.equal(0);

console.log(socialNetwork.follow(userID1, userID2))//.to.be.true;

console.log(socialNetwork.follows[userID1].size)//.to.equal(1);
console.log(socialNetwork.follows[userID1])//.to.have.keys([2]);
