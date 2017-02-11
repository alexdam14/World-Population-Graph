(defproject cljs "1.2.3"
  :plugins [[lein-cljsbuild "1.1.3"]]
  :dependencies [[org.clojure/clojure "1.8.0"]
		[org.clojure/clojurescript "1.8.34"]
    [cljsjs/c3 "0.4.10-0"]
    [cljsjs/jquery "2.2.2-0"]]
  :cljsbuild {
    :builds [{
        :source-paths ["src"]
        :compiler {
          :source-map-path "maps/"
          :output-dir "target/maps/"
          :source-map "target/map.js"
          :output-to "target/main.js"
          ;:optimizations :whitespace
        }}]})