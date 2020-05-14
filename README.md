# Name
**ogasawara-prototype-map-vectortile-backend**

# Overview
**vectortile**(.mbtiles .pbf)を用いてLeaflet.jsのマップ上にshapeを描画するプロトタイプのバックエンド側

# Description
APIサーバの立ち上げと同時に別ポートでtileserverも立ち上がります。

# Usage
（フロントエンド側）  
[ogasawara-prototype-map-vectortile-frontend](https://github.com/dt-cd/ogasawara-prototype-map-vectortile/tree/master/map-prototype-vector-tile-frontend)をクローン。  
```npm install```でモジュールのセットアップをして```npm run serve```でプロジェクト開始。

（バックエンド側）  
```npm install```でモジュールのセットアップをして```npm start```でAPIサーバ立ち上げ。  
同時にtileserverも立ち上がる仕様です。**Docker**が使える環境が必要です。


# VS.
『プロトタイプのgeojson版』  
[ogasawara-prototype-map-geojson](https://github.com/dt-cd/ogasawara-prototype-map-geojson)

