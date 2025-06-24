export interface TableColumn<T = unknown> {
  header: string;
  accessor: keyof T | string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
}

export interface SortConfig {
  key: string;
  direction: 'ascending' | 'descending';
}

// Base type for table data that allows any string key with any value
type AnyValue = string | number | boolean | null | undefined | AnyValue[] | { [key: string]: AnyValue };
export type TableData = Record<string, AnyValue>;

// This provides better type safety than 'any' while maintaining flexibility
