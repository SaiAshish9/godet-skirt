export default function(part) {
    let { Point, points, Path, paths, measurements, options } = part.shorthand();
    const inch = 25.4;
    // Godets other than 4 fixed ones
    let varGodets = parseInt(options.numOfGodets) / 4;
    let godetWidth = options.godetWidth;
    let godetGap = ((measurements.frontHipArc + options.manipulateHem) - (godetWidth * varGodets)) / varGodets;

    if(godetWidth * varGodets >= (measurements.frontHipArc + options.manipulateHem)) {
      godetWidth = (0.8 * (measurements.frontHipArc + options.manipulateHem)) / varGodets;
      godetGap = (0.2 * (measurements.frontHipArc + options.manipulateHem)) / varGodets;
    }
  
    // Design pattern here

  
    paths.waistCurve = new Path()
      .move(points.origin)
      ._curve(points.waistCp, points.rWaist)
  
    // Dart points
    points.leftDartC = paths.waistCurve
      .shiftAlong(options.waistDartPosition);
    points.leftDartR = paths.waistCurve
      .shiftAlong(options.waistDartPosition + options.frontDartWidth/2);
    points.leftDartL = paths.waistCurve
      .shiftAlong(options.waistDartPosition - options.frontDartWidth/2);
    points.leftDartPoint = points.leftDartC
      .shift(-90, options.frontLeftDartLength);
    points.rightDartL = paths.waistCurve
      .shiftAlong(options.waistDartPosition + options.frontDartWidth/2 + options.dartGap);
    points.rightDartR = paths.waistCurve
      .shiftAlong(options.waistDartPosition + options.frontDartWidth/2 + options.dartGap + options.frontDartWidth);
    points.rightDartC = paths.waistCurve
      .shiftAlong(options.waistDartPosition + options.frontDartWidth/2 + options.dartGap + options.frontDartWidth/2);
    points.rightDartPoint = points.rightDartC
      .shift(-87, options.frontRightDartLength);
    
    paths.seam = new Path()
      .move(points.origin)
      .line(points.lHem)
      .line(points.rHem)
      ._curve(points.cp2, points.rHip)
      ._curve(points.cp1, points.rWaist)
      
    paths.leftDart = new Path()
      .move(points.leftDartL)
      .line(points.leftDartPoint)
      .line(points.leftDartR)
  
    paths.rightDart = new Path()
      .move(points.rightDartL)
      .line(points.rightDartPoint)
      .line(points.rightDartR)

    // Left Fixed Half Godet
    points.lFGodetTop = points.lHem.shift(90, options.godetLength);
    points.lFGodetRight = points.lFGodetTop.translate(godetWidth / 2, options.godetLength);
    points.lFGodetRightTop = points.lFGodetRight.shift(90, 0.8 * options.godetLength);
    points.lFGodetTopRcp = points.lFGodetRight.shift(90, options.godetLength);
    paths.lFGodet = new Path()
      .move(points.lFGodetTop)
      ._curve(points.lFGodetTopRcp, points.lFGodetRightTop)
      .line(points.lFGodetRight);

    // Right Fixed Half Godet
    points.rFGodetTop = points.rHem.shift(90, options.godetLength);
    points.rFGodetLeft = points.rFGodetTop.translate(-godetWidth / 2, options.godetLength);
    points.rFGodetLeftTop = points.rFGodetLeft.shift(90, 0.8 * options.godetLength);
    points.rFGodetTopLcp = points.rFGodetLeft.shift(90, options.godetLength);
    paths.rFGodet = new Path()
      .move(points.rFGodetTop)
      ._curve(points.rFGodetTopLcp, points.rFGodetLeftTop)
      .line(points.rFGodetLeft);

    // Variable Godets
    for(let i=1; i<varGodets; i++) {
      points[`godet${i}Top`] = points.lFGodetTop.shift(0, i * (godetWidth + godetGap));
      // Left half path
      points[`godet${i}Left`] = points[`godet${i}Top`].translate(-godetWidth / 2, options.godetLength);
      points[`godet${i}LeftTop`] = points[`godet${i}Left`].shift(90, 0.8 * options.godetLength);
      points[`godet${i}TopLcp`] = points[`godet${i}Left`].shift(90, options.godetLength);
      paths[`godet${i}L`] = new Path()
        .move(points[`godet${i}Top`])
        ._curve(points[`godet${i}TopLcp`], points[`godet${i}LeftTop`])
        .line(points[`godet${i}Left`]);
      // Right half path
      points[`godet${i}Right`] = points[`godet${i}Top`].translate(godetWidth / 2, options.godetLength);
      points[`godet${i}RightTop`] = points[`godet${i}Right`].shift(90, 0.8 * options.godetLength);
      points[`godet${i}TopRcp`] = points[`godet${i}Right`].shift(90, options.godetLength);
      paths[`godet${i}R`] = new Path()
        .move(points[`godet${i}Top`])
        ._curve(points[`godet${i}TopRcp`], points[`godet${i}RightTop`])
        .line(points[`godet${i}Right`]);
    }
  
    // Complete?
    if (complete) {
      if (sa) {
      }
      // Paperless?
      if (paperless) {
      }
    }
    return part;
  }
