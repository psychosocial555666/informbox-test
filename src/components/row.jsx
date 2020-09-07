import React from 'react';

const Row = (props) => {
    const { id, name, year, color, pantone_value } = props.rowData;

    const transformText = (str) => {
        if (!str) return str;
      
        return str[0].toUpperCase() + str.slice(1);
      }
    return (
        <React.Fragment>
            <tr>
                <td className='id' style={props.columns[0].isChecked ? {display: `inline`} : {display: `none`}}>{id}</td>
                <td className='name' style={props.columns[1].isChecked ? {display: `inline`} : {display: `none`}}>{transformText(name)}</td>
                <td className='year' style={props.columns[2].isChecked ? {display: `inline`} : {display: `none`}}>{year}</td>
                <td className='color' style={props.columns[3].isChecked ? {display: `flex`} : {display: `none`}}>
                    <div className='color__view' style={{backgroundColor: `${color}`}}></div>
                    {color}
                </td>
                <td className='pantone' style={props.columns[4].isChecked ? {display: `inline`} : {display: `none`}}>{pantone_value}</td>
            </tr>
        </React.Fragment>
    )
}

export default Row;