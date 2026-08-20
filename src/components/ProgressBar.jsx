import React, { useEffect, useState } from 'react';

export default function ProgressBar({ progress, color }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progressRatio = Math.min(elapsedTime / duration, 1);
      setAnimatedProgress(start + (progress - start) * progressRatio);

      if (progressRatio < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [progress]);

  return (
    <div className="w-full bg-surface-container-high rounded-full h-2.5">
      <div
        className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${color}`}
        style={{ width: `${animatedProgress}%` }}
      ></div>
    </div>
  );
}
