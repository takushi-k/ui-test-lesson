import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import axios from "axios"
import { UserSearch } from "./UserSearch"

const user = userEvent.setup();

jest.mock("axios") //モジュール全体をモック化する

//tsにaxiosがモック化されていることを明示的に伝える必要がある
//→tsのエラーなくaxiosのモックを扱えるようになる
const mockAxios = jest.mocked(axios)


describe("USerSearch", () => {
  beforeEach(() => {
    mockAxios.get.mockReset(); //getメソッドの戻り値を変更するが、各テストの前にリセットされるようにする
  })

  it("入力フォームに入力した内容で、APIリクエストが送信される", async () => {
    const userInfo = {
      id: 1,
      name: "Taro"
    };
    const resp = { data: userInfo}
    mockAxios.get.mockResolvedValue(resp) //getメソッドから返却されるように設定する

    render(<UserSearch />)

    const input = screen.getByRole("textbox");
    await user.type(input, userInfo.name)
    const button = screen.getByRole("button");
    await user.click(button)
    expect(mockAxios.get).toHaveBeenCalledWith(`/api/users?query=${userInfo.name}`)
  })

  it("APIから取得したユーザー情報が画面に表示される", async () => {
    const userInfo = {
      id: 1,
      name: "Taro"
    };
    const resp = { data: userInfo}
    mockAxios.get.mockResolvedValue(resp) //getメソッドから返却されるように設定する

    render(<UserSearch />)

    const input = screen.getByRole("textbox");
    await user.type(input, userInfo.name)
    const button = screen.getByRole("button");
    await user.click(button)

    //非同期処理の結果を待つ必要がある
    //APIのレスポンスがDOMに表示されるまで待つことができる
    await waitFor(() => expect(screen.getByText(userInfo.name)).toBeInTheDocument())
  })
})
