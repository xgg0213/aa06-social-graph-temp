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
    return this.follows[userID];
  }

  getFollowers(userID) {
    // Your code here 
    let users = Object.keys(this.users);
    let followers = new Set()

    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      if (this.follows[user].has(userID)) followers.add(user * 1);
    }
    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here 
    let queue = [[userID]];
    let visited = new Set([userID]);
    let recommended = new Set();

    while (queue.length) {
      let currentPath = queue.shift()
      let lastNode = currentPath[currentPath.length-1];

      if (currentPath.length -2 <= degrees && currentPath.length > 2) {
        for (let i = 2; i <currentPath.length; i++) {
          recommended.add(currentPath[i]);
        }
      }

      for (let follow of this.follows[lastNode]) {
        if (!visited.has(follow)) {
          visited.add(follow);
          queue.push(currentPath.concat([follow]));
        }
      }
    }
    const array = Array.from(recommended)
    return array;
  }
}

module.exports = SocialNetwork;


