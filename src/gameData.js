import images from "./images/images"

const imgData = images.map(data => data.image)


//TODO: Find all the Waldo's and put in their correct coordiantes.

const gameData =


    [{
        index: 'easy',
        image: imgData[0],
        characters: [
            {
                name: 'waldo',
                xMin: 42,
                xMax: 44,
                yMin: 74,
                yMax: 79
            },
            {
                name: 'wizard',
                xMin: 65,
                xMax: 67.4,
                yMin: 76,
                yMax: 79
            },
            {
                name: 'odlaw',
                xMin: 58,
                xMax: 59.5,
                yMin: 94,
                yMax: 98
            }
        ]
    },
    {
        index: 'medium',
        image: imgData[1],
        characters: [
            {
                name: 'waldo',
                xMin: 42,
                xMax: 44,
                yMin: 74,
                yMax: 79
            },
            {
                name: 'wizard',
                xMin: 65,
                xMax: 67.4,
                yMin: 76,
                yMax: 79
            },
            {
                name: 'odlaw',
                xMin: 58,
                xMax: 59.5,
                yMin: 94,
                yMax: 98
            }
        ]
    },
    {
        index: 'hard',
        image: imgData[2],
        characters: [
            {
                name: 'waldo',
                xMin: 42,
                xMax: 44,
                yMin: 74,
                yMax: 79
            },
            {
                name: 'wizard',
                xMin: 65,
                xMax: 67.4,
                yMin: 76,
                yMax: 79
            },
            {
                name: 'odlaw',
                xMin: 58,
                xMax: 59.5,
                yMin: 94,
                yMax: 98
            }
        ]
    },
    {
        index: 'insane',
        image: imgData[3],
        characters: [
            {
                name: 'waldo',
                xMin: 42,
                xMax: 44,
                yMin: 74,
                yMax: 79
            },
            {
                name: 'wizard',
                xMin: 65,
                xMax: 67.4,
                yMin: 76,
                yMax: 79
            },
            {
                name: 'odlaw',
                xMin: 58,
                xMax: 59.5,
                yMin: 94,
                yMax: 98
            }
        ]
    },
]

export default gameData
