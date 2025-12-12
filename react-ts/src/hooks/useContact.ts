import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getContacts, createContact, updateContact, deleteContact } from "../service/contact";

export function useContacts(){
  const queryClient = useQueryClient();

  const {data: contacts, isLoading, error} = useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
    retry: false
  });

  const {mutate: addContact, isPending: isAdding, error: addError} = useMutation({
    mutationFn: ({name, email, phone}: {name: string, email: string, phone: string}) => createContact(name, email, phone),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["contacts"]});
    }
  });

  const {mutate: editContact, isPending: isEditing, error: editError} = useMutation({
    mutationFn: ({id, name, email, phone}: {id: string, name: string, email: string, phone: string}) => updateContact(id, name, email, phone),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["contacts"]});
    }
  });

  const {mutate: removeContact, isPending: isRemoving, error: removeError} = useMutation({
    mutationFn: (id: string) => deleteContact(id),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["contacts"]});
    }
  });

  return {
    contacts,
    isLoading,
    error,
    addContact,
    isAdding,
    addError,
    editContact,
    isEditing,
    editError,
    removeContact,
    isRemoving,
    removeError
  }
}