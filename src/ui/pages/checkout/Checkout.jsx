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

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);

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
          <OrderSummary/>
          {
            activeStep === 0 && <Button variant='contained' style={checkoutBtnStyle} onClick={incActiveStep}>Check Out</Button>
          }
        </div>
      </div>
    </div>
  )
}