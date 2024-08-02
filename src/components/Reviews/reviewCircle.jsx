import React, { useEffect, useRef, useState } from 'react';
import './reviewCircle.css';

function ReviewCircle({ value }) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);
  const circleRef = useRef(null);
  const radius = 55;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setAnimatedValue(0);  // Reset to 0 when becoming visible
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animationDuration = 1000; // 1 second
      const steps = 60; // 60 frames per second
      const increment = value / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        if (currentStep < steps) {
          setAnimatedValue(prev => Math.min(prev + increment, value));
          currentStep++;
        } else {
          clearInterval(timer);
        }
      }, animationDuration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  const strokeDashoffset = circumference - (animatedValue / 10) * circumference;

  return (
    <div ref={circleRef}>
      <svg className="progress-circle" width="120" height="120">
        <circle
          className="progress-circle__bg"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="7"
        />
        <circle
          className="progress-circle__progress"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 60 60)"
        />
        <text
          className="progress-circle__text"
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {Math.round(animatedValue * 10) / 10}/10
        </text>
      </svg>
    </div>
  );
}

export default ReviewCircle;