// Given a 2 dimension array matrix of 0s and 1s, count the number of islands of 1s. 
// An island is surrounded by a group of adjacent cells that are all 1s. 
// A cell can only be adjacent to each other horizontally and vertically.

    // Different tests I designed to handle different cases
let tests = [
    // Matrix to find an island
    [
        [0,    1,    0,    1,    0],
        [0,    1,    1,    1,    1],
        [1,    1,    0,    1,    1],
        [0,    1,    1,    1,    0],
        [1,    0,    0,    1,    0] 
    ],

    // Maytrix to find no islands
    [
        [0,    0,    0,    1,    0],
        [1,    1,    1,    0,    1],
        [1,    1,    0,    1,    0],
        [1,    0,    1,    1,    0],
        [1,    1,    1,    1,    1] 
    ],

    // Matrix to island check the sides (this can cause the code to fail because it may try to read nulls)
    [
        [1,    1,    1,    1,    1],
        [1,    0,    1,    1,    1],
        [1,    1,    0,    1,    1],
        [1,    0,    1,    0,    1],
        [1,    1,    1,    1,    1] 
    ],

    // Matrix with all 0s
    [
        [0,    0,    0,    0,    0],
        [0,    0,    0,    0,    0],
        [0,    0,    0,    0,    0],
        [0,    0,    0,    0,    0],
        [0,    0,    0,    0,    0] 
    ],

    // Matrix with all 1s
    [
        [1,    1,    1,    1,    1],
        [1,    1,    1,    1,    1],
        [1,    1,    1,    1,    1],
        [1,    1,    1,    1,    1],
        [1,    1,    1,    1,    1] 
    ],

    // Matrix with nulls
    [
        [null,  1,      0,      1,      0],
        [0,     1,      null,   1,      1],
        [1,     1,      0,      1,      null],
        [0,     null,   1,      1,      0],
        [1,     0,      0,      null,   1] 
    ],

    // Matrix to find multiple islands
    [
        [0,    1,    0,    1,    0],
        [1,    1,    1,    1,    1],
        [1,    1,    0,    1,    0],
        [1,    1,    1,    1,    1],
        [1,    1,    1,    1,    1] 
    ],

    // Not passing in an array
    {
        binaryMatrix: [
            [0,    1,    0,    1,    0],
            [1,    1,    1,    1,    1],
            [1,    1,    0,    1,    0],
            [1,    1,    1,    1,    1],
        ,[1,    1,    1,    1,    1] 
        ]
    }
];

/*
Along the way I found you can get nulls by reading a 1 near the edges of the matrix, and thought to create tests to check if it could handle all
types of varying data appropriately without causing errors.

Another note I really poked myself into a rut, but I didn't think anything of it I was just nervously brushing over some errors in my code. 
I'd like this to be more personable so I'm gonna write some concise comments throughout this function that handle the different tests above
*/

/**** 
 * ONTO THE CODE * 
 *      We're going to create code that takes in an array of objects
****/


// I'm building it to handle an array of objects to make this easier to iterate through the tests, but I'm happy to build it for however the
// data comes in as, for now we're going through an array of 2 dimensional arrays to handle the tests.

// Check if binary matrix is an array
if (Array.isArray(tests)) {
    // We could just pass in the function if it's a single 2 dimensional array, but for the sake of testing we're going to loop through a list of them
    tests.forEach(arrayTest => {
        let amount = islandFind(arrayTest);
        console.log(`amount of islands: `, amount);
    });
}


// This function will take in an arry and return the numberof islands found within the matrix
function islandFind(arr) {
    let islandsFound = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            // If the current value is a 1
            if(arr[i][j] == 1) {
                // check if the array above and below exists
                if (!arr[i - 1] || !arr[i + 1]) continue;
    
                // check if the values to the left and right exist
                if (!arr[i][j - 1] || !arr[i][j + 1]) continue;
    
                // check for 4 adjacent parts of the island equal 1, if we find an island add it to the number of islands found
                if (arr[i-1][j] == 1 && arr[i+1][j] == 1 && arr[i][j-1] == 1 && arr[i][j+1] == 1) islandsFound++;
            }
        }
    }
    return islandsFound;
}


    // Iterating through the list will return: if you run code the list of outputs would match this: // 
// Matrix to find an island
// Maytrix to find no islands
// Matrix to island check the sides (this can cause the code to fail because it may try to read nulls)
// Matrix with all 0s
// Matrix with all 1s
// Matrix with nulls
// Matrix to find multiple islands
// Not passing in an array

// Step one: run the code
// Step two: check these as a reference for each of the tests