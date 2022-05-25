import { useState } from "react";
import clsx from "clsx";

interface Categories {
	category: "Goals" | "Assists" | "Pims";
	key: "goals" | "assists" | "pims";
}

const leaderboardCategories: Categories[] = [
	{ category: "Goals", key: "goals" },
	{ category: "Assists", key: "assists" },
	{ category: "Pims", key: "pims" },
];

interface Player {
	playerNumber: number;
	playerFirstName: string;
	playerLastName: string;
	goals: number;
	assists: number;
	pims: number;
	gamesPlayed: number;
}

interface LeaderboardData {
	players: Player[];
}

const leaderboardData = {
	players: [
		{
			playerNumber: 32,
			playerFirstName: "John",
			playerLastName: "Smith",
			goals: 3,
			assists: 0,
			pims: 12,
			gamesPlayed: 5,
		},
		{
			playerNumber: 8,
			playerFirstName: "Jane",
			playerLastName: "Blimy",
			goals: 0,
			assists: 2,
			pims: 0,
			gamesPlayed: 5,
		},
		{
			playerNumber: 99,
			playerFirstName: "Gordon",
			playerLastName: "Bombay",
			goals: 0,
			assists: 0,
			pims: 2,
			gamesPlayed: 2,
		},
		{
			playerNumber: 0,
			playerFirstName: "Harry",
			playerLastName: "Tape",
			goals: 4,
			assists: 4,
			pims: 4,
			gamesPlayed: 8,
		},
	],
};

interface Leader {
	id: number;
	playerNumber: number;
	playerName: string;
	categoryCount: number;
}

const Leaderboard = (): JSX.Element => {
	const [category, setCategory] = useState("Goals");

	const renderTable = (selectedCategory: Categories["key"]) => {
		const sortedPlayerArray = leaderboardData.players.sort(
			(playerA: Player, playerB: Player) =>
				playerB[selectedCategory] - playerA[selectedCategory]
		);

		return (
			<>
				<thead>
					<tr>
						<th>Rank</th>
						<th>Player #</th>
						<th>Player Name</th>
						<th>{selectedCategory}</th>
					</tr>
				</thead>
				<tbody>
					{sortedPlayerArray.map((item, i) => (
						<tr key={i}>
							<td>{i + 1}</td>
							<td>{item.playerNumber}</td>
							<td>
								{item.playerFirstName} {item.playerLastName}
							</td>
							<td>{item[selectedCategory]}</td>
						</tr>
					))}
				</tbody>
			</>
		);
	};

	return (
		<div className="flex flex-col justify-center">
			<div className={clsx("flex justify-between border-2 border-indigo-600")}>
				{leaderboardCategories.map((item: Categories) => (
					<span
						key={item.category}
						className="font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
						onClick={() => {
							setCategory(item.key);
						}}
					>
						{item.category}
					</span>
				))}
			</div>
			<div className="flex justify-center">
				<table className="table-auto">
					{renderTable((category as Categories["key"]) ?? "goals")}
				</table>
			</div>
		</div>
	);
};

export default Leaderboard;
