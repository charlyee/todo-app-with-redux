import { CatalogueActionTypes, ADD_ITEM_TO_CATALOGUE, REMOVE_ITEM_FROM_CATALOGUE, Item } from './types';

export function removeItemFromCatalogue ( task: number ): CatalogueActionTypes {
  return {
    type: REMOVE_ITEM_FROM_CATALOGUE,
    payload: task // Will only accept type: number
  }
}

export function addItemToCatalogue ( item: Item ): CatalogueActionTypes {
  return {
    type: ADD_ITEM_TO_CATALOGUE,
    payload: item // Will only accept type: Item
  }
}