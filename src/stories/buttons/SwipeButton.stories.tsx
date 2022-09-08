import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SwipeButton from '../../components/buttons/swipe/SwipeButton';

export default {
  title: 'Example/Buttons/Swipe',
  component: SwipeButton,
  decorators: [
    (Story) => (
      <div style={{ width: '100%', minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#28272a' }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    text: {
      name: 'text',
      type: { name: 'string', required: true },
      defaultValue: 'Swipe Button',
      description: 'Set text of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Swipe Button' },
      },
      control: {
        type: 'text'
      }
    },
    icon: {
      name: 'icon',
      type: { name: 'string' },
      defaultValue: 'fa-solid fa-arrow-right',
      description: 'Set icon of the swipe (font-awesome icon)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fa-solid fa-arrow-right' },
      },
      control: {
        type: 'text'
      }
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean' },
      defaultValue: false,
      description: 'Set disabled status of the button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean'
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
    width: {
      name: 'width',
      type: { name: 'string' },
      defaultValue: '200px',
      description: 'Set width of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '200px' },
      },
      control: {
        type: 'text'
      }
    },
    height: {
      name: 'height',
      type: { name: 'string' },
      defaultValue: '60px',
      description: 'Set height of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '60px' },
      },
      control: {
        type: 'text'
      }
    },
    bgColor: {
      name: 'bgColor',
      type: { name: 'string' },
      defaultValue: '#403B42',
      description: 'Set background color of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#403B42' },
      },
      control: {
        type: 'color'
      }
    },
    color: {
      name: 'color',
      type: { name: 'string' },
      defaultValue: '#939197',
      description: 'Set text color of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#939197' },
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
    letterSpacing: {
      name: 'letterSpacing',
      type: { name: 'string' },
      defaultValue: '2px',
      description: 'Set letter spacing of the text button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '2px' },
      },
      control: {
        type: 'text'
      }
    },
    swipeBgColor: {
      name: 'swipeBgColor',
      type: { name: 'string' },
      defaultValue: '#04fe4d',
      description: 'Set color of the swipe',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#04fe4d' },
      },
      control: {
        type: 'color'
      }
    },
    disabledSwipeBgColor: {
      name: 'disabledSwipeBgColor',
      type: { name: 'string' },
      defaultValue: '#ff5733',
      description: 'Set color of the swipe when the button is disabled',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#ff5733' },
      },
      control: {
        type: 'color'
      }
    },
    swipeIconColor: {
      name: 'swipeIconColor',
      type: { name: 'string' },
      defaultValue: '#1a191d',
      description: 'Set icon color of the swipe',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#1a191d' },
      },
      control: {
        type: 'color'
      }
    },
  },
} as ComponentMeta<typeof SwipeButton>;

export const Swipe: ComponentStory<typeof SwipeButton> = (args) => <SwipeButton {...args}>{Swipe.bind({})}</SwipeButton>;

