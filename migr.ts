import { b1 } from './f';
import { uniq } from 'lodash';
const fs: any = require('fs');

function toCode(str) {
  return str.toLocaleLowerCase().replace(/ /g, '-').replace('.', '').replace(/,/g, '')
}

const res = b1.reduce((acc, title) => {
  const item = {
    "code": toCode(title),
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": title
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  }

  return [...acc, item]
}, [])


export const texXslt: {tex: string, xslt: string }[] = [
  {
    "tex": "d",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>d</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "-",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>−</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "d_a",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>d</m:t></m:r></m:e><m:sub><m:r><m:t>a</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "d_{bit}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>d</m:t></m:r></m:e><m:sub><m:r><m:t>bit</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "d_h",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>d</m:t></m:r></m:e><m:sub><m:r><m:t>h</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "T_{inst}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>T</m:t></m:r></m:e><m:sub><m:r><m:t>inst</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "T_{inst,red,max}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>T</m:t></m:r></m:e><m:sub><m:r><m:t>inst,red,max</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "T_{inst,red,min}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>T</m:t></m:r></m:e><m:sub><m:r><m:t>inst,red,min</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "k_{cr}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>k</m:t></m:r></m:e><m:sub><m:r><m:t>cr</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "k_{uncr}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>k</m:t></m:r></m:e><m:sub><m:r><m:t>uncr</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\Psi_{c,N}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>Ψ</m:t></m:r></m:e><m:sub><m:r><m:t>c,N</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "h_{ef,min}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>ef,min</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "h_{ef,max}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>ef,max</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "h_{ef,std}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>ef,std</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "S_{min}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>S</m:t></m:r></m:e><m:sub><m:r><m:t>min</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "S_{min,reduce}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>S</m:t></m:r></m:e><m:sub><m:r><m:t>min,reduce</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "C_{min}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>C</m:t></m:r></m:e><m:sub><m:r><m:t>min</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "C_{min,reduce}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>C</m:t></m:r></m:e><m:sub><m:r><m:t>min,reduce</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "h_min",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>m</m:t></m:r></m:sub></m:sSub><m:r><m:t>in</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD,cb,N,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD,cb,N,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD,cb,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD,cb,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD+RT,cb,N}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,cb,N</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD+RT,cb,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,cb,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{HD,cb,N,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>HD,cb,N,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{HD,cb,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>HD,cb,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD,cb,N,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD,cb,N,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD,cb,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD,cb,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD+RT,cb,N,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,cb,N,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD+RT,cb,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,cb,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{HD,cb,N,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>HD,cb,N,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{HD,cb,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>HD,cb,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD,cb,V,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD,cb,V,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD,cb,V,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD,cb,V,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD+RT,cb,V,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,cb,V,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD+RT,cb,V,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,cb,V,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{HD,cb,V,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>HD,cb,V,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{HD,cb,V,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>HD,cb,V,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD,cb,V,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD,cb,V,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD,cb,V,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD,cb,V,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD+RT,cb,V,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,cb,V,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD+RT,cb,V,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,cb,V,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{HD,cb,V,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>HD,cb,V,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{HD,cb,V,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>HD,cb,V,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD,po,V,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD,po,V,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD,po,V,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD,po,V,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD+RT,po,V,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,po,V,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD+RT,po,V,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,po,V,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{HD,po,V,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>HD,po,V,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{HD,po,V,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>HD,po,V,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD,cp,V,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD,cp,V,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD,cp,V,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD,cp,V,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD+RT,cp,V,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,cp,V,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD+RT,cp,V,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,cp,V,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{HD,cp,V,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>HD,cp,V,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{HD,cp,V,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>HD,cp,V,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "f'_{c,max}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSubSup><m:e><m:r><m:t>f</m:t></m:r></m:e><m:sub><m:r><m:t>c,max</m:t></m:r></m:sub><m:sup><m:r><m:t>′</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "f'_{c,max,ltwt}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSubSup><m:e><m:r><m:t>f</m:t></m:r></m:e><m:sub><m:r><m:t>c,max,ltwt</m:t></m:r></m:sub><m:sup><m:r><m:t>′</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": " \\lambda_{a,lower,cb}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>λ</m:t></m:r></m:e><m:sub><m:r><m:t>a,lower,cb</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": " \\lambda_{a,upper,cb}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>λ</m:t></m:r></m:e><m:sub><m:r><m:t>a,upper,cb</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": " \\lambda_{a,lower,b}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>λ</m:t></m:r></m:e><m:sub><m:r><m:t>a,lower,b</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": " \\lambda_{a,upper,b}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>λ</m:t></m:r></m:e><m:sub><m:r><m:t>a,upper,b</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "d_{nom,bend}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>d</m:t></m:r></m:e><m:sub><m:r><m:t>nom,bend</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "A_{se,N}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>A</m:t></m:r></m:e><m:sub><m:r><m:t>se,N</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "f_{ya}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>f</m:t></m:r></m:e><m:sub><m:r><m:t>ya</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "f_{uta}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>f</m:t></m:r></m:e><m:sub><m:r><m:t>uta</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "N_{sa}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>N</m:t></m:r></m:e><m:sub><m:r><m:t>sa</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "N_{sa,eq}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>N</m:t></m:r></m:e><m:sub><m:r><m:t>sa,eq</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "V_{sa}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>V</m:t></m:r></m:e><m:sub><m:r><m:t>sa</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\alpha_{V,seis}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>α</m:t></m:r></m:e><m:sub><m:r><m:t>V,seis</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "V_{sa,eq}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>V</m:t></m:r></m:e><m:sub><m:r><m:t>sa,eq</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{sa,N}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>sa,N</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{s,N}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>s,N</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{sa,V}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>sa,V</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{s,V}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>s,V</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "M_s^o",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSubSup><m:e><m:r><m:t>M</m:t></m:r></m:e><m:sub><m:r><m:t>s</m:t></m:r></m:sub><m:sup><m:r><m:t>o</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "M_{s,seis}^o",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSubSup><m:e><m:r><m:t>M</m:t></m:r></m:e><m:sub><m:r><m:t>s,seis</m:t></m:r></m:sub><m:sup><m:r><m:t>o</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "T_{lower,LT,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>T</m:t></m:r></m:e><m:sub><m:r><m:t>lower,LT,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "T_{upper,LT,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>T</m:t></m:r></m:e><m:sub><m:r><m:t>upper,LT,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "T_{lower,ST,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>T</m:t></m:r></m:e><m:sub><m:r><m:t>lower,ST,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "T_{upper,ST,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>T</m:t></m:r></m:e><m:sub><m:r><m:t>upper,ST,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,HD,d,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,HD,d,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,HD,ws,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,HD,ws,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,HD,wf,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,HD,wf,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,HD,uw,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,HD,uw,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,HD,d,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,HD,d,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,HD,ws,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,HD,ws,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,HD,wf,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,HD,wf,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,HD,uw,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,HD,uw,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD,d,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD,d,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD,ws,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD,ws,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD,wf,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD,wf,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD,uw,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD,uw,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD,d,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD,d,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD,ws,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD,ws,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD,wf,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD,wf,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD,uw,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD,uw,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD+RT,d,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD+RT,d,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD+RT,ws,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD+RT,ws,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD+RT,wf,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD+RT,wf,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD+RT,uw,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD+RT,uw,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD+RT,d,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD+RT,d,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD+RT,ws,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD+RT,ws,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD+RT,wf,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD+RT,wf,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD+RT,uw,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD+RT,uw,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "T_{lower,LT,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>T</m:t></m:r></m:e><m:sub><m:r><m:t>lower,LT,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "T_{upper,LT,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>T</m:t></m:r></m:e><m:sub><m:r><m:t>upper,LT,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "T_{lower,ST,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>T</m:t></m:r></m:e><m:sub><m:r><m:t>lower,ST,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "T_{upper,ST,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>T</m:t></m:r></m:e><m:sub><m:r><m:t>upper,ST,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,HD,d,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,HD,d,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,HD,ws,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,HD,ws,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,HD,wf,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,HD,wf,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,HD,uw,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,HD,uw,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,HD,d,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,HD,d,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,HD,ws,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,HD,ws,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,HD,wf,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,HD,wf,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,HD,uw,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,HD,uw,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD,d,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD,d,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD,ws,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD,ws,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD,wf,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD,wf,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD,uw,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD,uw,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD,d,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD,d,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD,ws,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD,ws,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD,wf,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD,wf,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD,uw,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD,uw,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD+RT,d,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD+RT,d,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD+RT,ws,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD+RT,ws,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD+RT,wf,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD+RT,wf,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD+RT,uw,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD+RT,uw,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD+RT,d,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD+RT,d,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD+RT,ws,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD+RT,ws,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD+RT,wf,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD+RT,wf,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD+RT,uw,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD+RT,uw,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,HD,d,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,HD,d,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,HD,ws,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,HD,ws,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,HD,wf,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,HD,wf,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,HD,uw,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,HD,uw,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,HD,d,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,HD,d,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,HD,ws,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,HD,ws,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,HD,wf,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,HD,wf,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,HD,uw,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,HD,uw,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD,d,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD,d,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD,ws,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD,ws,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD,wf,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD,wf,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD,uw,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD,uw,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD,d,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD,d,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD,ws,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD,ws,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD,wf,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD,wf,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD,uw,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD,uw,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD+RT,ws,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD+RT,ws,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD+RT,wf,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD+RT,wf,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,cr,DD+RT,uw,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,cr,DD+RT,uw,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD+RT,d,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD+RT,d,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD+RT,ws,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD+RT,ws,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD+RT,wf,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD+RT,wf,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{k,uncr,DD+RT,uw,C}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>k,uncr,DD+RT,uw,C</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "n_{uncr,HD}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>n</m:t></m:r></m:e><m:sub><m:r><m:t>uncr,HD</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "n_{cr,HD}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>n</m:t></m:r></m:e><m:sub><m:r><m:t>cr,HD</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "n_{uncr,DD}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>n</m:t></m:r></m:e><m:sub><m:r><m:t>uncr,DD</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "n_{cr,DD}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>n</m:t></m:r></m:e><m:sub><m:r><m:t>cr,DD</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "n_{uncr,DD+RT}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>n</m:t></m:r></m:e><m:sub><m:r><m:t>uncr,DD+RT</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "n_{cr,DD+RT}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>n</m:t></m:r></m:e><m:sub><m:r><m:t>cr,DD+RT</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{HD,d,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>HD,d,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{HD,d,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>HD,d,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{HD,ws,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>HD,ws,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{HD,ws,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>HD,ws,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{HD,wf,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>HD,wf,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{HD,wf,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>HD,wf,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{HD,uw,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>HD,uw,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{HD,uw,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>HD,uw,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD,d,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD,d,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD,d,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD,d,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD,ws,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD,ws,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD,ws,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD,ws,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD,wf,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD,wf,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD,uw,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD,uw,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD,uw,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD,uw,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD+RT,d,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,d,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD+RT,d,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,d,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD+RT,ws,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,ws,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD+RT,ws,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,ws,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD+RT,wf,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,wf,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD+RT,wf,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,wf,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{DD+RT,uw,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,uw,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD+RT,uw,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,uw,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\alpha_{N,seis}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>α</m:t></m:r></m:e><m:sub><m:r><m:t>N,seis</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\lambda_{a,lower,po}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>λ</m:t></m:r></m:e><m:sub><m:r><m:t>a,lower,po</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\lambda_{a,upper,po}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>λ</m:t></m:r></m:e><m:sub><m:r><m:t>a,upper,po</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\lambda_{a,lower,cb}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>λ</m:t></m:r></m:e><m:sub><m:r><m:t>a,lower,cb</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\lambda_{a,upper,cb}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>λ</m:t></m:r></m:e><m:sub><m:r><m:t>a,upper,cb</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "h_{ef}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>ef</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "h_{min}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>min</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{cb,N,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>cb,N,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{cb,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>cb,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{cb,N,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>cb,N,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{cb,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>cb,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\psi_{c,N}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>ψ</m:t></m:r></m:e><m:sub><m:r><m:t>c,N</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "c_{ac}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>c</m:t></m:r></m:e><m:sub><m:r><m:t>ac</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{po,N,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>po,N,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{po,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>po,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{po,N,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>po,N,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{po,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>po,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "N_{p,uncr}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>N</m:t></m:r></m:e><m:sub><m:r><m:t>p,uncr</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "n_{uncr}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>n</m:t></m:r></m:e><m:sub><m:r><m:t>uncr</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "N_{p,eq}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>N</m:t></m:r></m:e><m:sub><m:r><m:t>p,eq</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "n_{cr}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>n</m:t></m:r></m:e><m:sub><m:r><m:t>cr</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{cb,V,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>cb,V,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{cb,V,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>cb,V,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{cb,V,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>cb,V,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{cb,V,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>cb,V,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{po,V,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>po,V,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Ø_{po,V,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>Ø</m:t></m:r></m:e><m:sub><m:r><m:t>po,V,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{cp,V,A}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>cp,V,A</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{cp,V,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>cp,V,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\ell_e",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>ℓ</m:t></m:r></m:e><m:sub><m:r><m:t>e</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "k_{cp}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>k</m:t></m:r></m:e><m:sub><m:r><m:t>cp</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\beta_{uncr}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>β</m:t></m:r></m:e><m:sub><m:r><m:t>uncr</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\beta_{cr}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>β</m:t></m:r></m:e><m:sub><m:r><m:t>cr</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "M_{s}^o",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSubSup><m:e><m:r><m:t>M</m:t></m:r></m:e><m:sub><m:r><m:t>s</m:t></m:r></m:sub><m:sup><m:r><m:t>o</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "h_{nom}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>nom</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "h_0",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>0</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "c_{min}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>c</m:t></m:r></m:e><m:sub><m:r><m:t>min</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "s_{min}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>s</m:t></m:r></m:e><m:sub><m:r><m:t>min</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "t_{fix,min}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>t</m:t></m:r></m:e><m:sub><m:r><m:t>fix,min</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "t_{fix,max}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>t</m:t></m:r></m:e><m:sub><m:r><m:t>fix,max</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\gamma_{2}^{1)}=\\gamma_{inst}^{2)}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSubSup><m:e><m:r><m:t>γ</m:t></m:r></m:e><m:sub><m:r><m:t>2</m:t></m:r></m:sub><m:sup><m:r><m:t>1)</m:t></m:r></m:sup></m:sSubSup><m:r><m:t>=</m:t></m:r><m:sSubSup><m:e><m:r><m:t>γ</m:t></m:r></m:e><m:sub><m:r><m:t>inst</m:t></m:r></m:sub><m:sup><m:r><m:t>2)</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "N_{Rks}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>N</m:t></m:r></m:e><m:sub><m:r><m:t>Rks</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\gamma_{Ms,N}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>γ</m:t></m:r></m:e><m:sub><m:r><m:t>Ms,N</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "t_{Rk,ucr}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>t</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,ucr</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "k_{8}^{2)}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSubSup><m:e><m:r><m:t>k</m:t></m:r></m:e><m:sub><m:r><m:t>8</m:t></m:r></m:sub><m:sup><m:r><m:t>2)</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "\\Psi_{c}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>Ψ</m:t></m:r></m:e><m:sub><m:r><m:t>c</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "K_{ucr}^{2)}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSubSup><m:e><m:r><m:t>K</m:t></m:r></m:e><m:sub><m:r><m:t>ucr</m:t></m:r></m:sub><m:sup><m:r><m:t>2)</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "K_{cr}^{2)}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSubSup><m:e><m:r><m:t>K</m:t></m:r></m:e><m:sub><m:r><m:t>cr</m:t></m:r></m:sub><m:sup><m:r><m:t>2)</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "C_{cr,sp}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>C</m:t></m:r></m:e><m:sub><m:r><m:t>cr,sp</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "S_{cr,sp}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>S</m:t></m:r></m:e><m:sub><m:r><m:t>cr,sp</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "t_{work}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>t</m:t></m:r></m:e><m:sub><m:r><m:t>work</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "Symbol",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>Symbol</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "t_{cure}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>t</m:t></m:r></m:e><m:sub><m:r><m:t>cure</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "d^{1)} = d_{nom}^{2)}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSup><m:e><m:r><m:t>d</m:t></m:r></m:e><m:sup><m:r><m:t>1)</m:t></m:r></m:sup></m:sSup><m:r><m:t>=</m:t></m:r><m:sSubSup><m:e><m:r><m:t>d</m:t></m:r></m:e><m:sub><m:r><m:t>nom</m:t></m:r></m:sub><m:sup><m:r><m:t>2)</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "d_{o}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>d</m:t></m:r></m:e><m:sub><m:r><m:t>o</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "d_{f}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>d</m:t></m:r></m:e><m:sub><m:r><m:t>f</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "h_{fs}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>fs</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "t_{fix,eff}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>t</m:t></m:r></m:e><m:sub><m:r><m:t>fix,eff</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "T_{max}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>T</m:t></m:r></m:e><m:sub><m:r><m:t>max</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "h_{ef,[hef_index]}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>ef,[he</m:t></m:r><m:sSub><m:e><m:r><m:t>f</m:t></m:r></m:e><m:sub><m:r><m:t>i</m:t></m:r></m:sub></m:sSub><m:r><m:t>ndex]</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "V_{Rk,p,seis}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>V</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,p,seis</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\gamma_{Ms,seis\\thinspace 1)}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>γ</m:t></m:r></m:e><m:sub><m:r><m:t>Ms,seis</m:t></m:r><m:r><m:t>1)</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\gamma_{inst}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>γ</m:t></m:r></m:e><m:sub><m:r><m:t>inst</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "V_{Rk,s}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>V</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,s</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\gamma_{Ms\\thinspace 1)}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>γ</m:t></m:r></m:e><m:sub><m:r><m:t>Ms</m:t></m:r><m:r><m:t>1)</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "k_7",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>k</m:t></m:r></m:e><m:sub><m:r><m:t>7</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "k_8",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>k</m:t></m:r></m:e><m:sub><m:r><m:t>8</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "I_{f,2}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>I</m:t></m:r></m:e><m:sub><m:r><m:t>f,2</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "I_{f,1}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>I</m:t></m:r></m:e><m:sub><m:r><m:t>f,1</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "d_{nom}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>d</m:t></m:r></m:e><m:sub><m:r><m:t>nom</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R30; V_{Rk,s,fire}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R30;</m:t></m:r><m:sSub><m:e><m:r><m:t>V</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,s,fire</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R60; V_{Rk,s,fire}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R60;</m:t></m:r><m:sSub><m:e><m:r><m:t>V</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,s,fire</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R90; V_{Rk,s,fire}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R90;</m:t></m:r><m:sSub><m:e><m:r><m:t>V</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,s,fire</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R120; V_{Rk,s,fire}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R120;</m:t></m:r><m:sSub><m:e><m:r><m:t>V</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,s,fire</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R30; M^0_{Rk,s,fire}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R30;</m:t></m:r><m:sSubSup><m:e><m:r><m:t>M</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,s,fire</m:t></m:r></m:sub><m:sup><m:r><m:t>0</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "R60; M^0_{Rk,s,fire}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R60;</m:t></m:r><m:sSubSup><m:e><m:r><m:t>M</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,s,fire</m:t></m:r></m:sub><m:sup><m:r><m:t>0</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "R90; M^0_{Rk,s,fire}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R90;</m:t></m:r><m:sSubSup><m:e><m:r><m:t>M</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,s,fire</m:t></m:r></m:sub><m:sup><m:r><m:t>0</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "R120; M^0_{Rk,s,fire}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R120;</m:t></m:r><m:sSubSup><m:e><m:r><m:t>M</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,s,fire</m:t></m:r></m:sub><m:sup><m:r><m:t>0</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "R30; V^0_{Rk,s,fire}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R30;</m:t></m:r><m:sSubSup><m:e><m:r><m:t>V</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,s,fire</m:t></m:r></m:sub><m:sup><m:r><m:t>0</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "R60; V^0_{Rk,s,fire}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R60;</m:t></m:r><m:sSubSup><m:e><m:r><m:t>V</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,s,fire</m:t></m:r></m:sub><m:sup><m:r><m:t>0</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "R90; V^0_{Rk,s,fire}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R90;</m:t></m:r><m:sSubSup><m:e><m:r><m:t>V</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,s,fire</m:t></m:r></m:sub><m:sup><m:r><m:t>0</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "R120; V^0_{Rk,s,fire}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R120;</m:t></m:r><m:sSubSup><m:e><m:r><m:t>V</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,s,fire</m:t></m:r></m:sub><m:sup><m:r><m:t>0</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "N_{Rk,s,seis}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>N</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,s,seis</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "N_{Rk,p,seis}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>N</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,p,seis</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R30; N_{Rk,s,fire}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R30;</m:t></m:r><m:sSub><m:e><m:r><m:t>N</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,s,fire</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R60; N_{Rk,s,fire}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R60;</m:t></m:r><m:sSub><m:e><m:r><m:t>N</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,s,fire</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R90; N_{Rk,s,fire}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R90;</m:t></m:r><m:sSub><m:e><m:r><m:t>N</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,s,fire</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R120; N_{Rk,s,fire}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R120;</m:t></m:r><m:sSub><m:e><m:r><m:t>N</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,s,fire</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R30; N^0_{Rk,c,fi}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R30;</m:t></m:r><m:sSubSup><m:e><m:r><m:t>N</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,c,fi</m:t></m:r></m:sub><m:sup><m:r><m:t>0</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "R60; N^0_{Rk,c,fi}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R60;</m:t></m:r><m:sSubSup><m:e><m:r><m:t>N</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,c,fi</m:t></m:r></m:sub><m:sup><m:r><m:t>0</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "R90; N^0_{Rk,c,fi}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R90;</m:t></m:r><m:sSubSup><m:e><m:r><m:t>N</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,c,fi</m:t></m:r></m:sub><m:sup><m:r><m:t>0</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "R120; N^0_{Rk,c,fi}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>R120;</m:t></m:r><m:sSubSup><m:e><m:r><m:t>N</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,c,fi</m:t></m:r></m:sub><m:sup><m:r><m:t>0</m:t></m:r></m:sup></m:sSubSup></m:oMath>\n"
  },
  {
    "tex": "S_{cr,N}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>S</m:t></m:r></m:e><m:sub><m:r><m:t>cr,N</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "C_{cr,N}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>C</m:t></m:r></m:e><m:sub><m:r><m:t>cr,N</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "k1 = k_{cr,N}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>k1=</m:t></m:r><m:sSub><m:e><m:r><m:t>k</m:t></m:r></m:e><m:sub><m:r><m:t>cr,N</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "k1 = k_{ur,N}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>k1=</m:t></m:r><m:sSub><m:e><m:r><m:t>k</m:t></m:r></m:e><m:sub><m:r><m:t>ur,N</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "s_{cr,N}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>s</m:t></m:r></m:e><m:sub><m:r><m:t>cr,N</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "c_{cr,N}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>c</m:t></m:r></m:e><m:sub><m:r><m:t>cr,N</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "d_vs",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>d</m:t></m:r></m:e><m:sub><m:r><m:t>v</m:t></m:r></m:sub></m:sSub><m:r><m:t>s</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "h_vs",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>v</m:t></m:r></m:sub></m:sSub><m:r><m:t>s</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "\\ell_{max}\\leq",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>ℓ</m:t></m:r></m:e><m:sub><m:r><m:t>max</m:t></m:r></m:sub></m:sSub><m:r><m:t>≤</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "d_R",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>d</m:t></m:r></m:e><m:sub><m:r><m:t>R</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\ell_S",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>ℓ</m:t></m:r></m:e><m:sub><m:r><m:t>S</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "d_w\\geq",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>d</m:t></m:r></m:e><m:sub><m:r><m:t>w</m:t></m:r></m:sub></m:sSub><m:r><m:t>≥</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "\\partial_{V,seis}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>∂</m:t></m:r></m:e><m:sub><m:r><m:t>V,seis</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "N",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>N</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "\\partial_{NO}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>∂</m:t></m:r></m:e><m:sub><m:r><m:t>NO</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\partial_{N\\infty }",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>∂</m:t></m:r></m:e><m:sub><m:r><m:t>N</m:t></m:r><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>∞</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "V",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>V</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "\\partial_{VO}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>∂</m:t></m:r></m:e><m:sub><m:r><m:t>VO</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\partial_{V\\infty }",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>∂</m:t></m:r></m:e><m:sub><m:r><m:t>V</m:t></m:r><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>∞</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\partial_{N,seis}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>∂</m:t></m:r></m:e><m:sub><m:r><m:t>N,seis</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "d_o",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>d</m:t></m:r></m:e><m:sub><m:r><m:t>o</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "d_{cut}\\leq",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>d</m:t></m:r></m:e><m:sub><m:r><m:t>cut</m:t></m:r></m:sub></m:sSub><m:r><m:t>≤</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": " h_{1,1}\\geq",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>1,1</m:t></m:r></m:sub></m:sSub><m:r><m:t>≥</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "h_{nom,1}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>nom,1</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "d_f",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>d</m:t></m:r></m:e><m:sub><m:r><m:t>f</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "SW",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>SW</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "\\Psi_{c}C20/25",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>Ψ</m:t></m:r></m:e><m:sub><m:r><m:t>c</m:t></m:r></m:sub></m:sSub><m:r><m:t>C20</m:t></m:r><m:r><m:t>/</m:t></m:r><m:r><m:t>25</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "\\Psi_{c}C30/37",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>Ψ</m:t></m:r></m:e><m:sub><m:r><m:t>c</m:t></m:r></m:sub></m:sSub><m:r><m:t>C30</m:t></m:r><m:r><m:t>/</m:t></m:r><m:r><m:t>37</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "\\Psi_{c}C40/50",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>Ψ</m:t></m:r></m:e><m:sub><m:r><m:t>c</m:t></m:r></m:sub></m:sSub><m:r><m:t>C40</m:t></m:r><m:r><m:t>/</m:t></m:r><m:r><m:t>50</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "\\Psi_{c}C50/60",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:rPr><m:sty m:val=\"p\"/></m:rPr><m:t>Ψ</m:t></m:r></m:e><m:sub><m:r><m:t>c</m:t></m:r></m:sub></m:sSub><m:r><m:t>C50</m:t></m:r><m:r><m:t>/</m:t></m:r><m:r><m:t>60</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "h_{ef,1}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>ef,1</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "h_{ef,2}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>ef,2</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "h_{ef,3}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>ef,3</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "h_{ef,4}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>ef,4</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"/>\n"
  },
  {
    "tex": "kN",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>kN</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "N/mm^2",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>N</m:t></m:r><m:r><m:t>/</m:t></m:r><m:r><m:t>m</m:t></m:r><m:sSup><m:e><m:r><m:t>m</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup></m:oMath>\n"
  },
  {
    "tex": "mm",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>mm</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "N/{mm}^2",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>N</m:t></m:r><m:r><m:t>/</m:t></m:r><m:sSup><m:e><m:r><m:t>mm</m:t></m:r></m:e><m:sup><m:r><m:t>2</m:t></m:r></m:sup></m:sSup></m:oMath>\n"
  },
  {
    "tex": "{for \\space } c\\geq",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>for c≥</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "{for \\space } s\\geq",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:r><m:t>for s≥</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "\\tau_{Rk,ucr}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,ucr</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "\\tau_{Rk,cr}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>τ</m:t></m:r></m:e><m:sub><m:r><m:t>Rk,cr</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "C_{cr,sp}, h/h_{ef} \\geq 2.0",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>C</m:t></m:r></m:e><m:sub><m:r><m:t>cr,sp</m:t></m:r></m:sub></m:sSub><m:r><m:t>,h</m:t></m:r><m:r><m:t>/</m:t></m:r><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>ef</m:t></m:r></m:sub></m:sSub><m:r><m:t>≥2.0</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "C_{cr,sp}, 2.0 > h/h_{ef} > 1.3",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>C</m:t></m:r></m:e><m:sub><m:r><m:t>cr,sp</m:t></m:r></m:sub></m:sSub><m:r><m:t>,2.0&gt;h</m:t></m:r><m:r><m:t>/</m:t></m:r><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>ef</m:t></m:r></m:sub></m:sSub><m:r><m:t>&gt;1.3</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "C_{cr,sp}, h/h_{ef} \\leq 1.3",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>C</m:t></m:r></m:e><m:sub><m:r><m:t>cr,sp</m:t></m:r></m:sub></m:sSub><m:r><m:t>,h</m:t></m:r><m:r><m:t>/</m:t></m:r><m:sSub><m:e><m:r><m:t>h</m:t></m:r></m:e><m:sub><m:r><m:t>ef</m:t></m:r></m:sub></m:sSub><m:r><m:t>≤1.3</m:t></m:r></m:oMath>\n"
  },
  {
    "tex": "f_{HD,d,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>f</m:t></m:r></m:e><m:sub><m:r><m:t>HD,d,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{HD,d,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>HD,d,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "f_{HD,ws,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>f</m:t></m:r></m:e><m:sub><m:r><m:t>HD,ws,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{HD,ws,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>HD,ws,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "f_{HD,wf,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>f</m:t></m:r></m:e><m:sub><m:r><m:t>HD,wf,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{HD,wf,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>HD,wf,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "f_{HD,uw,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>f</m:t></m:r></m:e><m:sub><m:r><m:t>HD,uw,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{HD,uw,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>HD,uw,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "f_{DD,d,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>f</m:t></m:r></m:e><m:sub><m:r><m:t>DD,d,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD,d,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD,d,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "f_{DD,ws,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>f</m:t></m:r></m:e><m:sub><m:r><m:t>DD,ws,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD,ws,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD,ws,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "f_{DD,wf,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>f</m:t></m:r></m:e><m:sub><m:r><m:t>DD,wf,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD,wf,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD,wf,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "f_{DD,uw,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>f</m:t></m:r></m:e><m:sub><m:r><m:t>DD,uw,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD,uw,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD,uw,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "f_{DD+RT,d,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>f</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,d,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD+RT,d,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,d,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "f_{DD+RT,ws,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>f</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,ws,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD+RT,ws,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,ws,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "f_{DD+RT,wf,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>f</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,wf,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD+RT,wf,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,wf,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "f_{DD+RT,uw,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>f</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,uw,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "R_{DD+RT,uw,N,B}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>R</m:t></m:r></m:e><m:sub><m:r><m:t>DD+RT,uw,N,B</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  },
  {
    "tex": "a_{N,seis}",
    "xslt": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<m:oMath xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\" xmlns:mml=\"http://www.w3.org/1998/Math/MathML\"><m:sSub><m:e><m:r><m:t>a</m:t></m:r></m:e><m:sub><m:r><m:t>N,seis</m:t></m:r></m:sub></m:sSub></m:oMath>\n"
  }
]


fs.writeFile(`title.uniq.json`, JSON.stringify(uniq(texXslt)), 'utf8', () => null); // write it back