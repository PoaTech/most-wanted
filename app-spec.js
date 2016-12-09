describe('function setAgeRange', function() {
    it('set range between 10 and 1000', function() {
        expect(setAgeRange(dataObject[0], 10, 1000, getIndexFromId, getPersonsAge)).toEqual(true);
    });
});

describe('function convertHeight', function() {
    it('convert height', function() {
        expect(convertHeight("5'8\"")).toEqual(68);
    });
});

describe('function hasSameWeight', function() {
    it('has same weight', function() {
        expect(hasSameWeight(dataObject[19], 110)).toEqual(true);
    });
    it('has same weight', function() {
        expect(hasSameWeight(dataObject[18], 241)).toEqual(true);
    });
});

describe('function hasSameEyecolor', function(){
  it('confirm Joey Madden has blue eyes', function(){
    expect(hasSameEyecolor(dataObject[21], "blue")).toEqual(true);
  });
});

describe('function hasSameJob', function(){
  it('confirm Joey Madden is a doctor', function(){
    expect(hasSameJob(dataObject[21], "doctor")).toEqual(true);
  });
});

describe('function splitName', function(){
  it('confirm the ability to properly split a name', function(){
    expect(splitName("Joey Madden")).toEqual(['Joey', 'Madden']);
  });
});

describe('function getPersonName', function(){
  it('confirm the ability to properly retrieve a name', function(){
    expect(getPersonName(21)).toEqual("Joey Madden");
  });
});

describe('function getInfo', function(){
  it('confirm the ability to accurately pull a subjects information', function(){
    expect(getInfo(21, getKeyString, getPersonName, checkIfNull, getIndexFromId, getParents)).toEqual(['SSN: 313998000', 'First Name: Joey', 'Last Name: Madden', 'Gender: female', 'Date of Birth: 2/02/1987', 'Height: 67', 'Weight: 100', 'Eye Color: blue', 'Occupation: doctor', 'Parents: Mattias Madden, Ellen Madden', 'Current Spouse: None']);
  });
});

describe('function checkIfNull', function(){
  it('confirm the absence of anything', function(){
    expect(checkIfNull(null)).toEqual("None");
  });
});

describe('function getDob', function() {
    it('get date of birth', function() {
        expect(getDob(0)).toEqual(new Date(1949, 1, 18));
    });
});

describe('function getOldest', function() {
    it('get oldest', function() {
        expect(getOldest([0, 21], getDob)).toEqual(0);
    });
});

describe('function getNextOfKin', function() {
    it('get next of kin', function() {
        expect(getNextOfKin(21, getDob, getOldest, getChildren, getSpouse, getParents, getSiblings, getDoubleRelation, getTripleRelation, getIndexFromId)).toEqual('19');
    });
    it('get next of kin', function() {
        expect(getNextOfKin(20, getDob, getOldest, getChildren, getSpouse, getParents, getSiblings, getDoubleRelation, getTripleRelation, getIndexFromId)).toEqual('19');
    });
    it('get next of kin', function() {
        expect(getNextOfKin(9, getDob, getOldest, getChildren, getSpouse, getParents, getSiblings, getDoubleRelation, getTripleRelation, getIndexFromId)).toEqual('17');
    });
});

describe('function getChildren', function() {
    it('confirm Joey Madden has no children', function() {
        expect(getChildren(21)).toEqual([]);
    });
    it('confirm Uma Bob has children', function() {
        expect(getChildren(1)).toEqual(['10', '11']);
    });
});

describe('function getKeyString', function(){
  it('confirm the ability to correctly return the desired descriptor to the user', function(){
    expect(getKeyString("id")).toEqual("SSN");
  });
});

describe('function getSiblings', function() {
    it('confirm Joey Madden is an only child', function() {
        expect(getSiblings(21, getParents, getChildren)).toEqual([]);
    });
    it('confirm Jill Pafoy has a brother', function() {
        expect(getSiblings(10, getParents, getChildren)).toEqual(['11']);
    });
    it('confirm Hana has a sibling', function() {
        expect(getSiblings(17, getParents, getChildren)).toEqual(['16', '18', '19']);
    });
});

describe('function getSpouse', function(){
  it('confirm Mattias Madden is married to Ellen Madden', function(){
    expect(getSpouse(19, getIndexFromId)).toEqual('20');
  });
});

describe('function getDescendants', function(){
  var totalDescendants;
  beforeEach(function(){
    totalDescendants = [];
});
  it('confirm Joey Madden is Mattias Madden\'s only descendant', function(){
    expect(getDescendants(19, getPersonName, totalDescendants)).toEqual(['Joey Madden']);
  });
});

describe('function getIndexFromId', function(){
  it('confirm the ability to correctly identify a person by their id', function(){
    expect(getIndexFromId("313998000")).toEqual('21');
  });
});

describe('function getParents', function() {
    it('confirm that Uma Bob has no known parents', function() {
        expect(getParents(1)).toEqual([]);
    });
    it('confirm that Joey Madden has parents', function() {
        expect(getParents(21)).toEqual(['19', '20']);
    });
});

describe('function estimateAge', function() {
    it('confirm Mattias Madden is 50', function() {
        expect(estimateAge(dataObject[19], 50, getIndexFromId, getPersonsAge)).toEqual(true);
    });
    it('confirm Uma Bob is 69', function() {
        expect(estimateAge(dataObject[1], 69, getIndexFromId, getPersonsAge)).toEqual(true);
    });
});

describe('function getDoubleRelation', function() {
    it('confirm grandchildren', function() {
        expect(getDoubleRelation(9, getChildren, getChildren)).toEqual(['21']);
    });
    it('confirm grandchildren', function() {
        expect(getDoubleRelation(8, getChildren, getChildren)).toEqual(['21']);
    });
});
describe('function getTripleRelation', function(){
  it('confirm absence of great grandchildren', function(){
    expect(getTripleRelation(9, getChildren, getChildren, getChildren)).toEqual([]);
  });
  it('confirm absence of great grandchildren', function(){
    expect(getTripleRelation(8, getChildren, getChildren, getChildren)).toEqual([]);
  });
});
