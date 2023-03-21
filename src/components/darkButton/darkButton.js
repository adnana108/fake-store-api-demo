import"./darkButton.css";

const DarkButton = (props) => {

    return (
        <button 
        onClick={props.onClick} 
        className={`hover button ${props.className}`} 
        disabled={props.isDisabled}
        >
            {props.action}
        </button>
    );
};

export default DarkButton;