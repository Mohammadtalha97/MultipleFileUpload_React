import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FileUpload from "./Components/files_upload_component";
import { UploaderComponent } from "@syncfusion/ej2-react-inputs";
import SampleBase from "./Components/TestingUI";
import Test2 from "./Components/Testing/Test2";

function App() {
  return (
    <div className="App">
      <FileUpload />
      {/* <SampleBase /> */}
      {/* <UploaderComponent /> */}
      <Test2 />
    </div>
  );
}

export default App;
