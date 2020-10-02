import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';


const ProductPanel = () => {
    return (
        <Div>
            <div className='product-row'>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </Div>
    );
};

export default ProductPanel;


const Div = styled.div`
    height: 800px;
    margin-left: -7px;
    margin-top: -7px;


    .product-row {
        display: flex;
    }
`;