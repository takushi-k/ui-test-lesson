import Form from "./Form";
import type { Meta, StoryObj } from "@storybook/react"
import { within } from "@storybook/testing-library"
import { expect } from "@storybook/jest"
import {userEvent} from "@storybook/testing-library"

const meta = {
  title: "Form",
  component: Form
} as Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {

}

export const Testing: Story = {
  play: async ({ canvasElement }) => {   //react-testing-libraryとほとんど同じ書き方で、ユーザ操作のシミュレートやテストを書くことができる
    const canvas = within(canvasElement); //screenオブジェクトに似た感じになる
    const input = canvas.getByRole("textbox");
    await expect(input).toHaveTextContent("")

    await userEvent.type(input, "play function"); //setup関数は必要ない
    await expect(canvas.getByDisplayValue("play function")).toBeInTheDocument();
  }
}
