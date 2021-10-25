import {createContext} from "react";

export class State {
  numRadials: number;

  constructor() {
    this.numRadials = 10;
  }

  setNumRadials(numRadials: number) {
    this.numRadials = numRadials;
  }
}

export const StateContext = createContext<State>(new State());