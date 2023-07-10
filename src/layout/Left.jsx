import React from 'react';
import Button from '../components/Button';
import UiBox from '../components/common/UiBox';
import Icon from '../assets/icons/icons';
import { Selecter } from '../components/Selecter';

function Left() {
    return (
        <div>
            {/* Primary button style UI box start */}
            <UiBox title="Primary button style">
                <Button $size="large" $hover_color="pink" onClick={() => prompt('입력받기', '')}>
                    <Icon.Heart />
                    ui components
                    <Icon.Heart />
                </Button>
                <Button $size="medium" $btn_style="primary">
                    ui components
                    <Icon.Heart />
                </Button>
                <Button $size="medium" $btn_style="primary">
                    <Icon.Heart />
                    ui components
                </Button>
                <Button $size="small" $center="center" $btn_style="primary">
                    ui
                </Button>
            </UiBox>
            {/* Primary button style UI box end */}
            {/* Secondary button style box start*/}
            <UiBox title="Secondary button style">
                <Button $size="large" $btn_style="secondary" onClick={() => alert('안녕하세요')}>
                    <Icon.Heart />
                    ui components
                    <Icon.Heart />
                </Button>
                <Button $size="medium" $btn_style="secondary">
                    ui components
                    <Icon.Heart />
                </Button>
                <Button $size="medium" $btn_style="secondary">
                    <Icon.Heart />
                    ui components
                </Button>
                <Button $size="small" $btn_style="secondary" $center="center">
                    ui
                </Button>
            </UiBox>
            {/* Secondary button style box end*/}
            {/* Icon button style box start */}
            <UiBox title="Icon button">
                <Button $btn_style="icon" onClick={() => alert('💖'.repeat(20))}>
                    <Icon.Heart />
                </Button>
                <Button $btn_style="icon" onClick={() => alert('⭐️'.repeat(20))}>
                    <Icon.Star />
                </Button>
                <Button $btn_style="icon" onClick={() => alert('💀'.repeat(20))}>
                    <Icon.Bomb />
                </Button>
            </UiBox>
            {/* Icon button style box end */}
            {/* Hidden Select style box start */}
            <UiBox title="Hidden Select">
                <Selecter />
            </UiBox>
            {/* Hidden Select style box end */}
            {/* None Hidden Select style box start */}
            <UiBox title="None Hidden Select" translate="none">
                <Selecter />
            </UiBox>
            {/* None Hidden Select style box end */}
        </div>
    );
}

export default Left;
