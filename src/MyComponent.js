const MyComponent = ({ name, children }) => {
    return (
        <>
            <div>안녕하세요, 제 이름은 {name} 입니다.</div>
            <div>Children 값은 {children} 입니다.</div>
        </>
    );
};

MyComponent.defaultProps = {
    name: '기본이름'
};

export default MyComponent;
