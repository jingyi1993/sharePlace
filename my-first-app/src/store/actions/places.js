import {ADD_PLACE, DELETE_PLACE} from './actionTypes';

export const addPlace = (placeName) => {
  return {
      type: ADD_PLACE,
      placeName: placeName
  };
};

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    }
};

// export const selectPlace = (key) => {
//     return {
//         type: SELETE_PLACE,
//         placeKey: key
//     }
// };
//
// export const deselectPlace = () => {
//     return {
//         type: DESELETE_PLACE
//     }
// };
