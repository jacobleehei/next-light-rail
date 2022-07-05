import React from 'react';
import DataTable from '../dataDisplay/Table.jsx';

export default function NextTrainTable({
   rows,
}) {
   return rows.length !== 0 && <DataTable
      rows={rows.map((s, idx) => {
         return {
            ...s,
            id: idx,
         }
      })}
      columns={[
         {
            field: 'code',
            headerName: 'Code',
            width: 90,
         },
         {
            field: 'titleZh',
            headerName: 'titleZh',
            width: 90,
         },
         {
            field: 'titleEn',
            headerName: 'titleEn',
            width: 90,
         },
      ]}
   />
}