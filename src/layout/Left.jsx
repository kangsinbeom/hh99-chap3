import React from 'react';
import Button from '../components/Button';
import UiBox from '../components/common/UiBox';
import Icon from '../assets/icons';
import { Selecter } from '../components/Selecter';

function Left() {
    return (
        <div>
            <UiBox title="button style">
                {/* <h2>button style</h2> */}
                <Button.Primary onClick={() => prompt('입력받기', '')}>
                    ui components
                    <Icon.Heart />
                </Button.Primary>
                <Button.Secondary onClick={() => alert('안녕하세요')}>
                    <Icon.Heart />
                    ui components
                </Button.Secondary>
                <Button.Icon onClick={() => alert('안녕하세요')}>
                    <Icon.Heart />
                </Button.Icon>
                <Button.Secondary onClick={() => alert('안녕하세요')}>
                    ui components
                </Button.Secondary>
            </UiBox>
            <UiBox title="button size">
                {/* <h2>button size</h2> */}
                <Button.Primary width="250px" onClick={() => alert('안녕하세요')}>
                    <Icon.Heart />
                    ui components
                    <Icon.Heart />
                </Button.Primary>
                <Button.Secondary width="100px" center="center" onClick={() => alert('안녕하세요')}>
                    {' '}
                    ui
                </Button.Secondary>
            </UiBox>
            <UiBox style={{ height: `150px` }} title="Select">
                {/* <h2>Select</h2> */}
                <Selecter />
            </UiBox>
        </div>
    );
}

export default Left;
