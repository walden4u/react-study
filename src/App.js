function App() {
  const name = "리액트1";
  return <>{name === "리액트" ? <h1>리액트입니다.</h1> : null}</>;
  // null, undefined, false 화면에 안나옴
}

export default App;
