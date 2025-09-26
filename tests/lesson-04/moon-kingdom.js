// Bài 1: Tạo hàm createCharacters()
function createCharacters() {
    const characters = [
        { name: "mario", level: 3, health: 500 },
        { name: "luigi", level: 4, health: 1200 },
        { name: "ninji", level: 7, health: 600 }
    ];
    // Sử dụng hàm map() để tạo mảng mới.
    const charactersPowerUp = characters.map(characters =>
    ({
        name: characters['name'].toUpperCase(),
        level: characters['level'] * 2,
        health: characters['health'] * 3
    }));
    console.log(charactersPowerUp);
    console.log(`----------------------------`)
    // Sử dụng hàm filter() để lọc ra các phần tử có chỉ số health > 1000.
    const possibleWinners = characters.filter(characters => characters['health'] > 1000);
    console.log(possibleWinners);
    console.log(`----------------------------`)
}
createCharacters();

// Bài 2: Tạo hàm printLeaderboard()
function printLeaderboard() {
    const players = [
        { name: "Mario", score: 550 },
        { name: "Luigi", score: 700 },
        { name: "Peach", score: 850 },
        { name: "Yoshi", score: 900 },
        { name: "Ninji", score: 500 },
    ];
    // Sắp xếp mảng theo thứ tự score từ cao đến thấp
    players.sort(function (a, b) {
        return b.score - a.score;
    });
    //In ra bảng xếp hạng và thêm huy chương phía trước 3 vị trí đầu tiên
    players.forEach((player, index) => {
        const rank = index + 1;
        let medal = "";
        if (rank === 1) {
            medal = "🥇";
        } else if (rank === 2) {
            medal = "🥈";
        } else if (rank === 3) {
            medal = "🥉";
        } else {
            medal = "  ";
        }
        console.log(`${medal} ${rank}. ${player['name']}-${player['score']}`);
    });

}
printLeaderboard();
