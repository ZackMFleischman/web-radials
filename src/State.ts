import vec2 from "vec2";
import { Curve } from "./Curve";

export const startingCPVelocity = 1.0;
const curveSizeToCPSizeRatio = 7.0/5.0;

const clamp = (x: number, value: number) => Math.max(Math.min(x, value), -value);

export class State {
  maxCurveSize = 400;
  maxControlPointSize = Math.round(this.maxCurveSize*curveSizeToCPSizeRatio);
  maxCPVelocity = 3;

  curveWidth = 4;

  numRadials = 10;
  skipEveryNthRadial = 0;
  numberOfRadialsToSkip = 1;

  windowSizeProportion = 0.7;

  c1x: number;
  c1y: number;
  c2x: number;
  c2y: number;

  c1xVelocity: number;
  c1yVelocity: number;
  c2xVelocity: number;
  c2yVelocity: number;

  spin = 0;
  spinVelocity = 0.1;

  showControlLines = false;

  renderControls: () => void;

  constructor() {
    this.setMaxCurveSize(400);

    this.c1x = 90;
    this.c1y = 130;
    this.c2x = 150;
    this.c2y = -20;

    this.c1xVelocity = 1.0;
    this.c1yVelocity = 1.2;
    this.c2xVelocity = 1.4;
    this.c2yVelocity = 1.6;

    this.renderControls = () => {}
  }

  setNumRadials(numRadials: number) {
    this.numRadials = numRadials;
  }

  setMaxCurveSize(maxCurveSize: number) {
    this.maxCurveSize = maxCurveSize;
    this.maxControlPointSize = Math.round(this.maxCurveSize*curveSizeToCPSizeRatio);
  }

  setC1x(c1x: number) {
    this.c1x = clamp(c1x, this.maxControlPointSize);
  }
  setC1y(c1y: number) {
    this.c1y = clamp(c1y, this.maxControlPointSize);
  }
  setC2x(c2x: number) {
    this.c2x = clamp(c2x, this.maxControlPointSize);
  }
  setC2y(c2y: number) {
    this.c2y = clamp(c2y, this.maxControlPointSize);
  }
  setC1xVelocity(vel: number) {
    this.c1xVelocity = clamp(this.c1xVelocity >= 0 ? vel : -vel, this.maxCPVelocity);
  }
  setC1yVelocity(vel: number) {
    this.c1yVelocity = clamp(this.c1yVelocity >= 0 ? vel : -vel, this.maxCPVelocity);
  }
  setC2xVelocity(vel: number) {
    this.c2xVelocity = clamp(this.c2xVelocity >= 0 ? vel : -vel, this.maxCPVelocity);
  }
  setC2yVelocity(vel: number) {
    this.c2yVelocity = clamp(this.c2yVelocity >= 0 ? vel : -vel, this.maxCPVelocity);
  }

  getCurve() {
    return new Curve(
      new vec2(0, 0),
      new vec2(this.c1x, this.c1y),
      new vec2(this.c2x, this.c2y),
      new vec2(this.maxCurveSize, 0)
    );
  }
}