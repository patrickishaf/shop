import styles from './Payment.module.css';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';

export default function Payment({ onClickBack }) {
  const backButton = {
    color: '#212B36',
    textTransform: 'none',
    fontSize: '1.4rem',
    fontWeight: 700,
    marginTop: '2.4rem'
  }

  return (
    <div>
      <Button style={backButton} startIcon={<KeyboardArrowLeft/>} onClick={onClickBack}>Back</Button>
    </div>
  )
}