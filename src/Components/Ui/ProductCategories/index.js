import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const View = styled.View`
    width: 100%;
    height: 50;
    background: #ffffff;
    elevation: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const TabIcon = styled(Icon)`
    align-self: center;
`;

function ProductCategories() {
    return(
        <View>
            <TabIcon name="food" size={30}/>
            <TabIcon name="carrot" color="#f74540" size={30}/>
            <TabIcon name="food-apple" size={30}/>
            <TabIcon name="egg" size={30}/>
        </View>
    )
}

export default ProductCategories;