import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function DataTable({
   rows,
   columns,
}) {
   return (
      <div style={{ height: 579, width: '100%' }}>
         <DataGrid
            rows={rows}
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[10]}
         />
      </div>
   );
}