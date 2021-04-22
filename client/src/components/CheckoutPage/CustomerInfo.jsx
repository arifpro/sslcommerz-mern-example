import CustomInput from '../custom/CustomInput';
import CustomInput2 from '../custom/CustomInput2';

const CustomerInfo = ({ formData, name, onNameChange, handleInputChangeCustomer, setError }) => (
    <div>
        <h3
            style={{
                textAlign: 'center',
                fontFamily: 'Comic Sans MS',
                marginBottom: '2rem',
            }}
        >
            Customer Information
        </h3>
        <CustomInput2
            placeholder1="Enter your first name"
            placeholder2="Enter your last name"
            label1="First Name"
            label2="Last Name"
            name1="firstName"
            name2="lastName"
            value1={name?.firstName}
            value2={name?.lastName}
            onChange={onNameChange}
            setError={setError}
            required1
            required2
        />
        <CustomInput
            placeholder="Enter your first address"
            label="Address 1"
            name="cusAdd1"
            value={formData?.customerInfo?.cusAdd1}
            onChange={handleInputChangeCustomer}
            setError={setError}
            required
        />
        <CustomInput
            placeholder="Enter your second address"
            label="Address 2"
            name="cusAdd2"
            value={formData?.customerInfo?.cusAdd2}
            onChange={handleInputChangeCustomer}
            setError={setError}
        />
        <CustomInput
            placeholder="Enter your phone number"
            label="Phone"
            name="cusPhone"
            value={formData?.customerInfo?.cusPhone}
            onChange={handleInputChangeCustomer}
            setError={setError}
            required
        />
        <CustomInput
            placeholder="Enter your email address"
            label="Email"
            name="cusEmail"
            type="email"
            value={formData?.customerInfo?.cusEmail}
            onChange={handleInputChangeCustomer}
            setError={setError}
            required
        />
        <CustomInput2
            placeholder1="Enter City name"
            placeholder2="Enter State name"
            label1="City"
            label2="State"
            name1="cusCity"
            name2="cusState"
            value1={formData?.customerInfo?.cusCity}
            value2={formData?.customerInfo?.cusState}
            onChange={handleInputChangeCustomer}
            setError={setError}
            required1
            required2
        />
        <CustomInput2
            placeholder1="Enter post code"
            placeholder2="Enter country name"
            label1="Post Code"
            label2="Country"
            name1="cusPostcode"
            name2="cusCountry"
            value1={formData?.customerInfo?.cusPostcode}
            value2={formData?.customerInfo?.cusCountry}
            onChange={handleInputChangeCustomer}
            setError={setError}
            required1
        />
        <CustomInput
            placeholder="Enter your fax number"
            label="Fax (optional)"
            name="cusFax"
            value={formData?.customerInfo?.cusFax}
            onChange={handleInputChangeCustomer}
            setError={setError}
        />
    </div>
);

export default CustomerInfo;
