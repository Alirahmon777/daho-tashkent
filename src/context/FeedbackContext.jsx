import React, { createContext, useState } from 'react';

export const FeedbackContext = createContext();

const FeedbackContextProvider = ({ children }) => {
  const [openFeedback, setOpenFeedback] = useState(false);
  const [openFeedbackDone, setOpenFeedbackDone] = useState(false);
  return (
    <FeedbackContext.Provider
      value={{
        openFeedback,
        setOpenFeedback,
        openFeedbackDone,
        setOpenFeedbackDone,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContextProvider;
