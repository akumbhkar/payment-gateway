import { LOGO_URL } from '../constants'

export const generateHTMLElement = (args) => {
  const element = document.createElement(args.type);
  ['id', 'innerHTML', 'className', 'src'].forEach((property) => {
    if (args[property]) { element[property] = args[property] }
  })
  if (args.style) {
    element.setAttribute('style', args.style)
  }
  (args.children || []).forEach(child => element.appendChild(child))
  return element
}

export const getEthosTextContainer = () => {
  const title1 = generateHTMLElement({ type: 'b', innerHTML: 'Ethos' })
  const title2 = generateHTMLElement({ type: 'br' });
  const title3 = generateHTMLElement({ type: 'span', innerHTML: 'Universal Wallet' });
  return generateHTMLElement({ type: 'div', className: 'ethos-text-container', children: [title1, title2, title3] });
}

export const getEthosLogoContainer = () => {
  const logo = generateHTMLElement({ type: 'img', src: LOGO_URL });
  const logoSpan = generateHTMLElement({ type: 'span', children: [logo] });
  return generateHTMLElement({ type: 'div', className: 'logo-container', children: [logoSpan] });
}
