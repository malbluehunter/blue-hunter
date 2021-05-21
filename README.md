## 依存アプリケーション
- [Node v8.2以上](https://nodejs.org/ja/)
- [npm v5.2以降が必要](https://www.npmjs.com/) npmバージョン5.2以降が必要
- [Yarn](https://classic.yarnpkg.com/ja/)
- [Gatsby](https://www.gatsbyjs.com/)ReactベースのSSGフレームワーク

## フォルダ構成
基本的に修正することになるのは`/src/`ディレクト配下のファイルのみです。

- `/src/assets/images/`(mal様修正範囲)
画像は全てこちらに保存します。

- `/src/assets/scss/`(TAM側で修正)
サイト全体のベースとなるcssファイルのため、基本的に修正することはありません。

- `/src/components/`(基本的にTAM側で修正)
各ページで読みこんでいるボタンや、テキストの元となるコンポーネントが格納されているフォルダ。

- `/src/pages/`(mal様修正範囲)
固定ページ用のフォルダ。ここに置いたファイルがそのままURLに表示される。

- `/src/stories/`(TAM側で修正)
スタイガイド用のファイル。基本的に触ることはありません。

- `/src/templates/`(TAM側で修正)
ブログ記事のテンプレート用。基本的に触ることはありません。

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

## コマンド一覧
開発環境で事前に用意されているコマンド一覧です。  
利用ケースも記載していますので状況に応じて使い分けてください。

### 開発起動コマンド
標準ブラウザを立ち上げ、ファイルの変更を監視し、gulpfile.jsで設定されているタスクを実行します。開発時に利用します。   

`npm run start`

※Yarnの場合
`yarn start`

***

### ビルドコマンド
distフォルダー内のファイルをすべて削除し、開発環境タスクを実行します。開発時に利用します。  

`npm run build`

※Yarnの場合
`yarn build`

***

### リリースコマンド
distフォルダー内のファイルをすべて削除し、本番環境タスクを実行します。納品時に利用します。  

`npm run release`

※Yarnの場合
`yarn release`

***

### 削除コマンド
distフォルダー内のファイルをすべて削除します。不要なファイルが出力されてしまった場合などで利用します。  

`npm run clean`

※Yarnの場合
`yarn clean`

***

### HTMLバリデーションコマンド
HTMLの検証を行います。納品・開発時に利用します。  

`npm run htmlValidate`

※Yarnの場合
`yarn htmlValidate`

***

### TypeScriptバリデーションコマンド
TypeScriptの検証を行います。納品・開発時に利用します。
修正必要箇所が見つかった場合はTypeScript補正コマンドを実行してみてください。  
検証設定はeslintrc.jsonに記述されています。

`npm run lint`

※Yarnの場合
`yarn lint`

***

### TypeScript補正コマンド
TypeScriptの検証で見つかったエラー内容を補正します。納品・開発時に利用します。    
検証設定はeslintrc.jsonに記述されています。

`npm run lint:fix`

※Yarnの場合
`yarn lint:fix`

***

### SCSS補正コマンド
stylelint-config-standardに基いてSCSSの補正を行います。開発時に利用します。  
検証レポートはSCSSファイルをトランスパイル時に都度表示されます。検証設定はstylelintrc.jsonに記述されています。  

[stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

`npm run stylelint`

※Yarnの場合
`yarn stylelint`

## HTMLについて
HTMLのメタ言語にPugを採用し、ファイルの分割管理ができるよう設計されています。
共通パーツなどはPugのIncludesを利用して管理します。SSIで分割ファイルを任意の場所に出力することも可能です。  
SSIのファイルはssiディレクトリ配下に格納し、接頭辞に "ssi" を付与します。SSIの利用例は以下になります。

```
//- SSIバナーエリア
<!--#include virtual="/assets/ssi/ssi-bnr.html" -->
```

サイト情報やメタ情報はあらかじめテンプレートを用意しています。プロジェクトに合わせて変更してください。 

マークアップはHTML5およびW3Cの規格に準拠した形で行ってください。
HTMLバリデーションのタスクを用意していますので、納品・開発時にはHTMLバリデーションコマンドを実行して検証してください。

### ディレクトリ構成
- **\_data/site.json:** サイトの基本情報を記述します。
- **\_mixin/_all.pug:** mixinのエントリーポイントです。各mixinをまとめてインクルードする共通ファイルテンプレートです。
- **\_mixin/_picture.pug:** picture要素による画像の出し分けを行うmixinです。
- **\_partial/_site.pug:** headタグ内の記述をまとめた共通ファイルテンプレートです。
- **\_partial/_script.pug:** JavaScriptの読み込みをまとめた共通ファイルテンプレートです。
- **\_template/_layout.pug:** レイアウトを司るテンプレートです。共通ファイルテンプレートをまとめてインクルードします。

[HTML5](https://developer.mozilla.org/ja/docs/Web/Guide/HTML/HTML5)

[W3C Markup Validation Service](https://validator.w3.org/)

## CSSについて
CSSのメタ言語にSCSSを採用し、FLOCSSベースのCSS設計に対応します。プロジェクトに応じて改変してください。
ユーザーエージェントの初期化にはHTML5 Doctor Reset CSSを利用しています。Eric Mayer’s Reset CSSをHTML5に対応させたCSSリセットです。
「」や『』などの約物を半角化させる為、Yaku Han JPを読み込んでいます。また、印刷用Print CSSをデフォルトで用意しています。
CSS, SCSSバリデーションタスクを用意していますので、納品・開発時にはSCSS補正コマンドを実行して検証・補正を行ってください。

[FLOCSS](https://www.tam-tam.co.jp/tipsnote/html_css/post10205.html)

[HTML5 Doctor Reset CSS](http://html5doctor.com/html-5-reset-stylesheet/)

[Yaku Han JP](https://yakuhanjp.qranoko.jp/)

### ディレクトリ構成
- **common.scss:** SCSSのエントリーポイント
- **\_print.scss:** 印刷用CSSでcommon.scssへインポート
- **fundation:** リセットCSSやMixinファイルを格納
- **layout:** ヘッダー、フッターなどレイアウトを構成するファイルを格納
- **object/component:** 再利用可能なコンポーネントを構成するファイルを格納
- **object/project:** プロジェクト固有のパターンを構成するコンポーネントファイルを格納
- **object/utility:** 余白やインデントといった補助的なファイルを格納

***

#### Common
サイト内で使用するCSSモジュールを読み込みます。SCSSファイルのエントリーポイントになります。  
Foundationレイヤー以外のCSSモジュールはglobを用いてインポートします。

**src/assets/_scss/common.scss**

***

#### Base
サイトのベースとなるデフォルトスタイルを定義します。標準のリセットCSSにはCSS Remedyを採用しています。

**src/assets/_scss/foundation/_base.scss**

***

#### Variable
再利用を想定する値を変数に格納します。
標準でコンテンツ幅変数、フォント変数、カラー変数を用意しています。

**src/assets/_scss/foundation/_variable.scss**

***

#### Mixin
メディアクエリ、vw自動計算、フォントサイズ自動計算、フォームリセット、フォームプレイスホルダーカラー、ホバーアクションなどWebフロントエンド開発で頻出する記述をMixinや変数として設定しています。
利用方法は以下ディレクトリのファイル内コメントを参照してください。

**src/assets/_scss/foundation/_mixin.scss**

***

#### Utility
margin, paddingそれぞれ5px毎に余白を取るclassを用意しています。
ex) Class Name: u-mb10, u-mb15, u-mb20, u-pt10, u-pt20, u-pt30
詳しくは以下ディレクトリのファイル内コメントを参照してください。

**src/assets/_scss/object/utility/_margin.scss**
**src/assets/_scss/object/utility/_padding.scss**

改行位置を指定するclassを用意しています。
ex) Class Name: .u-newLine-pc, .u-newLine-sp
詳しくは以下ディレクトリのファイル内コメントを参照してください。

**src/assets/_scss/object/utility/_newLine.scss**

CSSのDisplayプロパティを制御するclassを用意しています。
ex) Class Name: .u-dsp-block, .u-dsp-none
詳しくは以下ディレクトリのファイル内コメントを参照してください。

**src/assets/_scss/object/utility/_display.scss**

文字インデントを制御するclassを用意しています。
ex) Class Name: .u-indent
詳しくは以下ディレクトリのファイル内コメントを参照してください。

**src/assets/_scss/object/utility/_indent.scss**

***

#### Print
印刷用CSSを定義します。

**src/assets/_scss/_print.scss**

## JavaScriptについて
TypeScriptを採用し、静的型付き言語としてJavaScriptを扱います。
TypeScriptのエントリーポイントはmain.tsとします。
インポート先モジュールはwebpackを用いてバンドルしindex.jsとして出力します。
型システムは厳密にし過ぎず、生産性を重視した思想でコーディングを行います。
レガシーブラウザとの互換性を保つ為、polyfillを入れる場合は必要なモジュールをpolyfill.tsでインポートしてください。
TypeScriptのバリデーションタスクを用意していますので、納品・開発時にはTypeScriptバリデーションコマンド、TypeScript補正コマンドを実行して検証・補正を行ってください。

[がんばらないTypeScript](https://employment.en-japan.com/engineerhub/entry/2019/04/16/103000)

### ディレクトリ構成
- **main.ts:** TypeScriptのエントリーポイント
- **namespace:** 名前空間で分けたTypeScriptファイルを格納
- **helper:** メディアクエリの設定などある一定の判断や計算を行うTypeScriptファイルを格納
- **api:** APIとの通信処理に用いるTypeScriptファイルを格納

#### Namespace
使用状況によって名前空間を分けてファイルを用意します。書かれた処理はHTMLに紐ずきます。
ex) sample.tsはサンプルで任意の文字列を返します。
詳しくは以下ディレクトリのファイル内コメントを参照してください。

**src/assets/ts/namespace/**

#### Helper
重複する判断や加工、計算などを使用用途に分けてファイルを用意します。
ex) mediaQuery.tsはメディアクエリの判定を行います。
詳しくは以下ディレクトリのファイル内コメントを参照してください。

**src/assets/ts/helper/**

#### Api
APIやDBと通信する際の処理を書いたファイルを用意します。
ex) placeholder.tsはサンプルでAPI通信を行います。

**src/assets/ts/api/**

## 画像について
画像ファイルは標準で解像度を70%に圧縮するよう設定されています。必要に応じてgulpfile.jsの設定を変更してください。
画像の自動圧縮は適宜 `npm run build` を実行して不要な画像ファイルがdistディレクトリに残らないよう心がけてください。

### 画像命名規則
画像ファイル、フォルダー名で使用する文字記号は「半角英数字・ハイフン・アンダースコア」のみとしてください。
全角やその他記号を利用した場合、文字化けなどのバグが発生します。

#### 共通画像の命名
サイト全体で使用するロゴ画像やアイコンなどはshareフォルダーに格納します。
以下ディレクトリを参照してください。

**src/assets/img/share/**

共通画像の命名は以下フォーマットにしたがってください。

**/share/share + "_" +（内容が推測可能な任意の文字列）+ "（複数種類あれば連番or種類を表す任意の文字列）" + ".（拡張子）"**

サンプルで `share_bg_01.jpg` が格納されていますので開発時には削除してください。

#### 画面固有画像の命名
ページ単位で使用するロゴ画像やアイコンなどはpageフォルダー以下にページ名のフォルダーを作成して画像を格納します。
sampleというページで利用する画像であればsampleフォルダーを作成します。
以下ディレクトリを参照してください。

**src/assets/img/page/**

ページ単位で使用する画像の命名は以下フォーマットにしたがってください。

**/page/ページ名フォルダー/（ページ名）+ "_" +（内容が推測可能な任意の文字列）+ "_" +（複数種類あれば連番or種類を表す任意の文字列）+ ".（拡張子）"**

#### 内容が推測可能な任意の文字列
命名の際は以下の文字列を参照してみてください。

* 見出し `heading`
* ロゴ画像 `logo`
* ナビゲーション `nav`
* 背景画像 `bg`
* 画像テキスト `txt`
* 画像タイトル `ttl`
* アイコン `icon`
* 画像全般 `img`
* 写真 `pic`
* バナー `bnr`
* ボタン `btn`

## SVGスプライトについて
アイコン類にはSVGスプライトを採用しています。Gulpを起動させた状態で利用したいSVGファイルを `/assets/svg` 配下へ格納するとSVGファイルを結合し `sprite.svg` として出力します。以下ディレクトリを参照してください。

**src/assets/svg/**
**dist/assets/svg/sprite.svg**

利用時は以下のようにしてアイコンを呼び出します。SVGファイル名はIDと紐づけられます。

```
<!-- SVGスプライト出力 -->
<svg class="icon" role="img">
  <use xlink:href="/assets/svg/sprite.svg#icon01"></use>
</svg>
<!--//End SVGスプライト出力 -->
```

[Icon System with SVG Sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/)
