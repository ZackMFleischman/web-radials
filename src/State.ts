import {createContext} from "react";
import vec2 from "vec2";
import { Curve } from "./Curve";

export class State {
  numRadials: number;

  c1x: number;
  c1y: number;
  c2x: number;
  c2y: number;

  c1xVelocity: number;

  renderControls: () => void;

  constructor() {
    this.numRadials = 10;

    this.c1x = 90;
    this.c1y = 130;
    this.c2x = 150;
    this.c2y = -20;

    this.c1xVelocity = 0.05;

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

  getCurve() {
    return new Curve(
      new vec2(0, 0),
      new vec2(this.c1x, this.c1y),
      new vec2(this.c2x, this.c2y),
      new vec2(250, 0)
    );
  }
}

export const StateContext = createContext<State>(new State());