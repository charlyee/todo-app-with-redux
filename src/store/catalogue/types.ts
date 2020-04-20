export interface Item {
  id: number,
  name: string
}

export interface CatalogueState {
  items: Item[]
}

// Action "names" or types.
export const REMOVE_ITEM_FROM_CATALOGUE = 'REMOVE_ITEM_FROM_CATALOGUE';
export const ADD_ITEM_TO_CATALOGUE = 'ADD_ITEM_TO_CATALOGUE';

// Define action requirements.

interface RemoveItemFromCatalogue {
  type: typeof REMOVE_ITEM_FROM_CATALOGUE,
    payload: number // This will match our Item ID.
}

interface AddItemToCatalogue {
  type: typeof ADD_ITEM_TO_CATALOGUE,
  payload: Item // We need to pass a new Item that should be added to our store.
}

export type CatalogueActionTypes = RemoveItemFromCatalogue | AddItemToCatalogue;
