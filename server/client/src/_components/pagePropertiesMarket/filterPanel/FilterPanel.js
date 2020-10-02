import React from 'react'
import { Select } from 'semantic-ui-react';
import styled from 'styled-components';
import Text from '../../_ui/Text';


const FilterPanel = () => {
    return (
        <Panel>
            <div className='title'>

            </div>
            <div className='cate-'>
                <Text value='Distance' />
                <SelectTag placeholder='Select distance' options={distanceOptions} />
            </div>
            <div className='cate-'>
                <Text value='Sort' />
                <SelectTag placeholder='Recent' options={sortOptions} />
            </div>
            <div className='cate-'>
                <Text value='Zone' />
                <SelectTag placeholder='Recent' options={zoneOptions} />
            </div>
            <div className='cate-type'>
                <input className='checkbox' type="checkbox" />
            </div>
        </Panel>
    );
};
export default FilterPanel;


const Panel = styled.form`

    background-color: white;

    .cate- {
        justify-content: space-between;
        padding: 0 0 10px 0;
    }

    .checkbox {
        transform : scale(1.5); 
    }


 
`;

const SelectTag = styled(Select)`
    &&& {
        border-radius: 0;
        min-height: auto !important;
        min-width: auto !important;
        width: 170px;

        padding: 7px 15px 7px 15px;
    }
`;






const distanceOptions = [
    { key: 'd01', value: 'd01', text: '2km' },
    { key: 'd02', value: 'd02', text: '4km' },
    { key: 'd03', value: 'd03', text: '6km' },
];



const sortOptions = [
    { key: 's01', value: 's01', text: 'Recent' },
    { key: 's02', value: 's02', text: 'Popular' },
    { key: 's03', value: 's03', text: 'Price - High to Low' },
    { key: 's04', value: 's04', text: 'Price - Low to High' },
    { key: 's05', value: 's05', text: 'Date - New to Old' },
    { key: 's06', value: 's06', text: 'Date - Old to New' },
    { key: 's07', value: 's07', text: 'Area - Large to Small' },
    { key: 's08', value: 's08', text: 'Area - Small to Large' }
];

const zoneOptions = [
    { key: 'z01', value: 'z01', text: 'Quận Hà Đông' },
    { key: 'z02', value: 'z02', text: 'Quận Thanh Xuân' },
    { key: 'z03', value: 'z03', text: 'Quần Hoàn Kiếm' },
    { key: 'z04', value: 'z04', text: 'Quận Hoàng Mai' },
    { key: 'z05', value: 'z05', text: 'Quận Hai Bà trưng' },
    { key: 'z06', value: 'z06', text: 'Quận Ba Đình' },
    { key: 'z07', value: 'z07', text: 'Quận Long Biên' },
    { key: 'z08', value: 'z08', text: 'Quận Cầu Giấy' }
];