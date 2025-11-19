export function VectorsDiagram() {
  const vectors = ["Быт", "Сексуальность", "Личные интересы", "Коммуникация", "Финансы", "Психика"];
  
  return (
    <div className="relative w-full max-w-[500px] aspect-square">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Основной шестиугольник */}
        {vectors.map((vector, index) => {
          const angle = (index * 60 - 90) * (Math.PI / 180);
          const nextAngle = ((index + 1) * 60 - 90) * (Math.PI / 180);
          const cx = 200;
          const cy = 200;
          const radius = 140;
          
          const x1 = cx + radius * Math.cos(angle);
          const y1 = cy + radius * Math.sin(angle);
          const x2 = cx + radius * Math.cos(nextAngle);
          const y2 = cy + radius * Math.sin(nextAngle);
          
          // Текст на внешней стороне
          const textRadius = 170;
          const textAngle = (index * 60 - 90 + 30) * (Math.PI / 180);
          const textX = cx + textRadius * Math.cos(textAngle);
          const textY = cy + textRadius * Math.sin(textAngle);
          
          return (
            <g key={index}>
              {/* Линия сегмента */}
              <line
                x1={cx}
                y1={cy}
                x2={x1}
                y2={y1}
                stroke="#3A3B44"
                strokeWidth="1"
              />
              
              {/* Внешняя грань с градиентом */}
              <defs>
                <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F5C2BA" />
                  <stop offset="50%" stopColor="#DF9AA6" />
                  <stop offset="100%" stopColor="#C78FB2" />
                </linearGradient>
              </defs>
              
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={`url(#gradient-${index})`}
                strokeWidth="2"
              />
              
              {/* Заливка сегмента */}
              <path
                d={`M ${cx} ${cy} L ${x1} ${y1} L ${x2} ${y2} Z`}
                fill="#3A3B44"
                fillOpacity="0.15"
              />
              
              {/* Текст */}
              <text
                x={textX}
                y={textY}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-[#9CA3AF]"
                style={{ fontSize: '13px', fontWeight: 500 }}
              >
                {vector}
              </text>
            </g>
          );
        })}
        
        {/* Центральный круг */}
        <circle
          cx="200"
          cy="200"
          r="50"
          fill="#181820"
          stroke="url(#gradient-center)"
          strokeWidth="2"
        />
        
        <defs>
          <linearGradient id="gradient-center" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5C2BA" />
            <stop offset="50%" stopColor="#DF9AA6" />
            <stop offset="100%" stopColor="#C78FB2" />
          </linearGradient>
        </defs>
        
        {/* Центральный текст */}
        <text
          x="200"
          y="195"
          textAnchor="middle"
          className="fill-[#F9FAFB] font-semibold"
          style={{ fontSize: '18px' }}
        >
          6 векторов
        </text>
        <text
          x="200"
          y="212"
          textAnchor="middle"
          className="fill-[#9CA3AF]"
          style={{ fontSize: '13px' }}
        >
          отношений
        </text>
      </svg>
    </div>
  );
}
