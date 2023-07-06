import React from 'react';
import Button from '../components/Button';
import UiBox from '../components/common/UiBox';
function Left(props) {
    return (
        <div>
            <UiBox>
                <Button></Button>
                <Button></Button>
                <Button></Button>
            </UiBox>
            <UiBox>
                <Button></Button>
                <Button></Button>
                <Button></Button>
            </UiBox>
        </div>
    );
}

export default Left;
