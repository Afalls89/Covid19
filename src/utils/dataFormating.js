// const parser = require("simple-excel-to-json");
// const covid19Data = parser
// 	.parseXls2Json("../data/COVID-19-geographic-disbtribution-worldwide.xlsx")
// 	.flat();

// const xlsxj = require("xlsx-to-json");
// xlsxj(
// 	{
// 		input: "../data/COVID-19-geographic-disbtribution-worldwide.xlsx",
// 		output: "../data/output.json"
// 	},
// 	function(err, result) {
// 		if (err) {
// 			console.error(err);
// 		} else {
// 			console.log(result);
// 		}
// 	}
// );

const covid19Data = require("../data/output.json");

const getTotalDeathsAndCases = data => {
	const deathsAndCases = data.reduce(
		(tally, day) => {
			tally[0].deaths += Number(day.deaths);
			tally[0].cases += Number(day.cases);

			return tally;
		},
		[
			{
				name: "total for 2020",
				deaths: 0,
				cases: 0
			}
		]
	);
	return deathsAndCases;
};

const data = getTotalDeathsAndCases(covid19Data);

module.exports = { data };
