import UserData from '../data/UserData'

export default function (callback){
  setTimeout(function () {
    callback(null, UserData)
  }, 1000)
}
