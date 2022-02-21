export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  /**
   * For all drug except MagicPill, if benefit < 50, add 1 to benefit
   */
  addBenefit() {
    if (this.benefit < 50) {
      this.benefit++;
    }
  }

  /**
   * For all drugs, remove 1 to ExpiresIn
   */
  decreaseExpiresIn() {
      this.expiresIn--;
  }

  /**
   * if benefit > 0, remove 1 to benefit
   * if expiresIn negative, remove 1 more to benefit
   */
  decreaseBenefit() {
    if (this.benefit > 0) {
      this.benefit--;
    }
    if (this.expiresIn < 0 && this.benefit > 0) {
      this.benefit--;
    }
  }

  /**
   * Manage drugs that gain benefit day after day
   * @param {*} oldDrugValue 
   */
  manageDrugsGainBenefit(oldDrugValue) {
    this.addBenefit();
    if (this.name === 'Fervex') {
      if (oldDrugValue.expiresIn <= 10) {
        this.addBenefit();
      } 
      if (oldDrugValue.expiresIn <= 5) {
        this.addBenefit();
      }
    } else if (this.expiresIn < 0) {
      this.addBenefit();
    }
  }

  /**
   * Manage drug who lose benefit day after day
   */
  manageDrugsDecreasingBenefit() {
    // For all others drugs
    this.decreaseBenefit();

    // If drug is Dafalgan, it lose 1 more Benefit
    if (this.name === 'Dafalgan') {
      this.decreaseBenefit();
    }
  }
}
  