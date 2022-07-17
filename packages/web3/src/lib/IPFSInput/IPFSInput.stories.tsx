import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IPFSInput from './IPFSInput';
import { moralisContext } from '../../web3utils/decorators';
import { IPFSInputprops } from './types';

export default {
    title: '1.Web3/IpfsInput',
    component: IPFSInput,
    decorators: [moralisContext],
    parameters: {
        docs: {
            source: {
                excludeDecorators: true,
            },
        },
    },
} as ComponentMeta<typeof IPFSInput>;

const Template: ComponentStory<typeof IPFSInput> = (args) => (
    <IPFSInput {...args} />
);

export const TextOnly = Template.bind({});
TextOnly.args = {
    Theme: 'textOnly',
    onFinish: (val) => {
        console.log(val);
    },
    saveToIPFS: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    Theme: 'withIcon',
    onFinish: (val) => {
        console.log(val);
    },
};