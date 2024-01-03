# サッカーリーグの情報ページ

# 概要
Webページの作成に取り組んだ。無料APIを使ってフロントに情報を表示するため、PythonのフレームワークであるFlaskを使ってバックエンドの開発に取り組んだ。<br><br>テーマは、自身の趣味である海外サッカー観戦に関連して、海外のサッカーリーグの情報サイトをイメージした。<br>各チームのエンブレム等の素材は著作権等の問題を考慮し、オリジナルで作成。

# github pagesのurl
今回、開発したWebページの公開には至っていないので、コードの一部をgithub pagesを用いて、一部の静的なWebページとして表示した。以下にurlを示す。
<br><br> https://keitakobe.github.io/front_practice/
# Webページ一覧

| メインページ | チーム一覧のページ |
| ---- | ---- |
|　![スクリーンショット (64)](https://github.com/keitaKobe/front_practice/assets/155284100/f9269700-8d80-48a3-95bd-0a28f4039d93)　|　![スクリーンショット (66)](https://github.com/keitaKobe/front_practice/assets/155284100/004f69e1-38f9-404f-9b3e-2a96d356be2d)　 |
| Webページのメインページ。メニューバー、広告的なものを表示するエリア、注目の対戦カードのエリアを配置。<br>**機能**<br> ・メニューバーをクリックすると他ページへ移動。<br> ・対戦カードのクラブエンブレムをクリックするとチームを変更できる。 | リーグに所属するチームを表示するページ。20チームのエンブレムを配置。<br>**機能** <br> ・各チームのエンブレムをクリックすると、各チームの紹介ページに移動する。 |

| マップページ | 概要 |
| ---- | ---- |
| ![スクリーンショット (65)](https://github.com/keitaKobe/front_practice/assets/155284100/af7fffc1-e75f-4649-af64-10ba2dde4db6)　| リーグに所属するチームのホームタウンをマップ上に表示するページ。Google Maps PlatformのMaps JavaScript APIを使用し、マップを表示している。<br><br>**機能** <br> ・各チームのエンブレムをクリックすると、各チームの紹介ページに移動する。<br><br>今回のコードでは、セキュリティ面を考慮し、APIキーを記載していない<br><br>＊ローカル環境で表示した画面を記載している。|

| 順位表ページ | ニュースページ |
| ---- | ---- |
|　![スクリーンショット (67)](https://github.com/keitaKobe/front_practice/assets/155284100/111f7209-fb38-47e3-9da0-7c47c3074190) | football-data.orgという無料APIを使って、リーグ順位を記載した。<br><br>今回のコードでは、セキュリティ面を考慮し、APIキーを記載していない。<br><br>＊ローカル環境で表示した画面を記載している。 |

| チームページ | ニュースページ |
| ---- | ---- |
| ![スクリーンショット (69)](https://github.com/keitaKobe/front_practice/assets/155284100/b4c6d66a-b42f-47af-bf00-507647bbfb9e)　|　![スクリーンショット (68)](https://github.com/keitaKobe/front_practice/assets/155284100/2e519f83-277e-48fb-893a-dcfa11739679)　|
| 各チームの基本情報を表示するページ。　|　今後実装予定。　|

# 使用技術
| Category	 | Technology Stack |
| ---- | ---- |
| Frontend | html, css, javascript |
| Backend | Flask |
| Design | Figma, Canva|
| Editor | Vscode, PyCharm|
|etc. | Github |


# 今後の展望
・ニュースページの開発。
<br>・Webページの公開にあたっては、サーバーやセキュリティ、データベースなどまだまだ知識の習得を行う必要がある。
