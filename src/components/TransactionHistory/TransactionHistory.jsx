import PropTypes from 'prop-types';
import { 
    TableCard,
    TableHead,
    TableBody,
    TableRow,
    TableName,
    TableInfo
} from './TransactionHistory.styled';

function TransactionHistory({ items }) {
    return (
        <TableCard>
            <TableHead>
                <TableRow>
                    <TableName>Type</TableName>
                    <TableName>Amount</TableName>
                    <TableName>Currency</TableName>
                </TableRow>
            </TableHead>

            <TableBody>
                {items.map((item) => (
                    <TableRow key={item.id}>
                        <TableInfo>{item.type}</TableInfo>
                        <TableInfo>{item.amount}</TableInfo>
                        <TableInfo>{item.currency}</TableInfo>
                    </TableRow>
                ))}
            </TableBody>
        </TableCard>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};

export default TransactionHistory;