import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GlowingButton from '../../components/buttons/glowing/GlowingButton';

export default {
  title: 'Example/Buttons/Glowing',
  component: GlowingButton,
  argTypes: {
    text: {
      name: 'text',
      type: { name: 'string', required: true },
      defaultValue: 'Glowing Button',
      description: 'Set text of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Swipe Button' },
      },
      control: {
        type: 'text'
      }
    },
    handleClick: {
      name: 'handleClick',
      type: { name: 'function' },
      defaultValue: () => console.log('clicked!'),
      description: 'Set on click action of the button',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: () => console.log('clicked!') },
      },
      control: {
        type: 'function'
      }
    },
    bgColor: {
      name: 'bgColor',
      type: { name: 'string' },
      defaultValue: '#444',
      description: 'Set background color of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#444' },
      },
      control: {
        type: 'color'
      }
    },
    changedBgColor: {
      name: 'changedBgColor',
      type: { name: 'string' },
      defaultValue: '#ff1867',
      description: 'Set changed background color of the button during hover',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#ff1867' },
      },
      control: {
        type: 'color'
      }
    },
    color: {
      name: 'color',
      type: { name: 'string' },
      defaultValue: '#fff',
      description: 'Set text color of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#fff' },
      },
      control: {
        type: 'color'
      }
    },
    fontFamily: {
      name: 'fontFamily',
      type: { name: 'string' },
      defaultValue: 'Poppins',
      description: 'Set font family of the text button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Poppins' },
      },
      control: {
        type: 'text'
      }
    },
    fontSize: {
      name: 'fontSize',
      type: { name: 'string' },
      defaultValue: '1.5rem',
      description: 'Set font size of the text button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1.5rem' },
      },
      control: {
        type: 'text'
      }
    },
    letterSpacing: {
      name: 'letterSpacing',
      type: { name: 'string' },
      defaultValue: '0.15rem',
      description: 'Set letter spacing of the text button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0.15rem' },
      },
      control: {
        type: 'text'
      }
    },
  },
} as ComponentMeta<typeof GlowingButton>;

export const Glowing: ComponentStory<typeof GlowingButton> = (args) => <GlowingButton {...args}>{Glowing.bind({})}</GlowingButton>;

