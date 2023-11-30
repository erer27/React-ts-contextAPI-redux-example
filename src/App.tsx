import React from "react";
import ReducerSample from "./ReducerSample";
import { SampleProvider } from "./SampleContext";

const App: React.FC = () => {
  return (
    <SampleProvider>
      <ReducerSample name="sadf" />
    </SampleProvider>
  );
};

export default App;
