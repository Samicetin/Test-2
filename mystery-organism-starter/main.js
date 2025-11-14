// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let currentIndex = Math.floor(Math.random() * this.dna.length);
      let currentBase = this.dna[currentIndex];
      let newBase = returnRandBase();
      while (newBase === currentBase) {
        newBase = returnRandBase();
      }
      this.dna[currentIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherPAequor) {
    let sameCount = 0;
    for (let i = 0; i < this.dna.length; i++) {
      if (this.dna[i] === otherPAequor.dna[i]) {
  sameCount++;
}}
const similarity = (sameCount / this.dna.length) * 100;

return similarity;
},
willLikelySurvive(){
  let counter = 0;
  for (let i = 0; i < this.dna.length; i++){
    if(this.dna[i] === 'C'|| this.dna[i] === 'G'){
      counter++
    }
  }
  const proportion = counter / this.dna.length;
  return proportion >= 0.6;
},complementStrand() {
  const complement = [];

  for (let i = 0; i < this.dna.length; i++) {
    const base = this.dna[i];

    if (base === 'A') {
      complement.push('T');
    } else if (base === 'T') {
      complement.push('A');
    } else if (base === 'C') {
      complement.push('G');
    } else if (base === 'G') {
      complement.push('C');
    }
  }

  return complement;
}
}
  };

let survivors = [];
let id = 1;
while (survivors.length < 30) {
  let newOrg = pAequorFactory(id, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
  survivors.push(newOrg);
}
id++;
}
let mostRelatedPair = null;
let highestSimilarity = 0;

for (let i = 0; i < survivors.length; i++) {
  for (let j = i + 1; j < survivors.length; j++) {
    const org1 = survivors[i];
    const org2 = survivors[j];

    const similarity = org1.compareDNA(org2); // returns %

    if (similarity > highestSimilarity) {
      highestSimilarity = similarity;
      mostRelatedPair = [org1, org2];
    }
  }
}

console.log('Highest similarity:', highestSimilarity);
console.log('Most related pair:');
console.log(mostRelatedPair[0]);
console.log(mostRelatedPair[1]);        

//Test Mutate
console.log("Original DNA:", survivors[0].dna);
survivors[0].mutate();
console.log("After mutation:", survivors[0].dna);

//Test compareDNA()
const sim = survivors[0].compareDNA(survivors[1]);
console.log("Returned similarity:", sim);

//Test willLikelytoSurvive
console.log("Survivor check:", survivors[0].willLikelySurvive());

//Test complementStrand()
console.log("DNA:", survivors[0].dna);
console.log("Complement:", survivors[0].complementStrand());

// Test “most related pair”
console.log("Most related pair similarity:", highestSimilarity);
console.log("Organism A:", mostRelatedPair[0]);
console.log("Organism B:", mostRelatedPair[1]);