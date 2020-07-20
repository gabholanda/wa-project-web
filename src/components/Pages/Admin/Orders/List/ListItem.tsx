import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import TableCellActions from 'components/Shared/Pagination/TableCellActions';
import Order from 'interfaces/models/order';

import React, { memo, useCallback, useState } from 'react';

interface IProps {
  order: Order;
}

const ListItem = memo((props: IProps) => {
  const { order } = props;

  const [error, setError] = useState(false);

  const handleDismissError = useCallback(() => setError(null), []);

  return (
    <TableRow>
      <TableCell>{order.description}</TableCell>
      <TableCell>{order.value}</TableCell>
      <TableCell>{order.quantity}</TableCell>
      <TableCellActions error={error} onDismissError={handleDismissError} />
    </TableRow>
  );
});

export default ListItem;
