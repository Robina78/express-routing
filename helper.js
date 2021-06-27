function createFrequencyCounter(arr) {
    return arr.reduce((acc, next) => {
        acc[next] = (acc[next] || 0) + 1;
        return acc
    }, {})
}


function findMode(arr) {
    let freqCounter = createFrequencyCounter(arr);

    let count = 0;
    let mostFrequent;

    for(let key in freqCounter) {
        if (freqCounter[key] > count) {
            mostFrequent = key;
            count = freqCounter[key];
        };
    };

    return +mostFrequent;
};


/****
 *  Attempt to convert an array of strings to an array of numbers
 */

function convertAndValidateNumsArray(numsAsStrings) {
    let results = [];

    for (let i = 0; i < numsAsStrings.length; i++) {
        let valToNumber = Number(numsAsStrings[i]);

        if (Number.isNaN(valToNumber)) {
            return new Error (
                `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
            );
        }
        results.push(valToNumber);
    }
    return results;
}

// find avg of array
function findMean(nums) {
    if (nums.length === 0) return 0;
    return nums.reduce(function (num, next) {
        return num + next;
    }) / nums.length;    
}


// find the middle element

function findMedian(nums) {

    nums.sort((a,b) => a - b);

    let middleIdx = Math.floor(nums.length / 2);
    let median;

    if(nums.length % 2 === 0) {
        median = (nums[middleIdx] + nums[middleIdx -1]) / 2;
    } else {
        median = nums[middleIdx];
    };
    return median;
};


module.exports = {
    createFrequencyCounter,
    findMean,
    findMedian,
    findMode,
    convertAndValidateNumsArray
}