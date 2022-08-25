import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SimpleButton from '../../components/buttons/simple/SimpleButton';

export default {
  title: 'Example/SimpleButton',
  component: SimpleButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SimpleButton>;

const Template: ComponentStory<typeof SimpleButton> = (args) => <SimpleButton {...args} />;

export const Primary = Template.bind({});
