import avatarData from './images/avatars.js'

//TODO: Find all the Waldo's and put in their correct coordiantes.

const gameData =

    [
        {
            name: 'waldo',
            avatar: avatarData[0],
            easy: {
                index: 'waldo',
                xMin: 42,
                xMax: 44,
                yMin: 74,
                yMax: 79,
                found: false
            },
            medium: {
                index: 'waldo',
                xMin: 41,
                xMax: 43,
                yMin: 16,
                yMax: 21,
                found: false
            },
            hard: {
                index: 'waldo',
                xMin: 42,
                xMax: 44,
                yMin: 74,
                yMax: 79,
                found: false
            }
        },
        {
            name: 'wizard',
            avatar: avatarData[1],
            easy: {
                index: 'wizard',
                xMin: 65,
                xMax: 67.4,
                yMin: 76,
                yMax: 79,
                found: false
            },
            medium: {
                index: 'wizard',
                xMin: 68,
                xMax: 69,
                yMin: 3,
                yMax: 6,
                found: false
            },
            hard: {
                index: 'wizard',
                xMin: 65,
                xMax: 67.4,
                yMin: 76,
                yMax: 79,
                found: false
            },
        },
        {
            name: 'odlaw',
            avatar: avatarData[2],
            easy: {
                index: 'odlaw',
                xMin: 57,
                xMax: 59,
                yMin: 94,
                yMax: 97,
            },
            medium: {
                index: 'odlaw',
                xMin: 19,
                xMax: 20,
                yMin: 71,
                yMax: 75,
            },
            hard: {
                index: 'odlaw',
            }
        }
    ]

export default gameData
