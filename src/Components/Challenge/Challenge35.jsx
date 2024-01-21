// Implement a Dynamic Table:
// Build a dynamic table component that can render data with varying columns and rows. Allow sorting and pagination of the data.

import React, { useState, useEffect } from 'react';

const DynamicTable = ({ columns, defaultSort }) => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 5;

    const [sortColumns, setSortColumns] = useState({
        column: defaultSort.column,
        direction: defaultSort.direction
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
                const fetchedData = await response.json();
                setData(fetchedData);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchData();
    }, [])

    const sortData = ()=>{
        const sortedData = [...data];
        sortedData.sort((a, b)=>{
            const aValue = a[sortColumns.column];
            const bValue = b[sortColumns.column];
            if (aValue < bValue) return sortColumns.direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortColumns.direction === 'asc' ? 1 : -1;
            return 0;
        });
        return sortedData;
    }

    const paginated = ()=>{
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return sortData().slice(startIndex, endIndex);
    }

    const handleSort = (column)=>{
        if (sortColumns.column === column)  {
            setSortColumns({...sortColumns, direction: sortColumns.direction === 'asc' ? 'desc': 'asc'});
        } else{
            setSortColumns({
                column,
                direction: 'asc',
            })
        }
    }
    const handlePageChange = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        {columns.map((column)=>(
                            <th key={column.key} onClick={()=> handleSort(column.key)}>
                                {column.label}
                                {sortColumns.column === column.key && (
                                    <span className={`sort-icon ${sortColumns.direction}`}>
                                        &#9650; &#9660;
                                    </span>
                                )}
                            </th>
                        ))}
                    </tr>
                </thead> 
                <tbody>
                    {
                        paginated().map((row)=>(
                            <tr key={row.id}>
                                {columns.map((column)=>(
                                    <td key={column.key}>
                                        {
                                            row[column.key]
                                        }
                                    </td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div className='pagination'>
                    {
                        Array.from({length: Math.ceil(data.length / itemsPerPage)}).map((_, index)=>(
                            <button className={currentPage === index + 1 ? 'active': ''} key={index + 1} onClick={()=> handlePageChange(index + 1)}>
                                {index + 1}
                            </button>
                        ))
                    }
            </div>
        </>
    )


}

const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'username', label: 'Username' },
    { key: 'email', label: 'Email' }
];

const defaultSort = { column: 'id', direction: 'asc' }

const Challenge35 = () => {
    return (
        <section className='landing-section'>
            <div className='row container'>
                <h1 className='landing-heading'>
                    Dynamic Table
                </h1>
                <DynamicTable columns={columns} defaultSort={defaultSort} />
            </div>
        </section>
    )
}

export default Challenge35