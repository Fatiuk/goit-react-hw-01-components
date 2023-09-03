import PropTypes from 'prop-types';
import { generatePastelColor } from './random-color';
import {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(stats => (
          <StatItem
            key={stats.id}
            style={{ backgroundColor: generatePastelColor() }}
          >
            <StatLabel>{stats.label}</StatLabel>
            <StatPercentage>{stats.percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
