import React from "react";
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";
import BarChart from "recharts/lib/chart/BarChart";
import Bar from "recharts/lib/cartesian/Bar";
import XAxis from "recharts/lib/cartesian/XAxis";
import Tooltip from "recharts/lib/component/Tooltip";
import { withTheme } from "@material-ui/core/styles";

function SimpleLineChart(props) {
	const { theme, data } = props;
	return (
		<ResponsiveContainer width="99%" height={225}>
			<BarChart data={data}>
				<XAxis dataKey="country" />
				<Tooltip />
				<Bar dataKey="deaths" stackId="a" fill={theme.palette.primary.main} />
				<Bar dataKey="cases" stackId="a" fill={theme.palette.secondary.light} />
			</BarChart>
		</ResponsiveContainer>
	);
}

export default withTheme(SimpleLineChart);
