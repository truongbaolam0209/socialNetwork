import React, { Fragment } from 'react';
import styled from 'styled-components';
import FilterPanel from '../_components/pagePropertiesMarket/filterPanel/FilterPanel';
import ProductPanel from '../_components/pagePropertiesMarket/productPanel/ProductPanel';
import Navbar from '../_components/Navbar';

const PagePropertiesMarket = () => {
    return (
  
   
            <PageContainer>
                <div>
                    <Column width='18%'>
                        <FilterPanel />
                    </Column>
                    <Column width='82%'>
                        <ProductPanel />
                    </Column>
                </div>
            </PageContainer>
        

    );
};
export default PagePropertiesMarket;

const PageContainer = styled.div`
    width: 100%;
    margin-top: 68px;
    & > div {
        margin: auto;
        width: 1050px;
        display: flex;
        background-color: var(--grey-0);
    };
`;

const Column = styled.div`
    width: ${props => props.width};
    margin: 10px;
`;

