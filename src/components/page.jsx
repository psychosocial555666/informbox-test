import React from 'react';
import Table from './table';

const Page = (props) => {
    const { colors,
        columns,
        isResetActive,
        onResetButtonClick,
        onColorCheckboxChange } = props;
    return (
        <React.Fragment>
            <header className='main-header'>
                <h1 className="main-header__title page-title">Pantone colors</h1>
                <button onClick={onResetButtonClick} className={isResetActive ? `main-header__reset reset reset-active` : `main-header__reset reset`} disabled={isResetActive ? `` : `disabled`}>
                    <svg width="20" height="20" viewBox="0 0 64 64">
                        <path d="M43,54.92a27,27,0,0,1-15.54,4.89,27.81,27.81,0,0,1,0-55.62,27.62,27.62,0,0,1,27.3,25.16l4.87-4.94L64,28.75,51.5,41.81,38.25,28.75l4.4-4.34,6,6.06a21.43,21.43,0,0,0-21.19-20.1A21.46,21.46,0,0,0,6.18,32,21.46,21.46,0,0,0,27.43,53.63a20.88,20.88,0,0,0,12-3.78Zm8-13.11"/>
                        </svg>
                    Reset
                </button>
            </header>
            <Table colors={colors}
                columns={columns}
                onColorCheckboxChange={onColorCheckboxChange}
            />
        </React.Fragment>
    )
}

export default Page;