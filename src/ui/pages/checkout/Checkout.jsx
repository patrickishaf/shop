import styles from './Checkout.module.css';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';

import Cart from '../../components/cart/Cart';
import Billing from '../../components/billing/Billing';
import Payment from '../../components/payment/Payment';
import OrderSummary from '../../components/order_summary/OrderSummary';
import AddressSummary from '../../components/address_summary/AddressSummary';
import { useNavigate } from 'react-router-dom';
import { checkoutComplete } from '../../../navigation/route_names';

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const navigateTo = useNavigate();

  const stepperLabels = [
    'Cart', 'Billing & address', 'Payment'
  ];

  const childrenComponents = [
    <Cart />,
    <Billing onClickBack={decActiveStep} onDone={incActiveStep} />,
    <Payment onClickBack={decActiveStep} />
  ];

  const checkoutBtnStyle = {
    width: '100%',
    marginTop: '2.4rem',
    paddingTop: '1.1rem',
    paddingBottom: '1.1rem',
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: '2.6rem',
    textTransform: 'none',
    backgroundColor: '#6500C9',
    borderRadius: '0.8rem'
  }

  function incActiveStep() {
    if (activeStep === stepperLabels.length) {
      return;
    }
    setActiveStep(activeStep+1)
  }

  function decActiveStep() {
    if (activeStep === 0) {
      return;
    }
    setActiveStep(activeStep-1)
  }

  function completeOrder() {
    alert('completed order');
    navigateTo(checkoutComplete);
  }

  return (
    <div className={styles.checkoutWrap}>
      <p className={styles.checkoutHeader}>Checkout</p>
      <div className={styles.stepperWrap}>
        <Stepper activeStep={activeStep} alternativeLabel>
        {
          stepperLabels.map((label, index) => (
            <Step activestep={activeStep} key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))
        }
        </Stepper>
      </div>
      <div className={styles.detailSection}>
        <div className={styles.childCompWrap}>
        {
          childrenComponents[activeStep]
        }
        </div>
        <div className={styles.summaryWrap}>
          {
            activeStep === 2 && <AddressSummary />
          }
          <OrderSummary/>
          {
            activeStep === 0 && <Button variant='contained' style={checkoutBtnStyle} onClick={incActiveStep}>Check Out</Button>
          }
          {
            activeStep === 2 && <Button variant='contained' style={checkoutBtnStyle} onClick={completeOrder}>Complete Order</Button>
          }
        </div>
      </div>
    </div>
  )
}