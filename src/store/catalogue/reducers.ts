import { CatalogueState, REMOVE_ITEM_FROM_CATALOGUE, ADD_ITEM_TO_CATALOGUE, CatalogueActionTypes } from './types';

// Set up a default or "initial" state for our app.
const initialState: CatalogueState = {
  items: [
    {
      id: 1,
      name: 'Say a prayer'
    },
    {
      id: 2,
      name: 'Take a shower'
    },
    {
      id: 3,
      name: 'Have some breakfast'
    }
  ]
}

// Now to set up our reducer / functionality!
export function catalogueReducer ( state = initialState, action: CatalogueActionTypes ) {
  switch ( action.type ) {
    case REMOVE_ITEM_FROM_CATALOGUE:
      return {
        ...state,
        // Filter through, and return the array WITHOUT the matching ID.
        items: state.items.filter( item => item.id !== action.payload )
      }
    case ADD_ITEM_TO_CATALOGUE:
      return {
        ...state,
        // Add one new item onto the end of our array!
        items: [ ...state.items, action.payload ]
      }
    default:
      return state;
  }
}
