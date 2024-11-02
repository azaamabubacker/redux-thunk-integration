import styles from './CustomButton.module.css';

type CustomButtonProps = {
  title: string;
  onClick: () => void;
  disabled: boolean;
  color: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ title, onClick, disabled = false, color = '#6200ea' }) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: disabled ? '#ccc' : color,
  };
  return (
    <button onClick={onClick} disabled={disabled} style={buttonStyle} className={styles.button}>
      {title}
    </button>
  );
};

export default CustomButton;
