// import CustomInput2 from "../../custom/CustomInput2";
import CustomInput from '../custom/CustomInput';

const styles = {
    infoItem: {
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'Comic Sans MS',
    },
    title: {
        fontWeight: 'bold',
        fontFamily: 'Comic Sans MS',
        fontSize: '14px',
        lineHeight: 'normal',
    },
    rate: {
        fontWeight: 'bold',
        fontFamily: 'Comic Sans MS',
    },
};

const PaymentInfo = ({ formData, handleInputChange, setError }) => {
    const subTotal = 3279;
    const deliveryCharge = 100;

    return (
        <div>
            <h3
                style={{
                    textAlign: 'center',
                    fontFamily: 'Comic Sans MS',
                    marginBottom: '2rem',
                }}
            >
                Payment Information
            </h3>
            {/* Sub Total */}
            <div style={styles.infoItem}>
                <h5 style={styles.title}>Sub Total</h5>
                <h6 style={styles.rate}>{subTotal.toFixed(2)}</h6>
            </div>

            {/* Tax */}
            <div style={styles.infoItem}>
                <h5 style={styles.title}>Tax (15%)</h5>
                <h6 style={styles.rate}>{(subTotal * 0.15).toFixed(2)}</h6>
            </div>

            {/* Delivery Charge */}
            <div style={styles.infoItem}>
                <h5 style={styles.title}>Delivery Charge</h5>
                <h6 style={styles.rate}>{deliveryCharge.toFixed(2)}</h6>
            </div>

            {/* Total */}
            <div style={styles.infoItem}>
                <h5 style={styles.title}>Total</h5>
                <h6 style={styles.rate}>{(subTotal * 1.15 + deliveryCharge).toFixed(2)}</h6>
            </div>

            <div className="orderNotes">
                <CustomInput
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    label="Order notes (optional)"
                    name="notes"
                    value={formData?.notes}
                    onChange={handleInputChange}
                    setError={setError}
                />
            </div>
            <style>{`
                .orderNotes {
                    margin-top: 2rem;
                    min-width: 426px;
                }
                @media (max-width: 768px) {
                    .orderNotes {
                        min-width: 300px;
                    }
                }
                @media (max-width: 650px) {
                    .orderNotes {
                        min-width: 300px;
                    }
                }
            `}</style>
        </div>
    );
};

export default PaymentInfo;
