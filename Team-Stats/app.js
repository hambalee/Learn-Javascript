const team = {
    _players: [
      {
        firstName: "Alice",
        lastName: "A",
        age: 30,
      },
      {
        firstName: "Bob",
        lastName: "B",
        age: 40,
      },
      {
        firstName: "Carrol",
        lastName: "C",
        age: 20,
      },
    ],
    _games: [
      {
        opponent: "a",
        teamPoints: 1,
        opponentPoints: 2,
      },
      {
        opponent: "b",
        teamPoints: 3,
        opponentPoints: 4,
      },
      {
        opponent: "c",
        teamPoints: 5,
        opponentPoints: 6,
      },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      this.players.push({
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      });
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      this.games.push({
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      });
    },
  };
  team.addPlayer("Bugs", "Bunny", 76);
  team.addGame("Titans", 100, 98);
  console.log(team);
  