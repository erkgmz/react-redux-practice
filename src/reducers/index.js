// root reducer
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  // ES6 shorthand property names e.g. courses: courses
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
