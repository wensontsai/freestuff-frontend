import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'listings',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Listings = require('./containers/ListingsContainer').default
      const reducer = require('./modules/listings').default

      /*  Add the reducer to the store on key 'listings'  */
      injectReducer(store, { key: 'listings', reducer })

      /*  Return getComponent   */
      cb(null, Listings)

    /* Webpack named bundle   */
    }, 'listings')
  }
})
