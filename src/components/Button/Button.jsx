
import styles from "./Button.module.css"
function Button ({children, onClick, type = 'button'}) {return (
    <button>type = {type} className = {styles.customButton} onClick = {onClick}
    {children}
    </button>
);
}
export default Button;
