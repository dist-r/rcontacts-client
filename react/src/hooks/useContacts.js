import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getContacts, createContact, updateContact, deleteContact } from "../service/contact";


export function useContacts() {
  const queryClient = useQueryClient();

  const { data: contacts, isLoading: isLoadingContacts } = useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
    retry: false,
  });

  const { mutate: addContact, isPending: isAddingContact } = useMutation({
    mutationFn: ({ name, email, phone }) => createContact(name, email, phone),
    onSuccess: () => {
      queryClient.invalidateQueries(["contacts"]);
    },
  });

  const { mutate: editContact, isPending: isEditingContact } = useMutation({
    mutationFn: ({ id, name, email, phone }) => updateContact(id, name, email, phone),
    onSuccess: () => {
      queryClient.invalidateQueries(["contacts"]);
    },
  });

  const { mutate: removeContact, isPending: isRemovingContact } = useMutation({
    mutationFn: (id) => deleteContact(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["contacts"]);
    },
  });

  return {
    contacts,
    isLoadingContacts,
    addContact,
    isAddingContact,
    editContact,
    isEditingContact,
    removeContact,
    isRemovingContact,
  };
}
