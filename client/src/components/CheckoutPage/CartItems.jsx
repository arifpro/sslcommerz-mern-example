import { useEffect, useState } from 'react';
import { IoAdd, IoRemove } from 'react-icons/io5';
import cartData from '../../data';
import styles from '../../styles/CartItemsStyles.module.scss';

const styles2 = {
    btn: {
        cursor: 'pointer',
        position: 'relative',
        padding: '0 2rem',
        borderRadius: '1rem',
        lineHeight: '2.5rem',
        fontSize: '16px',
        fontWeight: 600,
        border: 'none',
        color: 'white',
        backgroundImage: 'linear-gradient(to bottom, #3bceb1 0%, #20a588 100%)',
        boxShadow: '1px 3px 8px gray',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        margin: '0 5%',
        marginBottom: '3rem',
    },
    cartItems: {
        backgroundImage: 'linear-gradient(to bottom, #eff3f6 0%, #ced1d5 100%)',
        boxShadow: '1px 3px 8px gray',
        borderRadius: '15px',
        margin: '0 15px',
        marginTop: '1rem',
    },
    iconOfSlide: {
        backgroundImage: 'linear-gradient(to bottom, #fefefe 0%, #fefefe 100%)',
        fontSize: '1rem',
        cursor: 'pointer',
        padding: '1px',
        borderRadius: '50%',
        border: 'none',
    },
};

const CartItems = ({ customStyles, divStyle }) => {
    const [totalCal, setTotalCal] = useState(0);

    useEffect(() => {
        let total;
        cartData?.forEach((item) => {
            total += item.discountPrice;
        });

        setTotalCal(total);
    }, []);

    return (
        <>
            {cartData?.map((item) => (
                <CartItem
                    key={item.productId}
                    id={item.productId}
                    name={item.productName}
                    img={item.productImage}
                    price={item.productPrice}
                    discountPrice={item.productDiscountPrice}
                    productQty={1}
                    totalCal={totalCal}
                    setTotalCal={setTotalCal}
                    customStyles={customStyles}
                    divStyle={divStyle}
                />
            ))}
        </>
    );
};

const CartItem = ({ name, img, price, productQty, discountPrice, customStyles, divStyle }) => (
    <section style={{ ...styles2.cartItems, ...customStyles }} className={styles.cartItems}>
        <aside>
            <div style={divStyle}>
                <img src={img} alt="img" />
            </div>
        </aside>

        <aside>
            <div className={styles.nameAndCross}>
                <p className={styles.nameAndCross__name}>{name}</p>
                <button type="button" className={styles.nameAndCross__cross} onClick={() => null}>
                    ✕
                </button>
            </div>

            <div className={styles.cost}>
                {discountPrice > 0 ? (
                    <>
                        <p className={`${styles.cost__price} ${styles.cost__oldPrice}`}>
                            <del>&#2547; {price.toFixed(2)} </del>
                        </p>
                        <p className={`${styles.cost__price} ${styles.cost__newPrice}`}>
                            &#2547; {discountPrice.toFixed(2)}
                        </p>
                    </>
                ) : (
                    <p className={`${styles.cost__price} ${styles.cost__oldPrice}`}>
                        &#2547; {price.toFixed(2)}
                    </p>
                )}
            </div>

            <div className={styles.totalAndQty}>
                <p className={styles.totalAndQty__total}>
                    Total: &#2547;{' '}
                    {!discountPrice
                        ? (price * productQty).toFixed(2)
                        : (discountPrice * productQty).toFixed(2)}
                </p>
                <div className={styles.totalAndQty__qty}>
                    <IoRemove style={{ ...styles2.iconOfSlide }} onClick={() => null} />
                    <p>{productQty}</p>
                    <IoAdd
                        style={{
                            ...styles2.iconOfSlide,
                            color: 'white',
                            backgroundImage: 'linear-gradient(to bottom, #3bceb1 0%, #20a588 100%)',
                        }}
                        onClick={() => null}
                    />
                </div>
            </div>
        </aside>
    </section>
);

export default CartItems;
