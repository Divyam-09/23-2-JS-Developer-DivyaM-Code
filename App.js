import React from "react";
import Form from "react-jsonschema-form";
import "./JSONSchema";
import "./formData";
import "./App.css";

function App() {
  const schema = {
    title: "Task",
    Description: "Form with values",

    type: "object",
    required: ["minvalue", "maxvalue"],

    properties: {
      minvalue: {
        type: "integer",
        title: "minvalue",
        default: "0",
      },
      maxvalue: {
        type: "integer",
        title: "maxvalue",
        default: "100",
      },
    },
  };

  const formData = {
    minValue: 0,
    maxValue: 100,
  };
  const onSubmit = ({ formData }, e) => alert("Data submitted");

  return (
    <div className="App">
      <Form schema={schema} formData={formData} onSubmit={onSubmit} />
    </div>
  );
}

export default App;
