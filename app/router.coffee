`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend
  location: config.locationType

Router.map ->
  
  @route 'signin',  { path: '/signin' }
  @route 'signup',  { path: '/signup' }
  
  @route 'missing', { path: '*:' }

`export default Router`