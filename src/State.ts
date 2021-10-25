import {createContext} from "react";
import vec2 from "vec2";
import { Curve } from "./Curve";

export const startingCPVelocity = 0.5;

export class State {
  maxCurveSize = 450;
  maxControlPointSize = this.maxCurveSize*7/5;
  maxCPVelocity = 3;

  numRadials = 10;

  c1x: number;
  c1y: number;
  c2x: number;
  c2y: number;

  c1xVelocity: number;
  c1yVelocity: number;
  c2xVelocity: number;
  c2yVelocity: number;

  skipEveryNthRadial = 0;
  numberOfRadialsToSkip = 1;

  renderControls: () => void;

  constructor() {
    this.c1x = 90;
    this.c1y = 130;
    this.c2x = 150;
    this.c2y = -20;

    this.c1xVelocity = startingCPVelocity;
    this.c1yVelocity = startingCPVelocity;
    this.c2xVelocity = startingCPVelocity;
    this.c2yVelocity = startingCPVelocity;

    this.renderControls = () => {}
  }

  setNumRadials(numRadials: number) {
    this.numRadials = numRadials;
  }

  setC1x(c1x: number) {
    this.c1x = c1x;
  }
  setC1y(c1y: number) {
    this.c1y = c1y;
  }
  setC2x(c2x: number) {
    this.c2x = c2x;
  }
  setC2y(c2y: number) {
    this.c2y = c2y;
  }
  setC1xVelocity(vel: number) {
    this.c1xVelocity = this.c1xVelocity > 0 ? vel : -vel;
  }
  setC1yVelocity(vel: number) {
    this.c1yVelocity = this.c1yVelocity > 0 ? vel : -vel;
  }
  setC2xVelocity(vel: number) {
    this.c2xVelocity = this.c2xVelocity > 0 ? vel : -vel;
  }
  setC2yVelocity(vel: number) {
    this.c2yVelocity = this.c2yVelocity > 0 ? vel : -vel;
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

export const StateContext = createContext<State>(new State());