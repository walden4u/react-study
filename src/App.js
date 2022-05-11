function App() {
    const name = '리액트';
    return <>{name === '리액트' && '리액트입니다!!!'}</>;
    // null, undefined, false 화면에 안나옴
}

export default App;
