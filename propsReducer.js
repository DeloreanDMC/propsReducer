// Преобразователь пропсов
const propsReducer = (jsxElem, newProps) => {
    return {
        ...jsxElem,
        props: {
            ...jsxElem.props,
            ...newProps
        }
    }
};

export default propsReducer;
