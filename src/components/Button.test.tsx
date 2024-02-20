import { render, screen } from "@testing-library/react"
import Button from "./Button"

describe("Button", () => {
  it("buttonタグがレンダリングされる", () => {
    render(<Button label="ボタン" onClick={() => alert('click')} />);

    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();  //このマッチャー関数は、jestのデフォルトのものではなく、"@testing-library/jest-dom"によって拡張されたもの
    expect(element).toHaveTextContent("ボタン");  //このマッチャー関数は、引数指定の文字列がDOMの中に存在するかを検証
  })


})
