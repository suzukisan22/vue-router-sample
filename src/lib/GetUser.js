import UserData from '../data/UserData'

export default function (userId, callback) {
  setTimeout(function () {
    const filteredUsers = UserData.filter(function (user) {
      return user.id === parseInt(userId, 10)
    })
    callback(null, filteredUsers && filteredUsers[0])
  }, 1000)
}
