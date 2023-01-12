import PropTypes from 'prop-types';
import { 
    StatisticsCard,
    StatTitle,
    StatList,
    StatItem,
    Label,
    Percentage
} from './Statistics.styled';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

function Statistics({ title, stats }) {
    return (
        <StatisticsCard>
            {title && <StatTitle>{title}</StatTitle>}

            <StatList>
                {stats.map(({ id, label, percentage }) => (
                    <StatItem 
                        key={id} 
                        backgroundColor={getRandomHexColor()}
                    >
                        <Label>{label}</Label>
                        <Percentage>{percentage}%</Percentage>
                    </StatItem>
                ))}
            </StatList>
        </StatisticsCard>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};

export default Statistics;