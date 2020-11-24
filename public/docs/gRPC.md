# gRPCとは？

## googleが開発したHTTP/2を利用したRPCフレームワークのこと
- REST APIのようなURLとJSONベースのやり取りではなく、メソッド呼び出しのような感覚でバックエンドを呼び出せる
- ブラウザから直接は使えないので、間にReverseProxy(envoy等)を建てる必要がある
- 基本的には プロトコル: `HTTP/2` 、データのシリアライズ: `Protocol Buffers` で組むのが一般的


### What is RPC??
  - 遠隔手続き呼び出し(Remote Procedure Call)のこと
    - 関数呼び出し(ユーザネーム取得などなんでもいい)をローカルではなく別の環境に接続して代わりに実行する手法のこと

## 関わりのあるワード
- RPC
- HTTP/2
- シリアライズ
- サービス間通信


## 参考記事
- [公式](https://grpc.io/)
- https://qiita.com/il-m-yamagishi/items/8709de06be33e7051fd2
- https://knowledge.sakura.ad.jp/24059/
- https://logmi.jp/tech/articles/320715
- https://hisa-tech.site/researching-about-grpc/

