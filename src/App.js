function App() {
    const name = '리액트입니다!!!';
    const style = {
        backgroundColor: 'black', //background-color -> backgroundColor
        color: 'aqua',
        fontSize: '48px', //font-size -> fontSize
        fontWeight: 'bold', //font-weight -> fontWeight
        padding: 16 //단위를 생략하면 px로 지정됩니다.
    };
    return <div style={style}>{name}</div>;
}

export default App;
