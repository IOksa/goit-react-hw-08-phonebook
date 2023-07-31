//Чтобы потом легче было в одном месте поменять, если изменился state
export const selectContactsState = state => state.contacts.contacts;
export const selectIsLoading = state=> state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectIsAdding = state => state.contacts.isAdding;

export const selectFilterState = state => state.filter.value;