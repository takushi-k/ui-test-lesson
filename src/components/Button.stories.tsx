import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {       //storyファイルのmetaデータとなる
  title: "Button",
  component: Button,
  argTypes: {
    label: {
      options: ["Primaryボタン", "Normalボタン"],
      control: {type: "select"}
    }
  }
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button> //storyの型情報を定義

export const Primarydd: Story = {
  args: {
    label: "Primaryボタン2",
    primary: true,
  }
}

export const Normal: Story = {
  args: {
    label: "Normalボタン",
    primary: false,
  }
}
