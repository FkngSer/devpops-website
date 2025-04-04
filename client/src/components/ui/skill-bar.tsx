import { motion } from 'framer-motion';

interface SkillBarProps {
  label: string;
  percentage: number;
  color: "portal" | "toxic";
  isInView: boolean;
  delay?: number;
}

const SkillBar = ({ label, percentage, color, isInView, delay = 0 }: SkillBarProps) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-code text-sm">{label}</span>
        <span className={`font-code text-sm text-${color}`}>{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className={`skill-bar-fill h-full bg-${color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${percentage}%` : 0 }}
          transition={{ duration: 1, delay: delay }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
