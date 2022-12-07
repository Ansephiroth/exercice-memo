//Props envoyé à travers Card
const ModifyButton = (props) => {
    return (
        <button onClick={
            props.onClick
        }>
            Modifier
        </button>
    );
}

export default ModifyButton;