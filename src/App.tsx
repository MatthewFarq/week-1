import Button from "./Button";

function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-6">React + Tailwind Button</h1>
      <Button text="Click Me" color="bg-blue-500 hover:bg-blue-700" />
      <Button text="Delete" color="bg-red-500 hover:bg-red-700" />
      <Button
        text="New Button!"
        color="bg-green-500 hover:bg-green-700"
      ></Button>
    </div>
  );
}

export default App;
