const connection = require('./connection')

function getCar (userId, db = connection) {
  return db('cars')
    .where('user_id', userId)
    .select()
    .then(result => {
      return result
    })
}
function deleteCar () {

}
function addCar () {

}
function updateCar () {

}

module.exports = {
  getCar,
  deleteCar,
  addCar,
  updateCar
}
