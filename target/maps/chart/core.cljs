(ns chart.core
(:require 
 [chart.data :refer [data, years, countries, pop-data-per-country]]
 cljsjs.jquery
 cljsjs.c3))

(defn generate-chart []
	(let [el (.getElementById js/document "grafic")
	    d (clj->js {:data    ;"data"
						{:xs 
							
							(apply hash-map (concat (interpose "x" countries) "x"))

							;:bindto el
						 :columns (vec (concat [(vec (concat ["x"] years))]  pop-data-per-country))
					 		  }
					:size{
						:height 2249
						:width 4000
					}

					:padding {
						:bottom 70
					}

					:zoom {
						:enabled true
						:rescale true
					}

					})]
	;(.log js/console (clj->js countries))
	(.generate js/c3 d))
	)

(defn ^:export main [&args]

(generate-chart))