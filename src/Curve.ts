import vec2 from "vec2";

export class Curve {
  a1: vec2;
  c1: vec2;
  c2: vec2;
  a2: vec2;

  constructor(a1: vec2, c1: vec2, c2: vec2, a2: vec2) {
    this.a1 = a1;
    this.c1 = c1;
    this.c2 = c2;
    this.a2 = a2;
  }

  render(ctx: CanvasRenderingContext2D, rotation: number = 0, offset: vec2 = new vec2(0,0)) {
    const a1 = this.a1.rotate(rotation, undefined, true).add(offset.x, offset.y);
    const c1 = this.c1.rotate(rotation, undefined, true).add(offset.x, offset.y);;
    const c2 = this.c2.rotate(rotation, undefined, true).add(offset.x, offset.y);;
    const a2 = this.a2.rotate(rotation, undefined, true).add(offset.x, offset.y);;

    ctx.beginPath();
    ctx.moveTo(a1.x, a1.y);
    ctx.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, a2.x, a2.y);
    ctx.stroke();
  }
}