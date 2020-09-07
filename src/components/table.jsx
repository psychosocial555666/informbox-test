import React from 'react';
import Row from './row';

const Table = (props) => {
    const { colors, columns, onColorCheckboxChange } = props;
    return (
        <React.Fragment>
            <table className="colors-table">
                <thead>
                    <tr className="colors-table__header-row">
                        {columns.map(
                            (item) => {
                                return (
                                    <th className={`colors-table__header table-header ${item.id}`}
                                        style={item.isChecked ? { display: `inline` } : { display: `none` }}
                                        key={item.id}
                                    >
                                        <input checked={item.isChecked ? `checked` : ``} 
                                        type="checkbox" name={item.id} id={item.id} 
                                        className="table-header__checkbox" 
                                        onChange={onColorCheckboxChange}/>
                                        <label htmlFor={item.id}>{item.name}</label>
                                    </th>
                                )
                            }
                        )}
                    </tr>
                </thead>
                <tbody>
                    {colors.map(
                        (item) => {
                            return (
                                <Row
                                    rowData={item}
                                    columns={columns}
                                    key={item.id}
                                />)
                        }
                    )}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default Table;