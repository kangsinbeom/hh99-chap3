import React from 'react';
import Button from '../components/Button';
import UiBox from '../components/common/UiBox';
function Left(props) {
    return (
        <div>
            <UiBox>
                <Button>ui components</Button>
                <Button>ui components</Button>
                <Button>ui components</Button>
            </UiBox>
            <UiBox></UiBox>
            <UiBox></UiBox>
            <UiBox></UiBox>
        </div>
    );
}

export default Left;
