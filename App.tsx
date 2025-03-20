import Counter from "./components/Counter"


const App: React.FC = () => {
  // Main app component
  return (
    <div>
      <Counter />
      {/* Render the Counter component indside the main App component */}
    </div>
  );
};

export default App;