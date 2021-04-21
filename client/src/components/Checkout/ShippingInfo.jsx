import { useState } from 'react';
import CustomInput from '../custom/CustomInput';
import CustomInput2 from '../custom/CustomInput2';

const ShippingInfo = ({ formData, setFormData, handleInputChangeShopping, setError }) => {
    const fullName =
        formData.customerInfo.cusName.length > 0 && formData.customerInfo.cusName?.split(' ');
    const [name, setName] = useState({
        firstName: fullName && fullName.slice(0, -1).join(' '),
        lastName: fullName && fullName[fullName.length - 1],
    });

    const onNameChange = (event) => {
        setName({
            ...name,
            [event.target.name]: event.target.value.trim(),
        });

        setFormData({
            ...formData,
            customerInfo: {
                ...formData.customerInfo,
                cusName: `${name.firstName} ${name.lastName}`,
            },
        });
    };

    return (
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
                placeholder="Enter shipping address"
                label="Address 1"
                name="shippingAdd1"
                value={formData?.shippingInfo?.shippingAdd1}
                onChange={handleInputChangeShopping}
                setError={setError}
                required
            />
            <CustomInput
                placeholder="Enter shipping address more if any"
                label="Address 2"
                name="shippingAdd2"
                value={formData?.shippingInfo?.shippingAdd2}
                onChange={handleInputChangeShopping}
                setError={setError}
                required
            />
            <CustomInput2
                placeholder1="Enter City name"
                placeholder2="Enter State name"
                label1="City"
                label2="State"
                name1="shippingCity"
                name2="shippingState"
                value1={formData?.shippingInfo?.shippingCity}
                value2={formData?.shippingInfo?.shippingState}
                onChange={handleInputChangeShopping}
                setError={setError}
                required1
            />
            <CustomInput2
                placeholder1="Enter post code"
                placeholder2="Enter country name"
                label1="Post Code"
                label2="Country"
                name1="shippingPostcode"
                name2="shippingCountry"
                value1={formData?.shippingInfo?.shippingPostcode}
                value2={formData?.shippingInfo?.shippingCountry}
                onChange={handleInputChangeShopping}
                setError={setError}
                required1
                required2
            />
        </div>
    );
};

export default ShippingInfo;
