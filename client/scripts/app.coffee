# alert "its working!"
# console.log 'hi!'
angular.module('app', ['ngComponentRouter'])
  .config(
    ($locationProvider) ->
      $locationProvider.html5Mode(true)
  )
  .value('$routerRootComponent', 'app')
  .component('app', {
    template: 'It worked!'
    })


#
# (->
#   config = ($routeProvider) ->
#     $routeProvider
#       .when('/', {
#         templateURL: '<name></name>'
#         })
#       .otherwise('/')
# )()
