import { createContext, useState } from "react";

const PageContext = createContext();
const PageContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export { PageContext };

export default PageContextProvider;
