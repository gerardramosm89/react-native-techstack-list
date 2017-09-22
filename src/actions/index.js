export const selectLibrary = (libraryId) => {
  console.log('action with id of: ', libraryId);
  return {
    type: 'selected_library',
    payload: libraryId
  }
}