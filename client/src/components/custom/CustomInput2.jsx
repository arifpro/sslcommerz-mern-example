import CustomInput from './CustomInput';

const CustomInput2 = ({
    placeholder1,
    placeholder2,
    label1,
    label2,
    name1,
    name2,
    value1,
    value2,
    setError,
    onChange,
    disabled,
    required1,
    required2,
}) => (
    <main style={{ display: 'flex' }}>
        <aside style={{ flex: 1, paddingRight: 10 }}>
            <CustomInput
                placeholder={placeholder1}
                label={label1}
                value={value1}
                name={name1}
                onChange={onChange}
                setError={setError}
                style={{ marginRight: 10 }}
                disabled={disabled}
                required={required1}
            />
        </aside>
        <aside style={{ flex: 1 }}>
            <CustomInput
                placeholder={placeholder2}
                label={label2}
                value={value2}
                name={name2}
                onChange={onChange}
                setError={setError}
                style={{ marginRight: 10 }}
                disabled={disabled}
                required={required2}
            />
        </aside>
    </main>
);

export default CustomInput2;
