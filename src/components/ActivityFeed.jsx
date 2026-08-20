import React from 'react';

export default function ActivityFeed({ activities }) {
  return (
    <div className="bg-surface-container-low p-stack-md rounded-lg border border-outline-variant/5 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-h3 text-h3 text-on-surface">Activity Feed</h3>
        <button className="text-ember font-label-sm text-label-sm uppercase tracking-widest">View All</button>
      </div>
      <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-4">
            <div className="w-10 h-10 rounded-full border border-outline-variant/30 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={activity.avatar}
                alt={activity.name}
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-body-md text-body-md text-on-surface">{activity.name}</p>
                  <p className="font-caption text-caption text-tertiary">{activity.time}</p>
                </div>
                {activity.status && (
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${activity.status === 'completed' ? 'bg-success-container text-success' : 'bg-warning-container text-warning'}`}>
                    {activity.status}
                  </span>
                )}
              </div>
              <p className="font-body-md text-body-md text-on-surface mt-2">{activity.action}</p>
              {activity.progress && (
                <div className="mt-3">
                  <ProgressBar progress={activity.progress} color={activity.progressColor} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
