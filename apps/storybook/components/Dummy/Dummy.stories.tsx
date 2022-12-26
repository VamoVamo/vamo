import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dummy } from './Dummy';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Dummy',
  component: Dummy,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dummy>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dummy> = (args) => <Dummy {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Dummy',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Dummy',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Dummy',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Dummy',
};
