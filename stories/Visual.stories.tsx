import type { Meta, StoryObj } from '@storybook/react';

import Visual from '../app/visual/page';

const meta: Meta<typeof Visual> = {
    component: Visual,
};

export default meta;
type Story = StoryObj<typeof Visual>;

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Button',
    },
};