export default (state=null, action) => {
  switch(action.type) {
    case 'selected_library':
      console.log('hit our reducer, action.payload is: ', action.payload);
      return action.payload;
    default:
      return state;
  }
}