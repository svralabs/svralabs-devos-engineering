import React, { useState, useEffect } from 'react';
import StatsCard from '../components/StatsCard';
import ProgressChart from '../components/ProgressChart';
import ActivityFeed from '../components/ActivityFeed';

export default function EngineeringDashboard() {
  const [stats, setStats] = useState([]);
  const [progressData, setProgressData] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dashboard-data');
        const data = await response.json();
        setStats(data.stats);
        setProgressData(data.progressData);
        setActivities(data.activities);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex-1 p-6 md:p-margin-desktop max-w-container-max mx-auto w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mb-section-gap-sm">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
            trendValue={stat.trendValue}
            status={stat.status}
            icon={stat.icon}
            chart={stat.chart}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter mb-section-gap-sm">
        <ProgressChart data={progressData} />
        <ActivityFeed activities={activities} />
      </div>
    </div>
  );
}
