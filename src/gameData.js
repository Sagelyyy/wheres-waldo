import easyLevel from "./images/easy.jpeg"


const gameData =
    [
        {
            easy:
                [
                    {
                        difficulty: 'easy',
                        image: easyLevel,
                        characters:
                            [
                                {
                                    waldo: {
                                        name: 'waldo',
                                        xMin: 42,
                                        xMax: 44,
                                        yMin: 74,
                                        yMax: 79
                                    },
                                    wizard: {
                                        name: 'wizard',
                                        xMin: 65,
                                        xMax: 67.4,
                                        yMin: 76,
                                        yMax: 79
                                    },
                                    odlaw: {
                                        name: 'odlaw',
                                        xMin: 58,
                                        xMax: 59.5,
                                        yMin: 94,
                                        yMax: 98
                                    }
                                }
                            ]
                    }
                ]
        }
    ]


export default gameData
