const MyComponent = ({ name }) => {
    return <div>안녕하세요, 제 이름은 {name} 입니다.</div>;
};

MyComponent.defaultProps = {
    name: '기본이름'
};

export default MyComponent;
