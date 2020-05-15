import { version } from "../package.json";

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: "godet-skirt",
  version,
  design: "Roopin619",
  code: "Roopin619",
  department: "womenswear",
  type: "pattern",
  difficulty: 3,
  tags: [
    "freesewing",
    "design",
    "diy",
    "fashion",
    "made to measure",
    "parametric design",
    "pattern",
    "sewing",
    "sewing pattern"
  ],
  optionGroups: {
    Type:["skirttype"],
    Hem: ["manipulateHem"],
    Dart: [
      "dartGap","waistDartPosition",
      {Front:["frontLeftDartLength","frontRightDartLength","frontDartWidth"]},
      {Back:["backLeftDartLength","backRightDartLength","backDartWidth"]}
    ],
  },
  measurements: ["length","frontWaistArc","backWaistArc","hemLine","frontHipArc","backHipArc","naturalWaist","hipsCircumference"],
  dependencies: {},  
  inject: {},
  hide: [],
  parts: ["back","front","godet"],
  options: {
    manipulateHem: { mm: 0, min: -50.8, max: 50.8 },
    frontLeftDartLength: { mm: 86.4, min: 35.6, max: 137.2 },
    frontRightDartLength: { mm: 86.4, min: 35.6, max: 137.2 },
    backLeftDartLength: { mm: 139.7, min: 88.9, max: 190.5 },
    backRightDartLength: { mm: 127, min: 76.2, max: 177.8 },
    frontDartWidth: { mm: 25.4, min: 0, max: 63.5 },
    backDartWidth: { mm: 25.4, min: 0, max: 69.8 },
    waistDartPosition: { mm: 86.4, min: 35.6, max: 137.2 },
    naturalWaistToHip: { mm: 228.6, min: 177.8, max: 279.4 },
    dartGap: { mm: 25.4, min: 12.7, max: 50.8 },
    skirttype: {
      list: ['aline','basic','panel','godet'],
      dflt: 'godet'
    },
    panelLength: { mm: 533.4, min: 406.4, max: 660.4 },
    waistBandWidth: { mm: 76.2, min: 25.4, max: 127 },
    numOfPanels: { count: 8, min: 4, max: 14 },
    naturalWaistToHip: { mm: 203.2, min: 127, max: 279.4 },
    hemExcess: { mm: 0, min: -76.2, max: 203.2 },
    numOfGodets: { count: 8, min: 4, max: 12 },
    godetWidth: { mm: 101.6, min: 50.8, max: 152.4 },
    godetLength: { mm: 254, min: 177.8, max: 330.2 }
  }
};