import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GradientLoading from '../../components/loadings/gradient/GradientLoading';

export default {
  title: 'Example/Loadings/Glowing',
  component: GradientLoading,
  decorators: [
    (Story) => (
      <div style={{ width: '100%', minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    size: {
      name: 'size',
      type: { name: 'string' },
      defaultValue: '250px',
      description: 'Set size of the loading',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '250px' },
      },
      control: {
        type: 'text'
      }
    },
    bgColor: {
      name: 'bgColor',
      type: { name: 'string' },
      defaultValue: '#eaeef0',
      description: 'Set color of the loading',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#eaeef0' },
      },
      control: {
        type: 'color'
      }
    },
    gradientColors: {
      name: 'gradientColors',
      type: { name: 'string' },
      defaultValue: '#42abff, #ff4f8b, #ffeb3b',
      description: 'Set linear gradient colors of the loading',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#42abff, #ff4f8b, #ffeb3b' },
      },
      control: {
        type: 'color'
      }
    },
  },
} as ComponentMeta<typeof GradientLoading>;

export const Glowing: ComponentStory<typeof GradientLoading> = (args) => <GradientLoading {...args}>{Glowing.bind({})}</GradientLoading>;

