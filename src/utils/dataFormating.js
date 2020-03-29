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
console.log(covid19Data[0]);

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

const getTotalDAndCPerCountry = data => {
	const countries = data.map(day => {
		return { country: day.countryterritoryCode };
	});

	const uniqueCountires = countries.filter((country, index, self) => {
		if (index === 0) {
			return true;
		}

		// if (index < 80) {
		// 	console.log(country.country, "country[name]");
		// 	console.log(self[index - 1].country, "self<<<<<<<<<<,");

		// 	if (country.country === self[index - 1].country) {
		// 		return false;
		// 	} else {
		// 		return true;
		// 	}
		return country.country !== self[index - 1].country ? true : false;
	});

	const deathsAndCases = data.reduce((tally, day, index) => {
		tally.forEach((countryEntry, index) => {
			if (countryEntry.country === day.countryterritoryCode) {
				if (!countryEntry.deaths) {
					countryEntry.deaths = Number(day.deaths);
				}

				if (!countryEntry.cases) {
					countryEntry.cases = Number(day.cases);
				}

				countryEntry.deaths += Number(day.deaths);
				countryEntry.cases += Number(day.cases);
			}
		});
		// console.log(tally, "Tally <<<<<<<<<<<<<<<<<<<<<<<<<<");
		return tally;
	}, uniqueCountires);

	console.log(deathsAndCases);
	return deathsAndCases;
};

// const dataTotalWW = getTotalDeathsAndCases(covid19Data);

const dataPerCountryPerMonth = getTotalDAndCPerCountry(covid19Data).sort(
	(a, b) => {
		return a.cases - b.cases;
	}
);

const top50HigestCases = dataPerCountryPerMonth.slice(-50);

console.log(top50HigestCases);

module.exports = { dataPerCountryPerMonth, top50HigestCases };
