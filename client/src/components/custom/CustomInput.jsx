import styles from './CustomInputStyles.module.scss';

const labelText = (text, isRequired = false) => (
    <div style={{ fontWeight: 'bold' }}>
        {text}
        {isRequired && <span style={{ color: 'red', marginLeft: '2px' }}>*</span>}
    </div>
);

const CustomInput = ({
    type = 'text',
    placeholder,
    label,
    name,
    value,
    setError,
    onChange,
    disabled,
    required,
}) => (
    <main>
        <p style={{ fontSize: '0.9rem', margin: 0 }}>{labelText(label, required)}</p>
        <input
            type={type}
            placeholder={placeholder}
            label={label}
            name={name}
            className={styles.customInput}
            defaultValue={value && value}
            onChange={onChange && ((e) => onChange(e))}
            onFocus={setError && (() => setError(''))}
            disabled={disabled}
        />
    </main>
);

export default CustomInput;
