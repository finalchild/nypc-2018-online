Object.assign(window.search, {"doc_urls":["21.html#5일차--250점-금-줄-게임","21.html#관찰","21.html#그래프로-보기","21.html#적의-전략","21.html#n-3개를-빼앗기는-경우","21.html#n-3개를-빼앗기지-않는-경우","21.html#최소-절단을-사용해도-되는가","21.html#결론"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":2,"title":2},"1":{"body":3,"breadcrumbs":0,"title":0},"2":{"body":6,"breadcrumbs":0,"title":0},"3":{"body":27,"breadcrumbs":0,"title":0},"4":{"body":11,"breadcrumbs":2,"title":2},"5":{"body":20,"breadcrumbs":2,"title":2},"6":{"body":6,"breadcrumbs":0,"title":0},"7":{"body":23,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"문제 읽기","breadcrumbs":"[5일차 | 250점] 금 줄 게임","id":"0","title":"[5일차 | 250점] 금 줄 게임"},"1":{"body":"먼저, N=2인 경우는 특수하게 취급해야 합니다. N=2일 때 답이 0인 것은 자명합니다.","breadcrumbs":"관찰","id":"1","title":"관찰"},"2":{"body":"찰흙 덩어리를 꼭짓점으로, 줄을 변으로 봅니다. 두 꼭짓점 사이에 줄이 여러 개가 있는 경우에는 줄들을 하나의 변으로 합치고 줄의 개수를 가중치로 합니다. 합하기는 모두 N-2번 합니다. 따라서 꼭짓점은 마지막에 2개가 됩니다. 이는 그래프를 절단 (cut)해서 2개의 덩어리를 구성하는 것입니다. 마지막에 가져가지 않고 남겨두는 줄은 마지막 2개의 꼭짓점 사이에 이어진 줄이므로, 절단이 지나는 줄입니다. 이 줄들은 무시해도 무방합니다.","breadcrumbs":"그래프로 보기","id":"2","title":"그래프로 보기"},"3":{"body":"우리는 게임을 시작하기 전에 합하기 과정을 지정합니다. 적을 무시했을 때, 우리가 매 차례에 가져가게 되는 줄의 개수를 an ~ a3으로 나타냅시다. ak는 꼭짓점이 k개 남았을 때, 합치기를 통해 k-1개로 줄이면서 우리가 가져오는 줄의 개수, 즉 k→(k-1) 합치기에서 우리가 가져오는 줄의 개수입니다. 우리가 k→(k-1) 합치기를 하고 나면, ak 칸은 잠기고, 적은 ak-1 ~ a3 중에서 값이 1 이상인 것을 하나 골라 1 감소시킨다고 생각할 수 있습니다. 이때, 앞쪽에 있는 칸이 먼저 잠기므로, 최대한 앞쪽에 있는 값을 감소시키는 것이 유리합니다. 이 탐욕법이 적의 최적 전략입니다. 모든 k(4≤k≤n-1)에 대해서, 원본 ak-1 ~ a3의 합이 k-2 이상이면 적은 모든 차례에서 줄을 뺏어갈 수 있습니다. 반대로 어떤 k에서 그 합이 k-3 이하이면, 앞으로 적의 차례가 k-2번이 남았는데 뺏어갈 줄이 부족하므로 적이 줄을 뺏어가지 못하는 차례가 생기게 됩니다. (직관적으로 생각할 수 있고, 수학적 귀납법을 이용하면 증명도 그리 어렵지 않습니다.)","breadcrumbs":"적의 전략","id":"3","title":"적의 전략"},"4":{"body":"절단 결과 2개의 연결 부분이 나온 경우를 생각해 봅시다. 두 개의 연결 부분은 (적을 무시한) 합치기 과정을 거쳐도 두 개의 연결 부분이므로, 남아 있는 변의 개수는 꼭짓점이 k개일 때 k-2개 이상입니다. 따라서 원본 ak-1 ~ a3의 합은 항상 k-2개 이상입니다. N-3개를 빼앗기게 됩니다.","breadcrumbs":"N-3개를 빼앗기는 경우","id":"4","title":"N-3개를 빼앗기는 경우"},"5":{"body":"절단 결과 3개 이상의 연결 부분이 나온 경우를 생각해 봅시다. 서로 다른 연결 부분에 속하는 꼭짓점을 합쳐서 얻는 이득은 전혀 없기 때문에, 연결 부분끼리 합치는 일은 최대한 나중으로 미루는 것이 자연스럽습니다. 예를 들어 연결 부분이 3개라고 하면, 꼭짓점이 3개 남았을 때 세 꼭짓점은 각각 하나의 연결 부분을 나타내고, 그 사이에 변은 하나도 없으므로 마지막 차례에서 우리가 가져오려는 줄도 0개입니다. 즉, a3=0이고 이는 k-3 (k=3) 이하이므로 N-3개를 빼앗기지 않습니다. 정확히 N-4개를 빼앗긴다는 것을 볼 수 있습니다. 연결 부분 3개가 나오는 경우에 N-4개를 빼앗기므로, 일반화시키면 연결 부분 c개가 나올 때 N-c-1개를 빼앗긴다고 할 수 있습니다. (역시 수학적 귀납법으로 증명할 수 있습니다.) 이 식은 연결 부분이 2개일 때에도 성립합니다.","breadcrumbs":"N-3개를 빼앗기지 않는 경우","id":"5","title":"N-3개를 빼앗기지 않는 경우"},"6":{"body":"최소 절단 은 절단이 지나는 줄 수의 합을 최소화시키는 절단입니다. 절단이 지나는 줄은 우리가 애초에 포기하게 되므로, 최소 절단을 사용하는 것이 유리해 보입니다. 하지만 절단으로 그래프를 분리시켜 연결 부분의 수를 늘리면, 연결 부분 하나마다 줄 1개만큼 이득을 볼 수 있습니다. 하지만 줄 1개는 그리 큰 이득이 아닙니다. 원래 연결되어 있던 부분을 절단으로 갈라놓으려면 연결 부분 하나를 늘리는데 줄 1개 이상을 포기해야 합니다. 따라서 최소 절단을 사용하는 것이 최적이라는 것을 알 수 있습니다. 원래 그래프가 연결 부분 2개 이상으로 이루어진 경우, 최소 절단이 지나는 변은 0개입니다. 따라서 포기하는 줄도 0개이므로 최소 절단을 계산할 필요가 없습니다.","breadcrumbs":"최소 절단을 사용해도 되는가?","id":"6","title":"최소 절단을 사용해도 되는가?"},"7":{"body":"최소 절단으로 그래프를 두 부분으로 나누고, 절단 결과에서 연결 부분의 개수에 따라 답을 계산합니다. 원래 그래프가 연결 부분 2개 이상으로 이루어진 경우, 최소 절단이 지나는 변은 0개이며, 최소 절단이 연결 부분의 개수에 영향을 주지 않습니다. 연결 부분이 c개일 때, 줄 0개를 포기하고 적에게 N-c-1개를 빼앗기므로 답은 M-N+c+1입니다. 이것으로 부분 점수 2(30점)을 받을 수 있습니다. 원래 그래프가 연결된 그래프인 경우, 최소 절단을 계산해야 합니다. 음수가 아닌 가중치가 있는 무향 그래프에서 최소 절단을 계산하는 알고리즘인 Stoer-Wagner 알고리즘 을 사용합니다. O(|V||E| + |V|2log|V|) 시간이 걸립니다. 최소 절단이 지나는 줄의 개수를 t라 했을 때, 줄 t개를 포기하고 적에게 N-3개를 빼앗기므로, 답은 M-t-N+3입니다. 물론 N=2일 때는 답이 무조건 0입니다.","breadcrumbs":"결론","id":"7","title":"결론"}},"length":8,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":4,"docs":{"1":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.4142135623730951},"7":{"tf":1.7320508075688772}}},"1":{"df":5,"docs":{"3":{"tf":2.8284271247461903},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.7320508075688772},"7":{"tf":1.0}}},"2":{"(":{"3":{"0":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"5":{"0":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":6,"docs":{"2":{"tf":2.0},"3":{"tf":1.4142135623730951},"4":{"tf":1.7320508075688772},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}},"3":{"df":4,"docs":{"3":{"tf":1.0},"4":{"tf":1.4142135623730951},"5":{"tf":2.6457513110645907},"7":{"tf":1.0}}},"4":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"5":{"df":1,"docs":{"0":{"tf":1.0}}},"a":{"3":{"=":{"0":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":2,"docs":{"3":{"tf":1.7320508075688772},"4":{"tf":1.0}}},"df":0,"docs":{},"k":{"df":2,"docs":{"3":{"tf":2.0},"4":{"tf":1.0}}}},"c":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"k":{"(":{"4":{"df":0,"docs":{},"≤":{"df":0,"docs":{},"k":{"df":0,"docs":{},"≤":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}},"=":{"3":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":3,"docs":{"3":{"tf":2.449489742783178},"4":{"tf":1.7320508075688772},"5":{"tf":1.0}},"→":{"(":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"m":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"n":{"+":{"3":{"df":1,"docs":{"7":{"tf":1.0}}},"c":{"+":{"1":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"=":{"2":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"7":{"tf":1.0}}},"df":0,"docs":{}},"df":4,"docs":{"2":{"tf":1.0},"4":{"tf":1.4142135623730951},"5":{"tf":2.23606797749979},"7":{"tf":1.4142135623730951}}},"o":{"(":{"df":0,"docs":{},"|":{"df":0,"docs":{},"v":{"df":0,"docs":{},"|":{"df":0,"docs":{},"|":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"t":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}},"v":{"df":0,"docs":{},"|":{"2":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"|":{"df":0,"docs":{},"v":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"w":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"breadcrumbs":{"root":{"0":{"df":4,"docs":{"1":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.4142135623730951},"7":{"tf":1.7320508075688772}}},"1":{"df":5,"docs":{"3":{"tf":2.8284271247461903},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.7320508075688772},"7":{"tf":1.0}}},"2":{"(":{"3":{"0":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"5":{"0":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":6,"docs":{"2":{"tf":2.0},"3":{"tf":1.4142135623730951},"4":{"tf":1.7320508075688772},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0}}},"3":{"df":4,"docs":{"3":{"tf":1.0},"4":{"tf":1.7320508075688772},"5":{"tf":2.8284271247461903},"7":{"tf":1.0}}},"4":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"5":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"a":{"3":{"=":{"0":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":2,"docs":{"3":{"tf":1.7320508075688772},"4":{"tf":1.0}}},"df":0,"docs":{},"k":{"df":2,"docs":{"3":{"tf":2.0},"4":{"tf":1.0}}}},"c":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"k":{"(":{"4":{"df":0,"docs":{},"≤":{"df":0,"docs":{},"k":{"df":0,"docs":{},"≤":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}},"=":{"3":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":3,"docs":{"3":{"tf":2.449489742783178},"4":{"tf":1.7320508075688772},"5":{"tf":1.0}},"→":{"(":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"m":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"n":{"+":{"3":{"df":1,"docs":{"7":{"tf":1.0}}},"c":{"+":{"1":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"=":{"2":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"7":{"tf":1.0}}},"df":0,"docs":{}},"df":4,"docs":{"2":{"tf":1.0},"4":{"tf":1.7320508075688772},"5":{"tf":2.449489742783178},"7":{"tf":1.4142135623730951}}},"o":{"(":{"df":0,"docs":{},"|":{"df":0,"docs":{},"v":{"df":0,"docs":{},"|":{"df":0,"docs":{},"|":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"t":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}},"v":{"df":0,"docs":{},"|":{"2":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"|":{"df":0,"docs":{},"v":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}},"df":0,"docs":{}}},"w":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"title":{"root":{"2":{"5":{"0":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}},"5":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"n":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}}}},"pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});