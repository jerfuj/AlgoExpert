class MinMaxStack {
  constructor() {
    this.stack = [];
    this.minMaxes = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.minMaxes.pop();
    return this.stack.pop();
  }

  push(number) {
    if (!this.stack.length) {
      this.minMaxes.push({ min: number, max: number });
    } else {
      const lastMinMax = this.minMaxes[this.minMaxes.length - 1];
      const newMinMax = {
        min: Math.min(lastMinMax.min, number),
        max: Math.max(lastMinMax.max, number),
      };
      this.minMaxes.push(newMinMax)
    }
    this.stack.push(number);
  }

  getMin() {
    return this.minMaxes[this.minMaxes.length - 1].min;
  }

  getMax() {
    return this.minMaxes[this.minMaxes.length - 1].max;
  }
}
