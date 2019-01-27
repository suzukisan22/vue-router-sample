export default function (params, callback) {
  setTimeout(function() {
    params.id = userData.length + 1
    userData.push(params)
    callback(null, params)
  }, 1000)
}
