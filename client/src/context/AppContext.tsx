import { createContext, useContext } from "react";
import type { ReactNode } from "react";

// Define the shape of your context value
interface AppContextType {
  // Add your context properties here as you need them
  // For example:
  // user: User | null;
  // theme: 'light' | 'dark';
  // setUser: (user: User | null) => void;
  // setTheme: (theme: 'light' | 'dark') => void;
  
  // Placeholder property to avoid empty interface
  isInitialized: boolean;
}

// Create context with undefined as default (will be provided by provider)
const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  // Initialize your context value here
  const value: AppContextType = {
    // Add your actual context values here
    // For example:
    // user: null,
    // theme: 'light',
    // setUser: (user) => { /* implementation */ },
    // setTheme: (theme) => { /* implementation */ },
    
    // Placeholder value
    isInitialized: true,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
