$(function() {
    var fileName = $("#fileName").data("filename");
    
    var dataUrl = "/convert/" + fileName;

    var dataPromise = $.ajax({
        url: dataUrl,
        type: "GET",
        dataType: "json"
    }).done(function(response) {
        $("#trashline").text(JSON.stringify(response));
    });

    Promise.all([dataPromise]).then(initCy);

    function initCy(then) {
        var expJson = then[0];
        var elements = expJson.elements;

        elements.nodes.forEach(function(n){
      var data = n.data;
      
      data.NodeTypeFormatted = data.NodeType;
      
      if( data.NodeTypeFormatted === 'RedWine' ){
        data.NodeTypeFormatted = 'Red Wine';
      } else if( data.NodeTypeFormatted === 'WhiteWine' ){
        data.NodeTypeFormatted = 'White Wine';
      }
      
      n.data.orgPos = {
        x: n.position.x,
        y: n.position.y
      };
    });


        var cy = cytoscape({
            container: document.getElementById('container'),

            elements: elements,

              style: [ // the stylesheet for the graph
                {
                  selector: 'node',
                  style: {
                    'background-color': '#666',
                    'label': 'data(id)'
                  }
                },

                {
                  selector: 'edge',
                  style: {
                    'width': 3,
                    'line-color': '#ccc',
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle'
                  }
                }
              ],

              layout: {
                name: 'grid',
                rows: 1
              }
        });
    }
    
})();