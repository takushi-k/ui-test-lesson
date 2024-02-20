import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

const user = userEvent.setup();     //インスタンス作成

describe("Form", () => {
  it("初期状態ではテキストは空欄", () => {
    render(<Form />)

    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();  //要素がレンダリングされていることの確認
    expect(input).toHaveTextContent("");
  });

  it("入力したテキストがサブミットされる", async () => {
    const alertSpy = jest.spyOn(window, "alert").mockReturnValue(); // 何も返さない形にしておく

    render(<Form />)
    const input = screen.getByPlaceholderText("Enter text");

    await user.type(input, "Test Text");      // typeメソッドは、非同期処理になる
    expect(screen.getByDisplayValue("Test Text")).toBeInTheDocument();
                   // 引数の文字列が入力されている入力フォームを取得するためのメソッド
    const button = screen.getByRole("button");
    await user.click(button); //非同期メソッド
    // alertが実行されたことを確認
    expect(alertSpy).toHaveBeenCalledWith("submitted: Test Text");
    alertSpy.mockRestore(); //spyをクリア

  });
})
