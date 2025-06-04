import { createContext, useContext } from 'react';
import { useDisclosure } from '@heroui/react';

// Create context
const ContactContext = createContext();

// Provider component
export function ContactProvider({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ContactContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </ContactContext.Provider>
  );
}

// Custom hook to use the contact context
export function useContact() {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
}