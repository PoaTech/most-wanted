/*jshint esversion: 6 */
/*jshint -W041*/
/*jshint -W083*/
/*jshint -W007*/
var dataObject = [{
    "id": "272822514",
    "firstName": "Billy",
    "lastName": "Bob",
    "gender": "male",
    "dob": "1/18/1949",
    "height": 71,
    "weight": 175,
    "eyeColor": "brown",
    "occupation": "programmer",
    "parents": [],
    "currentSpouse": 401222887
}, {
    "id": "401222887",
    "firstName": "Uma",
    "lastName": "Bob",
    "gender": "female",
    "dob": "4/1/1947",
    "height": 65,
    "weight": 162,
    "eyeColor": "brown",
    "occupation": "assistant",
    "parents": [],
    "currentSpouse": 272822514
}, {
    "id": "409574486",
    "firstName": "Michael",
    "lastName": "Walkens",
    "gender": "male",
    "dob": "5/9/1951",
    "height": 76,
    "weight": 250,
    "eyeColor": "brown",
    "occupation": "landscaper",
    "parents": [],
    "currentSpouse": 260451248
}, {
    "id": "260451248",
    "firstName": "Jon",
    "lastName": "Walkens",
    "gender": "male",
    "dob": "9/6/1945",
    "height": 62,
    "weight": 115,
    "eyeColor": "brown",
    "occupation": "assistant",
    "parents": [],
    "currentSpouse": 409574486
}, {
    "id": "629807187",
    "firstName": "Jack",
    "lastName": "Pafoy",
    "gender": "male",
    "dob": "3/16/1938",
    "height": 70,
    "weight": 207,
    "eyeColor": "black",
    "occupation": "nurse",
    "parents": [],
    "currentSpouse": 464142841
}, {
    "id": "464142841",
    "firstName": "Jen",
    "lastName": "Pafoy",
    "gender": "female",
    "dob": "4/10/1940",
    "height": 72,
    "weight": 256,
    "eyeColor": "black",
    "occupation": "student",
    "parents": [],
    "currentSpouse": 629807187
}, {
    "id": "982411429",
    "firstName": "Mister",
    "lastName": "Potatoo",
    "gender": "male",
    "dob": "12/18/1952",
    "height": 66,
    "weight": 170,
    "eyeColor": "hazel",
    "occupation": "architect",
    "parents": [],
    "currentSpouse": 595767575
}, {
    "id": "595767575",
    "firstName": "Missuz",
    "lastName": "Potatoo",
    "gender": "female",
    "dob": "10/28/1948",
    "height": 59,
    "weight": 137,
    "eyeColor": "blue",
    "occupation": "architect",
    "parents": [],
    "currentSpouse": 982411429
}, {
    "id": "693243224",
    "firstName": "Joy",
    "lastName": "Madden",
    "gender": "female",
    "dob": "4/20/1939",
    "height": 69,
    "weight": 199,
    "eyeColor": "hazel",
    "occupation": "doctor",
    "parents": [],
    "currentSpouse": null
}, {
    "id": "888201200",
    "firstName": "Mader",
    "lastName": "Madden",
    "gender": "male",
    "dob": "5/6/1937",
    "height": 76,
    "weight": 205,
    "eyeColor": "black",
    "occupation": "landscaper",
    "parents": [],
    "currentSpouse": null
}, {
    "id": "878013758",
    "firstName": "Jill",
    "lastName": "Pafoy",
    "gender": "Bob",
    "dob": "2/8/1972",
    "height": 74,
    "weight": 118,
    "eyeColor": "brown",
    "occupation": "programmer",
    "parents": [401222887],
    "currentSpouse": 294874671
}, {
    "id": "951747547",
    "firstName": "Ralph",
    "lastName": "Bob",
    "gender": "male",
    "dob": "12/23/1969",
    "height": 66,
    "weight": 179,
    "eyeColor": "blue",
    "occupation": "nurse",
    "parents": [401222887],
    "currentSpouse": 159819275
}, {
    "id": "159819275",
    "firstName": "Jasmine",
    "lastName": "Bob",
    "gender": "female",
    "dob": "12/18/1969",
    "height": 58,
    "weight": 156,
    "eyeColor": "blue",
    "occupation": "assistant",
    "parents": [409574486, 260451248],
    "currentSpouse": 951747547
}, {
    "id": "348457184",
    "firstName": "Annie",
    "lastName": "Pafoy",
    "gender": "female",
    "dob": "11/4/1970",
    "height": 62,
    "weight": 235,
    "eyeColor": "hazel",
    "occupation": "landscaper",
    "parents": [629807187, 464142841],
    "currentSpouse": null
}, {
    "id": "294874671",
    "firstName": "Dave",
    "lastName": "Pafoy",
    "gender": "male",
    "dob": "8/5/1967",
    "height": 61,
    "weight": 112,
    "eyeColor": "green",
    "occupation": "doctor",
    "parents": [629807187, 464142841],
    "currentSpouse": 878013758
}, {
    "id": "931247228",
    "firstName": "Amii",
    "lastName": "Pafoy",
    "gender": "female",
    "dob": "3/13/1963",
    "height": 74,
    "weight": 184,
    "eyeColor": "brown",
    "occupation": "landscaper",
    "parents": [629807187, 464142841],
    "currentSpouse": null
}, {
    "id": "822843554",
    "firstName": "Regina",
    "lastName": "Madden",
    "gender": "female",
    "dob": "7/26/1959",
    "height": 71,
    "weight": 249,
    "eyeColor": "brown",
    "occupation": "nurse",
    "parents": [693243224, 888201200],
    "currentSpouse": null
}, {
    "id": "819168108",
    "firstName": "Hana",
    "lastName": "Madden",
    "gender": "female",
    "dob": "10/7/1953",
    "height": 70,
    "weight": 187,
    "eyeColor": "brown",
    "occupation": "politician",
    "parents": [693243224, 888201200],
    "currentSpouse": null
}, {
    "id": "969837479",
    "firstName": "Eloise",
    "lastName": "Madden",
    "gender": "female",
    "dob": "12/11/1961",
    "height": 63,
    "weight": 241,
    "eyeColor": "brown",
    "occupation": "assistant",
    "parents": [693243224, 888201200],
    "currentSpouse": null
}, {
    "id": "313207561",
    "firstName": "Mattias",
    "lastName": "Madden",
    "gender": "male",
    "dob": "2/19/1966",
    "height": 70,
    "weight": 110,
    "eyeColor": "blue",
    "occupation": "assistant",
    "parents": [693243224, 888201200],
    "currentSpouse": 313997561
}, {
    "id": "313997561",
    "firstName": "Ellen",
    "lastName": "Madden",
    "gender": "female",
    "dob": "2/19/1970",
    "height": 67,
    "weight": 100,
    "eyeColor": "blue",
    "occupation": "doctor",
    "parents": [],
    "currentSpouse": 313207561
}, {
    "id": "313998000",
    "firstName": "Joey",
    "lastName": "Madden",
    "gender": "female",
    "dob": "2/02/1987",
    "height": 67,
    "weight": 100,
    "eyeColor": "blue",
    "occupation": "doctor",
    "parents": [313207561, 313997561],
    "currentSpouse": null
}];

function searchSelector() {
    alert("No One Can Hide");
    var searchSelection = prompt("Make search method selection:\n\n1. Search by name\n2. Parameter search");
    switch (searchSelection) {
        case "1":
            nameSearch(getKeyString, getPersonID, splitName, checkIfNull, getIndexFromId, getParents, getChildren, getSpouse, getSiblings, responder, getPersonName, getNextOfKin, getDob, getOldest, getDoubleRelation, getTripleRelation, getIndexFromId);
            break;
        case "2":
            parameterSearch(estimateAge, getIndexFromId, parseCommands, performCommands, getPersonsAge, setAgeRange, hasSameHeight, convertHeight, hasSameWeight, hasSameJob, hasSameEyecolor, getPersonName, responder);
            break;
        default:
            alert("Invalid choice, please choose again");
            searchSelector();
            break;
    }
    searchSelector();
}

function nameSearch(getKeyString, getPersonID, splitName, checkIfNull, getIndexFromId, getParents, getChildren, getSpouse, getSiblings, responder, getPersonName, getNextOfKin, getDob, getOldest, getDoubleRelation, getTripleRelation, personIndex) {
    console.log(new Date() + "\nYOU ARE HACKED, ALL DATA ON HDD ENCRYPTED!!!");
    var name = splitName(prompt("Enter target name"));
    if (name[1] != undefined) {
        var id = getPersonID(name[0], name[1]);
        if (id != undefined) {
            nameSearchDetails(id, getKeyString, checkIfNull, getIndexFromId, getParents, getChildren, getSpouse, getSiblings, responder, getPersonName, getNextOfKin, getDob, getOldest, getDoubleRelation, getTripleRelation, personIndex);
        } else {
            alert("Invalid person, resubmit");
            nameSearch(getKeyString, getPersonID, splitName, checkIfNull, getIndexFromId, getParents, getChildren, getSpouse, getSiblings, responder, getPersonName, getNextOfKin, getDob, getOldest, getDoubleRelation, getTripleRelation, personIndex);
        }
    } else {
        alert("Invalid person, resubmit");
        nameSearch(getKeyString, getPersonID, splitName, checkIfNull, getIndexFromId, getParents, getChildren, getSpouse, getSiblings, responder, getPersonName, getNextOfKin, getDob, getOldest, getDoubleRelation, getTripleRelation, personIndex);
    }

}

function nameSearchDetails(id, getKeyString, checkIfNull, getIndexFromId, getParents, getChildren, getSpouse, getSiblings, responder, getPersonName, getNextOfKin, getDob, getOldest, getDoubleRelation, getTripleRelation, personIndex) {
    var chosenDetails = prompt("What do you need to know?\n\n1. Identifying information\n2. Liabilities\n3.Potential seekers of revenge\n4. Immediate threat");
    switch (chosenDetails) {
        case "1":
            viewInfo(id, getKeyString, getPersonName, checkIfNull, getIndexFromId, getParents, responder);
            break;
        case "2":
            viewFamily(id, responder, getFamily, getPersonName, getIndexFromId, getChildren, getSpouse, getParents, getSiblings);
            break;
        case "3":
            viewDescendants(id, responder, getPersonName, getDescendants);
            break;
        case "4":
            viewNextofKin(id, responder, getPersonName, getNextOfKin, getDob, getOldest, getChildren, getSpouse, getParents, getSiblings, getDoubleRelation, getTripleRelation, personIndex);
            break;
        default:
            alert("Invalid selection, choose again");
            nameSearchDetails(id, getKeyString, checkIfNull, getIndexFromId, getParents, getChildren, getSpouse, getSiblings, responder, getPersonName, getNextOfKin, getDob, getOldest, getDoubleRelation, getTripleRelation, personIndex);
    }
}

function viewInfo(id, getKeyString, getPersonName, checkIfNull, getIndexFromId, getParents, responder) {
    var info = getInfo(id, getKeyString, getPersonName, checkIfNull, getIndexFromId, getParents);
    responder("Target Info:", info);
}

function viewDescendants(id, responder, getPersonName, getDescendants) {
    var descendants = [];
    var children = getDescendants(id, getPersonName, descendants);
    responder("Target's descendants:", children);
}

function viewFamily(id, responder, getFamily, getPersonName, getIndexFromId, getChildren, getSpouse, getParents, getSiblings) {
    var family = getFamily(id, getPersonName, getIndexFromId, getChildren, getSpouse, getParents, getSiblings);
    responder("Target's Family:", family);

}

function viewNextofKin(id, responder, getPersonName, getNextOfKin, findDOB, findOldest, findChildren, findSpouse, findParents, findSiblings, findDoubleRelation, findTripleRelation, personIndex) {
    var nextOfKin = [];
    var nextOfKinId = getNextOfKin(id, getDob, getOldest, getChildren, getSpouse, getParents, getSiblings, getDoubleRelation, getTripleRelation, getIndexFromId);
    if (nextOfKinId != null) {
        nextOfKin.push(getPersonName(nextOfKinId));
    } else {
        nextOfKin.push("No Next of Kin");
    }
    responder("Next of Kin:", nextOfKin);
}

function parameterSearch(estimateAge, getIndexFromId, parseCommands, performCommands, getPersonsAge, setAgeRange, hasSameHeight, convertHeight, hasSameWeight, hasSameJob, hasSameEyecolor, getPersonName, responder, initSearch) {
    var entry = prompt("Please type your search terms, separated by commas:\nYou may search by...\nAge\nAge Range\nHeight\nWeight\nOccupation\nEye color\n\nFollow this example:\nage:50, height:5'7\", weight:110lbs, occupation:assistant, eyecolor:blue");
    var specSearch = parseCommands(entry);
    var result = performCommands(specSearch, estimateAge, getIndexFromId, getPersonsAge, setAgeRange, hasSameHeight, convertHeight, hasSameWeight, hasSameJob, hasSameEyecolor);
    result = result.map(result => getIndexFromId(result.id));
    result = result.map(result => getPersonName(result));
    responder("Results", result);
    initSearch();
}

function parseCommands(entry) {
    var commands = entry.split(", ");
    var search = [];
    console.log(commands);
    for (var command in commands) {
        if (commands[command] != "") {
            search.push(commands[command].split(":"));
        }
    }
    return search;
}

function performCommands(search, guessAge, findindex, findPersonAge, makeAgeRange, checkHeight, parseHeight, checkWeight, checkOccupation, checkEyeColor) {
    var results = dataObject;
    for (var criteria in search) {
        switch (search[criteria][0].toLowerCase()) {
            case "age":
                results = results.filter(result => guessAge(result, search[criteria][1], findindex, findPersonAge));
                break;
            case "age-range":
                var agerange = search[criteria][1].split("-");
                console.log(agerange);
                results = results.filter(result => makeAgeRange(result, agerange[0], agerange[1], findindex, findPersonAge));
                break;
            case "height":
                console.log("wake up Neo");
                height = parseHeight(search[criteria][1]);
                results = results.filter(result => checkHeight(result, height));
                break;
            case "weight":
                console.log(search[criteria][1].split("lbs")[0]);
                results = results.filter(result => checkWeight(result, search[criteria][1].split("lbs")[0]));
                break;
            case "occupation":
                results = results.filter(result => checkOccupation(result, search[criteria][1]));
                break;
            case "eyecolor":
                results = results.filter(result => checkEyeColor(result, search[criteria][1]));
                break;
            default:
                alert();
                break;
        }
    }
    return results;
}

function estimateAge(element, age, findindex, findPersonAge) {
    var id = findindex(element.id);
    var personage = findPersonAge(id);
    console.log(personage);
    return (personage == age);
}

function setAgeRange(element, minage, maxage, findindex, findPersonAge) {
    var id = findindex(element.id);
    var personage = findPersonAge(id);
    console.log(personage);
    console.log(personage >= minage);
    return (personage >= minage && personage <= maxage);
}

function getPersonsAge(id) {
    var dob = dataObject[id].dob.split("/");
    var birthdate = new Date(dob[2], dob[0], dob[1]);
    var date = new Date();
    var diff = date - birthdate;
    var personage = Math.floor(diff / 31557600000);
    return personage;
}

function convertHeight(height) {
    var feetandinches = height.split("'");
    var feet = feetandinches[0];
    var inches = feetandinches[1].split("\"")[0];
    console.log("feet" + feet + "inches" + inches);
    return (+(feet * 12) + +inches);
}

function hasSameHeight(element, height) {
    return (element.height == height);
}

function hasSameWeight(element, weight) {
    return (element.weight == weight);
}

function hasSameEyecolor(element, eyecolor) {
    return (element.eyeColor == eyecolor);
}

function hasSameJob(element, occupation) {
    return (element.occupation == occupation);
}

function responder(title, info) {
    alert(title + "\n\n" + info.join("\n"));
}

function splitName(yourName) {
    if (yourName != null) {
        var name = yourName.split(" ");
        return name;
    }
}

function getPersonID(firstname, lastname) {
    for (var person in dataObject) {
        if (dataObject[person].firstName.toLowerCase() == firstname.toLowerCase() && dataObject[person].lastName.toLowerCase() == lastname.toLowerCase()) {
            return person;
        }
    }
}

function getPersonName(id) {
    if (id != null) {
        return dataObject[id].firstName + " " + dataObject[id].lastName;
    }
    return null;
}

function getInfo(id, keyName, personName, checkNull, personIndex, findParents) {
    var personInfo = [];
    var data;
    for (var key in dataObject[id]) {
        if (key == "parents") {
            var parents = findParents(id);
            data = "";
            for (var parent in parents) {
                if (parent == 0 && parents.length == 2) {
                    data += personName(parents[parent]) + ", ";
                } else {
                    data += personName(parents[parent]);
                }
            }
        } else if (key == "currentSpouse") {
            data = personName(personIndex(dataObject[id][key]));
        } else {
            data = dataObject[id][key];
        }
        data = checkNull(data);
        personInfo.push(keyName(key) + ": " + data);
    }
    return personInfo;
}

function checkIfNull(data) {
    if (data != null) {
        return data;
    }
    return "None";
}

function getKeyString(key) {
    switch (key) {
        case "id":
            return "SSN";
        case "firstName":
            return "First Name";
        case "lastName":
            return "Last Name";
        case "gender":
            return "Gender";
        case "dob":
            return "Date of Birth";
        case "height":
            return "Height";
        case "weight":
            return "Weight";
        case "eyeColor":
            return "Eye Color";
        case "occupation":
            return "Occupation";
        case "parents":
            return "Parents";
        case "currentSpouse":
            return "Current Spouse";
        default:
            return "";
    }
}

function getIndexFromId(id) {
    for (var person in dataObject) {
        if (dataObject[person].id == id) {
            return person;
        }
    }
    return null;
}

function getDescendants(index, personName, totalDescendants) {
    for (var person in dataObject) {
        for (var parent in dataObject[person].parents) {
            if (dataObject[index].id == dataObject[person].parents[parent]) {
                totalDescendants.push(personName(person));
                getDescendants(person, personName, totalDescendants);
            }
        }
    }
    if (totalDescendants.length == 0) {
        totalDescendants.push("None");
    }
    return totalDescendants;
}

function getFamily(id, personName, personIndex, findChildren, findSpouse, findParents, findSiblings) {
    var family = [];
    var children = findChildren(id);
    var spouse = findSpouse(id, personIndex);
    var parents = findParents(id);
    var siblings = findSiblings(id, findParents);
    if (children != null) {
        for (var child in children) {
            family.push(children[child]);
        }
    }
    if (spouse != null) {
        family.push(spouse);
    }
    if (parents != null) {
        for (var parent in parents) {
            family.push(parents[parent]);
        }
    }
    if (siblings != null) {
        for (var sibling in siblings) {
            family.push(siblings[sibling]);
        }
    }
    return family.map(personName);
}

function getChildren(id) {
    var children = [];
    for (var person in dataObject) {
        for (var parent in dataObject[person].parents) {
            if (dataObject[id].id == dataObject[person].parents[parent]) {
                children.push(person);
            }
        }
    }
    return children;
}

function getSpouse(id, personIndex) {
    return personIndex(dataObject[id].currentSpouse);
}

function getParents(id) {
    var parents = [];
    for (var parent in dataObject[id].parents) {
        for (var person in dataObject) {
            if (dataObject[person].id == dataObject[id].parents[parent]) {
                parents.push(person);
            }
        }
    }
    return parents;
}

function getSiblings(id, findParents, findChildren) {
    var results = [];
    var parents = findParents(id);
    if (parents != null) {
        for (var person in dataObject) {
            for (var parent in parents) {
                if (dataObject[id].id == dataObject[person].parents[parent]) {
                    if (dataObject[person].id != id) {
                        results.push(person);
                    }
                }
            }
        }
        return results;
    }
    return null;
}

function getSiblingChildren(id, findSiblings, findChildren, findParents) {
    var results = [];
    var siblings = findSiblings(id, findParents, findChildren);
    var siblingsChildren;
    if (siblings != null) {
        for (var person in siblings) {
            siblingsChildren = findSecondRelation(firstRelation[person]);
            if (secondRelation != null) {
                for (var siblingsChild in siblingsChildren) {
                    results.push(siblingsChildren[siblingsChild]);
                }
            }
        }
        return results;
    }
    return null;
}

function getDoubleRelation(id, findFirstRelation, findSecondRelation) {
    var results = [];
    var firstRelation = findFirstRelation(id);
    var secondRelation;
    if (firstRelation != null) {
        for (var person in firstRelation) {
            secondRelation = findSecondRelation(firstRelation[person]);
            if (secondRelation != null) {
                for (var secondPerson in secondRelation) {
                    results.push(secondRelation[secondPerson]);
                }
            }
        }
        return results;
    }
    return null;
}

function getTripleRelation(id, findFirstRelation, findSecondRelation, findThirdRelation) {
    var results = [];
    var firstRelation = findFirstRelation(id);
    var secondRelation;
    var thirdRelation;
    if (firstRelation != null) {
        for (var person in firstRelation) {
            secondRelation = findSecondRelation(firstRelation[person]);
            if (secondRelation != null) {
                for (var secondPerson in secondRelation) {
                    thirdRelation = findThirdRelation(secondRelation[secondPerson]);
                    if (thirdRelation != null) {
                        for (var thirdPerson in thirdRelation) {
                            results.push(thirdRelation[thirdPerson]);
                        }
                    }
                }
            }
        }
        return results;
    }
    return null;
}

function getNextOfKin(id, findDOB, findOldest, findChildren, findSpouse, findParents, findSiblings, findDoubleRelation, findTripleRelation, personIndex) {
    var oldest;
    var nextOfKin = findSpouse(id, personIndex);
    if (nextOfKin != null) {
        return nextOfKin;
    }

    nextOfKin = findChildren(id);
    if (nextOfKin != null && nextOfKin.length != 0) {
        oldest = findOldest(nextOfKin, findDOB);
        if (oldest != undefined) {
            return oldest;
        }
    }

    nextOfKin = findParents(id);
    if (nextOfKin != null && nextOfKin.length != 0) {
        oldest = findOldest(nextOfKin, findDOB);
        if (oldest != undefined) {
            return oldest;
        }
    }

    nextOfKin = findSiblings(id, findParents, findChildren);
    if (nextOfKin != null && nextOfKin.length != 0) {
        oldest = findOldest(nextOfKin, findDOB);
        if (oldest != undefined) {
            return oldest;
        }
    }

    nextOfKin = findDoubleRelation(id, findChildren, findChildren);
    if (nextOfKin != null && nextOfKin.length != 0) {
        oldest = findOldest(nextOfKin, findDOB);
        if (oldest != undefined) {
            return oldest;
        }
    }

    nextOfKin = findDoubleRelation(id, findParents, findParents);
    if (nextOfKin != null && nextOfKin.length != 0) {
        oldest = findOldest(nextOfKin, findDOB);
        if (oldest != undefined) {
            return oldest;
        }
    }

    nextOfKin = getSiblingChildren(id, findSiblings, findChildren, findParents);
    if (nextOfKin != null && nextOfKin.length != 0) {
        oldest = findOldest(nextOfKin, findDOB);
        if (oldest != undefined) {
            return oldest;
        }
    }

    nextOfKin = findDoubleRelation(id, findParents, findSiblings);
    if (nextOfKin != null && nextOfKin.length != 0) {
        oldest = findOldest(nextOfKin, findDOB);
        if (oldest != undefined) {
            return oldest;
        }
    }

    nextOfKin = findTripleRelation(id, findChildren, findChildren, findChildren);
    if (nextOfKin != null && nextOfKin.length != 0) {
        oldest = findOldest(nextOfKin, findDOB);
        if (oldest != undefined) {
            return oldest;
        }
    }

    nextOfKin = findTripleRelation(id, findParents, findParents, findParents);
    if (nextOfKin != null && nextOfKin.length != 0) {
        oldest = findOldest(nextOfKin, findDOB);
        if (oldest != undefined) {
            return oldest;
        }
    }

    return null;
}

function getOldest(people, findDOB) {
    if (people != null || people.length !== 0) {
        if (people.length == 1) {
            return people;
        } else {
            var earliestDOB;
            for (var person in people) {
                if (person == 0) {
                    earliestDOB = findDOB(people[person]);
                } else {
                    dob = findDOB(people[person]);
                    if (dob < earliestDOB) {
                        earliestDOB = dob;
                    }
                }
            }
            for (person in people) {
                dob = findDOB(people[person]);
                if (earliestDOB.getFullYear == dob.getFullYear && earliestDOB.getMonth == dob.getMonth && earliestDOB.getDate == dob.getDate) {
                    return people[person];
                }
            }
        }
    }
}

function getDob(id) {
    dob = dataObject[id].dob.split("/");
    birthdate = new Date(dob[2], dob[0], dob[1]);
    return birthdate;
}

searchSelector();
