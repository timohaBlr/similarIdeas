function DNAStrand(dna){
    return dna.split('')
        .map(item => item ==='A' ? item ='T' : item ==='T' ? item ='A' : item ==='C' ? item ='G' : item ==='G' ? item = 'C' : 'C')
        .join('');
}