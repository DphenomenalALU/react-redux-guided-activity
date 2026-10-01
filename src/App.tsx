import Counter from "./components/Counter";

function App() {
  return (
    <main className="app-shell">
      <div className="intro">
        <p className="eyebrow">Week 5 · Guided learning activity</p>
        <h1>Redux Counter Lab</h1>
        <p className="lede">
          A small, focused example of global state management with React, TypeScript, and manual Redux.
        </p>
      </div>
      <Counter />
      <footer className="learning-note">
        <span>What this demonstrates</span>
        <p>Provider · useSelector · useDispatch · actions · reducer · logger middleware</p>
      </footer>
    </main>
  );
}

export default App;
