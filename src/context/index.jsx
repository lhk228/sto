import FeaturesProvider from "./features";

const RootContext = ({children}) => {
  return(
     <>
      <FeaturesProvider>
        {children}
      </FeaturesProvider>
    </>
  );
};

export default RootContext;