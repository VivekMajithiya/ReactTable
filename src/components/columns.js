import { format } from 'date-fns';
import ColumnFilter from './ColumnFilter';
export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        Sortable: false,
        accessor: 'id',
        Filter: ColumnFilter,
        Cell: id => (<span className={id.value < 5 ? "Green" : "Red"}>{id.value}</span>)
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
        Filter: ColumnFilter
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        Filter: ColumnFilter,
        accessor: 'last_name'
    },
    {
        Header: 'Date of birth',
        Footer: 'Date of birth',
        Filter: ColumnFilter,
        accessor: 'date_of_birth',
        cell: ({ value }) => {return format(value, 'yyyy/MM/dd')}
    },
    {
        Header: 'Country',
        Footer: 'Country',
        Filter: ColumnFilter,
        accessor: 'country'
    },
    {
        Header: 'Phone',
        Footer: 'Phone',
        Filter: ColumnFilter,
        accessor: 'phone'
    }
]

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id'
    },
    {   
        Header: 'Name',
        Footer: 'Name',
        columns:[
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_name'
            }
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'Date of birth',
                Footer: 'Date of birth',
                accessor: 'date_of_birth'
            },
            {
                Header: 'Country',
                Footer: 'Country',
                accessor: 'country'
            },
            {
                Header: 'Phone',
                Footer: 'Phone',
                accessor: 'phone'
            }
        ]
    }
]