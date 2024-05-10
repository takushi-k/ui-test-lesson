import { render } from "@testing-library/react"
import SnapshotComponent from "./SnapshotComponent"

it("Snapshotテスト", () => {
  const { container } = render(<SnapshotComponent text="Vue" />);

  expect(container).toMatchSnapshot(); //比較対象が存在しなければ新しくスナップショットを作成します
                                        //比較対象となるスナップショットファイルが存在すれば、そのスナップショットと今回のスナップショットを比較する


})
