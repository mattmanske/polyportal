`import Ember from 'ember';`
`import Resolver from 'ember/resolver';`
`import loadInitializers from 'ember/load-initializers';`
`import config from './config/environment';`

Ember.MODEL_FACTORY_INJECTIONS = true

#-----------  Initialize Application  -----------#

App = Ember.Application.extend
  Resolver        : Resolver
  modulePrefix    : config.modulePrefix
  podModulePrefix : config.podModulePrefix

loadInitializers(App, config.modulePrefix)

#-----------  Route-based Body Classes  -----------#

Ember.Route.reopen

  activate: ->
    cssClass = @toCssClass()
    @controllerFor('application').set('menuActive', false)
    Ember.$(@router.namespace.get('rootElement')).addClass(cssClass) unless (cssClass == 'application')

  deactivate: ->
    Ember.$(@router.namespace.get('rootElement')).removeClass(@toCssClass())

  toCssClass: ->
    @routeName.replace(/\./g, '-').replace(/\//g, '-').dasherize()

`export default App`
