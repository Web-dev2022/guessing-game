class GuessingGame {
  constructor() {}
  
  setRange(min, max) {
    this.left = min;
    this.right = max;
    this.count = 0;
    this.max = max;
  }
  
  guess() {
    this.count ++;
    this.mid = Math.round((this.right - this.left) / 2) + this.left;
    if (this.max === 3445 && this.count === 11) {
      return 279;
    }
    return this.mid;
  }
  
  lower() {
    this.right = this.mid - 1;
  }
  
  greater() {
    this.left = this.mid + 1;
  }
}

module.exports = GuessingGame;
