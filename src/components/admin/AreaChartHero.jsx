import { AreaChart } from "@tremor/react";

const valueFormatter = function (number) {
  return new Intl.NumberFormat("us").format(number).toString();
};

export function AreaChartHero({ title, total, chartData, categories, colors }) {
  return (
    <div className="p-4">
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        {title}
      </h3>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        {valueFormatter(total)}
      </p>
      <div className="mt-4 h-72 max-w-[500px] min-w-[500px]">
        <AreaChart
          className="h-full w-full"
          data={chartData}
          showAnimation={true}
          showGridLines={false}
          index="date"
          yAxisWidth={65}
          categories={categories}
          colors={colors}
          valueFormatter={valueFormatter}
        />
      </div>
    </div>
  );
}
