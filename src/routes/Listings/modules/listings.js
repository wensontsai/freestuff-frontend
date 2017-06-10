// ------------------------------------
// Constants
// ------------------------------------
export const LISTINGS_INCREMENT = 'LISTINGS_INCREMENT'
export const LISTINGS_DOUBLE_ASYNC = 'LISTINGS_DOUBLE_ASYNC'
export const LISTINGS_GET_ALL = 'LISTINGS_GET_ALL'
export const LISTINGS_INITIALIZE = 'LISTINGS_INITIALIZE'



// ------------------------------------
// Actions
// ------------------------------------
export const initialize = () => {
      console.log('fuck23234')
    return (dispatch, getState) => {
      return new Promise((resolve) => {
          setTimeout(() => {
              dispatch({
                  type    : LISTINGS_INITIALIZE,
                  payload : getState().listings
          })
              resolve()
          }, 200)
      })
    }

    // return 
    //     fetch('http://localhost:8000/listings')
    //         .then(function(response) {
    //             console.log(response)
    //             return response.json()
    //         })
    //         .then(function(json) {
    //             console.log('parsed json', json)
    //         })
    //         .catch(function(ex) {
    //             console.log('parsing failed', ex)
    //         })
}

export function increment (value = 1) {
  return {
    type    : LISTINGS_INCREMENT,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
    console.log('fuck')
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch({
                    type    : LISTINGS_DOUBLE_ASYNC,
                    payload : getState().listings
            })
                resolve()
            }, 200)
    })
  }
}

export const getAll = () => {
    console.log('getall')
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch({
                    type    : LISTINGS_GET_ALL,
                    payload : getState().listings
            })
                resolve()
            }, 200)
        })
    }
}

export const actions = {
  increment,
  doubleAsync,
  getAll,
  initialize
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LISTINGS_INCREMENT]    : (state, action) => state + action.payload,
  [LISTINGS_DOUBLE_ASYNC] : (state, action) => state * 2,
  [LISTINGS_GET_ALL]      : (state, action) => state,
  [LISTINGS_INITIALIZE]   : (state, action) => state
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 
{
    id: 1,
    user_id: "1",
    name: "id",
    slug: "id",
    zip_code: "88077",
    description: "Sequi quibusdam consectetur enim velit dicta illum. Aut in labore maiores rerum molestias quidem. Cum corporis delectus unde voluptatem voluptate.",
    is_active: true,
    published_at: "2017-05-29 22:55:59",
    created_at: "2017-05-29 22:55:59",
    updated_at: "2017-05-29 22:55:59",
    images: [
        {
        id: 1,
        listing_id: "1",
        path: "http://lorempixel.com/300/300/?47046",
        created_at: "2017-05-29 22:55:59",
        updated_at: "2017-05-29 22:55:59"
        }
    ],
    user: {
        id: 1,
        name: "Danny Bushkanets",
        email: "dbushy727@gmail.com",
        facebook_id: "10209467596871110",
        facebook_token: "EAAAAIT69HQABAPNVopyF9JOo6zyvPAguQlUBQgf0sesPBd4YH9WmEYNVzMQEJDVBfxesqCs91cYKpKeXFiZCoiFrBwg8asldIpSzlbg7Fqoow4NZC2NVr3S3hi5rhTZBztZAwYWhZB1KwaV4jZC4R2WODwvZAZBggXsZD",
        facebook_avatar: "https://graph.facebook.com/v2.9/10209467596871110/picture?type=normal",
        facebook_profile: "https://www.facebook.com/app_scoped_user_id/10209467596871110/",
        created_at: "2017-05-29 22:20:14",
        updated_at: "2017-05-29 22:22:58"
    }
};

export default function listingsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
