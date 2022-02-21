export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  /**
   * Update the Pharmacy drugs list
   * @returns updated drugs list
   */
   updateBenefitValue() {
    this.drugs.forEach(drug => {
      if (drug.benefit <= 50 && drug.benefit >= 0) {
        // Magic Pill never expires nor gain/lose benefit
        if (drug.name !== 'Magic Pill') {
          const oldDrugValue = Object.assign({}, drug);
          drug.decreaseExpiresIn();

          
          if (drug.name === 'Fervex' && drug.expiresIn < 0) {
            drug.benefit = 0;
          } else if (drug.name === 'Fervex' || drug.name === 'Herbal Tea') {
            drug.manageDrugsGainBenefit(oldDrugValue);
          } else {
            drug.manageDrugsDecreasingBenefit();
          }
        }
      } else {
        throw new Error(`Benefit value must be between 1 and 50 includes`);
      }
    });
    
    return this.drugs;
  }
}
