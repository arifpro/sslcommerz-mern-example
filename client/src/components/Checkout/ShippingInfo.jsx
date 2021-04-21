import CustomInput from '../custom/CustomInput';
import CustomInput2 from '../custom/CustomInput2';

const ShippingInfo = ({ formData, handleInputChange, setError }) => (
    <div>
        <h3
            style={{
                textAlign: 'center',
                fontFamily: 'Comic Sans MS',
                marginBottom: '2rem',
            }}
        >
            Shipping Information
        </h3>
        <CustomInput
            placeholder="Enter your project description"
            label="Street address"
            name="streetAddress"
            value={formData?.streetAddress}
            onChange={handleInputChange}
            setError={setError}
            required
        />
        <CustomInput2
            placeholder1="Enter your town/city name"
            placeholder2="Enter your state name"
            label1="Town / City"
            label2="State"
            name1="city"
            name2="state"
            value1={formData?.city}
            value2={formData?.state}
            onChange={handleInputChange}
            setError={setError}
            required1
            required2
        />
        <CustomInput
            placeholder="Enter your phone number"
            label="Phone"
            name="phone"
            value={formData?.phone}
            onChange={handleInputChange}
            setError={setError}
            required
        />
        <CustomInput
            placeholder="Enter your email address"
            label="Email"
            name="email"
            type="email"
            value={formData?.email}
            onChange={handleInputChange}
            setError={setError}
        />
    </div>
);

export default ShippingInfo;
