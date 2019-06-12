import {
  LOGO_URL,
  CONTAINER_ID
} from './constants'
import {
  generateHTMLElement,
  getEthosLogoContainer,
  getEthosTextContainer
} from './helpers/index'

import styles from './styles/index.css'

const initiatePayment = ({ theme }) => {
  const themeClass = theme === 'light' ? 'theme-light' : 'theme-dark';
  const btnTextSpan = generateHTMLElement({
    type: 'span',
    innerHTML: 'Pay with Crypto',
    className: 'pay-with-crypto',
  });

  const logoContainer = getEthosLogoContainer();
  const TextContainer = getEthosTextContainer();
  const btn = generateHTMLElement({
    style: styles,
    type: 'button',
    className: `crypto-btn ${themeClass}`,
    children: [btnTextSpan, logoContainer, TextContainer],
  });
  btn.addEventListener('click', handleClick);
  const container = document.getElementById(CONTAINER_ID);
  container.innerHTML = '';
  const errParagraph = generateHTMLElement({ type: 'p', className: 'error', style: 'display:none;' });
  container.appendChild(btn);
  container.appendChild(errParagraph);
}

const handleClick = () => {
  window.location = '/qr'
}

window['cryptoButton'] = { initiatePayment }
