import React from 'react';

export default function ProgressChart({ data }) {
  return (
    <div className="bg-surface-container-low p-stack-md rounded-lg border border-outline-variant/5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-h3 text-h3 text-on-surface">Deployment Progress</h3>
        <span className="font-label-sm text-label-sm text-tertiary">Last 7 days</span>
      </div>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-body-sm text-body-sm text-on-surface">{item.name}</span>
              <span className="font-body-sm text-body-sm text-tertiary">{item.value}%</span>
            </div>
            <div className="w-full bg-surface-container-high rounded-full h-2">
              <div
                className="bg-ember h-2 rounded-full"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
