import { createContact, getContacts, deleteContact, updateContact } from "../service/contact.service";

import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'

export function useContact () {
  const queryClient = useQueryClient();

  const { data: contacts, isPending: isFetchingContacts, error: fetchContactsError } = useQuery({
    queryKey: ['contacts'],
    queryFn: () => getContacts(),
  });

  const { mutate: createContactMutate, isPending: isCreatingContact, error: createContactError } = useMutation({
    mutationFn: ({ name, email, phone }) => createContact(name, email, phone),
    onSuccess: () => {
      queryClient.invalidateQueries(['contacts']);
    },
  });

  const { mutate: deleteContactMutate, isPending: isDeletingContact, error: deleteContactError } = useMutation({
    mutationFn: (contactId) => deleteContact(contactId),
    onSuccess: () => {
      queryClient.invalidateQueries(['contacts']);
    },
  });

  const { mutate: updateContactMutate, isPending: isUpdatingContact, error: updateContactError } = useMutation({
    mutationFn: ({ contactId, name, email, phone }) => updateContact(contactId, name, email, phone),
    onSuccess: () => {
      queryClient.invalidateQueries(['contacts']);
    },
  });

  return { 
      contacts,
      isFetchingContacts,
      fetchContactsError,
      createContactMutate,
      isCreatingContact,
      createContactError,
      deleteContactMutate,
      isDeletingContact,
      deleteContactError,
      updateContactMutate,
      isUpdatingContact,
      updateContactError
    };
}