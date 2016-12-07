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

describe('function getSiblings', function() {
    it('confirm Joey Madden is an only child', function() {
        expect(getSiblings(21, getParents, getChildren)).toEqual([]);
    });
});

/*describe('function estimateAge', function(){
  it('confirm Mattias Madden is 50', function(){
    expect(estimateAge(dataObject, 50, getIndexFromId, findPersonAge));
  });
});*/
