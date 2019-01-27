import UserData from '../data/UserData'

export default function (params, callback) {
  setTimeout(function() {
    params.id = UserData.length + 1
    UserData.push(params)
    callback(null, params)
  }, 1000)
}
