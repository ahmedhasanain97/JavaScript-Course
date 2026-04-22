function itsMe() {
  return `Iam A Normal Function`;
}

console.log(itsMe()); // Iam A Normal Function

let itsMeArrow = () => `Iam an Arrow Function`

console.log(itsMeArrow())

function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

let urlCreateArrow = (protocol,web,tld) => `${protocol}://www.${web}.${tld}`

console.log(urlCreateArrow("https", "elzero", "org"))