import { createContext, useContext, useState } from "react";

const appContext = createContext();
export const useModalContext = () => {
  return useContext(appContext);
};

const ModalContext = ({ children }) => {
  const [isModal, setIsModal] = useState(false);

  const switchModal = () => {
    if (!isModal) {
      setIsModal(true);
      console.log("이거 안나오는거?");
    } else {
      setIsModal(false);
      console.log("이거 안나오는거???");
    }
  };

  const onCloseModal = (e) => {
    // console.log("e.target", e.target);
    // console.log("e.tarcurrentTargetget", e.currentTarget);
    // if (e.target === e.currentTarget) {

    // }
    setIsModal(!isModal);
  };

  const props = {
    isModal,
    switchModal,
    onCloseModal,
  };

  return <appContext.Provider value={props}>{children}</appContext.Provider>;
};

export default ModalContext;
