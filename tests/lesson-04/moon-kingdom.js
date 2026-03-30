function createCharacters() {

    const characters = [{
        name: "Jisoo",
        level: 10,
        health: 17
    },
    {
        name: "Jennie",
        level: 11,
        health: 700
    }
    ]
    //map
    const charactersPowerUp = characters.map(character =>
    ({
        name: character.name.toUpperCase(),
        level: character.level * 2,
        health: character.health * 3
    }))
    //filter
    const possibleWiners = charactersPowerUp.filter(character => character.health > 1000)
    return possibleWiners;
};
console.log(createCharacters());


function printLeaderboard() {
    const players = [
        {
            name: "Marrio",
            score: 1000,
        },
        {
            name: "Luigi",
            score: 900,
        },
        {
            name: "Peach",
            score: 850,
        },
        {
            name: "Yoshi",
            score: 800,
        },
        {
            name: "Phong",
            score: 500,
        }
    ]
    // sort giảm dần
    const sort = players.sort((a, b) => b.score - a.score);
    // map format output
    const board = sort.map((player, index) => {
        let medal = "";
        if (index === 0) medal = "🥇";
        else if (index === 1) medal = "🥈";
        else if (index === 2) medal = "🥉";
        return `${medal} ${index + 1}. ${player.name} - ${player.score}`;
    }

    )
    return board;
}

console.log(printLeaderboard());