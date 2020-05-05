import React, {
    useMemo,
    createContext,
    useContext,
    useState,
    useCallback
  } from "react";
  
  const toggleContext = createContext();
  const { Provider } = toggleContext;
  
  const Toggle = ({ children, initialValue }) => {
    const [toggleStatus, setToggleStatus] = useState(initialValue);
  
    const handleButtonClick = useCallback(() => {
      setToggleStatus(prev => !prev);
    }, [setToggleStatus]);
  
    const memoizedValue = useMemo(
      () => ({
        toggleStatus,
        handleButtonClick
      }),
      [toggleStatus, handleButtonClick]
    );
  
    return <Provider value={memoizedValue}>{children}</Provider>;
  };
  
  const On = ({ children }) => {
    const { toggleStatus } = useContext(toggleContext);
    return toggleStatus ? children : null;
  };
  const Off = ({ children }) => {
    const { toggleStatus } = useContext(toggleContext);
    return !toggleStatus ? children : null;
  };
  const Button = () => {
    const { handleButtonClick } = useContext(toggleContext);
    return <button onClick={handleButtonClick}>Toggle This</button>;
  };
  
  Toggle.On = On;
  Toggle.Off = Off;
  Toggle.Button = Button;
  
  export default Toggle;
  