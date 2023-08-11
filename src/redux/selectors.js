import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contactList;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectFilteredContactList = createSelector(
  [selectContacts, selectFilter],
  (contactList, filter) => {
    return contactList.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  }
);
