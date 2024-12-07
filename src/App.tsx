import { Checkbox, Radio, RadioGroup, Switch } from "@nextui-org/react";

function App() {
  return (
    <div className="flex justify-center items-center h-screen gap-4">
      <div
        className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg"
        tabIndex={-1}
      >
        <p>tableIndex: -1</p>
        <Switch>Switch</Switch>
        <Checkbox>Checkbox</Checkbox>
        <RadioGroup>
          <Radio value="A">Option A</Radio>
          <Radio value="B">Option B</Radio>
          <Radio value="C">Option C</Radio>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg">
        <p>tableIndex: unset</p>
        <Switch>Switch</Switch>
        <Checkbox>Checkbox</Checkbox>
        <RadioGroup>
          <Radio value="A">Option A</Radio>
          <Radio value="B">Option B</Radio>
          <Radio value="C">Option C</Radio>
        </RadioGroup>
      </div>
    </div>
  );
}

export default App;
