import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

type AuthModalView = "login" | "forgot" | "otp" | "signup";

interface AuthModalContextValue {
  isOpen: boolean;
  view: AuthModalView;
  openModal: (initialView?: AuthModalView) => void;
  closeModal: () => void;
  setView: (view: AuthModalView) => void;
}

const AuthModalContext = createContext<AuthModalContextValue | undefined>(
  undefined
);

interface AuthModalProviderProps {
  children: ReactNode;
}

export const AuthModalProvider: React.FC<AuthModalProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<AuthModalView>("login");

  const openModal = useCallback((initialView: AuthModalView = "login") => {
    setView(initialView);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <AuthModalContext.Provider
      value={{ isOpen, view, openModal, closeModal, setView }}>
      {children}
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = () => {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error("useAuthModal must be used within AuthModalProvider");
  }
  return context;
};
