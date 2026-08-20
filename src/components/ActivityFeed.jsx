import React from 'react';

export default function ActivityFeed({ activities }) {
  return (
    <div className="bg-surface-container-low p-stack-md rounded-lg border border-outline-variant/5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-h3 text-h3 text-on-surface">Recent Activity</h3>
        <button className="text-ember font-label-sm text-label-sm">View All</button>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px] text-tertiary">
                {activity.icon}
              </span>
            </div>
            <div className="flex-1">
              <p className="font-body-sm text-body-sm text-on-surface">{activity.description}</p>
              <p className="font-caption text-caption text-tertiary mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
