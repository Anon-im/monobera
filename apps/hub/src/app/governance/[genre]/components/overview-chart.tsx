import React, { useMemo } from "react";
import { Vote, formatter } from "@bera/berajs";
import { BeraChart } from "@bera/ui/bera-chart";
import { Card } from "@bera/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@bera/ui/tabs";
import { formatEther } from "viem";

import { VoteColorMap, VoteEnum } from "../../types";

const Options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Bera Chart",
    },
    tooltip: {
      displayColors: false,
      position: "nearest",
      interaction: {
        intersect: false,
      },
      backgroundColor: "#FAFAF9",
      borderColor: "#E7E5E4",
      borderRadius: 18,
      borderWidth: 1,
      padding: {
        top: 8,
        right: 8,
        bottom: 0,
        left: 8,
      },
      caretSize: 0,
      titleFontSize: 12,
      titleColor: "#292524",
      bodyColor: "#292524",
      callbacks: {
        label: (context: {
          dataset: { label: string };
          parsed: { y: number | bigint | null };
        }) => context.dataset.label || "",
      },
    },
  },
};

const getChartData = (data: Vote[]) => {
  return {
    labels: data.map(
      (da, _) =>
        `${formatter.format(Number(formatEther(BigInt(da.weight))))} BGT `,
    ),
    datasets: [
      {
        data: data.map((d) => Number(formatEther(BigInt(d.weight)))),
        labelColor: false,
        backgroundColor: data.map(
          (d) =>
            VoteColorMap[
              VoteEnum[
                d.support as keyof typeof VoteEnum
              ] as keyof typeof VoteColorMap
            ],
        ),
        borderColor: data.map(
          (d) =>
            VoteColorMap[
              VoteEnum[
                d.support as keyof typeof VoteEnum
              ] as keyof typeof VoteColorMap
            ],
        ),
        tension: 0.4,
        borderRadius: 8,
        borderSkipped: false,
        maxBarThickness: 20,
        minBarLength: 2,
      },
    ],
  };
};

const voteTypes: Array<any> = ["all", "yes", "no", "abstain"];

export function OverviewChart({
  votes,
  isLoading,
}: {
  votes: Vote[];
  isLoading: boolean;
}) {
  const [voteType, setVoteType] = React.useState<any>("all");
  const chartData = useMemo(
    () =>
      getChartData(
        votes?.filter((data) =>
          voteType === "all"
            ? true
            : VoteEnum[data.support as keyof typeof VoteEnum] === voteType,
        ),
      ),
    [voteType, votes],
  );

  return (
    <Card className="relative mt-1 h-[234px] p-3">
      <Tabs defaultValue={voteType.toString()} className="absolute right-4">
        <TabsList>
          {voteTypes.map((type: any) => (
            <TabsTrigger
              value={type}
              variant="compact"
              key={type}
              className="capitalize"
              onClick={() => setVoteType(type)}
            >
              {type}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="mt-[50px] h-[152px] w-full">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <BeraChart data={chartData} options={Options as any} type="bar" />
        )}
      </div>
    </Card>
  );
}
