import * as docx from 'docx';
const mjAPI: any = require('mathjax-node');
import { Element as XmlElement, xml2js } from 'xml-js';
import * as fs from 'fs';
import * as path from 'path';
import * as libxslt from 'libxslt';

import { uniq} from 'lodash'

const items = [
  {
    "code": "an-increase-of-bond-strength-due-to-increased-concrete-strength-is-allowed",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "",
      "title": "An increase of bond strength due to increased concrete strength is allowed."
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "normalization-exponent for bond stress, uncracked concrete, hammer drilled holes",
    "type": "multiple",
    "value": {
      "symbol": "n_{uncr,HD}",
      "units": "",
      "title": "Normalization exponent for bond stress, uncracked concrete, hammer drilled holes"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "normalization-exponent for bond stress, cracked concrete, hammer drilled holes",
    "type": "multiple",
    "value": {
      "symbol": "n_{cr,HD}",
      "units": "",
      "title": "Normalization exponent for bond stress, cracked concrete, hammer drilled holes"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "normalization-exponent-for-bond-stress-uncracked-concrete-diamond-drilled-holes",
    "type": "multiple",
    "value": {
      "symbol": "n_{uncr,DD}",
      "units": "-",
      "title": "Normalization exponent for bond stress, uncracked concrete, diamond drilled holes"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "normalization-exponent-for-bond-stress-cracked-concrete-diamond-drilled-holes",
    "type": "multiple",
    "value": {
      "symbol": "n_{cr,DD}",
      "units": "-",
      "title": "Normalization exponent for bond stress, cracked concrete, diamond drilled holes"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "normalization-exponent-for-bond-stress-uncracked-concrete-diamond-drilled-+-roughening-tool",
    "type": "multiple",
    "value": {
      "symbol": "n_{uncr,DD+RT}",
      "units": "-",
      "title": "Normalization exponent for bond stress, uncracked concrete, diamond drilled + roughening tool"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "normalization-exponent-for-bond-stress-cracked-concrete-diamond-drilled-+-roughening-tool",
    "type": "multiple",
    "value": {
      "symbol": "n_{cr,DD+RT}",
      "units": "-",
      "title": "Normalization exponent for bond stress, cracked concrete, diamond drilled + roughening tool"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-category-hammer-drilled-dry-concrete",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor category, hammer drilled, dry concrete"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "strength-reduction-factor-bond-tension-hammer-drilled-holes-dry-concrete-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "f_{HD,d,N,B}",
      "units": "-",
      "title": "Strength reduction factor, bond tension, hammer drilled holes, dry concrete, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "resistance-modification-factor-bond-tension-hammer-drilled-holes-dry-concrete-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "R_{HD,d,N,B}",
      "units": "-",
      "title": "Resistance modification factor, bond tension, hammer drilled holes, dry concrete, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-category-hammer-drilled-water-saturated-concrete",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor category, hammer drilled, water saturated concrete"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "strength-reduction-factor-bond-tension-hammer-drilled-holes-water-saturated-concrete-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "f_{HD,ws,N,B}",
      "units": "-",
      "title": "Strength reduction factor, bond tension, hammer drilled holes, water saturated concrete, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "resistance-modification-factor-bond-tension-hammer-drilled-holes-water-saturated-concrete-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "R_{HD,ws,N,B}",
      "units": "-",
      "title": "Resistance modification factor, bond tension, hammer drilled holes, water saturated concrete, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-category-hammer-drilled-water-filled-holes",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor category, hammer drilled, water filled holes"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "strength-reduction-factor-bond-tension-hammer-drilled-holes-water-filled-holes-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "f_{HD,wf,N,B}",
      "units": "-",
      "title": "Strength reduction factor, bond tension, hammer drilled holes, water filled holes, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "resistance-modification-factor-bond-tension-hammer-drilled-holes-water-filled-holes-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "R_{HD,wf,N,B}",
      "units": "-",
      "title": "Resistance modification factor, bond tension, hammer drilled holes, water filled holes, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-category-hammer-drilled-under-water",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor category, hammer drilled, under water"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "strength-reduction-factor-bond-tension-hammer-drilled-holes-under-water-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "f_{HD,uw,N,B}",
      "units": "-",
      "title": "Strength reduction factor, bond tension, hammer drilled holes, under water, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "resistance-modification-factor-bond-tension-hammer-drilled-holes-under-water-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "R_{HD,uw,N,B}",
      "units": "-",
      "title": "Resistance modification factor, bond tension, hammer drilled holes, under water, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-category-diamond-drilled-dry-concrete",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor category, diamond drilled, dry concrete"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "strength-reduction-factor-bond-tension-diamond-cored-holes-in-dry-concrete-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "f_{DD,d,N,B}",
      "units": "-",
      "title": "Strength reduction factor, bond tension, diamond cored holes in dry concrete, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "resistance-modification-factor-bond-tension-diamond-cored-holes-in-dry-concrete-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "R_{DD,d,N,B}",
      "units": "-",
      "title": "Resistance modification factor, bond tension, diamond cored holes in dry concrete, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-category-diamond-drilled-water-saturated-concrete",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor category, diamond drilled, water saturated concrete"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "strength-reduction-factor-bond-tension-diamond-cored-holes-in-water-saturated-concrete-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "f_{DD,ws,N,B}",
      "units": "-",
      "title": "Strength reduction factor, bond tension, diamond cored holes in water saturated concrete, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "resistance-modification-factor-bond-tension-diamond-cored-holes-in-water-saturated-concrete-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "R_{DD,ws,N,B}",
      "units": "-",
      "title": "Resistance modification factor, bond tension, diamond cored holes in water saturated concrete, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-category-diamond-drilled-water-filled-holes",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor category, diamond drilled, water filled holes"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "strength-reduction-factor-bond-tension-diamond-cored-holes-water-filled-holes-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "f_{DD,wf,N,B}",
      "units": "-",
      "title": "Strength reduction factor, bond tension, diamond cored holes, water filled holes, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "resistance-modification-factor-bond-tension-diamond-cored-holes-water-filled-holes-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "R_{DD,wf,N,B}",
      "units": "-",
      "title": "Resistance modification factor, bond tension, diamond cored holes, water filled holes, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-category-diamond-drilled-under-water",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor category, diamond drilled, under water"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "strength-reduction-factor-bond-tension-diamond-cored-holes-under-water-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "f_{DD,uw,N,B}",
      "units": "-",
      "title": "Strength reduction factor, bond tension, diamond cored holes, under water, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "resistance-modification-factor-bond-tension-diamond-cored-holes-under-water-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "R_{DD,uw,N,B}",
      "units": "-",
      "title": "Resistance modification factor, bond tension, diamond cored holes, under water, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-category-diamond-drilled-+-roughening-tool-dry-concrete",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor category, diamond drilled + roughening tool, dry concrete"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "strength-reduction-factor-bond-tension-diamond-cored-+-roughened-holes-dry-concrete-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "f_{DD+RT,d,N,B}",
      "units": "-",
      "title": "Strength reduction factor, bond tension, diamond cored + roughened holes, dry concrete, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "resistance-modification-factor-bond-tension-diamond-cored-+-roughened-holes-dry-concrete-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "R_{DD+RT,d,N,B}",
      "units": "-",
      "title": "Resistance modification factor, bond tension, diamond cored + roughened holes, dry concrete, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-category-diamond-drilled-+-roughening-tool-water-saturated-concrete",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor category, diamond drilled + roughening tool, water saturated concrete"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "strength-reduction-factor-bond-tension-diamond-cored-+-roughened-holes-in-water-saturated-concrete-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "f_{DD+RT,ws,N,B}",
      "units": "-",
      "title": "Strength reduction factor, bond tension, diamond cored + roughened holes in water saturated concrete, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "resistance-modification-factor-bond-tension-diamond-cored-+-roughened-holes-in-water-saturated-concrete-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "R_{DD+RT,ws,N,B}",
      "units": "-",
      "title": "Resistance modification factor, bond tension, diamond cored + roughened holes in water saturated concrete, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-category-diamond-drilled-+-roughening-tool-water-filled-holes",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor category, diamond drilled + roughening tool, water filled holes"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "strength-reduction-factor-bond-tension-diamond-cored-+-roughened-holes-water-filled-holes-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "f_{DD+RT,wf,N,B}",
      "units": "-",
      "title": "Strength reduction factor, bond tension, diamond cored + roughened holes, water filled holes, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "resistance-modification-factor-bond-tension-diamond-cored-+-roughened-holes-water-filled-holes-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "R_{DD+RT,wf,N,B}",
      "units": "-",
      "title": "Resistance modification factor, bond tension, diamond cored + roughened holes, water filled holes, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-category-diamond-drilled-+-roughening-tool-under-water",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor category, diamond drilled + roughening tool, under water"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "strength-reduction-factor-bond-tension-diamond-cored-+-roughened-holes-under-water-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "f_{DD+RT,uw,N,B}",
      "units": "-",
      "title": "Strength reduction factor, bond tension, diamond cored + roughened holes, under water, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "resistance-modification-factor-bond-tension-diamond-cored-+-roughened-holes-under-water-cond-b",
    "type": "multiple",
    "value": {
      "symbol": "R_{DD+RT,uw,N,B}",
      "units": "-",
      "title": "Resistance modification factor, bond tension, diamond cored + roughened holes, under water, cond. B"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "reduction-for-seismic-tension",
    "type": "multiple",
    "value": {
      "symbol": "a_{N,seis}",
      "units": "-",
      "title": "Reduction for seismic tension"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "product-can-be-used-with-icc",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Product can be used with ICC"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "product-can-be-used-with-the-hna-methods-aci-318-11-and-aci-318-14",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Product can be used with the HNA methods ACI 318-11 and ACI 318-14"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "product-can-be-used-with-csa",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Product can be used with CSA"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "product-can-be-used-with-the-hna-method-aci-349-01",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Product can be used with the HNA method ACI 349-01"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "product-is-not-allowed-for-seismic-in-aci-methods-(mechanical-anchors)",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Product is NOT allowed for seismic in ACI methods (mechanical anchors)"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "product-is-not-allowed-for-seismic-in-csa-methods-(mechanical-anchors)",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Product is NOT allowed for seismic in CSA methods (mechanical anchors)"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "product-is-allowed-for-use-in-concrete-over-metal-deck-applications",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Product is allowed for use in Concrete Over Metal Deck applications"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "a-“shear-warning”-should-be-shown-in-the-report-for-the-fastener-(kh-ez-i)",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "A “shear warning” should be shown in the report for the fastener (KH-EZ I)"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-family-is-allowed-with-stand-off-fastening-without-clamping",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor-family is allowed with stand-off fastening without clamping"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-family-is-allowed-with-stand-off-fastening-with-clamping",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor-family is allowed with stand-off fastening with clamping"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-family-is-allowed-with-stand-off-fastening-with-grouting",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor-family is allowed with stand-off fastening with grouting"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-family-needs-no-installation-torque-moment-(t_inst-=-0)-or-cannot-be-tightened",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor-family needs no installation torque moment (T_inst = 0) or cannot be tightened"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-family-is-approved-for-use-in-cracked-concrete-(tensile-zone)",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor-family is approved for use in cracked concrete (tensile zone)"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-family-should-be-shown-if-uncracked-concrete-is-selected-in-the-ui-(filter-criteria-for-“special”-hrd-anchors)",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor-family should be shown if uncracked concrete is selected in the UI (filter criteria for “special” HRD anchors)"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-family-is-approved-for-use-under-dynamic-loading-(design-methods-dibt-dyn-and-hilti-dyn)",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor-family is approved for use under dynamic loading (design methods DIBt-Dyn and Hilti-Dyn)"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-family-is-approved-for-use-in-shock-conditions",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor-family is approved for use in shock conditions"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-family-is-approved-for-use-under-seismic-loading-(design-methods-hilti-asd-and-aci-318---ac193/ac308/cip)",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor-family is approved for use under seismic loading (design methods Hilti-ASD and ACI 318 - AC193/AC308/CIP)"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-family-is-approved-for-use-with-the-dynamic-set",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor-family is approved for use with the Dynamic Set"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  },
  {
    "code": "anchor-family-can-be-installed-using-the-at-tool-(special-setting-tool-in-usa-+-canada)",
    "type": "multiple",
    "value": {
      "symbol": "-",
      "units": "-",
      "title": "Anchor-Family can be installed using the AT tool (special setting tool in USA + Canada)"
    },
    "originUnit": "",
    "valuePreferences": {
      "allowed": [],
      "type": "number"
    }
  }
]
// class MathMlParagraph extends docx.XmlComponent {
//   public constructor(expression: string) {
//     super('m:oMathPara');

//     const xmlElement: XmlElement = xml2js(expression, { compact: false }) as XmlElement;

//     if (xmlElement && xmlElement.elements.length) {
//       this.root.push(docx.convertToXmlComponent(xmlElement.elements[0] as XmlElement));
//     }
//   }
// }



const texs: string[] =  items.reduce((acc, next) => {
  if (next.value.symbol === '-') {
    return acc;;
  }
  return [...acc, next.value.symbol]
}, [])



async function generate() {
  const styleSheetString: string = fs.readFileSync(path.join(__dirname, './MML2OMML.XSL'), { encoding: 'utf-8' });
  const stylesheet: any = await toStyleSheetString(styleSheetString);




  const results = [];
  // console.log(texs.length);

  const itemsqqq = uniq(texs);
  for (let i: number = 0; i < itemsqqq.length; i++) {
    // console.log(i);

    const value = itemsqqq[i];

    console.log(3);

    const mathMLValue: string = await toMathML('\\phi_{HD,d,N,B}');
    const mathmlexpr: string = await toMathmlexpr(stylesheet, mathMLValue);

    const res = {
      tex: value,
      xslt: mathmlexpr
    }
    results.push(res)
  }
  console.log(2);


  fs.writeFile(`tes.json`, JSON.stringify(results), 'utf8', () => null);


}




async function toStyleSheetString(styleSheetString: string) {
  return await new Promise((res: any, _rej: any) => {
    libxslt.parse(styleSheetString, (_err: any, stylesheet: any) => {
      res(stylesheet);
    });
  });
}

async function toMathmlexpr(stylesheet: any, mathml: any): Promise<any> {
  return await new Promise((res: any, _rej: any) => {
    stylesheet.apply(mathml, (_err: any, result: any) => {
      res(result);
    });
  });
}

async function toMathML(math: string): Promise<any> {
  mjAPI.config({
    MathJax: {}
  });
  mjAPI.start();

  return await new Promise((res: any, _rej: any) => {
    mjAPI.typeset({
      math,
      format: 'TeX',
      mml: true,
    }, (data: { mml: any, errors: any }) => {
      if (!data.errors) {
        res(data.mml);
      }
    });
  });
}



generate()