import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReudcer'

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
