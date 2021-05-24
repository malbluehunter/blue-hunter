## 依存アプリケーション
- [Node v8.2以上](https://nodejs.org/ja/)
- [npm v5.2以降が必要](https://www.npmjs.com/) npmバージョン5.2以降が必要
- [Yarn](https://classic.yarnpkg.com/ja/)
- [Gatsby](https://www.gatsbyjs.com/)ReactベースのSSGフレームワーク

## 利用方法
以下「開発環境の設定」にしたがってコマンドを実行すると静的Webサイト構築で必要な環境が整います。

### 開発環境の設定
1. Githubの`develop`ブランチからclone(https://github.com/malbluehunter/blue-hunter)

2. パッケージのインストール
パッケージマネジャーにnpmもしくはYarnを使用します。特別な理由がない場合はYarnの利用を推奨します。
テンプレートのダウンロード完了後、該当ディレクトリでターミナルを開き以下のコマンドを入力してください。
`npm install`

    ※Yarnを使う場合
    yarnをインストールします。(Homerewからインストールする場合)
    `brew install yarn`
    下記コマンドを入力してパッケージをインストールします。
    `yarn install`

[Yarn | 概要](https://classic.yarnpkg.com/ja/docs/getting-started)

3. 初期ビルド
デフォルトで用意されているHTML, CSS, JSファイルを以下コマンドで出力します。
`npm run build`

    ※Yarnの場合
    `yarn build`

3. 開発スタート
初期ビルドでHTMLファイル等のファイルがdistディレクトリ配下に出力されているのを確認できたら以下コマンドを実行し開発を進めます。
`npm run develop`

    ※Yarnの場合
    `yarn develop`

(http://localhost:8000/)でローカル環境表示されます。

## フォルダ構成
基本的に修正することになるのは`/src/`ディレクト配下のファイルのみです。

- `/src/assets/images/`(mal様修正範囲)
画像は全てこちらに保存します。

- `/src/assets/scss/`(TAM側で修正)
サイト全体のベースとなるcssファイルのため、基本的に修正することはありません。

- `/src/components/`(TAM側で修正)
各ページで読みこんでいるボタンや、テキストの元となるコンポーネントが格納されているフォルダ。

- `/src/pages/`(mal様修正範囲)
固定ページ用のフォルダ。ここに置いたファイルがそのままURLに表示される。

- `/src/stories/`(TAM側で修正)
スタイガイド用のファイル。基本的に触ることはありません。

- `/src/templates/`(TAM側で修正)
ブログ記事のテンプレート用。基本的に触ることはありません。

## 修正方法
1. ページ、ディレクトリの追加
- `/src/pages/`に追加すると反映されます。

2. TAMで作成したファイルを元に修正
- `.js`,`.scss`の両方をページ作成ごとに都度コピーして流用してください。
- ファイル内でコメントしている「mal様修正範囲」のエリア内で修正お願いします。
- 準備しているコンポーネントで不足しているものがあれば、こちらで準備するのでご連絡ください。

3. コンポーネントの追加
- 下記の通り大文字で始まるタグが一つのコンポーネントとなっています。
  例） `<TextLeading text="見出しパターン" />`
- 追加したい場所に貼り付けて、`text`と記載されている場所に任意の文言を追加してください。

4. クラスの追加
- 下記の通り`class`ではなく、`className`と記載し、クラス名の前に`styles.`をつけます。
```
<div className={styles.textLeading_wrapper}>
    <TextLeading text="見出しパターン" />
</div>
```

5. クラスの設定
- 作成した`.scss`ファイルで`textLeading_wrapper`のクラス名に対して値を設定します。書き方は通常のscssと同様です。
- PCのみの表示の場合は`@include mq(md)`の中に記述します。(`@include mq(md)`で記述した内容は768px以上のみで表示されます。)
- 単位はpx指定ではなく、SPの場合は`get_vw_sp()`、PCの場合は`get_vw()`で設定します。
- 下記の例の`get_vw(45)`は45pxをvwという値に自動で変換する関数です。
```
.textLeading_wrapper {
  margin-top: get_vw_sp(33);

  @include mq(md) {
    margin-top: get_vw(45);
  }
}
```

## ブランチ
- ブランチ
`master`：本番環境用
`develop`：テスト環境用
## Git管理手順
- 作業完了後にdevelopを「mal」ブランチにマージ
- コンフリクトが発生した場合、解消してから「mal」ブランチをdevelopにマージしpush(コンフリクトが発生した場合は必要に応じてご連絡ください)
- Netlifyと連携しているため自動でテスト環境に反映されます。(反映されるまでに数分かかります。)
- TAM側は「TAM」ブランチで作業します。
- masterでpushすると本番環境に反映されるため、こちらのブランチで作業しないようにお願いします。

