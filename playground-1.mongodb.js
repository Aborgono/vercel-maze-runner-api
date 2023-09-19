const database = 'Maze-Runner'
const collection = 'users'

use(database);

// db.createCollection(collection);

db.getCollection('users').insertMany([
  { 'user': 'playerOne', 'difficulty': 'Easy', 'score': 2},
  { 'user': 'playerTwo', 'difficulty': 'Medium', 'score': 24},
  { 'user': 'playerThree', 'difficulty': 'Hard', 'score': 242},
]);

 