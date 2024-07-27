import './reviewCircle.css'

function reviewCircle({value}) {
    const radius = 55;
    const circumference = 2 * Math.PI * radius;

    return (
        <div>
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
                strokeDashoffset={circumference - (value / 10) * circumference}
                />
                <text className="progress-circle__text" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
                {value}/10
                </text>
            </svg>
        </div>
    )
}

export default reviewCircle;