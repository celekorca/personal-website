import React from 'react';
import { TableColumn, SortConfig, TableData } from '../../types';

interface TableComponentProps<T extends TableData> {
  title?: string;
  columns: Array<TableColumn<T>>;
  data: T[];
  caption?: string;
  onSortRequest?: (key: string) => void;
  currentSortConfig?: SortConfig | null;
}

const getSortIndicator = <T extends TableData>(
  col: TableColumn<T>, 
  sortConfig?: SortConfig | null
) => {
  if (!col.sortable || !sortConfig || sortConfig.key !== col.accessor) return null;
  return sortConfig.direction === 'ascending' ? (
    <span className="ml-1">▲</span>
  ) : (
    <span className="ml-1">▼</span>
  );
};

type SortableHeaderProps<T> = {
  column: TableColumn<T>;
  onSortRequest: (key: string) => void;
  sortConfig: SortConfig | null | undefined;
};

const SortableHeader = <T extends TableData>({ 
  column, 
  onSortRequest, 
  sortConfig 
}: SortableHeaderProps<T>) => {
  if (!column.sortable) {
    return <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{column.header}</th>;
  }

  return (
    <th 
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50"
      onClick={() => onSortRequest(column.accessor as string)}
    >
      <div className="flex items-center">
        {column.header}
        {getSortIndicator(column, sortConfig)}
      </div>
    </th>
  );
};

const TableComponent = <T extends TableData>({ 
  title, 
  columns, 
  data, 
  caption, 
  onSortRequest, 
  currentSortConfig 
}: TableComponentProps<T>) => {
  return (
    <div className="overflow-x-auto my-6">
      {title && <h4 className="text-base font-semibold text-sky-700 mb-2">{title}</h4>}
      <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col) => (
              <SortableHeader
                key={String(col.accessor)}
                column={col}
                onSortRequest={onSortRequest || (() => {})}
                sortConfig={currentSortConfig}
              />
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {columns.map((col) => {
                const value = col.render 
                  ? col.render(row) 
                  : row[col.accessor as keyof T];
                
                return (
                  <td 
                    key={String(col.accessor)} 
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                  >
                    {value as React.ReactNode}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && <p className="mt-2 text-sm text-gray-500">{caption}</p>}
    </div>
  );
};

TableComponent.displayName = 'TableComponent';

export default TableComponent;
