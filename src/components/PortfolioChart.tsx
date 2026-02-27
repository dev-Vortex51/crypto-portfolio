import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Feb 10", value: 1200 },
  { name: "Feb 11", value: 1350 },
  { name: "Feb 12", value: 1280 },
  { name: "Feb 13", value: 1400 },
  { name: "Feb 14", value: 1394 },
  { name: "Feb 15", value: 1520 },
  { name: "Feb 16", value: 1480 },
];

export const PortfolioChart = () => {
  return (
    <div className="w-full h-80 bg-dark-800 rounded-2xl border border-dark-700 p-6 mb-8 relative shadow-base transition-shadow duration-200 hover:shadow-md">
      {/* Overlay Tooltip from Design */}
      <div className="absolute top-6 left-6 z-10 animate-in fade-in duration-300">
        <div className="text-xs text-light-400 font-medium uppercase tracking-wider">
          Total Portfolio
        </div>
        <div className="text-2xl font-bold text-light-100 mt-1">$ 1,394</div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2ecc71" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#2ecc71" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            stroke="#374151"
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />
          <YAxis hide domain={["auto", "auto"]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              borderColor: "#e5e7eb",
              color: "#111827",
            }}
            itemStyle={{ color: "#111827" }}
            labelStyle={{ color: "#4b5563" }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#2ecc71"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
