import React from "react";
import { Button, ButtonProps } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

// import { Meta, Story } from "@storybook/react";

// export default {
//   title: "Components/Button",
//   component: Button,
// } as Meta;

// const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   text: "Primary Button",
//   type: "primary",
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   text: "Secondary Button",
//   type: "secondary",
// };

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Primary button",
    type: "primary",
  },
};

export const Secondary: Story = {
  args: {
    text: "Secondary button",
    type: "secondary",
  },
};
