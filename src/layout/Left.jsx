import React from 'react';
import Button from '../components/Button';
import UiBox from '../components/common/UiBox';
import Icon from '../assets/icons';
import { Selecter } from '../components/Selecter';

function Left() {
    return (
        <div>
            <UiBox title="Primary button style">
                {/* <h2>button style</h2> */}
                <Button.Primary width="250px" onClick={() => prompt('입력받기', '')}>
                    <Icon.Heart />
                    ui components
                    <Icon.Heart />
                </Button.Primary>
                <Button.Primary>
                    ui components
                    <Icon.Heart />
                </Button.Primary>
                <Button.Primary>
                    <Icon.Heart />
                    ui components
                </Button.Primary>
                <Button.Primary width="100px" $center="center">
                    ui
                </Button.Primary>
            </UiBox>
            <UiBox title="Secondary button style">
                {/* <h2>button style</h2> */}
                <Button.Secondary width="250px" onClick={() => prompt('입력받기', '')}>
                    <Icon.Heart />
                    ui components
                    <Icon.Heart />
                </Button.Secondary>
                <Button.Secondary>
                    ui components
                    <Icon.Heart />
                </Button.Secondary>
                <Button.Secondary>
                    <Icon.Heart />
                    ui components
                </Button.Secondary>
                <Button.Secondary width="100px" $center="center">
                    ui
                </Button.Secondary>
            </UiBox>
            <UiBox title="Icon button">
                <Button.Icon onClick={() => alert('안녕하세요')}>
                    <Icon.Heart />
                </Button.Icon>
                <Button.Icon onClick={() => alert('안녕하세요')}>
                    <Icon.Star />
                </Button.Icon>
                <Button.Icon onClick={() => alert('안녕하세요')}>
                    <Icon.Heart />
                </Button.Icon>
            </UiBox>
            <UiBox title="HiddenSelect">
                {/* <h2>Select</h2> */}
                <Selecter />
            </UiBox>
            <UiBox title="NoneHiddenSelect" translate="none">
                {/* <h2>Select</h2> */}
                <Selecter />
            </UiBox>
        </div>
    );
}

export default Left;
